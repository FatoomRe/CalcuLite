# 📚 CalcuLite - Technical Documentation

Live Demo: https://fatoomre.github.io/CalcuLite/

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Component Documentation](#component-documentation)
3. [API Reference](#api-reference)
4. [Internationalization](#internationalization)
5. [Theming System](#theming-system)
6. [Calculation Engine](#calculation-engine)
7. [Testing Guide](#testing-guide)
8. [Deployment](#deployment)

## Architecture Overview

The CalcuLite follows a modern React architecture with TypeScript for type safety and Tailwind CSS for styling.

### Core Principles
- **Component-based**: Modular, reusable React components
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized renders and lazy loading

### Technology Stack
```
Frontend:
├── React 18.x          # UI Framework
├── TypeScript 5.x      # Type Safety
├── Tailwind CSS 3.x    # Styling
├── Vite               # Build Tool
└── Lucide React       # Icons

Development:
├── ESLint             # Code Linting
├── PostCSS            # CSS Processing
└── Git                # Version Control
```

## Component Documentation

### Core Components

#### `CalculatorForm.tsx`
**Purpose**: Main form for user input (age, weight, height, etc.)

**Props**:
```typescript
interface CalculatorFormProps {
  onCalculate: (data: UserData) => void;
  language: Language;
}
```

**State Management**:
```typescript
const [formData, setFormData] = useState<UserData>({
  age: '',
  gender: 'male',
  height: '',
  weight: '',
  activityLevel: 'moderate',
  goal: 'build'
});
```

**Validation Rules**:
- Age: 15-100 years
- Height: 120-250 cm
- Weight: 30-300 kg

#### `ResultsDisplay.tsx`
**Purpose**: Shows calculated results with export options

**Props**:
```typescript
interface ResultsDisplayProps {
  results: MacroResults;
  language: Language;
  onDownloadPDF: () => void;
  onPrint: () => void;
}
```

**Features**:
- BMR/TDEE/Goal calories display
- Macro breakdown visualization
- PDF export functionality
- Print-friendly layout

#### `MacroChart.tsx`
**Purpose**: Visual chart showing macro distribution

**Props**:
```typescript
interface MacroChartProps {
  results: MacroResults;
  language: Language;
}
```

**Chart Configuration**:
- Responsive canvas sizing
- Color-coded macro segments
- Animated transitions
- Touch/mouse interactions

#### `WorkoutPlan.tsx`
**Purpose**: Displays multiple workout split programs with exercise database integration

**Props**:
```typescript
interface WorkoutPlanProps {
  language: Language;
}
```

**Workout Structure**:
```typescript
interface WorkoutDay {
  name: string;
  exercises: Exercise[];
}

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  instructions: string;
  id: string; // Maps to exercise database
}
```

**Features**:
- Multiple workout programs (3-day, 4-day, 5-day, 6-day)
- Difficulty levels (Beginner, Intermediate, Advanced)
- Dynamic exercise loading from external API
- Fallback exercise images

#### `ExerciseCard.tsx`
**Purpose**: Individual exercise display with images and instructions

**Props**:
```typescript
interface ExerciseCardProps {
  exercise: Exercise;
  language: Language;
}
```

**Features**:
- Exercise illustration loading
- Error handling with fallback images
- Responsive design
- Proper form instructions

### Utility Components

#### `Header.tsx`
- Logo and title display
- Language toggle button
- Theme toggle button
- Responsive navigation

## API Reference

### Calculation Functions

#### `calculateMacros(userData: UserData): MacroResults`
**Description**: Main calculation function for BMR, TDEE, and macros

**Parameters**:
```typescript
interface UserData {
  age: string;
  gender: 'male' | 'female';
  height: string;
  weight: string;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose';
}
```

**Returns**:
```typescript
interface MacroResults {
  bmr: number;
  tdee: number;
  goalTdee: number;
  protein: MacroNutrient;
  carbs: MacroNutrient;
  fat: MacroNutrient;
  water: WaterIntake;
}

interface MacroNutrient {
  grams: number;
  calories: number;
  percentage: number;
}

interface WaterIntake {
  liters: number;
  milliliters: number;
}

interface MacroNutrient {
  grams: number;
  calories: number;
  percentage: number;
}
```

#### `calculateBMR(age: number, gender: string, height: number, weight: number): number`
**Description**: Calculates Basal Metabolic Rate using Mifflin-St Jeor equation

**Formula**:
```
Men: BMR = 10 × weight + 6.25 × height - 5 × age + 5
Women: BMR = 10 × weight + 6.25 × height - 5 × age - 161
```

#### `calculateTDEE(bmr: number, activityLevel: string): number`
**Description**: Calculates Total Daily Energy Expenditure

**Activity Multipliers**:
- Sedentary: 1.2
- Moderate: 1.55
- Active: 1.9

#### `calculateWaterIntake(userData: UserData): WaterIntake`
**Description**: Calculates daily water intake requirements based on individual factors

**Algorithm**:
```
Base water = weight (kg) × 35ml

Gender adjustment:
- Male: Base × 1.1
- Female: Base × 1.0

Age adjustment:
- 65+ years: × 1.1
- 50-64 years: × 1.05
- Under 50: × 1.0

Activity adjustment:
- Sedentary: × 1.0
- Moderate: × 1.15
- Active: × 1.3

Final water = Base × Gender × Age × Activity
```

**Example**:
```typescript
const waterNeeds = calculateWaterIntake({
  age: 30,
  gender: 'male',
  weight: 75,
  activityLevel: 'moderate'
});
// Returns: { liters: 3.0, milliliters: 3019 }
```

### PDF Export Functions

#### `generatePDF(results: MacroResults, language: Language): void`
**Description**: Generates and downloads PDF report

**Features**:
- Multi-page layout
- Charts and graphs
- Bilingual support
- Custom branding

### Exercise API Functions

#### `fetchExerciseData(exerciseId: string): Promise<ExerciseData | null>`
**Description**: Fetches exercise data from free-exercise-db API

**Parameters**:
- `exerciseId`: Exercise identifier mapped from workout plans

**Returns**:
```typescript
interface ExerciseData {
  name: string;
  instructions: string[];
  category: string;
  images: string[];
}
```

**Error Handling**:
- 5-second timeout for API requests
- Automatic fallback to alternative exercises
- Local SVG fallback images
- Request cancellation support

#### `getFallbackExerciseImage(exerciseName: string): string`
**Description**: Generates SVG-based fallback image for exercises

**Features**:
- Consistent styling across exercises
- No external dependencies
- Embedded SVG data URLs
- Responsive design

#### `getExerciseImageUrl(exerciseId: string): Promise<string>`
**Description**: Gets primary or fallback image URL for exercise

**Fallback Chain**:
1. Primary API image
2. Alternative exercise mapping
3. Generated SVG fallback

## Internationalization

### Translation System

The app uses a centralized translation system in `src/data/translations.ts`:

```typescript
export const translations = {
  en: {
    title: "CalcuLite",
    // ... English translations
  },
  ar: {
    title: "CalcuLite",
    // ... Arabic translations
  }
};
```

### RTL Support

Arabic language includes full RTL (Right-to-Left) support:

```css
/* Automatic RTL classes */
.rtl\:space-x-reverse > * + * {
  margin-right: 0.5rem;
  margin-left: 0;
}

.rtl\:text-right {
  text-align: right;
}
```

### Adding New Languages

1. Add translations to `translations.ts`
2. Update `Language` type in `types/index.ts`
3. Add language option to header component
4. Test RTL layout if applicable

## Theming System

### Color Scheme

The app uses a green-based color palette:

```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0fdf4',   // Lightest green
    500: '#22c55e',  // Main green
    900: '#14532d',  // Darkest green
  },
  accent: {
    50: '#ecfdf5',   // Lightest emerald
    500: '#10b981',  // Main emerald
    900: '#064e3b',  // Darkest emerald
  }
}
```

### Dark Mode Implementation

Uses Tailwind's dark mode with class strategy:

```typescript
// Theme hook
const [theme, setTheme] = useState<'light' | 'dark'>('light');

// Toggle function
const toggleTheme = () => {
  setTheme(prev => prev === 'light' ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark');
};
```

### Custom CSS Variables

```css
:root {
  --primary-color: #22c55e;
  --accent-color: #10b981;
  --background-gradient: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%);
}

[data-theme="dark"] {
  --background-gradient: linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%);
}
```

## Calculation Engine

### BMR Formulas

The app supports multiple BMR calculation methods:

#### Mifflin-St Jeor Equation (Default)
```typescript
const calculateBMR = (weight: number, height: number, age: number, gender: string): number => {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender === 'male' ? base + 5 : base - 161;
};
```

#### Harris-Benedict Equation (Alternative)
```typescript
const calculateBMRHarris = (weight: number, height: number, age: number, gender: string): number => {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
};
```

### Macro Distribution Logic

```typescript
const getMacroDistribution = (goal: string) => {
  switch (goal) {
    case 'build':
      return { protein: 0.30, carbs: 0.40, fat: 0.30 };
    case 'lose':
      return { protein: 0.35, carbs: 0.30, fat: 0.35 };
    default:
      return { protein: 0.30, carbs: 0.40, fat: 0.30 };
  }
};
```

### Calorie Adjustment

```typescript
const getGoalCalories = (tdee: number, goal: string): number => {
  switch (goal) {
    case 'build':
      return Math.round(tdee * 1.1); // +10% for muscle gain
    case 'lose':
      return Math.round(tdee * 0.85); // -15% for fat loss
    default:
      return tdee;
  }
};
```

### 💧 Water Intake Calculation

The water intake calculator uses a comprehensive algorithm that considers multiple physiological factors:

#### Base Calculation
```typescript
const calculateWaterIntake = (userData: UserData): WaterIntake => {
  const { age, gender, weight, activityLevel } = userData;
  
  // Base: 35ml per kg of body weight (WHO recommendation)
  let baseWaterMl = weight * 35;
  
  // Gender adjustments for muscle mass differences
  baseWaterMl *= gender === 'male' ? 1.1 : 1.0;
  
  // Age-based adjustments for metabolic changes
  if (age >= 65) baseWaterMl *= 1.1;      // +10% for elderly
  else if (age >= 50) baseWaterMl *= 1.05; // +5% for middle-aged
  
  // Activity level adjustments for sweat loss
  const activityMultipliers = {
    sedentary: 1.0,   // No additional water
    moderate: 1.15,   // +15% for moderate exercise
    active: 1.3       // +30% for intense training
  };
  
  baseWaterMl *= activityMultipliers[activityLevel];
  
  return {
    liters: Math.round((baseWaterMl / 1000) * 10) / 10,
    milliliters: Math.round(baseWaterMl)
  };
};
```

#### Scientific Rationale

**Base Formula (35ml/kg)**:
- Based on WHO/EFSA recommendations
- Accounts for basic metabolic needs
- Suitable for temperate climates

**Gender Adjustments**:
- Men typically have 10-15% higher muscle mass
- Muscle tissue requires more hydration than fat tissue
- Accounts for differences in metabolic water production

**Age Considerations**:
- Kidney function declines with age (≈1% per year after 30)
- Reduced thirst sensation in elderly
- Changes in body composition and hormone levels

**Activity Multipliers**:
- Based on ACSM exercise guidelines
- Accounts for electrolyte loss through sweat
- Considers post-exercise recovery needs

## Testing Guide

### Unit Testing Setup

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Component Testing

```typescript
// Example test for CalculatorForm
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorForm } from '../components/CalculatorForm';

test('should calculate BMR correctly', () => {
  const mockOnCalculate = jest.fn();
  
  render(<CalculatorForm onCalculate={mockOnCalculate} language="en" />);
  
  // Fill form inputs
  fireEvent.change(screen.getByLabelText('Age'), { target: { value: '25' } });
  fireEvent.change(screen.getByLabelText('Weight'), { target: { value: '70' } });
  fireEvent.change(screen.getByLabelText('Height'), { target: { value: '175' } });
  
  // Submit form
  fireEvent.click(screen.getByText('Calculate My Plan'));
  
  expect(mockOnCalculate).toHaveBeenCalledWith(
    expect.objectContaining({
      age: '25',
      weight: '70',
      height: '175'
    })
  );
});
```

### Calculation Testing

```typescript
// Test calculation accuracy
import { calculateBMR, calculateTDEE } from '../utils/calculations';

test('BMR calculation for male', () => {
  const bmr = calculateBMR(25, 'male', 175, 70);
  expect(bmr).toBeCloseTo(1673, 0);
});

test('TDEE calculation for moderate activity', () => {
  const tdee = calculateTDEE(1673, 'moderate');
  expect(tdee).toBeCloseTo(2593, 0);
});
```

### E2E Testing

```typescript
// Cypress example
describe('CalcuLite', () => {
  it('should complete full calculation flow', () => {
    cy.visit('/');
    
    // Fill form
    cy.get('[data-testid="age-input"]').type('25');
    cy.get('[data-testid="weight-input"]').type('70');
    cy.get('[data-testid="height-input"]').type('175');
    
    // Submit and verify results
    cy.get('[data-testid="calculate-button"]').click();
    cy.get('[data-testid="bmr-result"]').should('contain', '1,673');
  });
});
```

## Deployment

### Build Process

```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

### Environment Configuration

Create environment-specific files:

```bash
# .env.production
VITE_APP_ENV=production
VITE_API_URL=https://api.yourapp.com
VITE_ANALYTICS_ID=your-analytics-id
```

### Netlify Deployment

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Deployment

```json
{
  "name": "calories-calculator",
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

### Performance Optimization

```typescript
// Code splitting
const WorkoutPlan = lazy(() => import('./components/WorkoutPlan'));

// Image optimization
const optimizedImages = {
  hero: '/images/hero-optimized.webp',
  fallback: '/images/hero.jpg'
};
```

### SEO Configuration

```html
<!-- Meta tags for SEO -->
<meta name="description" content="Free bilingual calories calculator and workout planner. Calculate BMR, TDEE, and macros with personalized workout plans.">
<meta name="keywords" content="calories calculator, macro calculator, workout planner, BMR, TDEE, fitness">
<meta property="og:title" content="CalcuLite">
<meta property="og:description" content="Calculate your daily calories and get personalized workout plans">
<meta property="og:image" content="/og-image.png">
```

---

## Support & Contributing

For technical questions or contributions, please refer to:
- [GitHub Issues](https://github.com/FatoomRe/CalcuLite/issues)
- [Contributing Guidelines](CONTRIBUTING.md)

## 🔒 Security & Open Source Safety

This project is completely safe for open source distribution:

### No Sensitive Code
- ✅ **Frontend-only React application**
- ✅ **No server-side code or APIs**
- ✅ **No authentication tokens or API keys**
- ✅ **No database connections or credentials**
- ✅ **No payment processing or sensitive data**

### Privacy-First Design
- **Local calculations only** - All BMR/TDEE/macro calculations happen in the browser
- **No data transmission** - No user data is sent to external servers
- **No tracking** - No analytics, cookies, or user behavior monitoring
- **Offline capable** - Works without internet connection after initial load

### Safe Dependencies
- All dependencies are public, well-maintained packages
- No proprietary or closed-source libraries
- Regular security updates via npm audit

Built with 💚 by the Creator Fatoomre.
