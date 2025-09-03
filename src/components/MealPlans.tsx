import { ChefHat, Clock, Filter, Star } from 'lucide-react';
import React, { useState } from 'react';
import { mealPlans } from '../data/mealPlans';
import { translations } from '../data/translations';
import { Language, MealPlan } from '../types';

interface MealPlansProps {
  language: Language;
}

export const MealPlans: React.FC<MealPlansProps> = ({ language }) => {
  const t = translations[language];
  const meals = mealPlans[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = [
    { key: 'all', name: language === 'en' ? 'All Meals' : 'جميع الوجبات' },
    { key: 'breakfast', name: language === 'en' ? 'Breakfast' : 'الفطور' },
    { key: 'lunch', name: language === 'en' ? 'Lunch' : 'الغداء' },
    { key: 'dinner', name: language === 'en' ? 'Dinner' : 'العشاء' },
    { key: 'snack', name: language === 'en' ? 'Snacks' : 'وجبات خفيفة' }
  ];

  const difficulties = [
    { key: 'all', name: language === 'en' ? 'All Levels' : 'جميع المستويات' },
    { key: 'Easy', name: language === 'en' ? 'Easy' : 'سهل' },
    { key: 'Medium', name: language === 'en' ? 'Medium' : 'متوسط' },
    { key: 'Hard', name: language === 'en' ? 'Hard' : 'صعب' }
  ];

  const filteredMeals = meals.filter((meal: MealPlan) => {
    const categoryMatch = selectedCategory === 'all' || meal.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || meal.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'breakfast': return '🌅';
      case 'lunch': return '🌞';
      case 'dinner': return '🌙';
      case 'snack': return '🍎';
      default: return '🍽️';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
          <ChefHat className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Healthy Meal Plans' : 'خطط الوجبات الصحية'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {language === 'en' 
              ? 'Low-sugar, macro-optimized recipes inspired by Saudi health guidelines' 
              : 'وصفات قليلة السكر ومحسنة للمغذيات الكبيرة مستوحاة من الإرشادات الصحية السعودية'
            }
          </p>
        </div>
      </div>

      {/* Health Benefits Banner */}
      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2 flex items-center space-x-2 rtl:space-x-reverse">
          <span>💚</span>
          <span>{language === 'en' ? 'Health-Focused Features:' : 'الميزات المركزة على الصحة:'}</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700 dark:text-green-300">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span>✓</span>
            <span>{language === 'en' ? 'Minimal added sugars' : 'سكر مضاف قليل'}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span>✓</span>
            <span>{language === 'en' ? 'High fiber content' : 'محتوى عالي من الألياف'}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span>✓</span>
            <span>{language === 'en' ? 'Heart-healthy fats' : 'دهون صحية للقلب'}</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span>✓</span>
            <span>{language === 'en' ? 'Balanced macronutrients' : 'مغذيات كبيرة متوازنة'}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <span className="font-medium text-gray-900 dark:text-white">
            {language === 'en' ? 'Filter by:' : 'تصفية حسب:'}
          </span>
        </div>
        
        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Meal Type' : 'نوع الوجبة'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Difficulty Level' : 'مستوى الصعوبة'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.key}
                onClick={() => setSelectedDifficulty(difficulty.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDifficulty === difficulty.key
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {difficulty.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Meal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMeals.map((meal: MealPlan, index: number) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="text-2xl">
                  {getCategoryIcon(meal.category)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {meal.name}
                  </h4>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{meal.prepTime} {language === 'en' ? 'min' : 'دقيقة'}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(meal.difficulty)}`}>
                      {meal.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {meal.calories}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {t.calories}
                </div>
              </div>
            </div>

            {/* Macros */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {meal.protein}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.protein}
                </div>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  {meal.carbs}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.carbs}
                </div>
              </div>
              <div className="text-center p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                <div className="text-lg font-bold text-accent-600 dark:text-accent-400">
                  {meal.fat}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.fat}
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2 rtl:space-x-reverse">
                <span>🛒</span>
                <span>{language === 'en' ? 'Ingredients:' : 'المكونات:'}</span>
              </h5>
              <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-3">
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {meal.ingredients.map((ingredient: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <div className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full flex-shrink-0 mt-2" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2 rtl:space-x-reverse">
                <span>👨‍🍳</span>
                <span>{language === 'en' ? 'Instructions:' : 'التعليمات:'}</span>
              </h5>
              <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-3">
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  {meal.instructions.map((instruction: string, idx: number) => (
                    <li key={idx} className="flex space-x-3 rtl:space-x-reverse">
                      <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-0.5 min-w-[24px] text-center">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Tips */}
            {meal.tips && meal.tips.length > 0 && (
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2 rtl:space-x-reverse">
                  <span>💡</span>
                  <span>{language === 'en' ? 'Pro Tips:' : 'نصائح مهنية:'}</span>
                </h5>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                  <ul className="text-sm text-yellow-800 dark:text-yellow-300 space-y-1">
                    {meal.tips.map((tip: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <Star className="h-3 w-3 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredMeals.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'No meals found' : 'لم يتم العثور على وجبات'}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? 'Try adjusting your filters to see more meal options.'
              : 'جرب تعديل المرشحات لرؤية المزيد من خيارات الوجبات.'
            }
          </p>
        </div>
      )}
    </div>
  );
};