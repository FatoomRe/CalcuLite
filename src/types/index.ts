export interface UserData {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unitSystem: 'metric' | 'imperial';
  pregnancyStatus?: 'none' | 'pregnant' | 'breastfeeding';
  bodyFatPercentage?: number;
  activityLevel: 'veryLow' | 'low' | 'moderate' | 'high' | 'veryHigh';
  goal: 'maintain' | 'slowWeightLoss025' | 'slowWeightLoss05' | 'fastWeightLoss1' | 'slowWeightGain025' | 'moderateWeightGain05' | 'fastWeightGain1';
  bmrFormula: 'harrisBenedict' | 'mifflinStJeor' | 'katchMcArdle';
  macroDistribution?: 'balanced' | 'cutting' | 'bulking' | 'custom';
  customMacros?: {
    protein: number;
    fat: number;
    carbs: number;
  };
}

export interface FormData {
  age: string;
  gender: 'male' | 'female';
  height: string;
  weight: string;
  unitSystem: 'metric' | 'imperial';
  pregnancyStatus: 'none' | 'pregnant' | 'breastfeeding';
  bodyFatPercentage: string;
  activityLevel: 'veryLow' | 'low' | 'moderate' | 'high' | 'veryHigh';
  goal: 'maintain' | 'slowWeightLoss025' | 'slowWeightLoss05' | 'fastWeightLoss1' | 'slowWeightGain025' | 'moderateWeightGain05' | 'fastWeightGain1';
  bmrFormula: 'harrisBenedict' | 'mifflinStJeor' | 'katchMcArdle';
  macroDistribution: 'balanced' | 'cutting' | 'bulking' | 'custom';
  customMacros: {
    protein: string;
    fat: string;
    carbs: string;
  };
}

export interface MacroResults {
  bmr: number;
  tdee: number;
  goalTdee: number;
  protein: { grams: number; calories: number; percentage: number };
  fat: { grams: number; calories: number; percentage: number };
  carbs: { grams: number; calories: number; percentage: number };
  water: { liters: number; milliliters: number };
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  instructions: string;
}

export interface WorkoutDay {
  name: string;
  focus: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: Exercise[];
}

export interface WorkoutPlan {
  name: string;
  description: string;
  days: WorkoutDay[];
  restDays: number;
}

export type Language = 'en' | 'ar';

export type Theme = 'light' | 'dark';