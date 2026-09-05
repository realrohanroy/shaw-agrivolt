import { motion } from 'framer-motion';
import { ArrowRight, Truck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Partnerships = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#F8F9FC] relative border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            {t('partnerships.tagline')}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            {t('partnerships.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

          {/* Suppliers Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:pr-12"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
              <Truck size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">{t('partnerships.biomassSuppliers')}</h3>
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.supplierPoint1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.supplierPoint2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.supplierPoint3')}</span>
              </li>
            </ul>
            <a href="#contact" className="btn-pill-ghost-dark w-fit">
              {t('partnerships.becomeSupplier')} <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Dealers Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:pl-12"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">{t('partnerships.dealersDistributors')}</h3>
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.dealerPoint1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.dealerPoint2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">{t('partnerships.dealerPoint3')}</span>
              </li>
            </ul>
            <a href="#contact" className="btn-pill-ghost-dark w-fit hover:text-brand-green hover:border-brand-green">
              {t('partnerships.applyDealer')} <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
