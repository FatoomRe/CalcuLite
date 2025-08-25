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

// Exercise name mapping to API IDs (using actual available exercise IDs from the database)
const EXERCISE_MAPPING: Record<string, string> = {
  // English mappings (using actual available exercise IDs)
  'Squats': 'Barbell_Full_Squat',
  'Back Squats': 'Barbell_Full_Squat',
  'Front Squats': 'Front_Squat_Clean_Grip',
  'Goblet Squats': 'Goblet_Squat',
  'Bulgarian Split Squats': 'Split_Squat_with_Dumbbells',
  'Push-ups': 'Pushups',
  'Incline Push-ups': 'Incline_Push-Up',
  'Diamond Push-ups': 'Diamond_Push-Up',
  'Bench Press': 'Barbell_Bench_Press_-_Medium_Grip',
  'Barbell Bench Press': 'Barbell_Bench_Press_-_Medium_Grip',
  'Incline Barbell Press': 'Incline_Barbell_Press',
  'Incline Dumbbell Press': 'Incline_Dumbbell_Press',
  'Dumbbell Press': 'Dumbbell_Bench_Press',
  'Overhead Press': 'Barbell_Shoulder_Press',
  'Dumbbell Shoulder Press': 'Standing_Dumbbell_Press',
  'Deadlifts': 'Barbell_Deadlift',
  'Conventional Deadlifts': 'Barbell_Deadlift',
  'Romanian Deadlifts': 'Romanian_Deadlift',
  'Stiff Leg Deadlifts': 'Stiff-Leg_Deadlift',
  'Pull-ups': 'Pullups',
  'Wide-Grip Pull-ups': 'Wide-Grip_Pullup',
  'Weighted Pull-ups': 'Pullups',
  'Lat Pulldowns': 'Wide-Grip_Lat_Pulldown',
  'Barbell Rows': 'Bent_Over_Barbell_Row',
  'Bent-over Rows': 'Bent_Over_Barbell_Row',
  'T-Bar Rows': 'T-Bar_Row',
  'Cable Rows': 'Seated_Cable_Rows',
  'Seated Cable Rows': 'Seated_Cable_Rows',
  'Barbell Curls': 'Barbell_Curl',
  'Hammer Curls': 'Hammer_Curls',
  'Preacher Curls': 'Preacher_Curl',
  'Cable Curls': 'Cable_Curl',
  'Tricep Dips': 'Dips_-_Triceps_Version',
  'Dips': 'Dips_-_Triceps_Version',
  'Weighted Dips': 'Weighted_Tricep_Dips',
  'Close-Grip Bench Press': 'Close-Grip_Barbell_Bench_Press',
  'Close-Grip Bench': 'Close-Grip_Barbell_Bench_Press',
  'Tricep Pushdowns': 'Triceps_Pushdown',
  'Overhead Tricep Extension': 'Standing_One-Arm_Dumbbell_Triceps_Extension',
  'Leg Press': 'Leg_Press',
  'Leg Curls': 'Lying_Leg_Curls',
  'Leg Extensions': 'Leg_Extensions',
  'Hip Thrusts': 'Barbell_Hip_Thrust',
  'Lunges': 'Dumbbell_Lunges',
  'Walking Lunges': 'Dumbbell_Lunges',
  'Step-ups': 'Dumbbell_Step_Ups',
  'Calf Raises': 'Standing_Calf_Raises',
  'Standing Calf Raises': 'Standing_Calf_Raises',
  'Seated Calf Raises': 'Seated_Calf_Raise',
  'Lateral Raises': 'Side_Lateral_Raise',
  'Dumbbell Lateral Raises': 'Side_Lateral_Raise',
  'Face Pulls': 'Cable_Face_Pull',
  'Cable Face Pulls': 'Cable_Face_Pull',
  'Rear Delt Flyes': 'Cable_Reverse_Fly',
  'Reverse Flyes': 'Cable_Reverse_Fly',
  'Dumbbell Flyes': 'Dumbbell_Flyes',
  'Shrugs': 'Barbell_Shrug',
  'Mountain Climbers': 'Mountain_Climbers',
  'Burpees': 'Butt-Ups',
  'Plank': 'Plank',
  'Side Plank': 'Plank',
  
  // Additional missing exercises
  'Single-arm Rows': 'Single-Arm_Dumbbell_Row',
  'Single-Arm Dumbbell Row': 'Single-Arm_Dumbbell_Row',
  'Cable Lateral Raises': 'Side_Lateral_Raise',
  'Pull-ups/Lat Pulldowns': 'Wide-Grip_Lat_Pulldown',
  'Pull-ups/Assisted': 'Pullups',
  'Bicep Curls': 'Barbell_Curl',
  
  // Arabic mappings (using the same corrected IDs)
  'القرفصاء': 'Barbell_Full_Squat',
  'القرفصاء الخلفي': 'Barbell_Full_Squat',
  'القرفصاء الأمامي': 'Front_Squat_Clean_Grip',
  'القرفصاء بالدمبل': 'Goblet_Squat',
  'القرفصاء البلغاري': 'Split_Squat_with_Dumbbells',
  'الضغط': 'Pushups',
  'الضغط المائل': 'Incline_Push-Up',
  'الضغط الماسي': 'Diamond_Push-Up',
  'ضغط البنش': 'Barbell_Bench_Press_-_Medium_Grip',
  'ضغط البار': 'Barbell_Bench_Press_-_Medium_Grip',
  'الضغط المائل بالبار': 'Incline_Barbell_Press',
  'الضغط المائل بالدمبل': 'Incline_Dumbbell_Press',
  'ضغط الدمبل': 'Dumbbell_Bench_Press',
  'الضغط العلوي': 'Barbell_Shoulder_Press',
  'ضغط الكتف بالدمبل': 'Standing_Dumbbell_Press',
  'الرفعة الميتة': 'Barbell_Deadlift',
  'الرفعة الميتة التقليدية': 'Barbell_Deadlift',
  'الرفعة الرومانية': 'Romanian_Deadlift',
  'الرفعة الميتة بأرجل مستقيمة': 'Stiff-Leg_Deadlift',
  'العقلة': 'Pullups',
  'العقلة واسعة': 'Wide-Grip_Pullup',
  'العقلة بوزن': 'Pullups',
  'السحب العلوي': 'Wide-Grip_Lat_Pulldown',
  'تجديف البار': 'Bent_Over_Barbell_Row',
  'التجديف المنحني': 'Bent_Over_Barbell_Row',
  'تجديف T-Bar': 'T-Bar_Row',
  'التجديف بالكيبل': 'Seated_Cable_Rows',
  'تثني البار': 'Barbell_Curl',
  'التثني المطرقي': 'Hammer_Curls',
  'تثني الواعظ': 'Preacher_Curl',
  'تثني الكيبل': 'Cable_Curl',
  'تراجع الترايسبس': 'Dips_-_Triceps_Version',
  'التراجع': 'Dips_-_Triceps_Version',
  'التراجع بوزن': 'Weighted_Tricep_Dips',
  'ضغط البنش ضيق': 'Close-Grip_Barbell_Bench_Press',
  'البنش ضيق': 'Close-Grip_Barbell_Bench_Press',
  'دفع الترايسبس': 'Triceps_Pushdown',
  'تمديد الترايسبس العلوي': 'Standing_One-Arm_Dumbbell_Triceps_Extension',
  'مكبس الأرجل': 'Leg_Press',
  'تثني الأرجل': 'Lying_Leg_Curls',
  'تمديد الأرجل': 'Leg_Extensions',
  'دفع الورك': 'Barbell_Hip_Thrust',
  'الطعن': 'Dumbbell_Lunges',
  'الطعن المتحرك': 'Dumbbell_Lunges',
  'صعود الدرج': 'Dumbbell_Step_Ups',
  'رفع السمانة': 'Standing_Calf_Raises',
  'رفع السمانة واقفاً': 'Standing_Calf_Raises',
  'رفع السمانة جالساً': 'Seated_Calf_Raise',
  'الرفع الجانبي': 'Side_Lateral_Raise',
  'الرفع الجانبي بالدمبل': 'Side_Lateral_Raise',
  'سحب الوجه': 'Cable_Face_Pull',
  'سحب الوجه بالكيبل': 'Cable_Face_Pull',
  'فتح الكتف الخلفي': 'Cable_Reverse_Fly',
  'الفتح العكسي': 'Cable_Reverse_Fly',
  'فتح الدمبل': 'Dumbbell_Flyes',
  'هز الكتفين': 'Barbell_Shrug',
  'متسلق الجبال': 'Mountain_Climbers',
  'البيربي': 'Butt-Ups',
  'البلانك': 'Plank',
  'البلانك الجانبي': 'Plank',
  
  // Additional mappings for exercises with compound names
  'العقلة/السحب العلوي': 'Wide-Grip_Lat_Pulldown',
  'العقلة / السحب العلوي': 'Wide-Grip_Lat_Pulldown',
  'العقلة/المساعدة': 'Pullups',
  'التجديف بذراع واحدة': 'Single-Arm_Dumbbell_Row',
  'تثني البايسبس': 'Barbell_Curl'
};

// Alternative mappings for exercises that might not exist (using correct IDs)
const ALTERNATIVE_MAPPINGS: Record<string, string[]> = {
  'Barbell_Shoulder_Press': ['Standing_Dumbbell_Press', 'Standing_Military_Press'],
  'Cable_Face_Pull': ['Cable_Reverse_Fly', 'Side_Lateral_Raise'],
  'Weighted_Tricep_Dips': ['Dips_-_Triceps_Version', 'Triceps_Pushdown'],
  'Romanian_Deadlift': ['Barbell_Deadlift', 'Stiff-Leg_Deadlift'],
  'Wide-Grip_Pullup': ['Pullups', 'Wide-Grip_Lat_Pulldown'],
  'Dumbbell_Walking_Lunge': ['Lunge', 'Dumbbell_Step_Ups'],
  'Single-Arm_Dumbbell_Row': ['Bent_Over_Barbell_Row', 'Seated_Cable_Rows'],
  'Pullups': ['Wide-Grip_Lat_Pulldown', 'Lat_Pulldown'],
  'Pushups': ['Push-Up', 'Incline_Push-Up'],
  'Barbell_Curl': ['Standing_Barbell_Curl', 'Hammer_Curls'],
  'Dumbbell_Lunges': ['Barbell_Lunge', 'Bodyweight_Walking_Lunge'],
  'Mountain_Climbers': ['Plank', 'Exercise_Ball_Crunch'],
  'Butt-Ups': ['Plank', 'Crunches'],
  'Plank': ['Exercise_Ball_Crunch', 'Crunches'],
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

    console.log(`Fetching exercise data for: ${exerciseName} -> ${exerciseId}`);

    // Try primary mapping first
    let data = await tryFetchExercise(exerciseId);
    
    // If primary fails, try alternatives
    if (!data && ALTERNATIVE_MAPPINGS[exerciseId]) {
      console.log(`Primary mapping failed for ${exerciseName}, trying alternatives...`);
      for (const altId of ALTERNATIVE_MAPPINGS[exerciseId]) {
        data = await tryFetchExercise(altId);
        if (data) {
          console.info(`Used alternative mapping for ${exerciseName}: ${altId} instead of ${exerciseId}`);
          break;
        }
      }
    }

    if (data) {
      // Cache the result
      exerciseCache.set(exerciseName, data);
      console.log(`Successfully loaded exercise data for: ${exerciseName}`);
      return data;
    }

    console.warn(`Could not load exercise data for: ${exerciseName}`);
    return null;
  } catch (error) {
    console.warn(`Unable to fetch exercise data for ${exerciseName}:`, error instanceof Error ? error.message : error);
    return null;
  }
};

/**
 * Helper function to try fetching exercise data
 */
const tryFetchExercise = async (exerciseId: string): Promise<ExerciseApiData | null> => {
  try {
    // Fetch exercise data with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${BASE_URL}/exercises/${exerciseId}.json`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      return null;
    }

    const data: ExerciseApiData = await response.json();
    
    // Transform image URLs to full URLs and validate them
    if (data.images && Array.isArray(data.images)) {
      data.images = data.images
        .map(img => {
          // Handle different image path formats
          if (img.startsWith('http')) {
            return img;
          } else if (img.startsWith('/')) {
            return `${BASE_URL}${img}`;
          } else {
            return `${BASE_URL}/exercises/${img}`;
          }
        })
        .filter(img => img && typeof img === 'string');
    } else {
      data.images = [];
    }

    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn(`Request timeout for exercise: ${exerciseId}`);
    }
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
  try {
    const exerciseData = await getExerciseData(exerciseName);
    return exerciseData?.images || [];
  } catch (error) {
    console.warn(`Error getting exercise images for ${exerciseName}:`, error instanceof Error ? error.message : error);
    return [];
  }
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
  // Create a simple, reliable fallback using a data URL with SVG
  const svgContent = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#22c55e"/>
      <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="20" font-family="Arial, sans-serif">
        ${exerciseName.length > 30 ? exerciseName.substring(0, 27) + '...' : exerciseName}
      </text>
      <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16" font-family="Arial, sans-serif">
        Exercise Image
      </text>
      <circle cx="200" cy="150" r="100" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
      <circle cx="200" cy="150" r="60" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
    </svg>
  `;
  
  const encodedSvg = encodeURIComponent(svgContent);
  return `data:image/svg+xml,${encodedSvg}`;
};