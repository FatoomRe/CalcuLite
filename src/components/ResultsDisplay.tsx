import { Download, Droplets, Printer, Target, TrendingUp, Zap } from 'lucide-react';
import React from 'react';
import { translations } from '../data/translations';
import { Language, MacroResults } from '../types';

interface ResultsDisplayProps {
  results: MacroResults;
  language: Language;
  onDownloadPDF: () => void;
  onPrint: () => void;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  results,
  language,
  onDownloadPDF,
  onPrint,
}) => {
  const t = translations[language];

  const stats = [
    {
      label: t.bmr,
      value: results.bmr,
      icon: Zap,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      unit: t.calories,
    },
    {
      label: t.tdee,
      value: results.tdee,
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-100 dark:bg-green-900/30',
      unit: t.calories,
    },
    {
      label: t.goalCalories,
      value: results.goalTdee,
      icon: Target,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      unit: t.calories,
    },
    {
      label: t.water,
      value: results.water.liters,
      icon: Droplets,
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      unit: t.liters,
      subtitle: `${results.water.milliliters} ${t.milliliters}`,
    },
  ];

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Action Buttons (hidden in print/PDF) */}
      <div className="flex flex-col sm:flex-row gap-3 no-print no-pdf" data-html2canvas-ignore>
        <button
          onClick={onDownloadPDF}
          className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          <Download className="h-5 w-5" />
          <span>{t.downloadPDF}</span>
        </button>
        <button
          onClick={onPrint}
          className="flex-1 flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          <Printer className="h-5 w-5" />
          <span>{t.print}</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 lg:p-6 transform hover:scale-105 transition-all duration-200 break-inside-avoid min-h-[140px] flex flex-col justify-center items-center text-center"
          >
            <div className={`p-2 rounded-lg ${stat.bg} mb-3`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 leading-tight">
                {stat.label}
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {stat.unit}
              </p>
              {stat.subtitle && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Daily Macros Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          {t.dailyCalories}: {results.goalTdee.toLocaleString()}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-center">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg break-inside-avoid">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {results.protein.grams}g
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
              {t.protein}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {results.protein.calories} {t.calories} ({results.protein.percentage}%)
            </div>
          </div>

          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg break-inside-avoid">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {results.carbs.grams}g
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
              {t.carbs}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {results.carbs.calories} {t.calories} ({results.carbs.percentage}%)
            </div>
          </div>

          <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg break-inside-avoid">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {results.fat.grams}g
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
              {t.fat}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {results.fat.calories} {t.calories} ({results.fat.percentage}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};