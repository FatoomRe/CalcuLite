import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { MacroResults, Language } from '../types';
import { translations } from '../data/translations';

interface MacroChartProps {
  results: MacroResults;
  language: Language;
}

export const MacroChart: React.FC<MacroChartProps> = ({ results, language }) => {
  const t = translations[language];

  const data = [
    {
      name: t.protein,
      value: results.protein.percentage,
      grams: results.protein.grams,
      calories: results.protein.calories,
      color: '#2563eb'
    },
    {
      name: t.carbs,
      value: results.carbs.percentage,
      grams: results.carbs.grams,
      calories: results.carbs.calories,
      color: '#10B981'
    },
    {
      name: t.fat,
      value: results.fat.percentage,
      grams: results.fat.grams,
      calories: results.fat.calories,
      color: '#ea580c'
    }
  ];

  const CustomTooltip = ({ active, payload }: { 
    active?: boolean; 
    payload?: Array<{ 
      payload: { 
        name: string; 
        value: number; 
        color: string; 
        grams: number; 
        calories: number; 
      } 
    }> 
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-white">{data.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {data.grams}g ({data.value}%)
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {data.calories} {t.calories}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {t.macroBreakdown}
      </h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {data.map((macro, index) => (
          <div key={index} className="text-center">
            <div
              className="w-4 h-4 mx-auto mb-2 rounded-full"
              style={{ backgroundColor: macro.color }}
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {macro.name}
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {macro.grams}g
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {macro.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};