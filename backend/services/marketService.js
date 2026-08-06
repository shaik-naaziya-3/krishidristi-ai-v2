const sampleMarketData = [
  // Andhra Pradesh
  { id: 'm1', crop: 'Paddy (Common)', cropKey: 'paddy', state: 'Andhra Pradesh', stateKey: 'andhra_pradesh', district: 'Guntur', districtKey: 'guntur', market: 'Guntur APMC Mandi', marketKey: 'guntur_apmc', modalPrice: 2350, minPrice: 2200, maxPrice: 2450, arrivalQuantity: '450 Quintals', unit: 'Quintal', trend: 'up', change: '+50', updated: 'Today' },
  { id: 'm2', crop: 'Red Chilli (Teja)', cropKey: 'red_chilli', state: 'Andhra Pradesh', stateKey: 'andhra_pradesh', district: 'Guntur', districtKey: 'guntur', market: 'Guntur Yard', marketKey: 'guntur_yard', modalPrice: 19800, minPrice: 18500, maxPrice: 21000, arrivalQuantity: '1200 Bags', unit: 'Quintal', trend: 'up', change: '+350', updated: 'Today' },
  { id: 'm3', crop: 'Cotton (Long Staple)', cropKey: 'cotton', state: 'Andhra Pradesh', stateKey: 'andhra_pradesh', district: 'Kurnool', districtKey: 'kurnool', market: 'Kurnool Market Yard', marketKey: 'kurnool_yard', modalPrice: 7550, minPrice: 7200, maxPrice: 7800, arrivalQuantity: '680 Quintals', unit: 'Quintal', trend: 'up', change: '+100', updated: 'Today' },
  { id: 'm4', crop: 'Groundnut (Pod)', cropKey: 'groundnut', state: 'Andhra Pradesh', stateKey: 'andhra_pradesh', district: 'Anantapur', districtKey: 'anantapur', market: 'Anantapur APMC', marketKey: 'anantapur_apmc', modalPrice: 6850, minPrice: 6400, maxPrice: 7100, arrivalQuantity: '340 Quintals', unit: 'Quintal', trend: 'stable', change: '0', updated: 'Today' },
  
  // Telangana
  { id: 'm5', crop: 'Cotton (Medium Staple)', cropKey: 'cotton', state: 'Telangana', stateKey: 'telangana', district: 'Warangal', districtKey: 'warangal', market: 'Warangal Enamamula Market', marketKey: 'warangal_market', modalPrice: 7400, minPrice: 7100, maxPrice: 7600, arrivalQuantity: '1500 Quintals', unit: 'Quintal', trend: 'stable', change: '0', updated: 'Today' },
  { id: 'm6', crop: 'Maize (Yellow)', cropKey: 'maize', state: 'Telangana', stateKey: 'telangana', district: 'Nizamabad', districtKey: 'nizamabad', market: 'Nizamabad APMC', marketKey: 'nizamabad_apmc', modalPrice: 2150, minPrice: 2050, maxPrice: 2220, arrivalQuantity: '890 Quintals', unit: 'Quintal', trend: 'up', change: '+30', updated: 'Today' },
  { id: 'm7', crop: 'Turmeric (Finger)', cropKey: 'turmeric', state: 'Telangana', stateKey: 'telangana', district: 'Nizamabad', districtKey: 'nizamabad', market: 'Nizamabad Yard', marketKey: 'nizamabad_yard', modalPrice: 13800, minPrice: 13000, maxPrice: 14500, arrivalQuantity: '410 Quintals', unit: 'Quintal', trend: 'up', change: '+180', updated: 'Today' },
  { id: 'm8', crop: 'Paddy (Grade A)', cropKey: 'paddy', state: 'Telangana', stateKey: 'telangana', district: 'Karimnagar', districtKey: 'karimnagar', market: 'Karimnagar APMC', marketKey: 'karimnagar_apmc', modalPrice: 2420, minPrice: 2300, maxPrice: 2500, arrivalQuantity: '920 Quintals', unit: 'Quintal', trend: 'up', change: '+40', updated: 'Today' },

  // Karnataka
  { id: 'm9', crop: 'Tomato', cropKey: 'tomato', state: 'Karnataka', stateKey: 'karnataka', district: 'Kolar', districtKey: 'kolar', market: 'Kolar APMC Mandi', marketKey: 'kolar_apmc', modalPrice: 1800, minPrice: 1500, maxPrice: 2200, arrivalQuantity: '2100 Boxes', unit: 'Quintal', trend: 'down', change: '-120', updated: 'Today' },
  { id: 'm10', crop: 'Arecanut (Rashi)', cropKey: 'arecanut', state: 'Karnataka', stateKey: 'karnataka', district: 'Shivamogga', districtKey: 'shivamogga', market: 'Shivamogga APMC', marketKey: 'shivamogga_apmc', modalPrice: 48500, minPrice: 46000, maxPrice: 51000, arrivalQuantity: '180 Bags', unit: 'Quintal', trend: 'up', change: '+450', updated: 'Today' },
  { id: 'm11', crop: 'Onion (Red)', cropKey: 'onion', state: 'Karnataka', stateKey: 'karnataka', district: 'Chitradurga', districtKey: 'chitradurga', market: 'Chitradurga Mandi', marketKey: 'chitradurga_mandi', modalPrice: 2100, minPrice: 1800, maxPrice: 2400, arrivalQuantity: '750 Quintals', unit: 'Quintal', trend: 'stable', change: '0', updated: 'Today' },

  // Tamil Nadu
  { id: 'm12', crop: 'Turmeric (Finger)', cropKey: 'turmeric', state: 'Tamil Nadu', stateKey: 'tamil_nadu', district: 'Erode', districtKey: 'erode', market: 'Erode APMC', marketKey: 'erode_apmc', modalPrice: 14200, minPrice: 13500, maxPrice: 14800, arrivalQuantity: '560 Quintals', unit: 'Quintal', trend: 'up', change: '+200', updated: 'Today' },
  { id: 'm13', crop: 'Banana (Poovan)', cropKey: 'banana', state: 'Tamil Nadu', stateKey: 'tamil_nadu', district: 'Tiruchirappalli', districtKey: 'trichy', market: 'Trichy Central Market', marketKey: 'trichy_market', modalPrice: 2800, minPrice: 2500, maxPrice: 3200, arrivalQuantity: '1100 Bunch', unit: 'Quintal', trend: 'up', change: '+90', updated: 'Today' },

  // Kerala
  { id: 'm14', crop: 'Black Pepper', cropKey: 'pepper', state: 'Kerala', stateKey: 'kerala', district: 'Wayanad', districtKey: 'wayanad', market: 'Kalpetta Market', marketKey: 'kalpetta_market', modalPrice: 56000, minPrice: 54000, maxPrice: 58000, arrivalQuantity: '95 Quintals', unit: 'Quintal', trend: 'up', change: '+600', updated: 'Today' },
  { id: 'm15', crop: 'Rubber (RSS-4)', cropKey: 'rubber', state: 'Kerala', stateKey: 'kerala', district: 'Kottayam', districtKey: 'kottayam', market: 'Kottayam Rubber Board', marketKey: 'kottayam_market', modalPrice: 18200, minPrice: 17800, maxPrice: 18600, arrivalQuantity: '320 Quintals', unit: 'Quintal', trend: 'stable', change: '0', updated: 'Today' },

  // Maharashtra
  { id: 'm16', crop: 'Onion (Nashik Red)', cropKey: 'onion', state: 'Maharashtra', stateKey: 'maharashtra', district: 'Nashik', districtKey: 'nashik', market: 'Lasalgaon APMC', marketKey: 'lasalgaon_apmc', modalPrice: 2200, minPrice: 1900, maxPrice: 2450, arrivalQuantity: '3400 Quintals', unit: 'Quintal', trend: 'down', change: '-80', updated: 'Today' },
  { id: 'm17', crop: 'Soyabean (Yellow)', cropKey: 'soyabean', state: 'Maharashtra', stateKey: 'maharashtra', district: 'Latur', districtKey: 'latur', market: 'Latur APMC Mandi', marketKey: 'latur_apmc', modalPrice: 4650, minPrice: 4400, maxPrice: 4850, arrivalQuantity: '1850 Quintals', unit: 'Quintal', trend: 'up', change: '+75', updated: 'Today' }
];

function getMarketPrices(stateFilter, districtFilter, marketFilter, cropFilter) {
  return sampleMarketData.filter(item => {
    const matchState = !stateFilter || item.state.toLowerCase() === stateFilter.toLowerCase() || item.stateKey === stateFilter.toLowerCase();
    const matchDistrict = !districtFilter || item.district.toLowerCase() === districtFilter.toLowerCase() || item.districtKey === districtFilter.toLowerCase();
    const matchMarket = !marketFilter || item.market.toLowerCase() === marketFilter.toLowerCase() || item.marketKey === marketFilter.toLowerCase();
    const matchCrop = !cropFilter || item.crop.toLowerCase().includes(cropFilter.toLowerCase());
    return matchState && matchDistrict && matchMarket && matchCrop;
  });
}

function getMarketLocations() {
  const stateMap = {};
  sampleMarketData.forEach(item => {
    if (!stateMap[item.state]) {
      stateMap[item.state] = {
        stateName: item.state,
        stateKey: item.stateKey,
        districts: {}
      };
    }
    if (!stateMap[item.state].districts[item.district]) {
      stateMap[item.state].districts[item.district] = {
        districtName: item.district,
        districtKey: item.districtKey,
        markets: []
      };
    }
    if (!stateMap[item.state].districts[item.district].markets.some(m => m.marketName === item.market)) {
      stateMap[item.state].districts[item.district].markets.push({
        marketName: item.market,
        marketKey: item.marketKey
      });
    }
  });
  return stateMap;
}

module.exports = { getMarketPrices, getMarketLocations, sampleMarketData };
