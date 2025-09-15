import { ChefHat, Flame, Target } from 'lucide-react';
import React from 'react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface HighProteinGuideProps {
  language: Language;
  targetProtein: number;
}

interface ProteinSource {
  name: string;
  protein: number;
  serving: string;
  calories: number;
  tips?: string;
}

const proteinSources: Record<string, ProteinSource[]> = {
  en: [
    { name: "Chicken Breast", protein: 31, serving: "100g", calories: 165, tips: "Grill, bake, or air fry for best results" },
    { name: "Greek Yogurt", protein: 20, serving: "200g cup", calories: 130, tips: "Choose plain, add berries for flavor" },
    { name: "Egg Whites", protein: 11, serving: "3 large", calories: 51, tips: "Perfect for omelets and protein shakes" },
    { name: "Tuna (canned)", protein: 25, serving: "100g", calories: 116, tips: "Great for quick meals and salads" },
    { name: "Cottage Cheese", protein: 24, serving: "200g cup", calories: 163, tips: "Mix with fruit or use in cooking" },
    { name: "Protein Powder", protein: 25, serving: "1 scoop", calories: 120, tips: "Whey, casein, or plant-based options" },
    { name: "Salmon", protein: 25, serving: "100g", calories: 208, tips: "Rich in omega-3 fatty acids" },
    { name: "Lean Beef", protein: 26, serving: "100g", calories: 250, tips: "Choose 93% lean ground beef" },
    { name: "Turkey Breast", protein: 29, serving: "100g", calories: 135, tips: "Lower in calories than chicken" },
    { name: "Lentils (cooked)", protein: 18, serving: "200g cup", calories: 230, tips: "Great plant-based protein source" },
    { name: "Quinoa (cooked)", protein: 8, serving: "185g cup", calories: 222, tips: "Complete protein with all amino acids" },
    { name: "Tofu (firm)", protein: 20, serving: "150g", calories: 181, tips: "Marinate for better flavor" }
  ],
  ar: [
    { name: "صدر الدجاج", protein: 31, serving: "100 جرام", calories: 165, tips: "اشويه أو اطبخيه في الفرن للحصول على أفضل نتيجة" },
    { name: "اللبن اليوناني", protein: 20, serving: "كوب 200 جرام", calories: 130, tips: "اختر العادي واضف التوت للطعم" },
    { name: "بياض البيض", protein: 11, serving: "3 حبات كبيرة", calories: 51, tips: "مثالي للعجة والمشروبات البروتينية" },
    { name: "التونة (معلبة)", protein: 25, serving: "100 جرام", calories: 116, tips: "رائع للوجبات السريعة والسلطات" },
    { name: "الجبن القريش", protein: 24, serving: "كوب 200 جرام", calories: 163, tips: "امزجه مع الفواكه أو استخدمه في الطبخ" },
    { name: "مسحوق البروتين", protein: 25, serving: "مكيال واحد", calories: 120, tips: "واي، كازين، أو خيارات نباتية" },
    { name: "السلمون", protein: 25, serving: "100 جرام", calories: 208, tips: "غني بأحماض الأوميغا 3" },
    { name: "اللحم البقري قليل الدهون", protein: 26, serving: "100 جرام", calories: 250, tips: "اختر اللحم المفروم 93% قليل الدهون" },
    { name: "صدر الديك الرومي", protein: 29, serving: "100 جرام", calories: 135, tips: "أقل في السعرات من الدجاج" },
    { name: "العدس (مطبوخ)", protein: 18, serving: "كوب 200 جرام", calories: 230, tips: "مصدر بروتين نباتي ممتاز" },
    { name: "الكينوا (مطبوخة)", protein: 8, serving: "كوب 185 جرام", calories: 222, tips: "بروتين كامل مع جميع الأحماض الأمينية" },
    { name: "التوفو (متماسك)", protein: 20, serving: "150 جرام", calories: 181, tips: "تتبيله للحصول على نكهة أفضل" }
  ]
};

export const HighProteinGuide: React.FC<HighProteinGuideProps> = ({ language, targetProtein }) => {
  const t = translations[language];
  const sources = proteinSources[language];

  const getRecommendedSources = () => {
    // Sort by protein density (protein per calorie)
    return sources
      .map(source => ({
        ...source,
        proteinDensity: source.protein / source.calories
      }))
      .sort((a, b) => b.proteinDensity - a.proteinDensity)
      .slice(0, 8);
  };

  const recommendedSources = getRecommendedSources();

  const highProteinTips = language === 'en' ? [
    "Eat protein with every meal to spread intake throughout the day",
    "Combine different protein sources for complete amino acid profiles",
    "Time protein intake around workouts for optimal muscle recovery",
    "Stay hydrated when consuming high protein to support kidney function",
    "Include both animal and plant proteins for variety and nutrients"
  ] : [
    "تناول البروتين مع كل وجبة لتوزيع الاستهلاك طوال اليوم",
    "امزج مصادر بروتين مختلفة للحصول على ملف أحماض أمينية كامل",
    "وقت تناول البروتين حول التمارين للتعافي الأمثل للعضلات",
    "ابق رطباً عند تناول بروتين عالي لدعم وظائف الكلى",
    "اشمل البروتين الحيواني والنباتي للتنوع والمغذيات"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'High Protein Food Guide' : 'دليل الأطعمة عالية البروتين'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'en' ? `Target: ${targetProtein}g protein per day` : `الهدف: ${targetProtein} جرام بروتين يومياً`}
          </p>
        </div>
      </div>

      {/* Protein Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {recommendedSources.map((source, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                {source.name}
              </h4>
              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                {source.serving}
              </span>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-2">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Target className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {source.protein}g
                </span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Flame className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {source.calories} {language === 'en' ? 'cal' : 'س.ح'}
                </span>
              </div>
            </div>

            {source.tips && (
              <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                {source.tips}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
          <ChefHat className="h-5 w-5 text-green-600 dark:text-green-400" />
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {language === 'en' ? 'High Protein Tips' : 'نصائح البروتين العالي'}
          </h4>
        </div>
        
        <ul className="space-y-2">
          {highProteinTips.map((tip, index) => (
            <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
              <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
