const express = require('express');
const router = express.Router();
const { saveScanReport, getScanHistory, deleteScanReport } = require('../controllers/scanController');
const { protect } = require('../middleware/authMiddleware');

router.post('/save', protect, saveScanReport);
router.get('/history', protect, getScanHistory);
router.delete('/:id', protect, deleteScanReport);

module.exports = router;
