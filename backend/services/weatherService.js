const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';

const weatherCodeMap = {
  0: { condition: 'Clear Sky', icon: 'sun' },
  1: { condition: 'Mainly Clear', icon: 'sun' },
  2: { condition: 'Partly Cloudy', icon: 'cloud-sun' },
  3: { condition: 'Overcast', icon: 'cloud' },
  45: { condition: 'Foggy', icon: 'cloud' },
  48: { condition: 'Foggy', icon: 'cloud' },
  51: { condition: 'Light Drizzle', icon: 'cloud-rain' },
  53: { condition: 'Moderate Drizzle', icon: 'cloud-rain' },
  55: { condition: 'Heavy Drizzle', icon: 'cloud-rain' },
  61: { condition: 'Light Rain', icon: 'cloud-rain' },
  63: { condition: 'Moderate Rain', icon: 'cloud-rain' },
  65: { condition: 'Heavy Rain', icon: 'cloud-rain' },
  71: { condition: 'Light Snow', icon: 'cloud-snow' },
  73: { condition: 'Moderate Snow', icon: 'cloud-snow' },
  75: { condition: 'Heavy Snow', icon: 'cloud-snow' },
  80: { condition: 'Light Showers', icon: 'cloud-rain' },
  81: { condition: 'Moderate Showers', icon: 'cloud-rain' },
  82: { condition: 'Heavy Showers', icon: 'cloud-rain' },
  95: { condition: 'Thunderstorm', icon: 'cloud-lightning' },
  96: { condition: 'Thunderstorm with Hail', icon: 'cloud-lightning' },
  99: { condition: 'Heavy Thunderstorm with Hail', icon: 'cloud-lightning' }
};

function getWeatherDescription(code) {
  return weatherCodeMap[code] || {
    condition: 'Unknown',
    icon: 'cloud'
  };
}

function formatTime(timeString) {
  if (!timeString) return '--';

  const date = new Date(timeString);

  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

function getDayName(dateString, index) {
  if (index === 0) return 'Today';
  if (index === 1) return 'Tomorrow';

  return new Date(`${dateString}T12:00:00`).toLocaleDateString(
    'en-IN',
    { weekday: 'short' }
  );
}

async function geocodeLocation(state, district) {
  const searchText = `${district}, ${state}`;

  const url = new URL(GEOCODING_API);

  url.searchParams.set('name', searchText);
  url.searchParams.set('count', '5');
  url.searchParams.set('language', 'en');
  url.searchParams.set('countryCode', 'IN');

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to find the selected location.');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(`Location not found: ${searchText}`);
  }

  return data.results[0];
}

async function getWeatherForCoordinates(lat, lng, locationInfo = {}) {
  const latitude = Number(lat);
  const longitude = Number(lng);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    throw new Error('Invalid GPS coordinates.');
  }

  const url = new URL(WEATHER_API);

  url.searchParams.set('latitude', latitude.toString());
  url.searchParams.set('longitude', longitude.toString());

  url.searchParams.set(
    'current',
    [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'uv_index'
    ].join(',')
  );

  url.searchParams.set(
    'hourly',
    [
      'temperature_2m',
      'precipitation_probability',
      'weather_code'
    ].join(',')
  );

  url.searchParams.set(
    'daily',
    [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_probability_max',
      'sunrise',
      'sunset'
    ].join(',')
  );

  url.searchParams.set('forecast_days', '7');
  url.searchParams.set('timezone', 'auto');

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Weather service is currently unavailable.');
  }

  const data = await response.json();

  if (!data.current || !data.hourly || !data.daily) {
    throw new Error('Incomplete weather data received.');
  }

  const currentWeather = getWeatherDescription(
    data.current.weather_code
  );

  const hourlyForecast = [];

  const currentHourIndex = data.hourly.time.findIndex(
    (time) => time >= data.current.time
  );

  const startIndex = currentHourIndex >= 0 ? currentHourIndex : 0;

  for (
    let i = startIndex;
    i < Math.min(startIndex + 6, data.hourly.time.length);
    i++
  ) {
    const hourlyWeather = getWeatherDescription(
      data.hourly.weather_code[i]
    );

    hourlyForecast.push({
      time: formatTime(data.hourly.time[i]),
      temp: Math.round(data.hourly.temperature_2m[i]),
      rainProb: Math.round(
        data.hourly.precipitation_probability[i] || 0
      ),
      icon: hourlyWeather.icon
    });
  }

  const weeklyForecast = data.daily.time.map((date, index) => {
    const dailyWeather = getWeatherDescription(
      data.daily.weather_code[index]
    );

    return {
      day: getDayName(date, index),
      condition: dailyWeather.condition,
      tempMax: Math.round(
        data.daily.temperature_2m_max[index]
      ),
      tempMin: Math.round(
        data.daily.temperature_2m_min[index]
      ),
      rainProb: Math.round(
        data.daily.precipitation_probability_max[index] || 0
      )
    };
  });

  const district =
    locationInfo.district ||
    locationInfo.name ||
    'Current Location';

  const state =
    locationInfo.state ||
    locationInfo.admin1 ||
    '';

  return {
    location: state
      ? `${district}, ${state}`
      : district,

    state,
    district,

    latitude,
    longitude,

    temperature: Math.round(
      data.current.temperature_2m
    ),

    humidity: Math.round(
      data.current.relative_humidity_2m
    ),

    rainProbability: Math.round(
      data.hourly.precipitation_probability[startIndex] || 0
    ),

    windSpeed: Math.round(
      data.current.wind_speed_10m
    ),

    uvIndex: Math.round(
      data.current.uv_index || 0
    ),

    condition: currentWeather.condition,

    sunrise: formatTime(data.daily.sunrise[0]),
    sunset: formatTime(data.daily.sunset[0]),

    farmingAdvice: [
      'Check the latest rainfall probability before irrigation or spraying.',
      'Avoid chemical spraying during rain or strong winds.',
      'Monitor crop leaves for fungal disease when humidity remains high.'
    ],

    alerts: [],

    hourlyForecast,
    weeklyForecast
  };
}

async function getWeatherForLocation(
  state = 'Andhra Pradesh',
  district = 'Guntur',
  lat,
  lng
) {
  // GPS has priority over manually selected location.
  if (
    Number.isFinite(Number(lat)) &&
    Number.isFinite(Number(lng))
  ) {
    return getWeatherForCoordinates(lat, lng);
  }

  // Otherwise convert selected district/state into coordinates.
  const location = await geocodeLocation(state, district);

  return getWeatherForCoordinates(
    location.latitude,
    location.longitude,
    {
      district: location.name || district,
      state: location.admin1 || state
    }
  );
}

module.exports = {
  getWeatherForLocation,
  getWeatherForCoordinates
};