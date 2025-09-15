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
    activityLevel: 'moderate',
    goal: 'build',
    macroDistribution: '20-40-40',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.age || parseInt(formData.age) < 15 || parseInt(formData.age) > 100) {
      newErrors.age = language === 'en' ? 'Age must be between 15 and 100' : 'العمر يجب أن يكون بين 15 و 100';
    }
    
    if (!formData.height || parseInt(formData.height) < 120 || parseInt(formData.height) > 250) {
      newErrors.height = language === 'en' ? 'Height must be between 120 and 250 cm' : 'الطول يجب أن يكون بين 120 و 250 سم';
    }
    
    if (!formData.weight || parseInt(formData.weight) < 30 || parseInt(formData.weight) > 300) {
      newErrors.weight = language === 'en' ? 'Weight must be between 30 and 300 kg' : 'الوزن يجب أن يكون بين 30 و 300 كجم';
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
        activityLevel: formData.activityLevel,
        goal: formData.goal,
        macroDistribution: formData.macroDistribution,
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

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.height}
            </label>
            <input
              type="number"
              min="120"
              max="250"
              value={formData.height}
              placeholder={language === 'en' ? 'Enter your height in cm (120-250)' : 'أدخل طولك بالسم (120-250)'}
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
              {t.weight}
            </label>
            <input
              type="number"
              min="30"
              max="300"
              value={formData.weight}
              placeholder={language === 'en' ? 'Enter your weight in kg (30-300)' : 'أدخل وزنك بالكيلو (30-300)'}
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

        {/* Activity Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.activityLevel}
            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
              {language === 'en' ? 'Choose your daily activity level' : 'اختر مستوى نشاطك اليومي'}
            </span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['sedentary', 'moderate', 'active'] as const).map((level) => (
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
                  {level === 'sedentary' && (language === 'en' ? 'Little to no exercise' : 'قليل أو لا يوجد تمرين')}
                  {level === 'moderate' && (language === 'en' ? '3-5 days per week' : '3-5 أيام في الأسبوع')}
                  {level === 'active' && (language === 'en' ? '6-7 days per week' : '6-7 أيام في الأسبوع')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.goal}
            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
              {language === 'en' ? 'What is your fitness goal?' : 'ما هو هدفك الرياضي؟'}
            </span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {(['build', 'lose', 'cut', 'maintain'] as const).map((goalType) => (
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
              </button>
            ))}
          </div>
        </div>

        {/* Macro Distribution */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.macroDistribution}
            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
              {language === 'en' ? 'Choose your preferred macro split' : 'اختر توزيع المغذيات المفضل لديك'}
            </span>
          </label>
          <div className="grid grid-cols-1 gap-3">
            {(['20-40-40', '20-30-50', '20-50-30'] as const).map((macro) => (
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
                  {macro === '20-40-40' && t.macroOption1}
                  {macro === '20-30-50' && t.macroOption2}
                  {macro === '20-50-30' && t.macroOption3}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {macro === '20-40-40' && (language === 'en' ? '20% Fat • 40% Protein • 40% Carbs' : '20% دهون • 40% بروتين • 40% كربوهيدرات')}
                  {macro === '20-30-50' && (language === 'en' ? '20% Fat • 30% Protein • 50% Carbs' : '20% دهون • 30% بروتين • 50% كربوهيدرات')}
                  {macro === '20-50-30' && (language === 'en' ? '20% Fat • 50% Protein • 30% Carbs' : '20% دهون • 50% بروتين • 30% كربوهيدرات')}
                </div>
              </button>
            ))}
          </div>
        </div>

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