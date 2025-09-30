import React from 'react';
import { Scale, Target, Activity, Heart, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Language, MacroResults } from '../types';
import { translations } from '../data/translations';

interface IdealWeightProps {
  results: MacroResults;
  language: Language;
  userData: {
    height: number;
    weight: number;
  };
  unitSystem?: 'metric' | 'imperial';
}

export const IdealWeight: React.FC<IdealWeightProps> = ({
  results,
  language,
  userData,
  unitSystem = 'metric',
}) => {
  const t = translations[language];
  const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs';
  
  // BMI ranges for visualization
  const bmiRanges = [
    { min: 0, max: 18.5, label: t.underweight, color: 'bg-blue-500', textColor: 'text-blue-600' },
    { min: 18.5, max: 25, label: t.normal, color: 'bg-green-500', textColor: 'text-green-600' },
    { min: 25, max: 30, label: t.overweight, color: 'bg-yellow-500', textColor: 'text-yellow-600' },
    { min: 30, max: 50, label: t.obese, color: 'bg-red-500', textColor: 'text-red-600' }
  ];
  
  const currentBMI = results.idealWeight.currentBmi;
  const getCurrentBMICategory = () => bmiRanges.find(range => currentBMI >= range.min && currentBMI < range.max);
  const currentCategory = getCurrentBMICategory();
  
  // Calculate BMI position percentage for visualization
  const getBMIPosition = () => {
    // Each BMI range takes exactly 25% of the total width
    let position;
    
    if (currentBMI <= 18.5) {
      // Underweight: 0-25% (BMI 0-18.5)
      position = (currentBMI / 18.5) * 25;
    } else if (currentBMI <= 25) {
      // Normal: 25-50% (BMI 18.5-25)
      position = 25 + ((currentBMI - 18.5) / (25 - 18.5)) * 25;
    } else if (currentBMI <= 30) {
      // Overweight: 50-75% (BMI 25-30)
      position = 50 + ((currentBMI - 25) / (30 - 25)) * 25;
    } else {
      // Obese: 75-100% (BMI 30+)
      // For BMI exactly 30, position should be 75%
      // For higher BMI, distribute across remaining 25%
      const maxBMI = 45; // Cap for visualization
      const clampedBMI = Math.min(currentBMI, maxBMI);
      position = 75 + ((clampedBMI - 30) / (maxBMI - 30)) * 25;
    }
    
    // Ensure position is between 0 and 100
    return Math.max(0, Math.min(100, position));
  };
  
  // Calculate healthy weight range using userData
  const healthyMinWeight = Math.round((18.5 * Math.pow(userData.height / 100, 2)) * 10) / 10;
  const healthyMaxWeight = Math.round((24.9 * Math.pow(userData.height / 100, 2)) * 10) / 10;
  const currentWeight = userData.weight;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex-1 flex flex-col ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      {/* Header Section */}
      <div className="flex items-center mb-6 gap-3">
        <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg">
          <Scale className="h-6 w-6 text-white" />
        </div>
        <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
          <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {t.idealWeight}
          </h3>
          <p className={`text-sm text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'تحليل مؤشر كتلة الجسم والتوصيات' : 'BMI Analysis & Recommendations'}
          </p>
        </div>
      </div>

      {/* BMI Scale Visualization */}
      <div className="mb-6">
        <h4 className={`font-semibold text-gray-900 dark:text-white mb-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {language === 'ar' ? 'تحليل نطاق مؤشر كتلة الجسم' : t.bmiRangeAnalysis}
        </h4>
        
        {/* Modern BMI Scale */}
        <div className="relative">
          <div className="flex h-12 rounded-2xl overflow-hidden shadow-lg">
            {bmiRanges.map((range, index) => (
              <div
                key={index}
                className={`${range.color} flex-1 flex items-center justify-center text-white text-sm font-semibold transition-all duration-300 ${
                  currentCategory === range ? 'scale-105 shadow-lg' : 'opacity-70'
                }`}
              >
                {range.label}
              </div>
            ))}
          </div>
          
          {/* BMI Pointer */}
          <div 
            className="absolute -top-8 transition-all duration-500 ease-out"
            style={language === 'ar' ? { 
              right: `${getBMIPosition()}%`,
              transform: 'translateX(50%)'
            } : { 
              left: `${getBMIPosition()}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="flex flex-col items-center">
              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                {currentBMI.toFixed(1)}
              </div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
            </div>
          </div>
        </div>
        
        {/* BMI Scale Labels */}
        <div className="flex justify-between mt-3 text-xs text-gray-600 dark:text-gray-400">
          <span>&lt;18.5</span>
          <span>18.5-25</span>
          <span>25-30</span>
          <span>&gt;30</span>
        </div>
      </div>

      {/* Weight Analysis Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Weight Status */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center mb-3 justify-start gap-3">
            <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h5 className={`font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'الوزن الحالي' : (t.current || 'Current Weight')}
            </h5>
          </div>
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentWeight} {weightUnit}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {language === 'ar' ? `الطول: ${userData.height} سم` : `Height: ${userData.height} cm`}
            </div>
          </div>
        </div>

        {/* Healthy Range */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-3 justify-start gap-3">
            <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
            <h5 className={`font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'نطاق الوزن الصحي' : t.healthyWeightRange}
            </h5>
          </div>
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">
              {healthyMinWeight} - {healthyMaxWeight}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {weightUnit} (BMI 18.5-24.9)
            </div>
          </div>
        </div>

        {/* Optimal Weight */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center mb-3 justify-start gap-3">
            <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <h5 className={`font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'الوزن المثالي' : t.optimalWeight}
            </h5>
          </div>
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
              {results.idealWeight.bmi.optimal} {weightUnit}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {language === 'ar' ? 'مؤشر كتلة الجسم 22 (مثالي)' : 'BMI 22 (Ideal)'}
            </div>
          </div>
        </div>

        {/* Weight Goal */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
          <div className="flex items-center mb-3 justify-start gap-3">
            {currentWeight > healthyMaxWeight ? (
              <ArrowDown className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            ) : currentWeight < healthyMinWeight ? (
              <ArrowUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            ) : (
              <Minus className="h-5 w-5 text-green-600 dark:text-green-400" />
            )}
            <h5 className={`font-semibold text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? (
                currentWeight > healthyMaxWeight ? 'وزن للفقدان' : 
                currentWeight < healthyMinWeight ? 'وزن للزيادة' : 
                'الحفاظ على الوزن'
              ) : (
                currentWeight > healthyMaxWeight ? 'Weight to Lose' : 
                currentWeight < healthyMinWeight ? 'Weight to Gain' : 
                'Maintain Weight'
              )}
            </h5>
          </div>
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {currentWeight > healthyMaxWeight ? (
              <>
                <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                  -{Math.abs(currentWeight - healthyMaxWeight).toFixed(1)} {weightUnit}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {language === 'ar' ? 'للوصول للمعدل الصحي' : 'To reach healthy range'}
                </div>
              </>
            ) : currentWeight < healthyMinWeight ? (
              <>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  +{Math.abs(healthyMinWeight - currentWeight).toFixed(1)} {weightUnit}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {language === 'ar' ? 'للوصول للمعدل الصحي' : 'To reach healthy range'}
                </div>
              </>
            ) : (
              <>
                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                  0 {weightUnit}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {language === 'ar' ? 'أنت في المعدل الصحي!' : "You're in healthy range!"}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};