const { getWeatherForLocation } = require('../services/weatherService');

// @desc Get weather & agricultural alerts
// @route GET /api/weather
exports.getWeather = async (req, res) => {
  try {
    const { state, district } = req.query;
    const userState = state || (req.user && req.user.state) || 'Andhra Pradesh';
    const userDistrict = district || (req.user && req.user.district) || 'Guntur';

    const weatherData = getWeatherForLocation(userState, userDistrict);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
