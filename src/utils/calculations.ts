import { MacroResults, UserData } from '../types';

export const calculateMacros = (userData: UserData): MacroResults => {
  const { age, gender, height, weight, unitSystem, pregnancyStatus, bodyFatPercentage, activityLevel, goal, bmrFormula, macroDistribution, customMacros } = userData;

  // Convert imperial units to metric if needed
  let heightCm = height;
  let weightKg = weight;
  
  if (unitSystem === 'imperial') {
    // Convert inches to cm
    heightCm = height * 2.54;
    // Convert pounds to kg
    weightKg = weight * 0.453592;
  }

  // Step 1: Calculate BMR using selected formula
  let bmr: number;
  
  if (bmrFormula === 'harrisBenedict') {
    // Harris-Benedict Formula (1919)
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    }
  } else if (bmrFormula === 'katchMcArdle') {
    // Katch-McArdle Formula (2005) - requires body fat percentage
    if (bodyFatPercentage && bodyFatPercentage > 0) {
      const leanBodyMass = weightKg * (1 - bodyFatPercentage / 100);
      bmr = 370 + (21.6 * leanBodyMass);
    } else {
      // Fallback to Mifflin-St Jeor if no body fat percentage provided
      bmr = gender === 'male' 
        ? (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5
        : (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
  } else {
    // Mifflin-St Jeor Formula (1990) - Default
    if (gender === 'male') {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
  }

  // Pregnancy and breastfeeding adjustments for females
  if (gender === 'female' && pregnancyStatus) {
    if (pregnancyStatus === 'pregnant') {
      // Add 300 calories for pregnancy (second and third trimester)
      bmr += 300;
    } else if (pregnancyStatus === 'breastfeeding') {
      // Add 500 calories for breastfeeding
      bmr += 500;
    }
  }

  // Step 2: Calculate TDEE with enhanced activity levels
  const activityMultipliers = {
    veryLow: 1.2,    // Very sedentary - desk job, no exercise
    low: 1.375,      // Lightly active - light exercise 1-3 days/week
    moderate: 1.55,  // Moderately active - moderate exercise 3-5 days/week
    high: 1.725,     // Very active - hard exercise 6-7 days/week
    veryHigh: 1.9    // Extremely active - very hard exercise, physical job
  };
  const tdee = bmr * activityMultipliers[activityLevel];

  // Step 3: Calculate Goal TDEE based on specific weight goals
  let goalTdee: number;
  const caloriesPerKgFat = 7700; // Approximate calories in 1 kg of fat
  
  switch (goal) {
    case 'slowWeightLoss025':
      goalTdee = tdee - (0.25 * caloriesPerKgFat / 7); // -275 calories/day
      break;
    case 'slowWeightLoss05':
      goalTdee = tdee - (0.5 * caloriesPerKgFat / 7); // -550 calories/day
      break;
    case 'fastWeightLoss1':
      goalTdee = tdee - (1 * caloriesPerKgFat / 7); // -1100 calories/day
      break;
    case 'slowWeightGain025':
      goalTdee = tdee + (0.25 * caloriesPerKgFat / 7); // +275 calories/day
      break;
    case 'moderateWeightGain05':
      goalTdee = tdee + (0.5 * caloriesPerKgFat / 7); // +550 calories/day
      break;
    case 'fastWeightGain1':
      goalTdee = tdee + (1 * caloriesPerKgFat / 7); // +1100 calories/day
      break;
    default: // maintain
      goalTdee = tdee;
  }

  // Step 4: Calculate Macro Distribution
  let proteinCalories: number;
  let fatCalories: number;
  let carbCalories: number;
  let proteinGrams: number;
  let fatGrams: number;
  let carbGrams: number;

  if (macroDistribution === 'custom' && customMacros) {
    // Custom macro distribution
    const proteinPercent = customMacros.protein / 100;
    const fatPercent = customMacros.fat / 100;
    const carbPercent = customMacros.carbs / 100;

    proteinCalories = goalTdee * proteinPercent;
    fatCalories = goalTdee * fatPercent;
    carbCalories = goalTdee * carbPercent;
    
    proteinGrams = proteinCalories / 4;
    fatGrams = fatCalories / 9;
    carbGrams = carbCalories / 4;
  } else {
    // Predefined macro distributions
    let proteinPercent: number;
    let fatPercent: number;
    let carbPercent: number;

    switch (macroDistribution) {
      case 'cutting':
        // For cutting/fat loss: 50% protein, 20% fat, 30% carbs
        proteinPercent = 0.50;
        fatPercent = 0.20;
        carbPercent = 0.30;
        break;
      case 'bulking':
        // For bulking/muscle gain: 30% protein, 20% fat, 50% carbs
        proteinPercent = 0.30;
        fatPercent = 0.20;
        carbPercent = 0.50;
        break;
      default: // balanced
        // Balanced: 40% protein, 20% fat, 40% carbs
        proteinPercent = 0.40;
        fatPercent = 0.20;
        carbPercent = 0.40;
    }

    proteinCalories = goalTdee * proteinPercent;
    fatCalories = goalTdee * fatPercent;
    carbCalories = goalTdee * carbPercent;
    
    proteinGrams = proteinCalories / 4;
    fatGrams = fatCalories / 9;
    carbGrams = carbCalories / 4;
  }

  // Step 5: Calculate Water Needs
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
  const { age, gender, weight, unitSystem, activityLevel } = userData;

  // Convert weight to kg if needed
  let weightKg = weight;
  if (unitSystem === 'imperial') {
    weightKg = weight * 0.453592; // Convert pounds to kg
  }

  // Base water intake calculation
  // General formula: 35ml per kg of body weight
  let baseWaterMl = weightKg * 35;

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
    veryLow: 1.0,     // No additional water needed
    low: 1.1,         // +10% for light activity
    moderate: 1.2,    // +20% for moderate activity
    high: 1.3,        // +30% for high activity
    veryHigh: 1.4     // +40% for very high activity
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