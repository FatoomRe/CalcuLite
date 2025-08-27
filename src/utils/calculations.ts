import { MacroResults, UserData } from '../types';

export const calculateMacros = (userData: UserData): MacroResults => {
  const { age, gender, height, weight, activityLevel, goal } = userData;

  // Step 1: Calculate BMR using Mifflin-St Jeor formula (exact implementation)
  let bmr: number;
  if (gender === 'male') {
    // Men: BMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) + 5
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    // Women: BMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) – 161
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // Step 2: Calculate TDEE (Total Daily Energy Expenditure)
  // TDEE = BMR × PAL (Physical Activity Level)
  const activityMultipliers = {
    sedentary: 1.4,    // Sedentary
    moderate: 1.6,     // Moderately Active  
    active: 1.8        // Highly Active
  };
  const tdee = bmr * activityMultipliers[activityLevel];

  // Step 3: Calculate Goal TDEE
  // Build Muscle: Goal TDEE = TDEE + 500
  // Lose Fat + Build Muscle: Goal TDEE = TDEE - 500
  // Cut (Lose Fat): Goal TDEE = TDEE - 750
  // Maintain Weight: Goal TDEE = TDEE
  // Body Recomposition: Goal TDEE = TDEE - 200
  let goalTdee: number;
  if (goal === 'build') {
    goalTdee = tdee + 500; // +500 kcal for muscle gain
  } else if (goal === 'lose') {
    goalTdee = tdee - 500; // -500 kcal for fat loss + muscle gain
  } else if (goal === 'cut') {
    goalTdee = tdee - 750; // -750 kcal for aggressive fat loss
  } else if (goal === 'maintain') {
    goalTdee = tdee; // Maintenance calories
  } else { // recomp
    goalTdee = tdee - 200; // -200 kcal for body recomposition
  }

  // Step 4: Calculate Protein Needs
  // Protein (g) = weight in kg × 1.6
  const proteinGrams = weight * 1.6;
  // Protein calories = Protein (g) × 4
  const proteinCalories = proteinGrams * 4;

  // Step 5: Calculate Fat Needs
  // Fat needs vary by goal
  let fatPercentage: number;
  if (goal === 'build') {
    fatPercentage = 0.30; // 30% for muscle building
  } else if (goal === 'cut') {
    fatPercentage = 0.25; // 25% for aggressive fat loss
  } else if (goal === 'maintain') {
    fatPercentage = 0.30; // 30% for maintenance
  } else { // lose
    fatPercentage = 0.35; // 35% for fat loss + muscle gain
  }
  
  const fatCalories = goalTdee * fatPercentage;
  // Fat (g) = Fat calories ÷ 9
  const fatGrams = fatCalories / 9;

  // Step 6: Calculate Carbohydrate Needs
  // Carb calories = Goal TDEE – (Protein calories + Fat calories)
  const carbCalories = goalTdee - (proteinCalories + fatCalories);
  // Carbs (g) = Carb calories ÷ 4
  const carbGrams = carbCalories / 4;

  // Step 7: Calculate Water Needs
  const waterIntake = calculateWaterIntake(userData);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    goalTdee: Math.round(goalTdee),
    protein: {
      grams: Math.round(proteinGrams),
      calories: Math.round(proteinCalories),
      percentage: Math.round((proteinCalories / goalTdee) * 100)
    },
    fat: {
      grams: Math.round(fatGrams),
      calories: Math.round(fatCalories),
      percentage: Math.round((fatCalories / goalTdee) * 100)
    },
    carbs: {
      grams: Math.round(carbGrams),
      calories: Math.round(carbCalories),
      percentage: Math.round((carbCalories / goalTdee) * 100)
    },
    water: waterIntake
  };
};

export const calculateWaterIntake = (userData: UserData): { liters: number; milliliters: number } => {
  const { age, gender, weight, activityLevel } = userData;

  // Base water intake calculation
  // General formula: 35ml per kg of body weight
  let baseWaterMl = weight * 35;

  // Gender adjustments
  if (gender === 'male') {
    // Men typically need slightly more water due to higher muscle mass
    baseWaterMl *= 1.1;
  } else {
    // Women's base requirement (no additional multiplier needed)
    baseWaterMl *= 1.0;
  }

  // Age adjustments
  if (age >= 65) {
    // Older adults need more water due to decreased kidney function
    baseWaterMl *= 1.1;
  } else if (age >= 50) {
    // Middle-aged adults need slightly more
    baseWaterMl *= 1.05;
  }

  // Activity level adjustments
  const activityMultipliers = {
    sedentary: 1.0,     // No additional water needed
    moderate: 1.15,     // +15% for moderate activity
    active: 1.3         // +30% for high activity
  };
  
  baseWaterMl *= activityMultipliers[activityLevel];

  // Convert to liters and round appropriately
  const liters = Math.round((baseWaterMl / 1000) * 10) / 10; // Round to 1 decimal place
  const milliliters = Math.round(baseWaterMl);

  return {
    liters,
    milliliters
  };
};