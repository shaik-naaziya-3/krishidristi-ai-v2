const mongoose = require('mongoose');

const scanReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  uploadedImage: { type: String, required: true },
  cropName: { type: String, default: 'General Crop' },
  diseaseName: { type: String, required: true },
  confidenceScore: { type: Number, required: true },
  severityLevel: { type: String, enum: ['Low', 'Moderate', 'High', 'Critical'], default: 'Moderate' },
  diseaseDescription: { type: String },
  symptoms: [{ type: String }],
  possibleCauses: [{ type: String }],
  chemicalTreatment: [{ type: String }],
  organicTreatment: [{ type: String }],
  fertilizerRecommendations: [{ type: String }],
  preventionMethods: [{ type: String }],
  futurePrecautions: [{ type: String }],
  weatherImpact: { type: String },
  recoverySuggestions: { type: String },
  smartRecommendations: [{ type: String }],
  language: { type: String, default: 'en' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ScanReport', scanReportSchema);
