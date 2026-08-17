import { motion } from 'framer-motion';
import { ArrowUpRight, Factory, Zap, Sprout, Leaf } from 'lucide-react';

export const ImpactMetrics = () => {
  return (
    <section className="py-24 bg-[#0a0e1a] relative border-y border-white/5">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Title Block (Bento Span) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 lg:row-span-2 flex flex-col justify-between p-10 bento-panel bg-gradient-to-br from-brand-surface-light to-brand-surface"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-6 neon-border-blue">
                <Factory className="text-brand-blue" size={24} />
              </div>
              <p className="text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
                ESG PERFORMANCE
              </p>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Measurable <br /> Environmental <br /> Impact
              </h2>
            </div>
            <p className="text-brand-muted text-lg leading-relaxed">
              Real-time sustainability metrics audited from our Howrah operations, setting a new benchmark for industrial eco-compliance.
            </p>
          </motion.div>

          {/* Metric 1: Bio-CNG (Bento Span) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 p-10 bento-panel bg-brand-surface group relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] group-hover:bg-brand-blue/20 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
                  38.5<span className="text-4xl md:text-6xl text-brand-blue">k</span>
                </span>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Liters of Fossil Fuel Replaced</h3>
              <p className="text-brand-muted max-w-sm">Offsetting industrial reliance on conventional diesel and coal with high-purity Bio-CNG.</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-500 relative z-10 shrink-0">
              <Zap size={28} />
            </div>
          </motion.div>

          {/* Metric 2: Waste (Square Bento) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 p-8 bento-panel bg-brand-surface relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-[50px] group-hover:bg-brand-green/20 transition-all duration-700"></div>
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <Leaf size={20} />
              </div>
              <ArrowUpRight className="text-brand-muted group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10">
              <span className="block text-5xl font-display font-bold text-white mb-2">4,200<span className="text-brand-green text-2xl ml-1">MT</span></span>
              <p className="text-brand-muted">Organic Waste Diverted from landfills</p>
            </div>
          </motion.div>

          {/* Metric 3: Farmland (Square Bento) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 p-8 bento-panel bg-brand-surface relative overflow-hidden group"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-[50px] group-hover:bg-brand-green/20 transition-all duration-700"></div>
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                <Sprout size={20} />
              </div>
              <ArrowUpRight className="text-brand-muted group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10">
              <span className="block text-5xl font-display font-bold text-white mb-2">1,750<span className="text-brand-green text-2xl ml-1">Ha</span></span>
              <p className="text-brand-muted">Farmland Rejuvenated with bio-fertilizers</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
