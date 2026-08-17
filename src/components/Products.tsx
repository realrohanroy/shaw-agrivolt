import { motion } from 'framer-motion';
import { Flame, Sprout, ArrowRight } from 'lucide-react';

export const Products = () => {
  return (
    <section className="py-24 bg-[#F8F9FC] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            Products
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            Industrial-grade outputs, certified to spec
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Bio-CNG Card */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-panel-light p-10 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-[60px] group-hover:bg-brand-blue/10 transition-all duration-700 pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8">
              <Flame size={32} />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-brand-navy mb-8">Bio-CNG</h3>
            
            <div className="flex flex-col gap-6 flex-grow mb-12">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Methane purity</span>
                <span className="text-brand-navy font-bold">97%+</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Calorific value</span>
                <span className="text-brand-navy font-bold text-right">Pipeline-grade specification</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Delivery format</span>
                <span className="text-brand-navy font-bold">Cascade & pipeline</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-gray-500 font-medium">Application</span>
                <span className="text-brand-navy font-bold text-right">Industrial & transport fuel</span>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-blue hover:gap-4 transition-all uppercase tracking-wide text-sm">
              View Bio-CNG specs <ArrowRight size={16} />
            </a>
          </motion.article>

          {/* Fertiliser Card */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-panel-light p-10 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/5 rounded-full blur-[60px] group-hover:bg-brand-green/10 transition-all duration-700 pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8">
              <Sprout size={32} />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-brand-navy mb-8">Organic Fertiliser</h3>
            
            <div className="flex flex-col gap-6 flex-grow mb-12">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">NPK ratio</span>
                <span className="text-brand-navy font-bold text-right">Balanced macro-nutrient profile</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Form</span>
                <span className="text-brand-navy font-bold">Granular / pelleted</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Packaging</span>
                <span className="text-brand-navy font-bold">Bag & bulk</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="text-gray-500 font-medium">Certification</span>
                <span className="text-brand-navy font-bold">FCO compliant</span>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-green hover:gap-4 transition-all uppercase tracking-wide text-sm">
              View fertiliser specs <ArrowRight size={16} />
            </a>
          </motion.article>

        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-pill-ghost-dark">
            Request a quote <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
