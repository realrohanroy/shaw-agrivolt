import { motion } from 'framer-motion';
import { Leaf, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <img 
          src="/assets/hero-aerial-plant-01.jpg" 
          alt="Howrah Plant Aerial Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent"></div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="xl:col-span-8 flex flex-col items-start pt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(28,210,86,0.8)]"></div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                NEXT-GEN INDUSTRIAL ENERGY
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8"
            >
              Powering the <br />
              <span className="text-brand-blue text-glow-blue">Industrial Grid.</span><br />
              Restoring the <br />
              <span className="text-brand-green text-glow-green">Soil Health.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed drop-shadow-sm"
            >
              Shaw AgriVolt Gas Private Limited — High-Purity Bio-CNG Production & Certified Organic Agricultural Inputs from Howrah, West Bengal.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <a href="#" className="btn-pill-blue w-auto justify-center shadow-lg shadow-brand-blue/20 whitespace-nowrap">
                <Zap size={18} className="mr-2" /> Procure Bio-CNG
              </a>
              <a href="#" className="btn-pill-green w-auto justify-center shadow-lg shadow-brand-green/20 whitespace-nowrap">
                <Leaf size={18} className="mr-2" /> Source Fertilizers
              </a>
            </motion.div>
          </div>

          {/* Right Floating Dashboard Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="xl:col-span-4 relative hidden xl:flex justify-end items-end h-full mt-24"
          >
            {/* Floating UI Element */}
            <div className="w-full max-w-sm p-8 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-lg">Howrah Facility</h3>
                  <p className="text-brand-muted text-sm">Real-time status</p>
                </div>
                <div className="flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-full border border-brand-green/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse"></span>
                  <span className="text-brand-green text-xs font-bold tracking-wide">ONLINE</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm text-white/90 font-medium">
                    <span>Bio-CNG Output</span>
                    <span className="text-brand-blue">75% Load</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-blue/50 to-brand-blue rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm text-white/90 font-medium">
                    <span>Digester Temp</span>
                    <span className="text-brand-green">55°C</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-green/50 to-brand-green rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
