export interface UserData {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose' | 'cut' | 'maintain' | 'recomp';
}

export interface FormData {
  age: string;
  gender: 'male' | 'female';
  height: string;
  weight: string;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose' | 'cut' | 'maintain' | 'recomp';
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