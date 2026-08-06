const ScanReport = require('../models/ScanReport');
const { getIsMockMode, getMockStore } = require('../config/db');

// @desc Save a scan report
// @route POST /api/scan/save
exports.saveScanReport = async (req, res) => {
  try {
    const reportData = req.body;
    reportData.userId = req.user._id;

    if (getIsMockMode()) {
      const mockStore = getMockStore();
      const newReport = {
        _id: 'scan_' + Date.now(),
        ...reportData,
        createdAt: new Date()
      };
      mockStore.scanReports.unshift(newReport);
      return res.status(201).json(newReport);
    }

    const report = await ScanReport.create(reportData);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get scan history for logged-in user
// @route GET /api/scan/history
exports.getScanHistory = async (req, res) => {
  try {
    if (getIsMockMode()) {
      const mockStore = getMockStore();
      const userScans = mockStore.scanReports.filter(r => r.userId.toString() === req.user._id.toString());
      return res.json(userScans);
    }

    const reports = await ScanReport.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete scan report
// @route DELETE /api/scan/:id
exports.deleteScanReport = async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsMockMode()) {
      const mockStore = getMockStore();
      mockStore.scanReports = mockStore.scanReports.filter(r => r._id !== id);
      return res.json({ message: 'Scan report deleted successfully' });
    }

    await ScanReport.findByIdAndDelete(id);
    res.json({ message: 'Scan report deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
