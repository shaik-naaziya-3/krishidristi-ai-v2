import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { aiAPI, scanAPI } from '../services/api';
import { CameraModal } from '../components/CameraModal';
import { ScanReport } from '../types';
import { 
  ScanLine, Camera, Upload, Sparkles, AlertCircle, 
  Sprout, TestTube, Leaf, Shield, CloudSun, RefreshCw, Bookmark, Volume2
} from 'lucide-react';
import { SpeechService } from '../services/speech';

export const CropScanner: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<ScanReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setReport(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (base64Image: string) => {
    setImagePreview(base64Image);
    setReport(null);
    setError(null);
    try {
      const arr = base64Image.split(',');
      const mimeMatch = arr[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'image/jpeg';
      const bstr = atob(arr[1] || arr[0]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const file = new File([u8arr], `camera_${Date.now()}.jpg`, { type: mime });
      setSelectedFile(file);
    } catch (e) {
      console.warn('Base64 conversion failed:', e);
      setSelectedFile(null);
    }
  };

  const handleAnalyze = async () => {
    if (!imagePreview) {
      setError(t('scanner.selectPhotoError'));
      return;
    }

    setAnalyzing(true);
    setError(null);
    setReport(null);
    setSaveSuccess(false);

    try {
      let res;
      if (selectedFile) {
        const formData = new FormData();
        formData.append('cropImage', selectedFile);
        formData.append('language', i18n.language);
        res = await aiAPI.analyzeCrop(formData);
      } else {
        res = await aiAPI.analyzeCropBase64(imagePreview, i18n.language);
      }

      if (res.data && res.data.report) {
        setReport(res.data.report);
      } else {
        setError(t('scanner.generateReportError'));
      }
    } catch (err: any) {
      console.warn('AI Analysis Error:', err);
      const serverMessage = err?.response?.data?.message || err?.response?.data?.error;
      setError(serverMessage || t('scanner.analysisError'));
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSaveReport = async () => {
    if (!report || !imagePreview) return;
    setSaving(true);
    try {
      await scanAPI.saveReport({
        ...report,
        uploadedImage: imagePreview,
        language: i18n.language
      });
      setSaveSuccess(true);
    } catch (err: any) {
      console.warn('Error saving scan report:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleSpeakReport = () => {
    if (!report) return;
    const speechText = `${t('scanner.reportTitle')}: ${report.diseaseName}. ${t('scanner.severity')}: ${report.severityLevel}. ${t('scanner.organic')}: ${report.organicTreatment?.join(', ')}. ${t('scanner.chemical')}: ${report.chemicalTreatment?.join(', ')}.`;
    SpeechService.speak(speechText, i18n.language);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ScanLine className="w-4 h-4" />
          <span>{t('hero.badge')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100">
          {t('scanner.title')}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {t('scanner.subtitle')}
        </p>
      </div>

      {/* Capture / Upload Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
        
        {/* Preview or Upload Zone */}
        <div className="relative aspect-video sm:aspect-[21/9] rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center p-4 overflow-hidden group">
          {imagePreview ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={imagePreview} alt="Leaf Preview" className="h-full object-contain rounded-xl" />
              <button
                onClick={() => {
                  setImagePreview(null);
                  setSelectedFile(null);
                  setReport(null);
                }}
                className="absolute top-2 right-2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
                title={t('cameraModal.retakePhoto')}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{t('cameraModal.leafPositionGuideline')}</p>
                <p className="text-xs text-slate-400">{t('scanner.subtitle')}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setIsCameraOpen(true)}
            className="py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
          >
            <Camera className="w-5 h-5" />
            <span>{t('scanner.takePhoto')}</span>
          </button>

          <label className="py-3.5 px-4 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-200 dark:border-slate-700">
            <Upload className="w-5 h-5 text-emerald-600" />
            <span>{t('scanner.uploadPhoto')}</span>
            <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          </label>
        </div>

        {imagePreview && !report && (
          <button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {analyzing ? (
              <>
                <Sparkles className="w-6 h-6 animate-spin text-amber-300" />
                <span>{t('scanner.analyzing')}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 text-amber-300" />
                <span>{t('cameraModal.analyzeLeaf')}</span>
              </>
            )}
          </button>
        )}

        {error && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-amber-800 dark:text-amber-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

      </div>

      {/* Camera Capture Modal */}
      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />

      {/* AI Pathology Structured Report Cards */}
      {report && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Low Confidence Safety Warning Banner */}
          {report.isLowConfidence && (
            <div className="p-5 rounded-3xl bg-amber-500/15 border-2 border-amber-500/60 text-amber-900 dark:text-amber-200 space-y-2 shadow-lg">
              <div className="flex items-center gap-2 font-black text-base text-amber-700 dark:text-amber-300">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                <span>{t('scanner.lowConfidenceAlert', 'Low Confidence Prediction Warning')} ({report.confidenceScore}%)</span>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                {report.lowConfidenceWarning || t('scanner.lowConfidenceMsg', 'The AI model confidence is under 60%. Please capture a clearer, well-lit leaf image focusing closely on the affected lesion area, or consult an agricultural expert.')}
              </p>
              <button
                onClick={() => {
                  setImagePreview(null);
                  setSelectedFile(null);
                  setReport(null);
                }}
                className="mt-2 py-2 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t('cameraModal.retakePhoto', 'Recapture Clearer Image')}</span>
              </button>
            </div>
          )}

          {/* Main Diagnosis Summary Card */}
          <div className="bg-gradient-to-br from-emerald-900 via-green-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">{t('scanner.reportTitle')}</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">{report.diseaseName}</h2>
                <p className="text-xs text-emerald-200 mt-1">{t('profile.primaryCrop')}: <span className="font-bold text-white">{report.cropName || 'Crop'}</span></p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3.5 py-1.5 rounded-full border font-black text-xs ${
                  report.confidenceLevel === 'Low' ? 'bg-amber-500/20 border-amber-400/40 text-amber-300' : 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                }`}>
                  {report.confidenceScore}% {report.confidenceLevel || 'High'} {t('scanner.confidence')}
                </span>
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-black text-white ${
                  report.severityLevel === 'Critical' ? 'bg-rose-600' : report.severityLevel === 'High' ? 'bg-amber-600' : 'bg-emerald-600'
                }`}>
                  {report.severityLevel} {t('scanner.severity')}
                </span>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 leading-relaxed font-medium">
              {report.diseaseDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleSpeakReport}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center gap-2"
              >
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>{t('scanner.readAloud')}</span>
              </button>

              <button
                onClick={handleSaveReport}
                disabled={saving || saveSuccess}
                className={`px-5 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-md ${
                  saveSuccess 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{saveSuccess ? t('scanner.savedSuccess') : t('scanner.saveReport')}</span>
              </button>
            </div>

          </div>

          {/* Grad-CAM AI Visual Explainability Heatmap Card */}
          {report.heatmapUrl && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-lg">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <h3>{t('scanner.gradcamTitle', 'Grad-CAM AI Visual Explainability Heatmap')}</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {t('scanner.gradcamSubtitle', 'The side-by-side visualization below highlights the precise leaf regions (Red/Yellow heat zones) that influenced the CNN model’s diagnostic prediction.')}
              </p>
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex justify-center">
                <img
                  src={report.heatmapUrl.startsWith('http') ? report.heatmapUrl : `http://localhost:5000${report.heatmapUrl}`}
                  alt="Grad-CAM AI Heatmap Explanation"
                  className="max-h-80 w-auto object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}

          {/* Environmental Disease Risk Multimodal Fusion Card */}
          {report.environmentalRisk && (
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4 border border-indigo-900/50">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-base">
                  <CloudSun className="w-6 h-6 text-amber-400" />
                  <h3>{t('scanner.environmentalRiskTitle', 'Environmental Disease Risk Fusion')}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-black ${
                  report.environmentalRisk.environmentalRiskLevel === 'High' ? 'bg-rose-600 text-white' :
                  report.environmentalRisk.environmentalRiskLevel === 'Moderate' ? 'bg-amber-500 text-slate-950' :
                  'bg-emerald-600 text-white'
                }`}>
                  {report.environmentalRisk.environmentalRiskLevel} Risk ({report.environmentalRisk.riskScore}/100)
                </span>
              </div>

              {/* Weather Context Badges */}
              {report.environmentalRisk.weatherContext && (
                <div className="grid grid-cols-3 gap-2 py-1">
                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Temperature</span>
                    <span className="text-sm font-black text-amber-300">{report.environmentalRisk.weatherContext.temperature}°C</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Humidity</span>
                    <span className="text-sm font-black text-blue-300">{report.environmentalRisk.weatherContext.humidity}%</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Rain Chance</span>
                    <span className="text-sm font-black text-cyan-300">{report.environmentalRisk.weatherContext.rainProbability}%</span>
                  </div>
                </div>
              )}

              {/* Risk Factors List */}
              {report.environmentalRisk.riskFactors && report.environmentalRisk.riskFactors.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-wider">Observed Environmental Risk Drivers</h4>
                  <ul className="space-y-1.5">
                    {report.environmentalRisk.riskFactors.map((factor, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-2 bg-white/5 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Environmental Guidance */}
              {report.environmentalRisk.environmentalAdvice && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs font-medium leading-relaxed">
                  <span className="font-bold text-amber-300 block mb-1">Weather Advisory Recommendation:</span>
                  {report.environmentalRisk.environmentalAdvice}
                </div>
              )}
            </div>
          )}

          {/* Treatment Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Chemical Treatment */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-extrabold text-base">
                <TestTube className="w-5 h-5" />
                <h3>{t('scanner.chemical')}</h3>
              </div>
              <ul className="space-y-2">
                {report.chemicalTreatment?.map((item, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organic Treatment */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-base">
                <Sprout className="w-5 h-5" />
                <h3>{t('scanner.organic')}</h3>
              </div>
              <ul className="space-y-2">
                {report.organicTreatment?.map((item, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fertilizer Guidance */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-base">
                <Leaf className="w-5 h-5" />
                <h3>{t('scanner.fertilizers')}</h3>
              </div>
              <ul className="space-y-2">
                {report.fertilizerRecommendations?.map((item, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prevention & Precautions */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-base">
                <Shield className="w-5 h-5" />
                <h3>{t('scanner.prevention')}</h3>
              </div>
              <ul className="space-y-2">
                {report.preventionMethods?.map((item, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Weather & Recovery Banner */}
          {report.weatherImpact && (
            <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 rounded-3xl p-6 border border-blue-500/30 flex items-start gap-3">
              <CloudSun className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{t('weather.alertsTitle')}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">{report.weatherImpact}</p>
                {report.recoverySuggestions && (
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 pt-1">
                    {t('scanner.smartRec')}: {report.recoverySuggestions}
                  </p>
                )}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
