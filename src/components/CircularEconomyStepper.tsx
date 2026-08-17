import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

type ProcessStep = {
  id: string;
  tabNumber: string;
  tabLabel: string;
  stepLabel?: string;
  heading: string;
  description: string;
  ctaLabel: string;
};

const steps: ProcessStep[] = [
  {
    id: "0",
    tabNumber: "",
    tabLabel: "INTRO",
    stepLabel: "INTRO",
    heading: "How We Harness the Power of Organic Waste",
    description: "Our zero-waste industrial process converts organic feedstock into clean fuel and certified agricultural inputs — simultaneously, creating a truly circular economy.",
    ctaLabel: "Start",
  },
  {
    id: "1",
    tabNumber: "1",
    tabLabel: "Feedstock Sourcing",
    stepLabel: "STEP 1",
    heading: "Feedstock Sourcing",
    description: "Agricultural residue, municipal organic waste, and industrial bio-mass aggregated from West Bengal's supply network.",
    ctaLabel: "Next",
  },
  {
    id: "2",
    tabNumber: "2",
    tabLabel: "Anaerobic Digestion",
    stepLabel: "STEP 2",
    heading: "Thermophilic Anaerobic Digestion",
    description: "Multi-stage high-temperature digestion at our Howrah facility breaks down organic matter, generating raw biogas and nutrient-rich digestate.",
    ctaLabel: "Next",
  },
  {
    id: "3",
    tabNumber: "3",
    tabLabel: "Gas Enrichment",
    stepLabel: "STEP 3",
    heading: "VSA Gas Enrichment",
    description: "Vacuum Swing Adsorption purification elevates methane concentration to >95%, meeting IS 16087:2016 national standards.",
    ctaLabel: "Start Over",
  },
];

/* Camera view properties for each step: Intro shows all compactly, Steps zoom in */
const CAMERA_VIEWS = [
  { x: -50, y: 30, scale: 0.75 },     // 0: Intro - Zoomed out to show all compactly (bigger now)
  { x: 50, y: -40, scale: 1.1 },      // 1: Step 1 - Zoom to Feedstock
  { x: -250, y: 70, scale: 1.1 },     // 2: Step 2 - Zoom to Digestion
  { x: -650, y: -20, scale: 1.1 },    // 3: Step 3 - Zoom to Enrichment
];

const MOBILE_CAMERA_VIEWS = [
  { x: -90, y: -150, scale: 0.4 },      // 0: Intro (Centered, larger, no gap above)
  { x: -80, y: -200, scale: 0.8 },      // 1: Step 1
  { x: -360, y: -50, scale: 0.8 },      // 2: Step 2
  { x: -640, y: -150, scale: 0.8 },     // 3: Step 3
];

/* ─── Shared Arrow Animation Component ─────────────────────────────────────── */

type ArrowMode = 'intro' | 'single' | 'hidden';

type RevealAxis = '-y' | '+x';

const AnimatedArrow = ({
  transform,
  mask,
  children,
  mode,
  sequenceIndex,
  prefersReducedMotion,
  revealAxis,
}: {
  transform: string;
  mask: string;
  children: React.ReactNode;
  mode: ArrowMode;
  sequenceIndex: number;
  prefersReducedMotion: boolean | null;
  revealAxis: RevealAxis;
}) => {
  const clipId = `glow-clip-${sequenceIndex}`;
  
  let rectAnimate: any = {};
  let rectTransition: any = {};
  let groupAnimate: any = {};
  let groupTransition: any = {};

  if (mode === 'hidden') {
    groupAnimate = { opacity: 0 };
    groupTransition = { duration: 0.3 };
  } else if (prefersReducedMotion) {
    groupAnimate = { opacity: 0.5 };
    if (revealAxis === '-y') {
      rectAnimate = { y: -220, height: 220 };
    } else {
      rectAnimate = { width: 240 };
    }
  } else if (mode === 'intro') {
    groupAnimate = { opacity: [1, 1, 0, 0] };
    groupTransition = { duration: 3.4, times: [0, 0.88, 0.94, 1], repeat: Infinity, ease: "easeInOut" };
    
    if (revealAxis === '-y') { // Arrow 1
      rectAnimate = {
        y: [0, -220, -220, 0, 0],
        height: [0, 220, 220, 0, 0],
      };
      rectTransition = {
        y: { duration: 3.4, times: [0, 0.15, 0.94, 0.97, 1], repeat: Infinity, ease: "easeInOut" },
        height: { duration: 3.4, times: [0, 0.15, 0.94, 0.97, 1], repeat: Infinity, ease: "easeInOut" },
      };
    } else { // Arrow 2
      rectAnimate = {
        width: [0, 0, 240, 240, 0, 0],
      };
      rectTransition = {
        width: { duration: 3.4, times: [0, 0.29, 0.44, 0.94, 0.97, 1], repeat: Infinity, ease: "easeInOut" },
      };
    }
  } else if (mode === 'single') {
    groupAnimate = { opacity: [1, 1, 0, 0] };
    groupTransition = { duration: 3, times: [0, 0.66, 0.83, 1], repeat: Infinity, ease: "easeInOut" };

    if (revealAxis === '-y') {
      rectAnimate = {
        y: [0, -220, -220, 0, 0],
        height: [0, 220, 220, 0, 0],
      };
      rectTransition = {
        y: { duration: 3, times: [0, 0.16, 0.83, 0.86, 1], repeat: Infinity, ease: "easeInOut" },
        height: { duration: 3, times: [0, 0.16, 0.83, 0.86, 1], repeat: Infinity, ease: "easeInOut" },
      };
    } else {
      rectAnimate = {
        width: [0, 240, 240, 0, 0],
      };
      rectTransition = {
        width: { duration: 3, times: [0, 0.16, 0.83, 0.86, 1], repeat: Infinity, ease: "easeInOut" },
      };
    }
  }

  return (
    <motion.g
      transform={transform}
      filter="url(#arrow-shadow)"
      mask={mask}
      animate={{ opacity: mode !== 'hidden' ? 1 : 0.3 }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      {/* Base Grey Arrow */}
      <g fill="#d0d5dd">{children}</g>

      {/* Mask for Progressive Reveal */}
      <mask id={clipId}>
        <motion.rect
          fill="white"
          x={revealAxis === '-y' ? -30 : 0}
          y={revealAxis === '+x' ? -30 : 0}
          width={revealAxis === '-y' ? 60 : 0}
          height={revealAxis === '+x' ? 60 : 0}
          initial={revealAxis === '-y' ? { y: 0, height: 0 } : { width: 0 }}
          animate={rectAnimate}
          transition={rectTransition}
        />
      </mask>

      {/* Glowing Green Overlay */}
      <motion.g
        fill="#1CD256"
        filter="url(#neon-glow)"
        mask={`url(#${clipId})`}
        initial={{ opacity: 0 }}
        animate={groupAnimate}
        transition={groupTransition}
      >
        {children}
      </motion.g>
    </motion.g>
  );
};

/* ─── Component ────────────────────────────────────────────────────────────── */

export const CircularEconomyStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const currentData = steps[activeStep];
  const isIntro = activeStep === 0;
  
  const isMobile = windowWidth < 768;
  const cameraView = isMobile ? MOBILE_CAMERA_VIEWS[activeStep] : CAMERA_VIEWS[activeStep];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* HUGE TITLE */}
        <h2 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] mb-12 uppercase italic tracking-tighter">
          OUR PROCESS
        </h2>

        {/* TOP TAB BAR */}
        <div className="flex items-stretch border-b border-gray-200 mb-8 md:mb-16 overflow-x-auto hide-scrollbar">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative flex items-center justify-center gap-2 px-5 md:px-10 py-4 md:py-6 transition-all min-w-[80px] md:min-w-max border-r border-gray-200 last:border-r-0 ${
                  isActive ? 'bg-white' : 'hover:bg-gray-50 opacity-60 hover:opacity-100'
                }`}
              >
                {step.tabNumber ? (
                  <span className="text-3xl md:text-5xl font-display font-black text-black">{step.tabNumber}</span>
                ) : (
                  <span className="text-sm md:text-2xl font-display font-black text-black italic uppercase">{step.tabLabel}</span>
                )}

                {step.tabNumber && (
                  <span className="hidden md:block text-left text-xs font-bold text-black leading-tight max-w-[120px]">
                    {step.tabLabel}
                  </span>
                )}

                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1CD256]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CONTENT SPLIT */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0 relative">

          {/* Left: Text Content */}
          <div className="lg:col-span-4 flex flex-col pt-0 lg:pt-8 relative z-40 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start bg-white/90 backdrop-blur-sm p-4 -ml-4 rounded-xl"
              >
                {/* Top row: Label & Mobile Button */}
                <div className="flex justify-between items-center w-full mb-6">
                  {/* Step Label with green underline */}
                  <div>
                    <span className="text-xl md:text-2xl font-black text-black uppercase tracking-widest italic">{currentData.stepLabel}</span>
                    <div className="h-1.5 w-10 bg-[#1CD256] mt-2"></div>
                  </div>
                  
                  {/* Next Button (Mobile Only - Skewed) */}
                  <button
                    onClick={handleNext}
                    className="md:hidden bg-[#1CD256] text-black font-bold py-1.5 px-6 hover:bg-[#15B045] transition-colors"
                    style={{ transform: 'skewX(-15deg)' }}
                  >
                    <span className="inline-block tracking-wide" style={{ transform: 'skewX(15deg)' }}>
                      {currentData.ctaLabel === "Start Over" ? "Start Over" : "Next"}
                    </span>
                  </button>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-black text-black mb-6 leading-tight tracking-tight">
                  {currentData.heading}
                </h3>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
                  {currentData.description}
                </p>

                {/* Next Button (Desktop Only - Rectangular) */}
                <button
                  onClick={handleNext}
                  className="hidden md:block bg-[#1CD256] text-black font-bold py-4 px-12 rounded-sm hover:bg-[#15B045] transition-colors"
                >
                  {currentData.ctaLabel}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ═══ RIGHT: One continuous isometric world ═══ */}
          <div className="lg:col-span-8 relative h-[300px] md:h-[600px] w-full overflow-hidden order-1 lg:order-2">

            {/* Camera wrapper — slides and zooms */}
            <motion.div
              className="absolute w-[1600px] h-[600px] origin-left"
              animate={{ 
                x: cameraView.x,
                y: cameraView.y,
                scale: cameraView.scale
              }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ top: 0, left: 0 }}
            >

              {/* ── SVG: Flat isometric arrows with flowing glow ── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1600 600"
                preserveAspectRatio="xMinYMid slice"
                fill="none"
              >
                <defs>
                  <filter id="arrow-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
                  </filter>
                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* FADE MASKS FOR ARROW ENDS */}
                  <linearGradient id="fade-up-grad" x1="0" y1="0" x2="0" y2="-315" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="black" />
                    <stop offset="20%" stop-color="white" />
                    <stop offset="100%" stop-color="white" />
                  </linearGradient>
                  <mask id="mask-up">
                    <rect x="-50" y="-350" width="100" height="400" fill="url(#fade-up-grad)" />
                  </mask>

                  <linearGradient id="fade-right-grad" x1="0" y1="0" x2="325" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="black" />
                    <stop offset="20%" stop-color="white" />
                    <stop offset="100%" stop-color="white" />
                  </linearGradient>
                  <mask id="mask-right">
                    <rect x="-50" y="-50" width="400" height="100" fill="url(#fade-right-grad)" />
                  </mask>
                </defs>

                {/* ═══ ARROW 1: Zone 1 → Zone 2 (Points Up-Right) ═══ */}
                <AnimatedArrow
                  transform="translate(420, 310) scale(1, 0.577) rotate(45)"
                  mask="url(#mask-up)"
                  mode={isIntro ? 'intro' : (activeStep === 2 ? 'single' : 'hidden')}
                  sequenceIndex={0}
                  prefersReducedMotion={prefersReducedMotion}
                  revealAxis="-y"
                >
                  <rect x="-6" y="-180" width="12" height="180" rx="2" />
                  <polygon points="-22,-175 22,-175 0,-215" />
                </AnimatedArrow>

                {/* ═══ ARROW 2: Zone 2 → Zone 3 (Points Down-Right) ═══ */}
                <AnimatedArrow
                  transform="translate(770, 160) scale(1, 0.577) rotate(45)"
                  mask="url(#mask-right)"
                  mode={isIntro ? 'intro' : (activeStep === 3 ? 'single' : 'hidden')}
                  sequenceIndex={1}
                  prefersReducedMotion={prefersReducedMotion}
                  revealAxis="+x"
                >
                  <rect x="0" y="-6" width="200" height="12" rx="2" />
                  <polygon points="195,-22 195,22 235,0" />
                </AnimatedArrow>
              </svg>

              {/* ── ZONE IMAGES ── */}
              {/* Zone 1: Feedstock */}
              <motion.div
                className="absolute"
                style={{ top: 230, left: 200, width: 280 }}
                animate={{
                  opacity: (isIntro || activeStep === 1) ? 1 : 0.3,
                  filter: (isIntro || activeStep === 1) ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(1.3)',
                  scale: activeStep === 1 ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/stepper_feedstock_island.png"
                  alt="Feedstock Sourcing"
                  className="w-full h-auto drop-shadow-xl"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </motion.div>

              {/* Zone 2: Digestion */}
              <motion.div
                className="absolute"
                style={{ top: 70, left: 550, width: 280 }}
                animate={{
                  opacity: (isIntro || activeStep === 2) ? 1 : 0.3,
                  filter: (isIntro || activeStep === 2) ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(1.3)',
                  scale: activeStep === 2 ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/stepper_digester_island.png"
                  alt="Anaerobic Digestion"
                  className="w-full h-auto drop-shadow-xl"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </motion.div>

              {/* Zone 3: Enrichment */}
              <motion.div
                className="absolute"
                style={{ top: 180, left: 900, width: 280 }}
                animate={{
                  opacity: (isIntro || activeStep === 3) ? 1 : 0.3,
                  filter: (isIntro || activeStep === 3) ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(1.3)',
                  scale: activeStep === 3 ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/stepper_enrichment_island.png"
                  alt="Gas Enrichment"
                  className="w-full h-auto drop-shadow-xl"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
