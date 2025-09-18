import { Calculator } from 'lucide-react';
import React, { useState } from 'react';
import { translations } from '../data/translations';
import { FormData, Language, UserData } from '../types';

interface CalculatorFormProps {
  language: Language;
  onCalculate: (data: UserData) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  language,
  onCalculate,
}) => {
  const t = translations[language];
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    unitSystem: 'metric',
    pregnancyStatus: 'none',
    bodyFatPercentage: '',
    activityLevel: 'moderate',
    goal: 'maintain',
    bmrFormula: 'mifflinStJeor',
    macroDistribution: 'balanced',
    customMacros: {
      protein: '',
      fat: '',
      carbs: ''
    }
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.age || parseInt(formData.age) < 15 || parseInt(formData.age) > 100) {
      newErrors.age = language === 'en' ? 'Age must be between 15 and 100' : 'العمر يجب أن يكون بين 15 و 100';
    }
    
    const minHeight = formData.unitSystem === 'metric' ? 120 : 47; // 120cm or 47 inches
    const maxHeight = formData.unitSystem === 'metric' ? 250 : 98; // 250cm or 98 inches
    if (!formData.height || parseInt(formData.height) < minHeight || parseInt(formData.height) > maxHeight) {
      const unit = formData.unitSystem === 'metric' ? 'cm' : 'inches';
      newErrors.height = language === 'en' 
        ? `Height must be between ${minHeight} and ${maxHeight} ${unit}` 
        : `الطول يجب أن يكون بين ${minHeight} و ${maxHeight} ${unit}`;
    }
    
    const minWeight = formData.unitSystem === 'metric' ? 30 : 66; // 30kg or 66 lbs
    const maxWeight = formData.unitSystem === 'metric' ? 300 : 661; // 300kg or 661 lbs
    if (!formData.weight || parseInt(formData.weight) < minWeight || parseInt(formData.weight) > maxWeight) {
      const unit = formData.unitSystem === 'metric' ? 'kg' : 'lbs';
      newErrors.weight = language === 'en' 
        ? `Weight must be between ${minWeight} and ${maxWeight} ${unit}` 
        : `الوزن يجب أن يكون بين ${minWeight} و ${maxWeight} ${unit}`;
    }

    if (formData.bodyFatPercentage && (parseInt(formData.bodyFatPercentage) < 5 || parseInt(formData.bodyFatPercentage) > 50)) {
      newErrors.bodyFatPercentage = language === 'en' ? 'Body fat percentage must be between 5% and 50%' : 'نسبة الدهون يجب أن تكون بين 5% و 50%';
    }

    if (formData.macroDistribution === 'custom') {
      const protein = parseInt(formData.customMacros.protein);
      const fat = parseInt(formData.customMacros.fat);
      const carbs = parseInt(formData.customMacros.carbs);
      
      if (!protein || !fat || !carbs || protein + fat + carbs !== 100) {
        newErrors.customMacros = language === 'en' ? 'Custom macros must add up to 100%' : 'المغذيات المخصصة يجب أن تصل إلى 100%';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const userData: UserData = {
        age: parseInt(formData.age),
        gender: formData.gender,
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        unitSystem: formData.unitSystem,
        pregnancyStatus: formData.pregnancyStatus !== 'none' ? formData.pregnancyStatus : undefined,
        bodyFatPercentage: formData.bodyFatPercentage ? parseInt(formData.bodyFatPercentage) : undefined,
        activityLevel: formData.activityLevel,
        goal: formData.goal,
        bmrFormula: formData.bmrFormula,
        macroDistribution: formData.macroDistribution,
        customMacros: formData.macroDistribution === 'custom' ? {
          protein: parseInt(formData.customMacros.protein),
          fat: parseInt(formData.customMacros.fat),
          carbs: parseInt(formData.customMacros.carbs)
        } : undefined
      };
      onCalculate(userData);
    }
  };

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCustomMacroChange = (macroType: 'protein' | 'fat' | 'carbs', value: string) => {
    setFormData(prev => ({
      ...prev,
      customMacros: {
        ...prev.customMacros,
        [macroType]: value
      }
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 max-w-none">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
          <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.personalInfo}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Unit System */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.unitSystem}
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['metric', 'imperial'] as const).map((unit) => (
              <button
                key={unit}
                type="button"
                onClick={() => handleChange('unitSystem', unit)}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  formData.unitSystem === unit
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium">{t[unit]}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.age}
            </label>
            <input
              type="number"
              min="15"
              max="100"
              value={formData.age}
              placeholder={language === 'en' ? 'Enter your age (15-100)' : 'أدخل عمرك (15-100)'}
              onChange={(e) => handleChange('age', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.age 
                  ? 'border-red-300 dark:border-red-600' 
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all`}
              required
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.age}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.gender}
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
            >
              <option value="male">{t.male}</option>
              <option value="female">{t.female}</option>
            </select>
          </div>
        </div>

        {/* Pregnancy Status - Only show for females */}
        {formData.gender === 'female' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t.pregnancyStatus}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['none', 'pregnant', 'breastfeeding'] as const).map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => handleChange('pregnancyStatus', status)}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    formData.pregnancyStatus === status
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="font-medium">{t[status]}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {formData.unitSystem === 'metric' ? t.heightCm : t.heightIn}
            </label>
            <input
              type="number"
              min={formData.unitSystem === 'metric' ? "120" : "47"}
              max={formData.unitSystem === 'metric' ? "250" : "98"}
              value={formData.height}
              placeholder={formData.unitSystem === 'metric' 
                ? (language === 'en' ? 'Height in cm (120-250)' : 'الطول بالسم (120-250)')
                : (language === 'en' ? 'Height in inches (47-98)' : 'الطول بالبوصة (47-98)')
              }
              onChange={(e) => handleChange('height', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.height 
                  ? 'border-red-300 dark:border-red-600' 
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all`}
              required
            />
            {errors.height && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.height}</p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {formData.unitSystem === 'metric' ? t.weightKg : t.weightLbs}
            </label>
            <input
              type="number"
              min={formData.unitSystem === 'metric' ? "30" : "66"}
              max={formData.unitSystem === 'metric' ? "300" : "661"}
              value={formData.weight}
              placeholder={formData.unitSystem === 'metric' 
                ? (language === 'en' ? 'Weight in kg (30-300)' : 'الوزن بالكيلو (30-300)')
                : (language === 'en' ? 'Weight in lbs (66-661)' : 'الوزن بالرطل (66-661)')
              }
              onChange={(e) => handleChange('weight', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.weight 
                  ? 'border-red-300 dark:border-red-600' 
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all`}
              required
            />
            {errors.weight && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.weight}</p>
            )}
          </div>
        </div>

        {/* Body Fat Percentage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.bodyFatPercentage}
          </label>
          <input
            type="number"
            min="5"
            max="50"
            value={formData.bodyFatPercentage}
            placeholder={language === 'en' ? 'Optional: Body fat % (5-50)' : 'اختياري: نسبة الدهون % (5-50)'}
            onChange={(e) => handleChange('bodyFatPercentage', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.bodyFatPercentage 
                ? 'border-red-300 dark:border-red-600' 
                : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all`}
          />
          {errors.bodyFatPercentage && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.bodyFatPercentage}</p>
          )}
        </div>

        {/* Activity Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.activityLevel}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {(['veryLow', 'low', 'moderate', 'high', 'veryHigh'] as const).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleChange('activityLevel', level)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.activityLevel === level
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium">{t[level]}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t[level + 'Desc' as keyof typeof t]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.goal}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {(['maintain', 'slowWeightLoss025', 'slowWeightLoss05', 'fastWeightLoss1', 'slowWeightGain025', 'moderateWeightGain05', 'fastWeightGain1'] as const).map((goalType) => (
              <button
                key={goalType}
                type="button"
                onClick={() => handleChange('goal', goalType)}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  formData.goal === goalType
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium text-sm">{t[goalType]}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t[goalType + 'Desc' as keyof typeof t]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* BMR Formula */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.bmrFormula}
          </label>
          <div className="grid grid-cols-1 gap-3">
            {(['harrisBenedict', 'mifflinStJeor', 'katchMcArdle'] as const).map((formula) => (
              <button
                key={formula}
                type="button"
                onClick={() => handleChange('bmrFormula', formula)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  language === 'ar' ? 'text-right' : 'text-left'
                } ${
                  formData.bmrFormula === formula
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium text-sm mb-1">
                  {t[formula]}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t[formula + 'Desc' as keyof typeof t]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Macro Distribution */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.macroDistribution}
          </label>
          <div className="grid grid-cols-1 gap-3">
            {(['balanced', 'cutting', 'bulking', 'custom'] as const).map((macro) => (
              <button
                key={macro}
                type="button"
                onClick={() => handleChange('macroDistribution', macro)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  language === 'ar' ? 'text-right' : 'text-left'
                } ${
                  formData.macroDistribution === macro
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium text-sm mb-1">
                  {t[macro]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Macro Distribution */}
        {formData.macroDistribution === 'custom' && (
          <div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.customProtein}
                </label>
                <input
                  type="number"
                  min="10"
                  max="60"
                  value={formData.customMacros.protein}
                  placeholder="30"
                  onChange={(e) => handleCustomMacroChange('protein', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.customFat}
                </label>
                <input
                  type="number"
                  min="15"
                  max="40"
                  value={formData.customMacros.fat}
                  placeholder="25"
                  onChange={(e) => handleCustomMacroChange('fat', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.customCarbs}
                </label>
                <input
                  type="number"
                  min="10"
                  max="70"
                  value={formData.customMacros.carbs}
                  placeholder="45"
                  onChange={(e) => handleCustomMacroChange('carbs', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
            </div>
            {errors.customMacros && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.customMacros}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          {t.calculate}
        </button>
      </form>
    </div>
  );
};
