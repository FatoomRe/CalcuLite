// Exercise API utilities using free-exercise-db
// GitHub: https://github.com/yuhonas/free-exercise-db

export interface ExerciseApiData {
  id: string;
  name: string;
  force?: string;
  level: string;
  mechanic?: string;
  equipment?: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
  images: string[];
}

// Base URL for the free exercise database
const BASE_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main';

// Exercise name mapping to API IDs (common exercises)
const EXERCISE_MAPPING: Record<string, string> = {
  // English mappings
  'Squats': 'bodyweight-squat',
  'Back Squats': 'barbell-squat',
  'Front Squats': 'barbell-front-squat',
  'Goblet Squats': 'dumbbell-goblet-squat',
  'Bulgarian Split Squats': 'dumbbell-split-squat',
  'Push-ups': 'push-ups',
  'Incline Push-ups': 'incline-push-up',
  'Diamond Push-ups': 'diamond-push-up',
  'Bench Press': 'barbell-bench-press',
  'Barbell Bench Press': 'barbell-bench-press',
  'Incline Barbell Press': 'barbell-incline-bench-press',
  'Incline Dumbbell Press': 'dumbbell-incline-bench-press',
  'Dumbbell Press': 'dumbbell-bench-press',
  'Overhead Press': 'barbell-standing-press',
  'Dumbbell Shoulder Press': 'dumbbell-shoulder-press',
  'Deadlifts': 'barbell-deadlift',
  'Conventional Deadlifts': 'barbell-deadlift',
  'Romanian Deadlifts': 'barbell-romanian-deadlift',
  'Stiff Leg Deadlifts': 'barbell-stiff-leg-deadlift',
  'Pull-ups': 'pull-ups',
  'Wide-Grip Pull-ups': 'wide-grip-pull-up',
  'Weighted Pull-ups': 'weighted-pull-up',
  'Lat Pulldowns': 'wide-grip-lat-pulldown',
  'Barbell Rows': 'barbell-bent-over-row',
  'Bent-over Rows': 'barbell-bent-over-row',
  'T-Bar Rows': 't-bar-row',
  'Cable Rows': 'seated-cable-rows',
  'Seated Cable Rows': 'seated-cable-rows',
  'Barbell Curls': 'barbell-curl',
  'Hammer Curls': 'hammer-curls',
  'Preacher Curls': 'barbell-preacher-curl',
  'Cable Curls': 'cable-curl',
  'Tricep Dips': 'triceps-dip',
  'Dips': 'triceps-dip',
  'Weighted Dips': 'weighted-tricep-dips',
  'Close-Grip Bench Press': 'barbell-close-grip-bench-press',
  'Close-Grip Bench': 'barbell-close-grip-bench-press',
  'Tricep Pushdowns': 'triceps-pushdown',
  'Overhead Tricep Extension': 'dumbbell-one-arm-triceps-extension',
  'Leg Press': 'leg-press',
  'Leg Curls': 'lying-leg-curls',
  'Leg Extensions': 'leg-extensions',
  'Hip Thrusts': 'barbell-hip-thrust',
  'Lunges': 'dumbbell-lunge',
  'Walking Lunges': 'dumbbell-walking-lunge',
  'Step-ups': 'dumbbell-step-up',
  'Calf Raises': 'standing-calf-raises',
  'Standing Calf Raises': 'standing-calf-raises',
  'Seated Calf Raises': 'seated-calf-raise',
  'Lateral Raises': 'dumbbell-lateral-raise',
  'Dumbbell Lateral Raises': 'dumbbell-lateral-raise',
  'Face Pulls': 'cable-face-pull',
  'Cable Face Pulls': 'cable-face-pull',
  'Rear Delt Flyes': 'cable-reverse-fly',
  'Reverse Flyes': 'cable-reverse-fly',
  'Dumbbell Flyes': 'dumbbell-flyes',
  'Shrugs': 'barbell-shrug',
  'Mountain Climbers': 'mountain-climber',
  'Burpees': 'burpee',
  'Plank': 'plank',
  'Side Plank': 'side-plank',
  
  // Arabic mappings (same IDs)
  'القرفصاء': 'bodyweight-squat',
  'القرفصاء الخلفي': 'barbell-squat',
  'القرفصاء الأمامي': 'barbell-front-squat',
  'القرفصاء بالدمبل': 'dumbbell-goblet-squat',
  'القرفصاء البلغاري': 'dumbbell-split-squat',
  'الضغط': 'push-ups',
  'الضغط المائل': 'incline-push-up',
  'الضغط الماسي': 'diamond-push-up',
  'ضغط البنش': 'barbell-bench-press',
  'ضغط البار': 'barbell-bench-press',
  'الضغط المائل بالبار': 'barbell-incline-bench-press',
  'الضغط المائل بالدمبل': 'dumbbell-incline-bench-press',
  'ضغط الدمبل': 'dumbbell-bench-press',
  'الضغط العلوي': 'barbell-standing-press',
  'ضغط الكتف بالدمبل': 'dumbbell-shoulder-press',
  'الرفعة الميتة': 'barbell-deadlift',
  'الرفعة الميتة التقليدية': 'barbell-deadlift',
  'الرفعة الرومانية': 'barbell-romanian-deadlift',
  'الرفعة الميتة بأرجل مستقيمة': 'barbell-stiff-leg-deadlift',
  'العقلة': 'pull-ups',
  'العقلة واسعة': 'wide-grip-pull-up',
  'العقلة بوزن': 'weighted-pull-up',
  'السحب العلوي': 'wide-grip-lat-pulldown',
  'تجديف البار': 'barbell-bent-over-row',
  'التجديف المنحني': 'barbell-bent-over-row',
  'تجديف T-Bar': 't-bar-row',
  'التجديف بالكيبل': 'seated-cable-rows',
  'تثني البار': 'barbell-curl',
  'التثني المطرقي': 'hammer-curls',
  'تثني الواعظ': 'barbell-preacher-curl',
  'تثني الكيبل': 'cable-curl',
  'تراجع الترايسبس': 'triceps-dip',
  'التراجع': 'triceps-dip',
  'التراجع بوزن': 'weighted-tricep-dips',
  'ضغط البنش ضيق': 'barbell-close-grip-bench-press',
  'البنش ضيق': 'barbell-close-grip-bench-press',
  'دفع الترايسبس': 'triceps-pushdown',
  'تمديد الترايسبس العلوي': 'dumbbell-one-arm-triceps-extension',
  'مكبس الأرجل': 'leg-press',
  'تثني الأرجل': 'lying-leg-curls',
  'تمديد الأرجل': 'leg-extensions',
  'دفع الورك': 'barbell-hip-thrust',
  'الطعن': 'dumbbell-lunge',
  'الطعن المتحرك': 'dumbbell-walking-lunge',
  'صعود الدرج': 'dumbbell-step-up',
  'رفع السمانة': 'standing-calf-raises',
  'رفع السمانة واقفاً': 'standing-calf-raises',
  'رفع السمانة جالساً': 'seated-calf-raise',
  'الرفع الجانبي': 'dumbbell-lateral-raise',
  'الرفع الجانبي بالدمبل': 'dumbbell-lateral-raise',
  'سحب الوجه': 'cable-face-pull',
  'سحب الوجه بالكيبل': 'cable-face-pull',
  'فتح الكتف الخلفي': 'cable-reverse-fly',
  'الفتح العكسي': 'cable-reverse-fly',
  'فتح الدمبل': 'dumbbell-flyes',
  'هز الكتفين': 'barbell-shrug',
  'متسلق الجبال': 'mountain-climber',
  'البيربي': 'burpee',
  'البلانك': 'plank',
  'البلانك الجانبي': 'side-plank'
};

// Cache for API responses
const exerciseCache = new Map<string, ExerciseApiData>();

/**
 * Get exercise data from the free exercise database
 */
export const getExerciseData = async (exerciseName: string): Promise<ExerciseApiData | null> => {
  try {
    // Check cache first
    if (exerciseCache.has(exerciseName)) {
      return exerciseCache.get(exerciseName)!;
    }

    // Get the API ID for this exercise
    const exerciseId = EXERCISE_MAPPING[exerciseName];
    if (!exerciseId) {
      console.warn(`No mapping found for exercise: ${exerciseName}`);
      return null;
    }

    // Fetch exercise data
    const response = await fetch(`${BASE_URL}/exercises/${exerciseId}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ExerciseApiData = await response.json();
    
    // Transform image URLs to full URLs
    if (data.images) {
      data.images = data.images.map(img => `${BASE_URL}/exercises/${img}`);
    }

    // Cache the result
    exerciseCache.set(exerciseName, data);
    
    return data;
  } catch (error) {
    console.error(`Error fetching exercise data for ${exerciseName}:`, error);
    return null;
  }
};

/**
 * Get exercise image URL
 */
export const getExerciseImage = async (exerciseName: string): Promise<string | null> => {
  const exerciseData = await getExerciseData(exerciseName);
  return exerciseData?.images?.[0] || null;
};

/**
 * Get all exercise images
 */
export const getExerciseImages = async (exerciseName: string): Promise<string[]> => {
  const exerciseData = await getExerciseData(exerciseName);
  return exerciseData?.images || [];
};

/**
 * Preload exercise images for better performance
 */
export const preloadExerciseImages = async (exerciseNames: string[]): Promise<void> => {
  const promises = exerciseNames.map(name => getExerciseData(name));
  await Promise.allSettled(promises);
};

/**
 * Get fallback image for exercises without API data
 */
export const getFallbackExerciseImage = (exerciseName: string): string => {
  // Return a placeholder image from a reliable source
  return `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(exerciseName)}`;
};