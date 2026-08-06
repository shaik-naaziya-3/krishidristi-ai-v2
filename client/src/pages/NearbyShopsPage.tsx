import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { shopAPI } from '../services/api';
import { AgriShop } from '../types';
import { 
  ShoppingBag, MapPin, Phone, Clock, Star, ExternalLink, 
  Navigation, RefreshCw, Filter, Sprout, ShieldAlert, Wrench 
} from 'lucide-react';

const SHOP_LOCATIONS: Record<string, Record<string, string[]>> = {
  'Andhra Pradesh': {
    'Guntur': ['Guntur APMC Yard', 'Station Road', 'RTC Complex', 'Bypass Road'],
    'Kurnool': ['Market Yard', 'Old Bus Stand', 'Town Hall'],
    'Anantapur': ['Clock Tower', 'APMC Circle']
  },
  'Telangana': {
    'Warangal': ['Enamamula Market Road', 'Hanamkonda', 'Kazipet'],
    'Nizamabad': ['APMC Market', 'Armoor Road'],
    'Karimnagar': ['Collectorate Circle', 'Tower Circle']
  },
  'Karnataka': {
    'Kolar': ['APMC Yard Gate', 'MB Road'],
    'Shivamogga': ['BH Road', 'Bus Stand Circle']
  }
};

export const NearbyShopsPage: React.FC = () => {
  const { t } = useTranslation();

  const [selectedState, setSelectedState] = useState<string>('Andhra Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Guntur');
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [shops, setShops] = useState<AgriShop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [locating, setLocating] = useState<boolean>(false);

  useEffect(() => {
    fetchShops();
  }, [selectedState, selectedDistrict, selectedPlace, selectedCategory]);

  const fetchShops = async (lat?: number, lng?: number) => {
    setLoading(true);
    try {
      const res = await shopAPI.getShops(selectedState, selectedDistrict, selectedPlace, selectedCategory, lat, lng);
      setShops(res.data || []);
    } catch (err) {
      console.warn('Error fetching shops:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const st = e.target.value;
    setSelectedState(st);
    const districts = Object.keys(SHOP_LOCATIONS[st] || {});
    const firstDist = districts[0] || '';
    setSelectedDistrict(firstDist);
    const places = SHOP_LOCATIONS[st]?.[firstDist] || [];
    setSelectedPlace(places[0] || '');
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dist = e.target.value;
    setSelectedDistrict(dist);
    const places = SHOP_LOCATIONS[selectedState]?.[dist] || [];
    setSelectedPlace(places[0] || '');
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
        fetchShops(latitude, longitude);
      },
      (error) => {
        setLocating(false);
        console.warn('GPS error:', error.message);
        alert('Could not detect GPS location. Showing shops for selected area.');
      },
      { timeout: 10000 }
    );
  };

  const availableDistricts = Object.keys(SHOP_LOCATIONS[selectedState] || {});
  const availablePlaces = SHOP_LOCATIONS[selectedState]?.[selectedDistrict] || [];

  const categories = [
    { key: 'all', label: t('shops.categories.all'), icon: ShoppingBag },
    { key: 'fertilizer_seed', label: t('shops.categories.fertilizer_seed'), icon: Sprout },
    { key: 'pesticides', label: t('shops.categories.pesticides'), icon: ShieldAlert },
    { key: 'equipment', label: t('shops.categories.equipment'), icon: Wrench }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4 px-2 sm:px-4">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
          <ShoppingBag className="w-4 h-4" />
          <span>{t('shops.badge')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {t('shops.title')}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {t('shops.subtitle')}
        </p>
      </div>

      {/* Location Filter & GPS Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Select State */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
              {t('shops.selectState')}
            </label>
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              {Object.keys(SHOP_LOCATIONS).map((st) => (
                <option key={st} value={st}>
                  {t(`data.states.${st}`, { defaultValue: st })}
                </option>
              ))}
            </select>
          </div>

          {/* Select District */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
              {t('shops.selectDistrict')}
            </label>
            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              {availableDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {t(`data.districts.${dist}`, { defaultValue: dist })}
                </option>
              ))}
            </select>
          </div>

          {/* Select Place */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
              {t('shops.selectPlace')}
            </label>
            <select
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
            >
              <option value="">{t('shops.categories.all')}</option>
              {availablePlaces.map((plc) => (
                <option key={plc} value={plc}>
                  {plc}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* GPS Button */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handleDetectGPS}
            disabled={locating}
            className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs transition-all flex items-center gap-2 shadow-md shadow-rose-500/20 disabled:opacity-50"
          >
            {locating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Navigation className="w-4 h-4" />}
            <span>{locating ? t('shops.locating') : t('shops.useGps')}</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`p-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <RefreshCw className="w-8 h-8 text-rose-500 animate-spin" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
            {t('shops.loading')}
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && shops.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
          <Filter className="w-10 h-10 text-slate-400" />
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">
            {t('shops.noData')}
          </p>
        </div>
      )}

      {/* Shop Cards Grid */}
      {!loading && shops.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shops.map((shop) => {
            const translatedObj = t(`data.shops.${shop.id}`, { returnObjects: true }) as any;
            const shopName = (translatedObj && typeof translatedObj === 'object' && translatedObj.name) || shop.name;
            const shopAddress = (translatedObj && typeof translatedObj === 'object' && translatedObj.address) || shop.address;
            const categoryLabel = t(`shops.categories.${shop.type || shop.category}`, { defaultValue: shop.category || shop.type });

            return (
              <div
                key={shop.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  
                  {/* Header Badge & Title */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[10px] font-black uppercase tracking-wider block w-fit mb-1">
                        {categoryLabel}
                      </span>
                      <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                        {shopName}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-950/60 px-2 py-1 rounded-xl text-amber-800 dark:text-amber-300 text-xs font-black shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{shop.rating}</span>
                      <span className="text-[10px] text-slate-400">({shop.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-semibold pt-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{shopAddress}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold">
                        <Navigation className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t('shops.distance')}: {shop.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{shop.timing}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-slate-800 dark:text-slate-200 font-black">
                      <Phone className="w-3.5 h-3.5 text-rose-500" />
                      <a href={`tel:${shop.contact}`} className="hover:underline">{shop.contact}</a>
                    </div>
                  </div>

                </div>

                {/* Google Maps Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={shop.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t('shops.viewMap')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
