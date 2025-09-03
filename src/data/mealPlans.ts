import { MealPlan } from '../types';

export const mealPlans: Record<string, MealPlan[]> = {
  en: [
    // Breakfast Options
    {
      name: "Healthy Oat Pancakes (Sugar-Free)",
      category: 'breakfast',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 32,
      carbs: 25,
      fat: 9,
      calories: 295,
      ingredients: [
        "1 scoop vanilla protein powder (30g)",
        "2 large eggs",
        "1/3 medium banana (40g) - natural sweetener",
        "1/3 cup rolled oats (27g)",
        "1 tsp baking powder",
        "1/4 cup unsweetened almond milk",
        "1 tsp vanilla extract",
        "1/2 tsp cinnamon",
        "1 tbsp chopped walnuts (8g)"
      ],
      instructions: [
        "Blend oats into flour consistency first",
        "Add all ingredients and blend until smooth",
        "Let batter rest for 3-5 minutes to thicken",
        "Heat non-stick pan over medium-low heat",
        "Pour 1/4 cup batter per pancake",
        "Cook 3-4 minutes until bubbles form, flip gently",
        "Cook 2-3 minutes more until golden",
        "Serve with fresh berries (no added sugar)"
      ],
      tips: [
        "Use stevia or monk fruit if extra sweetness needed",
        "Top with Greek yogurt and nuts for healthy fats",
        "Batch cook and freeze for quick weekday breakfasts",
        "Rich in fiber and protein to keep you full longer"
      ]
    },
    {
      name: "Traditional Arabic Breakfast Bowl",
      category: 'breakfast',
      prepTime: 12,
      difficulty: 'Easy',
      protein: 26,
      carbs: 32,
      fat: 14,
      calories: 335,
      ingredients: [
        "1 cup Greek yogurt (200g)",
        "2 tbsp rolled oats (16g)",
        "1 tbsp tahini (15g)",
        "1/2 cup mixed berries (75g)",
        "1 tbsp crushed walnuts (8g)",
        "1 tsp honey (only 5ml - minimal sugar)",
        "1 tsp rose water (optional)",
        "Pinch of ground cardamom",
        "1 small date, chopped (8g)"
      ],
      instructions: [
        "Mix rose water and cardamom into Greek yogurt",
        "Soak oats in a bit of water for 5 minutes",
        "Layer yogurt mixture in bowl",
        "Add softened oats and swirl in tahini",
        "Top with fresh berries and chopped date",
        "Drizzle with minimal honey",
        "Finish with crushed walnuts",
        "Serve immediately for best texture"
      ],
      tips: [
        "Tahini provides healthy fats and authentic Middle Eastern flavor",
        "Use frozen berries when fresh ones are expensive",
        "Can be prepared the night before (except nuts)",
        "Rich in probiotics and heart-healthy fats"
      ]
    },

    // Lunch Options
    {
      name: "Mediterranean Quinoa Power Bowl",
      category: 'lunch',
      prepTime: 25,
      difficulty: 'Medium',
      protein: 38,
      carbs: 42,
      fat: 16,
      calories: 435,
      ingredients: [
        "150g grilled chicken breast",
        "3/4 cup cooked quinoa (140g)",
        "1/2 cup chickpeas (82g)",
        "1 cup mixed vegetables (cucumber, tomato, bell pepper)",
        "2 tbsp hummus (30g)",
        "1 tbsp extra virgin olive oil",
        "1 tbsp lemon juice",
        "Fresh herbs (parsley, mint)",
        "1 tbsp pomegranate seeds (optional)",
        "Pinch of sumac"
      ],
      instructions: [
        "Season chicken with Mediterranean herbs and grill",
        "Cook quinoa in low-sodium vegetable broth",
        "Dice vegetables into uniform pieces",
        "Warm chickpeas with cumin and paprika",
        "Arrange quinoa as base in bowl",
        "Add sliced chicken and warm chickpeas",
        "Top with fresh vegetable mix",
        "Dollop hummus and drizzle with olive oil-lemon dressing",
        "Garnish with herbs, pomegranate, and sumac"
      ],
      tips: [
        "Quinoa is a complete protein source",
        "Meal prep 4 bowls for busy workdays",
        "Substitute chicken with grilled fish or tofu",
        "Pomegranate adds antioxidants and natural sweetness"
      ]
    },
    {
      name: "Spiced Lentil and Vegetable Curry",
      category: 'lunch',
      prepTime: 30,
      difficulty: 'Medium',
      protein: 28,
      carbs: 48,
      fat: 12,
      calories: 390,
      ingredients: [
        "3/4 cup red lentils (150g)",
        "1 cup mixed vegetables (carrot, zucchini, spinach)",
        "1/2 cup brown rice (95g cooked)",
        "1 tbsp coconut oil",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tsp turmeric",
        "1 tsp cumin",
        "1/2 tsp coriander",
        "1 can diced tomatoes (no added sugar)",
        "2 cups low-sodium vegetable broth",
        "Fresh cilantro and lemon"
      ],
      instructions: [
        "Heat coconut oil and sauté onion until translucent",
        "Add garlic and spices, cook for 1 minute",
        "Add lentils, tomatoes, and broth",
        "Simmer for 15-20 minutes until lentils are tender",
        "Add chopped vegetables in last 5 minutes",
        "Season with salt, pepper, and lemon juice",
        "Serve over brown rice",
        "Garnish with fresh cilantro"
      ],
      tips: [
        "Lentils are excellent plant-based protein source",
        "Add coconut milk for creamier texture (increase fat content)",
        "Freeze portions for quick healthy meals",
        "Rich in fiber to help control blood sugar"
      ]
    },

    // Dinner Options
    {
      name: "Grilled Fish with Roasted Vegetables",
      category: 'dinner',
      prepTime: 25,
      difficulty: 'Easy',
      protein: 35,
      carbs: 28,
      fat: 15,
      calories: 365,
      ingredients: [
        "150g white fish fillet (cod or hammour)",
        "1 medium sweet potato (130g)",
        "1 cup mixed vegetables (zucchini, bell peppers)",
        "1 tbsp olive oil",
        "2 cloves garlic, minced", 
        "1 lemon (juice and zest)",
        "Fresh herbs (thyme, oregano)",
        "1 tsp za'atar spice blend",
        "Salt and black pepper"
      ],
      instructions: [
        "Preheat oven to 200°C (400°F)",
        "Cut sweet potato and vegetables into uniform pieces",
        "Toss vegetables with half the olive oil and seasonings",
        "Roast vegetables for 20-25 minutes",
        "Season fish with lemon, herbs, and za'atar",
        "Heat remaining oil in non-stick pan",
        "Cook fish 3-4 minutes per side until flaky",
        "Serve fish over roasted vegetables with lemon wedges"
      ],
      tips: [
        "Za'atar adds authentic Middle Eastern flavor",
        "Fish is excellent source of lean protein and omega-3",
        "Sweet potato provides complex carbohydrates",
        "Can substitute fish with chicken breast if preferred"
      ]
    },
    {
      name: "Healthy Turkey and Vegetable Skillet",
      category: 'dinner',
      prepTime: 25,
      difficulty: 'Medium',
      protein: 38,
      carbs: 22,
      fat: 12,
      calories: 330,
      ingredients: [
        "150g lean ground turkey (93% lean)",
        "1 medium zucchini, diced (200g)",
        "1 cup cauliflower rice (100g)",
        "1 bell pepper, diced",
        "1 tbsp olive oil",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tsp cumin",
        "1/2 tsp turmeric",
        "1/2 tsp cinnamon",
        "1 can diced tomatoes (no sugar added)",
        "Fresh parsley and mint"
      ],
      instructions: [
        "Heat olive oil in large skillet over medium heat",
        "Sauté onion until translucent, about 5 minutes",
        "Add garlic and spices, cook for 1 minute",
        "Add ground turkey, cook until browned completely",
        "Add diced vegetables and tomatoes",
        "Simmer for 10-15 minutes until vegetables are tender",
        "Stir in cauliflower rice in last 3 minutes",
        "Season with salt, pepper, and fresh herbs"
      ],
      tips: [
        "Middle Eastern spices add flavor without extra calories",
        "Cauliflower rice reduces carbs while adding volume",
        "Make double batch for easy meal prep",
        "Can be served with small portion of brown rice if more carbs needed"
      ]
    },

    // Snack Options
    {
      name: "Date and Nut Energy Balls (No Added Sugar)",
      category: 'snack',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 18,
      carbs: 22,
      fat: 14,
      calories: 270,
      ingredients: [
        "4 Medjool dates, pitted (60g)",
        "1/4 cup raw almonds (30g)",
        "1/4 cup walnuts (30g)",
        "1 scoop vanilla protein powder (30g)",
        "1 tbsp tahini (15g)",
        "1 tsp vanilla extract",
        "1/2 tsp cinnamon",
        "Pinch of sea salt",
        "1 tbsp unsweetened cocoa powder (optional)"
      ],
      instructions: [
        "Soak dates in warm water for 10 minutes if very dry",
        "Process nuts in food processor until roughly chopped",
        "Add dates and process until paste forms",
        "Add protein powder, tahini, vanilla, and spices",
        "Process until mixture holds together when pressed",
        "Add 1-2 tsp water if too dry",
        "Roll into 12 equal balls",
        "Chill for 30 minutes to firm up"
      ],
      tips: [
        "Dates provide natural sweetness without refined sugar",
        "Store in refrigerator for up to 1 week",
        "Roll in coconut flakes or sesame seeds for variety",
        "Perfect pre or post-workout snack"
      ]
    },
    {
      name: "Greek Yogurt with Nuts and Seeds",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 22,
      carbs: 15,
      fat: 12,
      calories: 240,
      ingredients: [
        "3/4 cup Greek yogurt (150g)",
        "1 tbsp mixed nuts (almonds, walnuts) (10g)",
        "1 tsp chia seeds (4g)",
        "1 tsp pumpkin seeds (4g)",
        "1/2 tsp honey (minimal - 2.5ml)",
        "1/4 tsp vanilla extract",
        "Cinnamon for dusting",
        "3-4 fresh berries (15g)"
      ],
      instructions: [
        "Mix vanilla extract into Greek yogurt",
        "Top with mixed nuts and seeds",
        "Add fresh berries",
        "Drizzle with minimal honey",
        "Dust with cinnamon",
        "Serve immediately"
      ],
      tips: [
        "Nuts and seeds provide healthy fats and crunch",
        "Use stevia instead of honey for zero sugar option",
        "Prep nuts and seeds in portions for quick assembly",
        "High protein content helps with satiety"
      ]
    },
    {
      name: "Spinach and Mushroom Egg White Omelet",
      category: 'breakfast',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 28,
      carbs: 8,
      fat: 6,
      calories: 185,
      ingredients: [
        "6 egg whites (or 3 whole eggs)",
        "1 cup fresh spinach (30g)",
        "1/2 cup mushrooms, sliced (40g)",
        "1/4 cup low-fat cheese (30g)",
        "1 tsp olive oil",
        "1 small tomato, diced (50g)",
        "2 cloves garlic, minced",
        "Fresh herbs (basil, oregano)",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Heat olive oil in non-stick pan over medium heat",
        "Sauté mushrooms until golden, about 3-4 minutes",
        "Add garlic and spinach, cook until spinach wilts",
        "Beat egg whites with salt and pepper",
        "Pour eggs into pan, let set for 2 minutes",
        "Add vegetables and cheese to one half",
        "Fold omelet in half and slide onto plate",
        "Garnish with fresh herbs and diced tomato"
      ],
      tips: [
        "Use non-stick pan to reduce oil needed",
        "Add vegetables for extra fiber and nutrients",
        "Egg whites are pure protein with minimal calories",
        "Perfect for weight management goals"
      ]
    },
    {
      name: "Grilled Chicken and Avocado Salad",
      category: 'lunch',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 42,
      carbs: 15,
      fat: 18,
      calories: 385,
      ingredients: [
        "150g grilled chicken breast",
        "2 cups mixed greens (60g)",
        "1/2 medium avocado (75g)",
        "1 cup cherry tomatoes (150g)",
        "1/4 cup cucumber, diced (30g)",
        "2 tbsp pumpkin seeds (16g)",
        "1 tbsp olive oil",
        "1 tbsp lemon juice",
        "1 tsp Dijon mustard",
        "Fresh herbs (cilantro, parsley)"
      ],
      instructions: [
        "Season and grill chicken breast until cooked through",
        "Let chicken rest for 5 minutes, then slice",
        "Wash and prepare all vegetables",
        "Whisk together olive oil, lemon juice, and mustard",
        "Arrange greens in large bowl",
        "Top with sliced chicken, avocado, and vegetables",
        "Sprinkle with pumpkin seeds",
        "Drizzle with dressing and garnish with herbs"
      ],
      tips: [
        "Avocado provides healthy monounsaturated fats",
        "Pumpkin seeds add crunch and magnesium",
        "Can meal prep without avocado for 3 days",
        "Perfect for heart-healthy diet"
      ]
    },
    {
      name: "Baked Salmon with Steamed Broccoli",
      category: 'dinner',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 40,
      carbs: 12,
      fat: 16,
      calories: 340,
      ingredients: [
        "150g salmon fillet",
        "2 cups broccoli florets (200g)",
        "1 medium sweet potato (100g)",
        "1 tbsp olive oil",
        "1 lemon (juice and zest)",
        "2 cloves garlic, minced",
        "1 tsp dried dill",
        "1/2 tsp paprika",
        "Salt and black pepper"
      ],
      instructions: [
        "Preheat oven to 200°C (400°F)",
        "Place salmon on baking sheet lined with parchment",
        "Rub salmon with olive oil, lemon zest, dill, and paprika",
        "Bake salmon for 12-15 minutes until flaky",
        "Steam broccoli for 5-6 minutes until tender-crisp",
        "Bake sweet potato for 25-30 minutes until soft",
        "Serve salmon with steamed vegetables",
        "Drizzle with fresh lemon juice"
      ],
      tips: [
        "Salmon is rich in omega-3 fatty acids",
        "Don't overcook fish to maintain nutrients",
        "Broccoli provides fiber and vitamin C",
        "Sweet potato offers complex carbohydrates"
      ]
    },
    {
      name: "Cottage Cheese and Berry Bowl",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 24,
      carbs: 20,
      fat: 4,
      calories: 205,
      ingredients: [
        "1 cup low-fat cottage cheese (225g)",
        "1/2 cup mixed berries (75g)",
        "1 tbsp chopped almonds (8g)",
        "1 tsp chia seeds (4g)",
        "1/2 tsp vanilla extract",
        "Cinnamon for sprinkling",
        "Fresh mint leaves (optional)"
      ],
      instructions: [
        "Place cottage cheese in serving bowl",
        "Mix in vanilla extract",
        "Top with fresh berries",
        "Sprinkle with chopped almonds and chia seeds",
        "Dust with cinnamon",
        "Garnish with fresh mint if desired"
      ],
      tips: [
        "Cottage cheese is high in casein protein",
        "Berries provide antioxidants and natural sweetness",
        "Great post-workout recovery snack",
        "Can be prepared ahead for quick grab-and-go"
      ]
    }
  ],
  ar: [
    // خيارات الفطور
    {
      name: "فطائر الشوفان الصحية (خالية من السكر المضاف)",
      category: 'breakfast',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 32,
      carbs: 25,
      fat: 9,
      calories: 295,
      ingredients: [
        "مكيال واحد مسحوق بروتين فانيليا (30 جرام)",
        "بيضتان كبيرتان",
        "ثلث موزة متوسطة (40 جرام) - محلي طبيعي",
        "ثلث كوب شوفان (27 جرام)",
        "ملعقة صغيرة بيكنج باودر",
        "ربع كوب حليب لوز غير محلى",
        "ملعقة صغيرة خلاصة فانيليا",
        "نصف ملعقة صغيرة قرفة",
        "ملعقة كبيرة جوز مفروم (8 جرام)"
      ],
      instructions: [
        "اطحن الشوفان أولاً حتى يصبح مثل الدقيق",
        "أضف جميع المكونات واخلط حتى تحصل على خليط ناعم",
        "اترك الخليط يرتاح لمدة 3-5 دقائق ليثخن",
        "سخن مقلاة غير لاصقة على نار هادئة-متوسطة",
        "اسكب ربع كوب من الخليط لكل فطيرة",
        "اطبخ لمدة 3-4 دقائق حتى تتكون فقاعات، ثم اقلب بلطف",
        "اطبخ لمدة 2-3 دقائق إضافية حتى تصبح ذهبية",
        "قدم مع التوت الطازج (بدون سكر مضاف)"
      ],
      tips: [
        "استخدم ستيفيا أو سكر الراهب إذا كنت تحتاج حلاوة إضافية",
        "ضع لبن يوناني وجوز في الأعلى للدهون الصحية",
        "اطبخ كمية كبيرة وجمد للفطائر السريعة خلال الأسبوع",
        "غني بالألياف والبروتين ليبقيك شبعاناً لفترة أطول"
      ]
    },
    {
      name: "وعاء الفطور العربي التقليدي",
      category: 'breakfast',
      prepTime: 12,
      difficulty: 'Easy',
      protein: 26,
      carbs: 32,
      fat: 14,
      calories: 335,
      ingredients: [
        "كوب لبن يوناني (200 جرام)",
        "ملعقتان كبيرتان شوفان (16 جرام)",
        "ملعقة كبيرة طحينة (15 جرام)",
        "نصف كوب توت مشكل (75 جرام)",
        "ملعقة كبيرة جوز مكسر (8 جرام)",
        "ملعقة صغيرة عسل (5 مل فقط - سكر قليل)",
        "ملعقة صغيرة ماء ورد (اختياري)",
        "رشة هيل مطحون",
        "تمرة صغيرة مقطعة (8 جرام)"
      ],
      instructions: [
        "اخلط ماء الورد والهيل مع اللبن اليوناني",
        "انقع الشوفان في قليل من الماء لمدة 5 دقائق",
        "ضع خليط اللبن في طبقات في الوعاء",
        "أضف الشوفان المنقع وحرك الطحينة",
        "ضع التوت الطازج والتمر المقطع في الأعلى",
        "رش بالعسل القليل",
        "أنه بالجوز المكسر",
        "قدم فوراً للحصول على أفضل قوام"
      ],
      tips: [
        "الطحينة توفر دهون صحية ونكهة شرق أوسطية أصيلة",
        "استخدم التوت المجمد عندما يكون الطازج غالياً",
        "يمكن تحضيره في الليلة السابقة (عدا الجوز)",
        "غني بالبروبيوتيك والدهون الصحية للقلب"
      ]
    },

    // خيارات الغداء
    {
      name: "وعاء الكينوا المتوسطي القوي",
      category: 'lunch',
      prepTime: 25,
      difficulty: 'Medium',
      protein: 38,
      carbs: 42,
      fat: 16,
      calories: 435,
      ingredients: [
        "150 جرام صدر دجاج مشوي",
        "ثلاثة أرباع كوب كينوا مطبوخة (140 جرام)",
        "نصف كوب حمص (82 جرام)",
        "كوب خضروات مشكلة (خيار، طماطم، فلفل)",
        "ملعقتان كبيرتان حمص (30 جرام)",
        "ملعقة كبيرة زيت زيتون بكر ممتاز",
        "ملعقة كبيرة عصير ليمون",
        "أعشاب طازجة (بقدونس، نعنع)",
        "ملعقة كبيرة حب الرمان (اختياري)",
        "رشة سماق"
      ],
      instructions: [
        "تبل الدجاج بالأعشاب المتوسطية واشويه",
        "اطبخ الكينوا في مرق خضار قليل الصوديوم",
        "قطع الخضروات إلى قطع متساوية",
        "سخن الحمص مع الكمون والبابريكا",
        "رتب الكينوا كقاعدة في الوعاء",
        "أضف شرائح الدجاج والحمص الدافئ",
        "ضع خليط الخضروات الطازجة في الأعلى",
        "ضع الحمص ورش بتتبيلة زيت الزيتون والليمون",
        "زين بالأعشاب وحب الرمان والسماق"
      ],
      tips: [
        "الكينوا مصدر بروتين كامل",
        "حضر 4 أوعية للأيام المزدحمة في العمل",
        "استبدل الدجاج بالسمك المشوي أو التوفو",
        "حب الرمان يضيف مضادات الأكسدة والحلاوة الطبيعية"
      ]
    },
    {
      name: "كاري العدس والخضار المتبل",
      category: 'lunch',
      prepTime: 30,
      difficulty: 'Medium',
      protein: 28,
      carbs: 48,
      fat: 12,
      calories: 390,
      ingredients: [
        "ثلاثة أرباع كوب عدس أحمر (150 جرام)",
        "كوب خضروات مشكلة (جزر، كوسا، سبانخ)",
        "نصف كوب أرز بني (95 جرام مطبوخ)",
        "ملعقة كبيرة زيت جوز الهند",
        "بصلة مقطعة مكعبات",
        "3 فصوص ثوم مفروم",
        "ملعقة صغيرة كركم",
        "ملعقة صغيرة كمون",
        "نصف ملعقة صغيرة كزبرة",
        "علبة طماطم مقطعة (بدون سكر مضاف)",
        "كوبان مرق خضار قليل الصوديوم",
        "كزبرة طازجة وليمون"
      ],
      instructions: [
        "سخن زيت جوز الهند واقلي البصل حتى يذبل",
        "أضف الثوم والتوابل واطبخ لدقيقة واحدة",
        "أضف العدس والطماطم والمرق",
        "اتركه ينضج لمدة 15-20 دقيقة حتى ينضج العدس",
        "أضف الخضروات المقطعة في آخر 5 دقائق",
        "تبل بالملح والفلفل وعصير الليمون",
        "قدم فوق الأرز البني",
        "زين بالكزبرة الطازجة"
      ],
      tips: [
        "العدس مصدر ممتاز للبروتين النباتي",
        "أضف حليب جوز الهند للقوام الكريمي (زيادة الدهون)",
        "جمد أجزاء للوجبات الصحية السريعة",
        "غني بالألياف للمساعدة في التحكم بسكر الدم"
      ]
    },

    // خيارات العشاء
    {
      name: "سمك مشوي مع خضروات محمصة",
      category: 'dinner',
      prepTime: 25,
      difficulty: 'Easy',
      protein: 35,
      carbs: 28,
      fat: 15,
      calories: 365,
      ingredients: [
        "150 جرام فيليه سمك أبيض (كود أو هامور)",
        "حبة بطاطا حلوة متوسطة (130 جرام)",
        "كوب خضروات مشكلة (كوسا، فلفل ملون)",
        "ملعقة كبيرة زيت زيتون",
        "فصان ثوم مفروم",
        "حبة ليمون (عصير وقشر)",
        "أعشاب طازجة (زعتر، أوريغانو)",
        "ملعقة صغيرة خلطة زعتر",
        "ملح وفلفل أسود"
      ],
      instructions: [
        "سخن الفرن على 200 درجة مئوية",
        "قطع البطاطا الحلوة والخضروات لقطع متساوية",
        "اخلط الخضروات مع نصف زيت الزيتون والتوابل",
        "احمص الخضروات لمدة 20-25 دقيقة",
        "تبل السمك بالليمون والأعشاب والزعتر",
        "سخن باقي الزيت في مقلاة غير لاصقة",
        "اطبخ السمك 3-4 دقائق لكل جانب حتى يتقشر",
        "قدم السمك فوق الخضروات المحمصة مع شرائح الليمون"
      ],
      tips: [
        "الزعتر يضيف نكهة شرق أوسطية أصيلة",
        "السمك مصدر ممتاز للبروتين الخالي من الدهون والأوميغا 3",
        "البطاطا الحلوة توفر الكربوهيدرات المعقدة",
        "يمكن استبدال السمك بصدر الدجاج إذا فضلت"
      ]
    },

    // خيارات الوجبات الخفيفة
    {
      name: "كرات التمر والجوز للطاقة (بدون سكر مضاف)",
      category: 'snack',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 18,
      carbs: 22,
      fat: 14,
      calories: 270,
      ingredients: [
        "4 تمرات مجدول منزوعة النوى (60 جرام)",
        "ربع كوب لوز خام (30 جرام)",
        "ربع كوب جوز (30 جرام)",
        "مكيال واحد مسحوق بروتين فانيليا (30 جرام)",
        "ملعقة كبيرة طحينة (15 جرام)",
        "ملعقة صغيرة خلاصة فانيليا",
        "نصف ملعقة صغيرة قرفة",
        "رشة ملح بحر",
        "ملعقة كبيرة مسحوق كاكاو غير محلى (اختياري)"
      ],
      instructions: [
        "انقع التمر في ماء دافئ لمدة 10 دقائق إذا كان جافاً جداً",
        "اطحن المكسرات في محضرة الطعام حتى تصبح مفرومة خشناً",
        "أضف التمر واطحن حتى تتكون عجينة",
        "أضف مسحوق البروتين والطحينة والفانيليا والتوابل",
        "اطحن حتى يتماسك الخليط عند الضغط عليه",
        "أضف 1-2 ملعقة صغيرة ماء إذا كان جافاً جداً",
        "شكل 12 كرة متساوية",
        "ضعها في الثلاجة لمدة 30 دقيقة لتتماسك"
      ],
      tips: [
        "التمر يوفر الحلاوة الطبيعية بدون سكر مكرر",
        "احفظها في الثلاجة لمدة أسبوع",
        "لفها في رقائق جوز الهند أو بذور السمسم للتنويع",
        "مثالية كوجبة خفيفة قبل أو بعد التمرين"
      ]
    },
    {
      name: "لبن يوناني بالمكسرات والبذور",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 22,
      carbs: 15,
      fat: 12,
      calories: 240,
      ingredients: [
        "ثلاثة أرباع كوب لبن يوناني (150 جرام)",
        "ملعقة كبيرة مكسرات مشكلة (لوز، جوز) (10 جرام)",
        "ملعقة صغيرة بذور الشيا (4 جرام)",
        "ملعقة صغيرة بذور اليقطين (4 جرام)",
        "نصف ملعقة صغيرة عسل (قليل - 2.5 مل)",
        "ربع ملعقة صغيرة خلاصة فانيليا",
        "قرفة للرش",
        "3-4 حبات توت طازج (15 جرام)"
      ],
      instructions: [
        "اخلط خلاصة الفانيليا مع اللبن اليوناني",
        "ضع المكسرات والبذور في الأعلى",
        "أضف التوت الطازج",
        "رش بالعسل القليل",
        "رش بالقرفة",
        "قدم فوراً"
      ],
      tips: [
        "المكسرات والبذور توفر دهون صحية وقرمشة",
        "استخدم ستيفيا بدلاً من العسل للخيار الخالي من السكر",
        "حضر المكسرات والبذور في أجزاء للتجميع السريع",
        "محتوى البروتين العالي يساعد في الشبع"
      ]
    },
    {
      name: "عجة بياض البيض بالسبانخ والفطر",
      category: 'breakfast',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 28,
      carbs: 8,
      fat: 6,
      calories: 185,
      ingredients: [
        "6 بياض بيض (أو 3 بيضات كاملة)",
        "كوب سبانخ طازج (30 جرام)",
        "نصف كوب فطر مقطع شرائح (40 جرام)",
        "ربع كوب جبن قليل الدسم (30 جرام)",
        "ملعقة صغيرة زيت زيتون",
        "حبة طماطم صغيرة مقطعة مكعبات (50 جرام)",
        "فصان ثوم مفروم",
        "أعشاب طازجة (ريحان، أوريغانو)",
        "ملح وفلفل حسب الذوق"
      ],
      instructions: [
        "سخن زيت الزيتون في مقلاة غير لاصقة على نار متوسطة",
        "اقلي الفطر حتى يصبح ذهبياً، حوالي 3-4 دقائق",
        "أضف الثوم والسبانخ واطبخ حتى ذبول السبانخ",
        "اخفق بياض البيض مع الملح والفلفل",
        "اسكب البيض في المقلاة واتركه ينضج لمدة دقيقتين",
        "أضف الخضروات والجبن إلى نصف واحد",
        "اطوِ العجة إلى النصف وضعها في الطبق",
        "زين بالأعشاب الطازجة ومكعبات الطماطم"
      ],
      tips: [
        "استخدم مقلاة غير لاصقة لتقليل الزيت المطلوب",
        "أضف الخضروات للحصول على ألياف ومغذيات إضافية",
        "بياض البيض بروتين خالص مع سعرات قليلة",
        "مثالي لأهداف إدارة الوزن"
      ]
    },
    {
      name: "سلطة الدجاج المشوي والأفوكادو",
      category: 'lunch',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 42,
      carbs: 15,
      fat: 18,
      calories: 385,
      ingredients: [
        "150 جرام صدر دجاج مشوي",
        "كوبان خضروات ورقية مشكلة (60 جرام)",
        "نصف حبة أفوكادو متوسطة (75 جرام)",
        "كوب طماطم كرزية (150 جرام)",
        "ربع كوب خيار مقطع مكعبات (30 جرام)",
        "ملعقتان كبيرتان بذور اليقطين (16 جرام)",
        "ملعقة كبيرة زيت زيتون",
        "ملعقة كبيرة عصير ليمون",
        "ملعقة صغيرة خردل ديجون",
        "أعشاب طازجة (كزبرة، بقدونس)"
      ],
      instructions: [
        "تبل واشوِ صدر الدجاج حتى ينضج تماماً",
        "اترك الدجاج يرتاح لمدة 5 دقائق، ثم قطعه شرائح",
        "اغسل وحضر جميع الخضروات",
        "اخفق زيت الزيتون وعصير الليمون والخردل معاً",
        "رتب الخضروات الورقية في وعاء كبير",
        "ضع شرائح الدجاج والأفوكادو والخضروات في الأعلى",
        "رش ببذور اليقطين",
        "اسكب التتبيلة وزين بالأعشاب"
      ],
      tips: [
        "الأفوكادو يوفر دهون أحادية غير مشبعة صحية",
        "بذور اليقطين تضيف قرمشة والمغنيسيوم",
        "يمكن تحضيرها مسبقاً بدون الأفوكادو لمدة 3 أيام",
        "مثالية للنظام الغذائي الصحي للقلب"
      ]
    },
    {
      name: "سلمون مخبوز مع بروكلي مطبوخ بالبخار",
      category: 'dinner',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 40,
      carbs: 12,
      fat: 16,
      calories: 340,
      ingredients: [
        "150 جرام فيليه سلمون",
        "كوبان زهرات بروكلي (200 جرام)",
        "حبة بطاطا حلوة متوسطة (100 جرام)",
        "ملعقة كبيرة زيت زيتون",
        "حبة ليمون (عصير وقشر)",
        "فصان ثوم مفروم",
        "ملعقة صغيرة شبت مجفف",
        "نصف ملعقة صغيرة بابريكا",
        "ملح وفلفل أسود"
      ],
      instructions: [
        "سخن الفرن على 200 درجة مئوية",
        "ضع السلمون على صينية خبز مبطنة بورق زبدة",
        "ادهن السلمون بزيت الزيتون وقشر الليمون والشبت والبابريكا",
        "اخبز السلمون لمدة 12-15 دقيقة حتى يتقشر",
        "اطبخ البروكلي بالبخار لمدة 5-6 دقائق حتى يصبح طرياً مقرمشاً",
        "اخبز البطاطا الحلوة لمدة 25-30 دقيقة حتى تنضج",
        "قدم السلمون مع الخضروات المطبوخة بالبخار",
        "رش بعصير الليمون الطازج"
      ],
      tips: [
        "السلمون غني بأحماض الأوميغا 3 الدهنية",
        "لا تفرط في طبخ السمك للاحتفاظ بالمغذيات",
        "البروكلي يوفر الألياف وفيتامين C",
        "البطاطا الحلوة توفر الكربوهيدرات المعقدة"
      ]
    },
    {
      name: "وعاء الجبن القريش والتوت",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 24,
      carbs: 20,
      fat: 4,
      calories: 205,
      ingredients: [
        "كوب جبن قريش قليل الدسم (225 جرام)",
        "نصف كوب توت مشكل (75 جرام)",
        "ملعقة كبيرة لوز مفروم (8 جرام)",
        "ملعقة صغيرة بذور الشيا (4 جرام)",
        "نصف ملعقة صغيرة خلاصة فانيليا",
        "قرفة للرش",
        "أوراق نعنع طازج (اختياري)"
      ],
      instructions: [
        "ضع الجبن القريش في وعاء التقديم",
        "اخلط خلاصة الفانيليا",
        "ضع التوت الطازج في الأعلى",
        "رش باللوز المفروم وبذور الشيا",
        "رش بالقرفة",
        "زين بالنعنع الطازج إذا رغبت"
      ],
      tips: [
        "الجبن القريش غني بالبروتين الكازين",
        "التوت يوفر مضادات الأكسدة والحلاوة الطبيعية",
        "وجبة خفيفة ممتازة للتعافي بعد التمرين",
        "يمكن تحضيرها مسبقاً للوجبات السريعة"
      ]
    }
  ]
};
