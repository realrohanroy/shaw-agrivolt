import { useTranslation } from 'react-i18next';

export const Logo = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Image Logo */}
      <img
        src="/assets/logo.png"
        alt="Shaw AgriVolt Logo"
        className="w-12 h-16 object-contain flex-shrink-0 mix-blend-screen drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
      />

      {/* Typography */}
      <div className="flex flex-col justify-center pt-1">
        <span className="font-display font-extrabold text-white tracking-wide leading-none text-xl sm:text-2xl group-hover:text-glow-blue transition-all duration-300">
          {t('navbar.company')}
        </span>
        <span className="text-[9px] sm:text-[10px] text-white/70 tracking-[0.3em] font-bold uppercase mt-1 leading-none">
          {t('navbar.subtitle')}
        </span>
      </div>
    </div>
  );
};
