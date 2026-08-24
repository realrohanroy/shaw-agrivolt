import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { t, i18n } = useTranslation();
  
  // States: 'selecting' -> 'loading' -> 'done'
  const [stage, setStage] = useState<'selecting' | 'loading' | 'done'>('selecting');
  
  // Check if they already selected before
  useEffect(() => {
    const hasSelected = localStorage.getItem('hasSelectedLanguage');
    if (hasSelected === 'true') {
      setStage('done');
      onComplete();
    }
  }, [onComplete]);

  const handleSelectLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('hasSelectedLanguage', 'true');
    setStage('loading');
    
    // Simulate a brief premium loading sequence
    setTimeout(() => {
      setStage('done');
      setTimeout(() => {
        onComplete();
      }, 800); // Wait for the fade out animation to finish
    }, 1500); // 1.5 seconds loading experience
  };

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-brand-navy flex flex-col items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent opacity-30"></div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 flex flex-col items-center w-full max-w-md"
        >
          <div className="mb-12 scale-125 transform">
            <Logo />
          </div>
          
          {stage === 'selecting' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-white/80 text-sm tracking-[0.2em] uppercase mb-8 font-light text-center">
                Select Language / ভাষা নির্বাচন করুন
              </h2>
              
              <div className="flex flex-col w-full gap-4">
                <button
                  onClick={() => handleSelectLanguage('en')}
                  className="btn-pill-blue w-full justify-center text-lg py-4 shadow-lg shadow-brand-blue/20"
                >
                  English
                </button>
                <button
                  onClick={() => handleSelectLanguage('bn')}
                  className="btn-pill-green w-full justify-center text-lg py-4 shadow-lg shadow-brand-green/20"
                >
                  বাংলা
                </button>
              </div>
            </motion.div>
          )}

          {stage === 'loading' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full mt-8"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-brand-green animate-spin mb-6"></div>
              <p className="text-brand-green text-sm font-semibold tracking-widest uppercase animate-pulse">
                {t('hero.online')}...
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
