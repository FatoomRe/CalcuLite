import { Image as ImageIcon, Info, Play, RotateCcw, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Exercise, Language } from '../types';
import { getExerciseImages, getFallbackExerciseImage } from '../utils/exerciseApi';

interface ExerciseCardProps {
    exercise: Exercise;
    exerciseIndex: number;
    language: Language;
    t: any; // translations object
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
    exercise,
    exerciseIndex,
    language,
    t
}) => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [exerciseImages, setExerciseImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadExerciseData = async () => {
            setLoading(true);
            setError(false);
            
            try {
                const images = await getExerciseImages(exercise.name);
                if (images.length > 0) {
                    // Validate first image by trying to load it
                    const img = new Image();
                    img.onload = () => {
                        setExerciseImages(images);
                        setLoading(false);
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load exercise image for ${exercise.name}, using fallback`);
                        setExerciseImages([getFallbackExerciseImage(exercise.name)]);
                        setError(true);
                        setLoading(false);
                    };
                    img.src = images[0];
                } else {
                    // Use fallback image if no API data
                    setExerciseImages([getFallbackExerciseImage(exercise.name)]);
                    setLoading(false);
                }
            } catch (err) {
                console.warn('Error loading exercise data:', err);
                setError(true);
                setExerciseImages([getFallbackExerciseImage(exercise.name)]);
                setLoading(false);
            }
        };

        loadExerciseData();
    }, [exercise.name]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % exerciseImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + exerciseImages.length) % exerciseImages.length);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
            {/* Exercise Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1 mb-4 lg:mb-0">
                    <h5 className="font-bold text-gray-900 dark:text-white text-xl mb-3">
                        {exerciseIndex + 1}. {exercise.name}
                    </h5>

                    {/* Exercise Stats */}
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm mb-4">
                        <span className="flex items-center space-x-2 rtl:space-x-reverse bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-2 rounded-full font-medium">
                            <RotateCcw className="h-4 w-4" />
                            <span>{exercise.sets} {t.sets}</span>
                        </span>
                        <span className="flex items-center space-x-2 rtl:space-x-reverse bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-3 py-2 rounded-full font-medium">
                            <Users className="h-4 w-4" />
                            <span>{exercise.reps} {t.reps}</span>
                        </span>
                    </div>
                </div>

                {/* Exercise Image/Animation */}
                <div className="lg:w-80 w-full">
                    <div className="relative bg-white dark:bg-gray-600 rounded-lg overflow-hidden shadow-md">
                        {loading ? (
                            <div className="w-full h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-600">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                            </div>
                        ) : (
                            <>
                                <img
                                    src={exerciseImages[currentImageIndex]}
                                    alt={exercise.name}
                                    className="w-full h-48 object-cover"
                                    onError={() => {
                                        console.warn(`Image failed to load: ${exerciseImages[currentImageIndex]}`);
                                        // Replace failed image with fallback
                                        const fallbackImage = getFallbackExerciseImage(exercise.name);
                                        const newImages = [...exerciseImages];
                                        newImages[currentImageIndex] = fallbackImage;
                                        setExerciseImages(newImages);
                                        // Also update the error state
                                        if (!error) {
                                            setError(true);
                                        }
                                    }}
                                />
                                
                                {/* Image Navigation */}
                                {exerciseImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        
                                        {/* Image Indicators */}
                                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                            {exerciseImages.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-colors ${
                                                        index === currentImageIndex 
                                                            ? 'bg-white' 
                                                            : 'bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Animation Play Button */}
                                {exerciseImages.length > 1 && (
                                    <div className="absolute top-2 right-2">
                                        <div className="bg-primary-600 text-white p-2 rounded-full shadow-lg">
                                            <Play className="h-4 w-4" />
                                        </div>
                                    </div>
                                )}

                                {/* Image Count Badge */}
                                <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                                    <ImageIcon className="h-3 w-3 inline mr-1" />
                                    {currentImageIndex + 1}/{exerciseImages.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2 rtl:space-x-reverse">
                        <Info className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                        <span>{language === 'en' ? 'Instructions:' : 'التعليمات:'}</span>
                    </span>
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            showInstructions
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-400'
                        }`}
                    >
                        {showInstructions 
                            ? (language === 'en' ? 'Hide' : 'إخفاء')
                            : (language === 'en' ? 'Show Details' : 'عرض التفاصيل')
                        }
                    </button>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    {exercise.instructions}
                </p>

                {showInstructions && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-500 space-y-3">
                        {/* Safety Tips */}
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                            <h6 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>{language === 'en' ? 'Safety Tips:' : 'نصائح الأمان:'}</span>
                            </h6>
                            <p className="text-xs text-yellow-700 dark:text-yellow-300">
                                {language === 'en' 
                                    ? 'Focus on proper form over heavy weight. Start with lighter weights and gradually increase. Stop if you feel pain.'
                                    : 'ركز على الشكل الصحيح أكثر من الوزن الثقيل. ابدأ بأوزان أخف وزد تدريجياً. توقف إذا شعرت بألم.'
                                }
                            </p>
                        </div>

                        {/* Progression Tips */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                            <h6 className="font-medium text-blue-800 dark:text-blue-300 mb-2 flex items-center space-x-2 rtl:space-x-reverse">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 10l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                                <span>{language === 'en' ? 'Progression:' : 'التطور:'}</span>
                            </h6>
                            <p className="text-xs text-blue-700 dark:text-blue-300">
                                {language === 'en' 
                                    ? 'Increase weight by 2.5-5kg when you can complete all sets with perfect form. Track your progress weekly.'
                                    : 'زد الوزن بـ 2.5-5 كيلو عندما تستطيع إكمال جميع المجموعات بشكل مثالي. تتبع تقدمك أسبوعياً.'
                                }
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};