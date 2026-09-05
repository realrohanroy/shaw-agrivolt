import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export const TheShift = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Context & Chart */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <p className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-4">
              {t('theShift.tagline')}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-12 leading-tight">
              <Trans i18nKey="theShift.title">
                Agricultural waste can supply <span className="text-brand-blue">2.5×</span> India’s annual natural gas demand
              </Trans>
            </h2>
            
            {/* Minimalist Bar Chart */}
            <div className="w-full bento-panel-light p-8">
              <p className="text-sm font-bold text-brand-navy mb-8 uppercase tracking-wider">{t('theShift.chartTitle')}</p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm font-medium text-gray-500">{t('theShift.currentDemand')}</span>
                  <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="bg-brand-navy h-full rounded-full"
                    />
                  </div>
                  <span className="w-20 text-right font-bold text-brand-navy">200 MMT</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm font-medium text-gray-500">{t('theShift.feedstockPotential')}</span>
                  <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                      className="bg-brand-green h-full rounded-full"
                    />
                  </div>
                  <span className="w-20 text-right font-bold text-brand-green">500 MMT</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Massive Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-brand-blue/20 rounded-full"></div>
              <span className="text-5xl md:text-7xl font-display font-bold text-brand-blue tracking-tighter">
                {t('theShift.stat1')}
              </span>
              <p className="text-gray-600 text-sm md:text-base">
                {t('theShift.stat1Desc')}
              </p>
            </div>

            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-brand-navy/10 rounded-full"></div>
              <span className="text-5xl md:text-7xl font-display font-bold text-brand-navy tracking-tighter">
                {t('theShift.stat2')}
              </span>
              <p className="text-gray-600 text-sm md:text-base">
                {t('theShift.stat2Desc')}
              </p>
            </div>

            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-brand-green/20 rounded-full"></div>
              <span className="text-5xl md:text-7xl font-display font-bold text-brand-green tracking-tighter">
                {t('theShift.stat3')}
              </span>
              <p className="text-gray-600 text-sm md:text-base">
                {t('theShift.stat3Desc')}
              </p>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              {t('theShift.sources')}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
