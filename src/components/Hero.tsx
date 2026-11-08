import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, IndianRupee } from 'lucide-react';

interface HeroProps {
  onOpenTestRide: (modelId?: string) => void;
  onOpenOffer: () => void;
  onOpenCalculator: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    hookLine1: 'INSPIRED BY CLEAN ENERGY,',
    hookLine2: 'BUILT FOR THE STREETS OF PRAYAGRAJ.',
    presentingText: '- PRESENTING THE ALL-NEW -',
    modelBrand: 'Falcon EV',
    editionTag: 'SPECTRAL COLOUR EDITION',
    badgeText: 'FESTIVAL DHAMAKA &bull; DOWN PAYMENT JUST ₹2,999*',
    offerDescription: 'India’s smartest spectral color electric scooter. Zero petrol worry, 120 KM range, and guaranteed Scratch & Win gifts up to ₹35,000!',
    primaryCta: 'BOOK A TEST RIDE',
    secondaryCta: 'VIEW SPECS',
    actionType: 'test-ride',
    bgImage: '/vehicles/scooty-fascino-style.jpg',
    features: ['120 KM Range', '₹2,999 Down Payment', 'No License Needed']
  },
  {
    id: 2,
    hookLine1: 'UNLEASH THE INSTANT TORQUE,',
    hookLine2: 'EXPERIENCE ELECTRIC PERFORMANCE.',
    presentingText: '- ULTRA HIGH SPEED PERFORMANCE -',
    modelBrand: 'Thunder Max',
    editionTag: 'PERFORMANCE EV SCOOTY',
    badgeText: 'FAST CHARGE 0 TO 80% IN 2.5 HOURS',
    offerDescription: 'High-torque 1800W peak performance BLDC electric scooty with dual disc brakes, regenerative braking, and smart TFT instrument cluster.',
    primaryCta: 'BOOK A TEST RIDE',
    secondaryCta: 'VIEW SPECS',
    actionType: 'test-ride',
    bgImage: '/vehicles/scooty-urban-yellow.jpg',
    features: ['65 KM/H Speed', 'Dual Disc CBS', '3 Yr Battery Warranty']
  },
  {
    id: 3,
    hookLine1: 'MAXIMUM DAILY EARNINGS,',
    hookLine2: 'MINIMUM RUNNING COST.',
    presentingText: '- LIVELIHOOD & ROZGAAR SERIES -',
    modelBrand: 'Shaan Rozgaar',
    editionTag: 'COMMERCIAL E-RICKSHAW (4+1)',
    badgeText: 'EARN ₹45,000+ NET MONTHLY INCOME',
    offerDescription: '60V heavy-duty Allfine electric rickshaw with 4+1 passenger capacity. Engineered specifically for Prayagraj city routes with running cost of just ₹40/day.',
    primaryCta: 'ENQUIRE FOR E-RICKSHAW',
    secondaryCta: 'CHECK EMI PLAN',
    actionType: 'commercial',
    bgImage: '/vehicles/e-rickshaw-allfine.jpg',
    features: ['4+1 Seating', 'Down Payment ₹4,999', 'Govt Subsidy Support']
  },
  {
    id: 4,
    hookLine1: 'CELEBRATE THIS FESTIVE SEASON,',
    hookLine2: 'WITH GUARANTEED HOME GIFTS.',
    presentingText: '- SPECIAL FESTIVAL DHAMAKA -',
    modelBrand: 'Diwali Dhamaka',
    editionTag: 'E-RICKSHAW & SCOOTY FESTIVAL',
    badgeText: 'WIN TV, FRIDGE, AC, WASHING MACHINE & RO',
    offerDescription: 'Take home your favorite electric scooty or commercial e-rickshaw by paying low ₹2,999 down payment and get a guaranteed physical scratch card!',
    primaryCta: 'CLAIM FESTIVE OFFER',
    secondaryCta: 'VIEW GIFT LIST',
    actionType: 'offer',
    bgImage: '/vehicles/scooty-red-ev.jpg',
    features: ['Scratch Card Assured', 'File Charge Scheme', 'Zero Waiting Period']
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenTestRide, onOpenOffer, onOpenCalculator }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

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
    <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center overflow-hidden pt-20 sm:pt-24 pb-12 bg-[#FBF7EE]">
      
      {/* ================= 1. FULL-BLEED NATURAL BACKGROUND ================= */}
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transition: 'opacity 1s ease-in-out, transform 7s ease-out' }}
        >
          {/* Full-width crisp vehicle background image */}
          <img
            src={s.bgImage}
            alt={s.modelBrand}
            className="w-full h-full object-cover object-center lg:object-right filter contrast-[1.05]"
          />

          {/* Gentle, translucent soft gradient ONLY behind text area */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF7EE]/95 via-[#FBF7EE]/85 to-[#FBF7EE]/50 sm:bg-gradient-to-r sm:from-[#FBF7EE]/95 sm:via-[#FBF7EE]/60 sm:to-transparent w-full lg:w-3/5 pointer-events-none" />
        </div>
      ))}

      {/* ================= 2. FOREGROUND TYPOGRAPHY & BRAND CONTRAST ================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-3.5">
          
          {/* Hook Header */}
          <div className="space-y-0.5">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#14532d] uppercase tracking-tight font-sans leading-none">
              {slide.hookLine1}
            </h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#ea580c] uppercase tracking-tight font-sans leading-none">
              {slide.hookLine2}
            </h2>
          </div>

          {/* Horizontal line divider */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#ea580c] to-[#eab308] my-2" />

          {/* Presenting Subtitle */}
          <div className="text-xs sm:text-sm font-black uppercase tracking-widest text-stone-700">
            {slide.presentingText}
          </div>

          {/* Model Brand Name in Bold Typography */}
          <div>
            <div className="font-sans italic font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#111827] uppercase leading-none">
              {slide.modelBrand}
            </div>
            {/* Edition Subtitle */}
            <div className="text-xl sm:text-3xl font-black uppercase tracking-tight text-[#ea580c] mt-1">
              {slide.editionTag}
            </div>
          </div>

          {/* Saffron / Gold Festive Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#eab308] text-white font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-md shadow-orange-500/25">
            <Sparkles className="w-3.5 h-3.5 text-[#fef08a]" />
            <span dangerouslySetInnerHTML={{ __html: slide.badgeText }} />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed max-w-lg">
            {slide.offerDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
            {/* Primary Saffron Button */}
            <button
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto py-3.5 px-8 text-xs font-black uppercase tracking-wider rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Solid Outline Button */}
            <a
              href="#vehicles"
              className="w-full sm:w-auto text-center py-3.5 px-6 text-xs font-black uppercase tracking-wider rounded-xl border-2 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white transition-all bg-white/60 backdrop-blur-sm cursor-pointer shadow-sm flex items-center justify-center"
            >
              <span>{slide.secondaryCta}</span>
            </a>

            {/* Tertiary Button */}
            <button
              onClick={onOpenCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-[#15803d] hover:text-[#ea580c] transition-colors uppercase px-3 py-2 cursor-pointer"
            >
              <IndianRupee className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>SAVINGS CALCULATOR</span>
            </button>
          </div>

          {/* Key Specs with Saffron Bullet Points */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-xs font-black text-stone-800">
            {slide.features.map((feat, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 3. CIRCULAR LEFT / RIGHT CAROUSEL ARROWS ================= */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#ea580c] text-stone-800 hover:text-white border border-[#E6DAC7] flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer shadow-xl hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#ea580c] text-stone-800 hover:text-white border border-[#E6DAC7] flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer shadow-xl hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ================= 4. EXACT BOTTOM FROSTED CAPSULE PILL ================= */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-[#FDFBF7]/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-[#E6DAC7]">
          {Array.from({ length: 12 }).map((_, idx) => {
            const isActive = idx === (currentSlide * 3) % 12;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(Math.floor(idx / 3))}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-4 h-2 bg-[#ea580c]'
                    : 'w-2 h-2 bg-stone-300 hover:bg-[#ea580c]/60'
                }`}
                aria-label={`Go to slide marker ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* ================= 5. SIGNATURE BOTTOM PROGRESS BAR ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E6DAC7]/60 overflow-hidden z-20">
        <div 
          className="h-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] transition-all duration-500 ease-out" 
          style={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
