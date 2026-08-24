import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheShift } from './components/TheShift';
import { CircularEconomyStepper } from './components/CircularEconomyStepper';
import { Products } from './components/Products';
import { ImpactMetrics } from './components/ImpactMetrics';
import { Certifications } from './components/Certifications';
import { Partnerships } from './components/Partnerships';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-brand-navy min-h-screen text-white">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <Navbar />
          
          <main>
            {/* Dark Theme */}
            <Hero />
            
            {/* Light Theme */}
            <TheShift />
            
            {/* Dark Theme */}
            <CircularEconomyStepper />
            
            {/* Light Theme */}
            <Products />
            
            {/* Dark Theme */}
            <ImpactMetrics />
            
            {/* Light Theme */}
            <Certifications />
            <Partnerships />
            
            {/* Dark Theme */}
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
