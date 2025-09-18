import { Apple, Moon, Sun } from 'lucide-react';
import React from 'react';
import { translations } from '../data/translations';
import { Language, Theme } from '../types';

interface HeaderProps {
  language: Language;
  theme: Theme;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  theme,
  onLanguageChange,
  onThemeToggle,
}) => {
  const t = translations[language];

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-2 rounded-lg shadow-lg">
              <Apple className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  language === 'ar'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                عربي
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};