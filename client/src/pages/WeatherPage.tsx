import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { weatherAPI } from '../services/api';
import { WeatherData } from '../types';
import { 
  CloudSun, MapPin, Navigation, Thermometer, Droplets, 
  CloudRain, Wind, Sun, Sunrise, Sunset, ShieldAlert, Sparkles, RefreshCw 
} from 'lucide-react';

const INDIAN_STATES_DISTRICTS: Record<string, string[]> = {
  'Andhra Pradesh': ['Guntur', 'Kurnool', 'Anantapur', 'Vijayawada', 'Visakhapatnam', 'Chittoor'],
  'Telangana': ['Warangal', 'Nizamabad', 'Karimnagar', 'Hyderabad', 'Khammam'],
  'Karnataka': ['Kolar', 'Shivamogga', 'Chitradurga', 'Bengaluru Rural', 'Belagavi'],
  'Tamil Nadu': ['Erode', 'Tiruchirappalli', 'Coimbatore', 'Madurai', 'Salem'],
  'Kerala': ['Wayanad', 'Kottayam', 'Idukki', 'Palakkad', 'Alappuzha'],
  'Maharashtra': ['Nashik', 'Latur', 'Pune', 'Nagpur', 'Solapur']
};

export const WeatherPage: React.FC = () => {
  const { t } = useTranslation();

  const [selectedState, setSelectedState] = useState<string>('Andhra Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Guntur');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [locating, setLocating] = useState<boolean>(false);

  useEffect(() => {
    fetchWeather(selectedState, selectedDistrict);
  }, [selectedState, selectedDistrict]);

  const fetchWeather = async (st: string, dist: string, lat?: number, lng?: number) => {
    setLoading(true);
    try {
      const res = await weatherAPI.getWeather(st, dist, lat, lng);
      setWeather(res.data);
    } catch (err) {
      console.warn('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const st = e.target.value;
    setSelectedState(st);
    const districts = INDIAN_STATES_DISTRICTS[st] || [];
    setSelectedDistrict(districts[0] || '');
  };

  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const { latitude, longitude } = pos.coords;
        fetchWeather(selectedState, selectedDistrict, latitude, longitude);
      },
      (error) => {
        setLocating(false);
        console.warn('GPS location error:', error.message);
        alert('Could not access GPS location. Using state/district selection instead.');
      },
      { timeout: 10000 }
    );
  };

  const availableDistricts = INDIAN_STATES_DISTRICTS[selectedState] || [];

  // Translation helpers
  const translatedState = t(`data.states.${selectedState}`, { defaultValue: selectedState });
  const translatedDistrict = t(`data.districts.${selectedDistrict}`, { defaultValue: selectedDistrict });
  const translatedLocation = weather ? `${translatedDistrict}, ${translatedState}` : '';

  const translatedCondition = weather ? t(`data.weatherConditions.${weather.condition}`, { defaultValue: weather.condition }) : '';

  const translatedAdviceObj = t('data.weatherAdvice', { returnObjects: true });
  const adviceList: string[] = (Array.isArray(translatedAdviceObj) && translatedAdviceObj.length > 0)
    ? (translatedAdviceObj as string[])
    : (weather?.farmingAdvice || []);

  const translatedAlertsObj = t('data.weatherAlerts', { returnObjects: true });
  const alertList: any[] = (Array.isArray(translatedAlertsObj) && translatedAlertsObj.length > 0)
    ? (translatedAlertsObj as any[])
    : (weather?.alerts || []);

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4 px-2 sm:px-4">
      
      {/* Page Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
          <CloudSun className="w-4 h-4" />
          <span>{t('weather.badge')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {t('weather.title')}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {t('weather.subtitle')}
        </p>
      </div>

      {/* Location Selector Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-auto flex-1">
          {/* Select State */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
              {t('weather.selectState')}
            </label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              {Object.keys(INDIAN_STATES_DISTRICTS).map((st) => (
                <option key={st} value={st}>
                  {t(`data.states.${st}`, { defaultValue: st })}
                </option>
              ))}
            </select>
          </div>

          {/* Select District */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
              {t('weather.selectDistrict')}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              {availableDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {t(`data.districts.${dist}`, { defaultValue: dist })}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GPS Button */}
        <div className="w-full sm:w-auto pt-2 sm:pt-4">
          <button
            onClick={handleDetectGPS}
            disabled={locating}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 disabled:opacity-50"
          >
            {locating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Navigation className="w-4 h-4" />}
            <span>{locating ? t('weather.locating') : t('weather.useGps')}</span>
          </button>
        </div>

      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <RefreshCw className="w-8 h-8 text-amber-500 animate-spin" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            {t('weather.loading')}
          </p>
        </div>
      )}

      {!loading && weather && (
        <div className="space-y-6">
          
          {/* Main Weather Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{translatedLocation || weather.location}</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
                  {weather.temperature}°C
                </h2>
                <p className="text-lg font-bold text-amber-100">
                  {translatedCondition || weather.condition}
                </p>
              </div>

              {/* Sunrise & Sunset */}
              <div className="flex items-center gap-6 bg-black/20 p-4 rounded-2xl backdrop-blur-md border border-white/10 text-xs font-bold">
                <div className="flex items-center gap-2">
                  <Sunrise className="w-6 h-6 text-amber-200" />
                  <div>
                    <span className="block text-[10px] text-amber-200/80 font-medium uppercase">{t('weather.sunrise')}</span>
                    <span>{weather.sunrise || '06:12 AM'}</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Sunset className="w-6 h-6 text-orange-200" />
                  <div>
                    <span className="block text-[10px] text-orange-200/80 font-medium uppercase">{t('weather.sunset')}</span>
                    <span>{weather.sunset || '06:48 PM'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20 text-center">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                <Droplets className="w-5 h-5 mx-auto mb-1 text-sky-200" />
                <span className="text-[10px] block text-amber-100 font-medium uppercase">{t('weather.humidity')}</span>
                <span className="text-lg font-black">{weather.humidity}%</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                <CloudRain className="w-5 h-5 mx-auto mb-1 text-blue-200" />
                <span className="text-[10px] block text-amber-100 font-medium uppercase">{t('weather.rainProb')}</span>
                <span className="text-lg font-black">{weather.rainProbability}%</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                <Wind className="w-5 h-5 mx-auto mb-1 text-emerald-200" />
                <span className="text-[10px] block text-amber-100 font-medium uppercase">{t('weather.windSpeed')}</span>
                <span className="text-lg font-black">{weather.windSpeed} km/h</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                <Sun className="w-5 h-5 mx-auto mb-1 text-yellow-200" />
                <span className="text-[10px] block text-amber-100 font-medium uppercase">{t('weather.uvIndex')}</span>
                <span className="text-lg font-black">{weather.uvIndex} / 10</span>
              </div>
            </div>
          </div>

          {/* Smart Weather Farming Advice Card */}
          {adviceList && adviceList.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-wider">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{t('weather.adviceTitle')}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {adviceList.map((adv, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-slate-800/60 border border-emerald-100 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weather Alerts */}
          {alertList && alertList.length > 0 && (
            <div className="space-y-3">
              {alertList.map((alert, idx) => (
                <div key={idx} className="p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <h4 className="font-extrabold text-amber-900 dark:text-amber-200 text-sm">
                      {alert.title}
                    </h4>
                    <p className="text-amber-800/90 dark:text-amber-300/90 leading-relaxed font-medium">
                      {alert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Weekly Forecast */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {t('weather.weeklyTitle')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {weather.weeklyForecast.map((day, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center space-y-2 border border-slate-100 dark:border-slate-700/60">
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200 block">
                    {t(`data.days.${day.day}`, { defaultValue: day.day })}
                  </span>
                  <CloudSun className="w-6 h-6 mx-auto text-amber-500" />
                  <span className="text-[11px] text-slate-500 font-bold block">
                    {t(`data.weatherConditions.${day.condition}`, { defaultValue: day.condition })}
                  </span>
                  <div className="text-xs font-black text-slate-900 dark:text-slate-100 pt-1">
                    {day.tempMax}° <span className="text-slate-400 text-[10px] font-normal">{day.tempMin}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
