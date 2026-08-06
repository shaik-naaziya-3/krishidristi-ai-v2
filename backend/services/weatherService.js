function getWeatherForLocation(state = 'Andhra Pradesh', district = 'Guntur', lat, lng) {
  let displayLocation = `${district}, ${state}`;
  if (lat && lng) {
    displayLocation = `GPS (${lat.toFixed(2)}, ${lng.toFixed(2)}) - ${district}, ${state}`;
  }

  const currentTemp = 31;
  const humidity = 78;
  const rainProb = 65;
  const windSpeed = 14;
  const uvIndex = 6;
  const sunrise = '06:12 AM';
  const sunset = '06:48 PM';

  const farmingAdvice = [
    'Delay chemical sprays for 24 hours due to 65% precipitation probability.',
    'Maintain proper field drainage for standing paddy crops to avoid root rot.',
    'Morning dew humidity is high; check chilli foliage for early downy mildew signs.',
    'Ideal weather for transplanting pulse crops in evening hours.'
  ];

  const alerts = [
    {
      type: 'warning',
      title: 'Moderate Rainfall Expected',
      description: 'Rain showers predicted over next 24 hours (65% chance). Delay pesticide and fungicide spraying until weather clears.',
      action: 'Hold chemical spraying'
    },
    {
      type: 'info',
      title: 'Optimal Soil Moisture',
      description: 'Current humidity levels (78%) are favorable for paddy and chilli seedling growth. Ensure drainage channels are clear.',
      action: 'Check field drainage'
    }
  ];

  const hourlyForecast = [
    { time: '06:00 AM', temp: 26, rainProb: 20, icon: 'cloud-sun' },
    { time: '09:00 AM', temp: 29, rainProb: 35, icon: 'sun' },
    { time: '12:00 PM', temp: 33, rainProb: 50, icon: 'cloud-rain' },
    { time: '03:00 PM', temp: 31, rainProb: 65, icon: 'cloud-lightning' },
    { time: '06:00 PM', temp: 28, rainProb: 40, icon: 'cloud-sun' },
    { time: '09:00 PM', temp: 27, rainProb: 25, icon: 'moon' }
  ];

  const weeklyForecast = [
    { day: 'Today', condition: 'Scattered Rains', tempMax: 33, tempMin: 25, rainProb: 65 },
    { day: 'Tomorrow', condition: 'Partly Cloudy', tempMax: 34, tempMin: 26, rainProb: 30 },
    { day: 'Thu', condition: 'Sunny & Clear', tempMax: 35, tempMin: 27, rainProb: 15 },
    { day: 'Fri', condition: 'Thunderstorm', tempMax: 31, tempMin: 24, rainProb: 80 },
    { day: 'Sat', condition: 'Light Rains', tempMax: 32, tempMin: 25, rainProb: 45 },
    { day: 'Sun', condition: 'Sunny', tempMax: 36, tempMin: 26, rainProb: 10 },
    { day: 'Mon', condition: 'Partly Cloudy', tempMax: 34, tempMin: 25, rainProb: 20 }
  ];

  return {
    location: displayLocation,
    state,
    district,
    temperature: currentTemp,
    humidity: humidity,
    rainProbability: rainProb,
    windSpeed: windSpeed,
    uvIndex: uvIndex,
    condition: 'Scattered Showers',
    sunrise,
    sunset,
    farmingAdvice,
    alerts,
    hourlyForecast,
    weeklyForecast
  };
}

module.exports = { getWeatherForLocation };
