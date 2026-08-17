import { motion } from 'framer-motion';
import { ArrowRight, Truck, Users } from 'lucide-react';

export const Partnerships = () => {
  return (
    <section className="py-24 bg-[#F8F9FC] relative border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy">
            Supply. Distribute. Grow with us.
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
            <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">For biomass suppliers</h3>
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">Long-term procurement of agricultural residue and dedicated feedstock</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">Quality parameters, grading, and volume planning agreed upfront</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-blue font-bold mt-1">—</span>
                <span className="text-gray-600">Predictable pricing model built around transparent, index-linked rates</span>
              </li>
            </ul>
            <a href="#contact" className="btn-pill-ghost-dark w-fit">
              Become a supplier <ArrowRight size={16} />
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
            <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">For dealers & distributors</h3>
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">Authorised territories with protected, exclusive distribution rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">Reliable product availability for Bio-CNG and organic fertiliser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green font-bold mt-1">—</span>
                <span className="text-gray-600">Dedicated support, training, and marketing backing for partners</span>
              </li>
            </ul>
            <a href="#contact" className="btn-pill-ghost-dark w-fit hover:text-brand-green hover:border-brand-green">
              Apply as a dealer <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
