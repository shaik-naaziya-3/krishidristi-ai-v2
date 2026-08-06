const sampleShops = [
  {
    id: 's1',
    name: 'Sri Lakshmi Agri Inputs & Fertilizer Store',
    type: 'fertilizer_seed',
    category: 'Fertilizers & Seeds',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    place: 'Guntur APMC Yard',
    address: 'Main Road, Near APMC Market Yard, Guntur, AP 522001',
    distance: '1.2 km',
    rating: 4.8,
    reviewsCount: 142,
    contact: '+91 98480 12345',
    timing: '08:00 AM - 08:00 PM',
    lat: 16.3067,
    lng: 80.4365,
    mapsUrl: 'https://maps.google.com/?q=Sri+Lakshmi+Agri+Inputs+Guntur'
  },
  {
    id: 's2',
    name: 'Kisan Crop Protection & Pesticides Center',
    type: 'pesticides',
    category: 'Pesticides & Bio-fungicides',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    place: 'Station Road',
    address: 'Station Road, Guntur, AP 522002',
    distance: '2.5 km',
    rating: 4.6,
    reviewsCount: 98,
    contact: '+91 94401 56789',
    timing: '08:30 AM - 07:30 PM',
    lat: 16.3120,
    lng: 80.4410,
    mapsUrl: 'https://maps.google.com/?q=Kisan+Crop+Protection+Guntur'
  },
  {
    id: 's3',
    name: 'Rythu Seva Kendram & Farm Equipment Store',
    type: 'equipment',
    category: 'Agricultural Equipment & Machinery',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    place: 'RTC Complex',
    address: 'RTC Bus Stand Complex, Guntur, AP 522001',
    distance: '3.1 km',
    rating: 4.9,
    reviewsCount: 215,
    contact: '+91 91772 34567',
    timing: '07:00 AM - 09:00 PM',
    lat: 16.2990,
    lng: 80.4280,
    mapsUrl: 'https://maps.google.com/?q=Rythu+Seva+Kendram+Guntur'
  },
  {
    id: 's4',
    name: 'Jai Kisan Organic Fertilizers & Seeds Depot',
    type: 'fertilizer_seed',
    category: 'Organic Fertilizers & Bio-pesticides',
    state: 'Telangana',
    district: 'Warangal',
    place: 'Enamamula Market Road',
    address: 'Enamamula Market Road, Warangal, TS 506002',
    distance: '2.8 km',
    rating: 4.7,
    reviewsCount: 112,
    contact: '+91 98855 88990',
    timing: '08:00 AM - 07:30 PM',
    lat: 17.9784,
    lng: 79.5941,
    mapsUrl: 'https://maps.google.com/?q=Jai+Kisan+Organic+Warangal'
  },
  {
    id: 's5',
    name: 'Cauvery Agri Tech & Drip Equipment',
    type: 'equipment',
    category: 'Micro-Irrigation & Machinery',
    state: 'Karnataka',
    district: 'Kolar',
    place: 'Kolar APMC Gate',
    address: 'APMC Yard Gate, Kolar, KA 563101',
    distance: '1.9 km',
    rating: 4.8,
    reviewsCount: 164,
    contact: '+91 94802 33445',
    timing: '08:00 AM - 08:00 PM',
    lat: 13.1367,
    lng: 78.1291,
    mapsUrl: 'https://maps.google.com/?q=Cauvery+Agri+Tech+Kolar'
  }
];

// @desc Get nearby agricultural shops
// @route GET /api/shops
exports.getNearbyShops = async (req, res) => {
  try {
    const { category, type, state, district, place, lat, lng } = req.query;
    let result = sampleShops;

    const catFilter = category || type;

    if (catFilter && catFilter !== 'all') {
      result = result.filter(s => 
        s.type.toLowerCase() === catFilter.toLowerCase() ||
        s.category.toLowerCase().includes(catFilter.toLowerCase())
      );
    }

    if (state) {
      result = result.filter(s => s.state.toLowerCase().includes(state.toLowerCase()));
    }
    if (district) {
      result = result.filter(s => s.district.toLowerCase().includes(district.toLowerCase()));
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
