import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { scanAPI } from '../services/api';
import { ScanReport } from '../types';
import { History, Trash2, Eye } from 'lucide-react';

export const ScanHistoryPage: React.FC = () => {
  const { t } = useTranslation();
  const [reports, setReports] = useState<ScanReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<ScanReport | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await scanAPI.getHistory();
      setReports(res.data || []);
    } catch (err) {
      console.warn('History fetch error:', err);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    try {
      await scanAPI.deleteReport(id);
      setReports(prev => prev.filter(r => r._id !== id));
      if (selectedReport?._id === id) setSelectedReport(null);
    } catch (err) {
      console.warn('Delete report error:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <History className="w-4 h-4" />
          <span>{t('history.title')}</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100">
          {t('history.title')}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t('history.subtitle')}
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
          <History className="w-12 h-12 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{t('history.noHistory')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report._id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-slate-800 overflow-hidden shrink-0 flex items-center justify-center text-3xl">
                  {report.uploadedImage ? <img src={report.uploadedImage} alt="Crop" className="w-full h-full object-cover" /> : '🌿'}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">{report.cropName || 'Crop Leaf'}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{report.diseaseName}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span>{report.confidenceScore}% {t('scanner.confidence')}</span>
                    <span>•</span>
                    <span className="capitalize">{t(`severity.${report.severityLevel}`, { defaultValue: report.severityLevel })} {t('scanner.severity')}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedReport(report)}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t('history.viewReport')}</span>
                </button>
                <button
                  onClick={() => handleDelete(report._id)}
                  className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                  title="Delete Report"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Report Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase">{selectedReport.cropName}</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">{selectedReport.diseaseName}</h2>
              </div>
              <button onClick={() => setSelectedReport(null)} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">✕</button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-slate-700 dark:text-slate-300">{selectedReport.diseaseDescription}</p>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{t('scanner.chemical')}:</h4>
                <ul className="list-disc pl-5">{selectedReport.chemicalTreatment?.map((c, i) => <li key={i}>{c}</li>)}</ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{t('scanner.organic')}:</h4>
                <ul className="list-disc pl-5">{selectedReport.organicTreatment?.map((o, i) => <li key={i}>{o}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
