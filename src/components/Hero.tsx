import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenTestRide: (modelId?: string) => void;
  onOpenOffer: () => void;
  onOpenCalculator: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    kicker: 'ALL-NEW ELECTRIC SCOOTER',
    title: 'FALCON EV',
    subtitle: 'SPECTRAL COLOUR EDITION',
    primaryCta: 'BOOK A TEST RIDE',
    secondaryCta: 'VIEW SPECS',
    actionType: 'test-ride',
    bgImage: '/vehicles/scooty-fascino-style.jpg',
  },
  {
    id: 2,
    kicker: 'HIGH PERFORMANCE EV',
    title: 'THUNDER MAX',
    subtitle: 'INSTANT TORQUE & SPEED',
    primaryCta: 'BOOK A TEST RIDE',
    secondaryCta: 'VIEW SPECS',
    actionType: 'test-ride',
    bgImage: '/vehicles/scooty-urban-yellow.jpg',
  },
  {
    id: 3,
    kicker: 'LIVELIHOOD & ROZGAAR SERIES',
    title: 'SHAAN ROZGAAR',
    subtitle: 'COMMERCIAL E-RICKSHAW (4+1)',
    primaryCta: 'ENQUIRE NOW',
    secondaryCta: 'VIEW SPECS',
    actionType: 'commercial',
    bgImage: '/vehicles/e-rickshaw-allfine.jpg',
  },
  {
    id: 4,
    kicker: 'SPECIAL FESTIVAL DHAMAKA',
    title: 'FESTIVE OFFER',
    subtitle: 'DOWN PAYMENT JUST ₹2,999*',
    primaryCta: 'CLAIM OFFER',
    secondaryCta: 'VIEW SPECS',
    actionType: 'offer',
    bgImage: '/vehicles/scooty-red-ev.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenTestRide, onOpenOffer }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) handleNextSlide();
    if (distance < -45) handlePrevSlide();
  };

  const handlePrimaryClick = () => {
    if (slide.actionType === 'offer') {
      onOpenOffer();
    } else if (slide.actionType === 'test-ride') {
      onOpenTestRide();
    } else {
      const el = document.getElementById('commercial') || document.getElementById('vehicles');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-[72vh] sm:h-[80vh] lg:h-[88vh] min-h-[520px] max-h-[820px] flex items-center overflow-hidden bg-[#FBF7EE] select-none pt-16 sm:pt-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Shree Madhav EV Hero Carousel"
    >
      
      {/* ================= 1. FULL-BLEED CINEMATIC BACKGROUND IMAGES ================= */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 7s ease-out' }}
        >
          {/* Crisp vehicle image */}
          <img
            src={s.bgImage}
            alt={s.title}
            className="w-full h-full object-cover object-center lg:object-right filter contrast-[1.03]"
          />

          {/* Minimal TVS-style translucent scrim to guarantee text contrast without obscuring the vehicle */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF7EE]/95 via-[#FBF7EE]/60 to-transparent sm:bg-gradient-to-r sm:from-[#FBF7EE]/95 sm:via-[#FBF7EE]/60 sm:to-transparent w-full sm:w-3/5 lg:w-1/2 pointer-events-none" />
        </div>
      ))}

      {/* ================= 2. CLEAN MINIMAL TVS-STYLE HERO CONTENT ================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 w-full pb-14 sm:pb-0">
        <div className="max-w-xl space-y-2 sm:space-y-3">
          
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black tracking-[0.16em] uppercase text-[#15803d]">
              {slide.kicker}
            </span>
          </div>

          {/* Large Bold TVS-Style Model Title */}
          <div>
            <h1 className="font-['Oswald'] italic font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] tracking-tight text-[#111827] uppercase leading-[0.95]">
              {slide.title}
            </h1>
            <h2 className="text-sm sm:text-xl font-black uppercase tracking-wider text-[#ea580c] mt-1">
              {slide.subtitle}
            </h2>
          </div>

          {/* Clean Action Buttons */}
          <div className="flex items-center gap-3 pt-2 sm:pt-3">
            {/* Primary Saffron CTA Button */}
            <button
              onClick={handlePrimaryClick}
              className="py-3 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Solid Outline Button */}
            <a
              href="#vehicles"
              className="py-3 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl border-2 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white transition-all bg-white/70 backdrop-blur-sm cursor-pointer shadow-xs flex items-center justify-center"
            >
              <span>{slide.secondaryCta}</span>
            </a>
          </div>

        </div>
      </div>

      {/* ================= 3. DESKTOP CAROUSEL ARROWS (Side-docked) ================= */}
      <button
        onClick={handlePrevSlide}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-[#ea580c] text-stone-800 hover:text-white border border-[#E6DAC7] items-center justify-center transition-all backdrop-blur-sm cursor-pointer shadow-xl hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNextSlide}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-[#ea580c] text-stone-800 hover:text-white border border-[#E6DAC7] items-center justify-center transition-all backdrop-blur-sm cursor-pointer shadow-xl hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ================= 4. TVS-STYLE BOTTOM CONTROLS & TIMER PILL ================= */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-[#FDFBF7]/95 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-2.5 shadow-xl border border-[#E6DAC7]">
          {/* Mobile Prev Button */}
          <button
            onClick={handlePrevSlide}
            className="sm:hidden p-1 rounded-full text-stone-600 hover:text-[#ea580c] transition-colors"
            aria-label="Previous Slide Mobile"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 4 Clean Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-7 sm:w-8 h-2 bg-[#ea580c]'
                      : 'w-2 h-2 bg-stone-300 hover:bg-[#ea580c]/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={handleNextSlide}
            className="sm:hidden p-1 rounded-full text-stone-600 hover:text-[#ea580c] transition-colors"
            aria-label="Next Slide Mobile"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= 5. TVS SIGNATURE BOTTOM PROGRESS BAR ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E6DAC7]/60 overflow-hidden z-20">
        <div 
          className="h-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] transition-all duration-500 ease-out" 
          style={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
        />
      </div>

    </section>
  );
};
