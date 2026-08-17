import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/5 pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Company</h4>
            <ul className="flex flex-col gap-3 text-brand-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Products</h4>
            <ul className="flex flex-col gap-3 text-brand-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Bio-CNG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organic fertiliser</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Additional products <span className="opacity-50">(future)</span></a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Resources</h4>
            <ul className="flex flex-col gap-3 text-brand-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ESG reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lab reports</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Contact</h4>
            <ul className="flex flex-col gap-3 text-brand-muted text-sm">
              <li><a href="tel:+919831037829" className="hover:text-white transition-colors">HQ: +91 98310 37829</a></li>
              <li><a href="mailto:shawagrivoltgas@gmail.com" className="hover:text-white transition-colors">shawagrivoltgas@gmail.com</a></li>
              <li className="pt-2"><a href="tel:+919748209283" className="hover:text-white transition-colors">Ayush: +91 97482 09283</a></li>
              <li><a href="tel:+919831646397" className="hover:text-white transition-colors">Sunil: +91 98316 46397</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Logo className="scale-75 origin-left" />
            <span className="text-brand-muted text-xs">© 2025 Shaw AgriVolt</span>
            <div className="px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold text-white/80 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              SATAT
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold tracking-widest">
            <a href="#" className="text-white">EN</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-brand-muted hover:text-white transition-colors">বাংলা</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
