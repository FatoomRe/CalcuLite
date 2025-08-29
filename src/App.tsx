import { useState } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { Header } from './components/Header';
import { MacroChart } from './components/MacroChart';
import { MealPlans } from './components/MealPlans';
import { ResultsDisplay } from './components/ResultsDisplay';
import { SplashScreen } from './components/SplashScreen';
import { WorkoutPlan } from './components/WorkoutPlan';
import { translations } from './data/translations';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { MacroResults, UserData } from './types';
import { calculateMacros } from './utils/calculations';
import { generatePDF, printResults } from './utils/pdfExport';

function App() {
  const { language, switchLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [results, setResults] = useState<MacroResults | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const t = translations[language];

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleCalculate = (userData: UserData) => {
    const calculatedResults = calculateMacros(userData);
    setResults(calculatedResults);
    
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleDownloadPDF = () => {
    if (results) {
      generatePDF(results, language);
    }
  };

  const handlePrint = () => {
    printResults();
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark' : ''
    } ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-green-50 via-white to-emerald-50' 
        : 'bg-gradient-to-br from-gray-900 via-gray-900 dark:to-gray-800'
    }`}>
      <Header
        language={language}
        theme={theme}
        onLanguageChange={switchLanguage}
        onThemeToggle={toggleTheme}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Calculator Section */}
          <div className="w-full">
            <CalculatorForm
              language={language}
              onCalculate={handleCalculate}
            />
          </div>

          {/* Results Section */}
          {results && (
            <div id="results-section" className="space-y-8">
              {/* Results Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.results}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
              </div>

              {/* Results Display and Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="h-full flex flex-col">
                  <ResultsDisplay
                    results={results}
                    language={language}
                    onDownloadPDF={handleDownloadPDF}
                    onPrint={handlePrint}
                  />
                </div>
                <div className="h-full flex flex-col">
                  <MacroChart results={results} language={language} />
                </div>
              </div>

              {/* Workout Plan */}
              <WorkoutPlan language={language} />

              {/* Meal Plans */}
              <MealPlans language={language} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t.poweredBy}{" "}
            <a 
              href="https://fatoomre.github.io/MyPortfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
            >
              {t.authorName}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;