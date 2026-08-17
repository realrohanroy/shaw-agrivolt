import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-navy/80 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-white font-medium hover:text-brand-blue transition-colors text-sm relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-brand-blue after:opacity-100">Home</a>
          <a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">Energy Division</a>
          <a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">Agricultural Inputs</a>
          <a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">Technology</a>
          <a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">Contact</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="btn-pill-blue">
            Procure Bio-CNG
          </a>
          <a href="#" className="btn-pill-ghost border-brand-green/30 hover:border-brand-green/80 hover:text-brand-green">
            Source Fertilizers
          </a>
        </div>

        <button 
          className="lg:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-surface-light border-b border-brand-border overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-white font-medium text-lg">Home</a>
                <a href="#" className="text-brand-muted hover:text-white text-lg transition-colors">Energy Division</a>
                <a href="#" className="text-brand-muted hover:text-white text-lg transition-colors">Agricultural Inputs</a>
                <a href="#" className="text-brand-muted hover:text-white text-lg transition-colors">Technology</a>
                <a href="#" className="text-brand-muted hover:text-white text-lg transition-colors">Contact</a>
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a href="#" className="btn-pill-blue justify-center">
                  Procure Bio-CNG
                </a>
                <a href="#" className="btn-pill-ghost justify-center border-brand-green/30 text-brand-green">
                  Source Fertilizers
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
