# 🍏 CalcuLite

A modern, bilingual web application for calculating daily calorie needs, macro breakdowns, and personalized workout plans. Built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)
![Deploy Status](https://github.com/FatoomRe/CalcuLite/actions/workflows/deploy.yml/badge.svg)
![Security](https://img.shields.io/badge/Security-Safe%20for%20Open%20Source-brightgreen)

## 🔗 Live Demo

**Use it here**: [https://fatoomre.github.io/CalcuLite/](https://fatoomre.github.io/CalcuLite/)

<img width="1800" height="760" alt="CalcuLite App Screenshot" src="https://github.com/user-attachments/assets/66d8ef9c-c519-4726-adf8-5a7d08519c98" />

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Calculation Formulas](#-calculation-formulas)
- [Usage Examples](#-usage-examples)
- [Contributing](#-contributing)
- [Security](#️-security)
- [Documentation](#-documentation)
- [License](#-license)
- [Roadmap](#️-roadmap)


## ✨ Features

### 🧮 Advanced Calorie & Macro Calculator
- **Multiple BMR Formulas**: Choose between Harris-Benedict (1919), Mifflin-St Jeor (1990), or Katch-McArdle (2005)
- **Unit System Support**: Metric (cm/kg) and Imperial (inches/lbs) measurement systems
- **Enhanced Activity Levels**: 5 detailed activity levels from "Very Low" to "Very Intensive"
- **Precise Weight Goals**: Specific weight change targets (-1kg to +1kg per week with 0.25kg increments)
- **Professional Macro Distributions**: 
  - Balanced (40% Protein, 20% Fat, 40% Carbs)
  - Cutting/Fat Loss (50% Protein, 20% Fat, 30% Carbs)
  - Bulking/Muscle Gain (30% Protein, 20% Fat, 50% Carbs)
  - Custom Distribution (user-defined percentages)
- **Body Fat Percentage**: Optional input for more accurate Katch-McArdle calculations
- **Pregnancy & Breastfeeding Support**: Specialized calorie adjustments for expecting and nursing mothers
- **💧 Enhanced Water Calculator**: Improved hydration recommendations based on gender, age, weight, activity level, and unit system

### 🏋️ Workout Planning
- **Multiple Split Programs**: 3-day, 4-day, 5-day, and 6-day workout routines
- **Exercise Database**: Integrated with free-exercise-db for exercise details
- **Visual Guides**: Exercise illustrations and proper form instructions
- **Progressive Overload**: Sets and reps recommendations
- **Flexible Plans**: Beginner to Advanced difficulty levels

### 🌍 Bilingual Support
- **English & Arabic**: Full RTL support for Arabic
- **Seamless Switching**: Toggle between languages instantly
- **Localized Content**: All text, numbers, and UI elements

### 🎨 Modern UI/UX
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Green Theme**: Beautiful green gradient color scheme
- **Smooth Animations**: Hover effects and transitions

### 📄 Export Features
- **PDF Export**: Download your complete plan
- **Print Support**: Print-friendly layouts
- **Data Persistence**: Save your calculations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FatoomRe/CalcuLite.git
   cd CalcuLite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript  
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **PDF Generation**: jsPDF
- **Exercise Database**: Free Exercise DB API
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CalculatorForm.tsx    # Main calculator interface
│   ├── Header.tsx           # App header with theme/language toggle
│   ├── ResultsDisplay.tsx   # Calculation results display
│   ├── MacroChart.tsx       # Visual macro distribution chart
│   ├── WorkoutPlan.tsx      # Workout planning interface
│   ├── ExerciseCard.tsx     # Individual exercise display card
│   ├── SplashScreen.tsx     # Loading/welcome screen
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── index.ts
├── data/                    # Static data and translations
│   ├── translations.ts      # EN/AR text translations
│   └── workoutPlans.ts     # Exercise routines and plans
├── hooks/                   # Custom React hooks
│   ├── useLanguage.ts      # Language switching logic
│   └── useTheme.ts         # Theme management
├── types/                   # TypeScript type definitions
│   └── index.ts            # All interface definitions
├── utils/                   # Utility functions
│   ├── calculations.ts     # BMR/TDEE/Macro calculations
│   ├── exerciseApi.ts      # Exercise database integration
│   └── pdfExport.ts        # PDF generation utilities
├── constants/               # App constants
│   └── index.ts            # Configuration constants
├── App.tsx                 # Main app component
└── main.tsx               # App entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME="CalcuLite"
VITE_APP_VERSION="1.0.0"
```

### Tailwind Configuration

The project uses a custom green color scheme. Modify `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    // Green shades
    500: '#22c55e',
    600: '#16a34a',
    // ...
  },
  accent: {
    // Emerald shades
    500: '#10b981',
    600: '#059669',
    // ...
  }
}
```

## 🧮 Calculation Formulas

### BMR (Basal Metabolic Rate) Formulas

#### Harris-Benedict Formula (1919)
- **Men**: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age)
- **Women**: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age)

#### Mifflin-St Jeor Formula (1990) - Default
- **Men**: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5
- **Women**: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161

#### Katch-McArdle Formula (2005)
- **All Genders**: BMR = 370 + (21.6 × lean body mass in kg)
- **Lean Body Mass**: weight × (1 - body fat percentage / 100)

### TDEE (Total Daily Energy Expenditure)
- **Very Low Activity**: BMR × 1.2 (desk job, no exercise)
- **Low Activity**: BMR × 1.375 (light exercise 1-3 days/week)
- **Moderate Activity**: BMR × 1.55 (moderate exercise 3-5 days/week)
- **High Activity**: BMR × 1.725 (hard exercise 6-7 days/week)
- **Very High Activity**: BMR × 1.9 (daily exercise + physical job)

### Weight Goal Calculations
- **Slow Weight Loss (-0.25 kg/week)**: TDEE - 275 calories
- **Moderate Weight Loss (-0.5 kg/week)**: TDEE - 550 calories
- **Fast Weight Loss (-1 kg/week)**: TDEE - 1100 calories
- **Slow Weight Gain (+0.25 kg/week)**: TDEE + 275 calories
- **Moderate Weight Gain (+0.5 kg/week)**: TDEE + 550 calories
- **Fast Weight Gain (+1 kg/week)**: TDEE + 1100 calories

### Professional Macro Distributions
- **Balanced**: 40% Protein, 20% Fat, 40% Carbs
- **Cutting/Fat Loss**: 50% Protein, 20% Fat, 30% Carbs
- **Bulking/Muscle Gain**: 30% Protein, 20% Fat, 50% Carbs
- **Custom**: User-defined percentages (must total 100%)

### Special Adjustments
- **Pregnancy**: +300 calories to BMR (2nd & 3rd trimester)
- **Breastfeeding**: +500 calories to BMR

### Water Intake Formula
- **Base**: 35ml per kg body weight
- **Gender Adjustment**: Men +10% (higher muscle mass)
- **Age Adjustment**: 50+ years +5%, 65+ years +10%
- **Activity Adjustment**: Very Low +0%, Low +10%, Moderate +20%, High +30%, Very High +40%

### 💧 Water Intake Calculation
**Base Formula**: 35ml per kg of body weight

**Gender Adjustments**:
- **Men**: Base × 1.1 (higher muscle mass requires more hydration)
- **Women**: Base × 1.0 (standard requirement)

**Age Adjustments**:
- **65+ years**: Additional 10% (decreased kidney function)
- **50-64 years**: Additional 5% (metabolic changes)
- **Under 50**: No adjustment

**Activity Level Adjustments**:
- **Sedentary**: No additional water
- **Moderately Active**: +15% for exercise recovery
- **Highly Active**: +30% for intense training and sweat replacement

## 🎯 Usage Examples

### Basic Calculation
```typescript
const results = calculateMacros({
  age: 25,
  gender: 'male',
  height: 175,
  weight: 70,
  activityLevel: 'moderate',
  goal: 'build'
});

// Results include:
// {
//   bmr: 1654,
//   tdee: 2564,
//   goalTdee: 3064,
//   protein: { grams: 112, calories: 448, percentage: 15 },
//   carbs: { grams: 383, calories: 1532, percentage: 50 },
//   fat: { grams: 102, calories: 920, percentage: 30 },
//   water: { liters: 2.7, milliliters: 2695 }
// }
```

### Water Intake Calculation
```typescript
const waterIntake = calculateWaterIntake({
  age: 25,
  gender: 'male',
  weight: 70,
  activityLevel: 'moderate'
});

// Returns: { liters: 2.7, milliliters: 2695 }
```

### Language Switching
```typescript
const { language, switchLanguage } = useLanguage();
// Switch to Arabic
switchLanguage('ar');
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

**Quick Start:**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages  
- Add tests for new features
- Ensure responsive design
- Support both languages (EN/AR)

## �️ Security

This project is **100% safe for open source** because:

- ✅ **Frontend-only application** - No server-side secrets
- ✅ **Public APIs only** - Uses free, open exercise database (no API keys required)
- ✅ **No sensitive data** stored or transmitted
- ✅ **Client-side calculations** - All processing happens in your browser
- ✅ **Fallback system** - Robust error handling with local fallback images

### API Integration
- **Exercise Database**: Uses the free-exercise-db hosted on GitHub
- **No Rate Limits**: Public API with no authentication required  
- **Error Handling**: Graceful fallbacks when API is unavailable

### Privacy
- **No data collection** - Your personal information never leaves your device
- **No tracking** - No analytics or user behavior monitoring
- **No cookies** - No persistent data storage beyond your current session

## � Documentation

- **[� User Documentation](DOCUMENTATION.md)** - Detailed usage guide
- **[🤝 Contributing Guidelines](CONTRIBUTING.md)** - How to contribute

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

- [ ] Mobile app version (React Native)
- [ ] User accounts and data sync
- [ ] Integration with fitness trackers
- [ ] Multiple language support beyond EN/AR
- [ ] Nutrition database integration
- [ ] Progress tracking and analytics
- [x] **💧 Daily water intake calculator** *(Recently Added)*
- [ ] Hydration reminders and tracking
- [ ] Weather-based water intake adjustments

## 🙏 Acknowledgments

- Built with 💚 by [Fatimah Alabbas](https://fatoomre.github.io/MyPortfolio/)
- Inspired by modern fitness and nutrition science
- Icons by [Lucide](https://lucide.dev/)
- Color palette inspired by nature's green tones
- Exercise data from [Free Exercise DB](https://github.com/yuhonas/free-exercise-db)

---

<div align="center">
  <strong>🍏 Start your fitness journey today! 🍏</strong>
  <br>
  <sub>Calculate • Plan • Achieve</sub>
</div>
