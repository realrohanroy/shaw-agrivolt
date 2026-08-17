import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-24 bg-brand-surface relative border-y border-white/5" id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Ready to discuss your fuel or fertiliser requirements?
          </h2>
          <p className="text-brand-muted text-lg">
            Send us a message or reach out directly.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-navy border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-white/70 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your full name"
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold text-white/70 uppercase tracking-widest">Company</label>
              <input 
                type="text" 
                id="company" 
                placeholder="Company name"
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-white/70 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@company.com"
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-white/70 uppercase tracking-widest">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+91"
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" 
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="interest" className="text-xs font-bold text-white/70 uppercase tracking-widest">Interest</label>
              <select 
                id="interest" 
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none"
              >
                <option value="bio-cng">Bio-CNG</option>
                <option value="fertiliser">Organic fertiliser</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-xs font-bold text-white/70 uppercase tracking-widest">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Tell us about your requirements"
                className="bg-brand-surface-light border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none" 
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-4">
              <button className="btn-pill-blue w-full justify-center py-4 text-base">
                Send Inquiry <Send size={18} />
              </button>
            </div>

          </form>
        </motion.div>
        
        {/* Direct Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <h4 className="text-white font-bold mb-1">Ayush Kumar Shaw</h4>
            <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-4">Director</p>
            <div className="flex flex-col gap-2 text-sm text-brand-muted">
              <a href="tel:+919748209283" className="hover:text-white transition-colors">+91 97482 09283</a>
              <a href="mailto:shawayush733@gmail.com" className="hover:text-white transition-colors">shawayush733@gmail.com</a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <h4 className="text-white font-bold mb-1">Sunil Kumar Shaw</h4>
            <p className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-4">Director</p>
            <div className="flex flex-col gap-2 text-sm text-brand-muted">
              <a href="tel:+919831646397" className="hover:text-white transition-colors">+91 98316 46397</a>
              <a href="mailto:sunilshaw1978hotspot@gmail.com" className="hover:text-white transition-colors">sunilshaw1978hotspot@gmail.com</a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
            <h4 className="text-white font-bold mb-1">Shaw AgriVolt Gas</h4>
            <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-4">Company HQ</p>
            <div className="flex flex-col gap-2 text-sm text-brand-muted">
              <a href="tel:+919831037829" className="hover:text-white transition-colors">+91 98310 37829</a>
              <a href="mailto:shawagrivoltgas@gmail.com" className="hover:text-white transition-colors">shawagrivoltgas@gmail.com</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
