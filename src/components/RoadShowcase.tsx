import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  MessageCircle, 
  RotateCcw, 
  ArrowUpRight, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface RoadShowcaseProps {
  onOpenTestRide?: (modelId?: string) => void;
}

export const RoadShowcase: React.FC<RoadShowcaseProps> = ({ onOpenTestRide }) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Steps: 0 = Scooty, 1 = Rickshaw, 2 = Showroom
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isVehicleIn, setIsVehicleIn] = useState<boolean>(false);
  const [isVehicleOut, setIsVehicleOut] = useState<boolean>(false);
  const [revealedChars, setRevealedChars] = useState<number>(0);
  const [isTextHiding, setIsTextHiding] = useState<boolean>(false);
  const [isSubTextVisible, setIsSubTextVisible] = useState<boolean>(false);
  const [isShowroomActive, setIsShowroomActive] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const loopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slidesData = [
    {
      id: 'scooty',
      titleLine1: 'RIDE',
      titleLine2: 'GREEN',
      color: '#ea580c',
      label: 'E-Scooty Pro',
      badge: 'Zero Emission • 120 KM Range',
      sub: (
        <>
          <strong className="text-[#14532d] font-bold">E-Scooty</strong> — Zero petrol queues, whisper-quiet motor, and up to 120 km range. Down payment starts from just ₹2,999 on spot in Prayagraj.
        </>
      ),
    },
    {
      id: 'rickshaw',
      titleLine1: 'GROW',
      titleLine2: 'DAILY',
      color: '#15803d',
      label: 'Commercial E-Rickshaw',
      badge: 'Rozgaar Series • Earn ₹45k+/mo',
      sub: (
        <>
          <strong className="text-[#ea580c] font-bold">E-Rickshaw</strong> — Power your daily income with electric efficiency. 4+1 passenger capacity, low running cost (under ₹45/day), and fast bank loans.
        </>
      ),
    },
  ];

  const currentSlide = slidesData[currentStep % slidesData.length];

  // Character list for 3D flip animation
  const currentChars = currentSlide
    ? `${currentSlide.titleLine1}\n${currentSlide.titleLine2}`.split('')
    : [];

  const runSlide = (index: number) => {
    // Clear any pending timers
    if (loopTimerRef.current) clearTimeout(loopTimerRef.current);

    if (index === 2) {
      // Showroom Step
      setCurrentStep(2);
      setIsVehicleIn(false);
      setIsVehicleOut(false);
      setRevealedChars(0);
      setIsSubTextVisible(false);
      setIsShowroomActive(true);

      // After 8 seconds, loop back to slide 0
      loopTimerRef.current = setTimeout(() => {
        setIsShowroomActive(false);
        runSlide(0);
      }, 8500);
      return;
    }

    // Vehicle Steps (0 or 1)
    setIsShowroomActive(false);
    setCurrentStep(index);
    setIsVehicleOut(false);
    setIsVehicleIn(true);
    setRevealedChars(0);
    setIsTextHiding(false);
    setIsSubTextVisible(false);

    // Stagger character flip in after vehicle starts driving up
    const charCount = `${slidesData[index].titleLine1}\n${slidesData[index].titleLine2}`.length;
    
    // Reveal letters 1 by 1
    for (let i = 1; i <= charCount; i++) {
      setTimeout(() => {
        setRevealedChars(i);
      }, 700 + i * 90);
    }

    // Show subtext after headline completes
    setTimeout(() => {
      setIsSubTextVisible(true);
    }, 700 + charCount * 90 + 250);

    // After 4.6s: flip text out & vehicle drives out
    setTimeout(() => {
      setIsTextHiding(true);
      setIsSubTextVisible(false);
      setIsVehicleIn(false);
      setIsVehicleOut(true);
    }, 4600);

    // Advance to next step at 6.4s
    loopTimerRef.current = setTimeout(() => {
      runSlide(index + 1);
    }, 6400);
  };

  const handleManualSelect = (idx: number) => {
    if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
    runSlide(idx);
  };

  // IntersectionObserver to auto-start when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          runSlide(0);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current);
      observer.disconnect();
    };
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      id="road-showcase"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FBF7EE] via-[#FDFBF7] to-[#F5ECDD] border-t-2 border-b-2 border-[#E6DAC7] select-none font-sans"
      aria-label="The Road to Shree Madhav Electric Expressway"
    >
      <style>{`
        @keyframes highwayDashMove {
          0% { top: -200%; }
          100% { top: 0%; }
        }
        @keyframes vehicleDriveIn {
          0% { bottom: -65%; }
          100% { bottom: 25%; }
        }
        @keyframes vehicleDriveOut {
          0% { bottom: 25%; }
          100% { bottom: 125%; }
        }
        .highway-dashes {
          animation: highwayDashMove 0.85s linear infinite;
        }
        .vehicle-drive-in {
          animation: vehicleDriveIn 2.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .vehicle-drive-out {
          animation: vehicleDriveOut 1.7s cubic-bezier(0.5, 0, 1, 0.5) forwards;
        }
        .flip-char-3d {
          display: inline-block;
          transform-origin: center bottom;
          perspective: 800px;
        }
      `}</style>

      {/* Main Split Layout: 40% Highway on Left, 60% Interactive Kinetic Canvas on Right */}
      <div className="w-full flex flex-col md:flex-row min-h-[580px] md:min-h-[660px] lg:min-h-[720px] max-h-[900px]">
        
        {/* ================= LEFT COLUMN: THE HIGHWAY ROAD (40% Width) ================= */}
        <div className="relative w-full md:w-[40%] h-[300px] sm:h-[360px] md:h-auto overflow-hidden bg-gradient-to-b from-[#FBF7EE] to-[#E6DAC7] border-b-2 md:border-b-0 md:border-r-2 border-[#E6DAC7] flex items-center justify-center">
          
          {/* Vertical Saffron Highway Strip */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[72%] sm:w-[68%] md:w-[74%] bg-gradient-to-r from-[#c2410c] via-[#ea580c] to-[#c2410c] shadow-[inset_0_0_30px_rgba(0,0,0,0.25)]">
            
            {/* Road Curbs (Textured side lines) */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-white/40 border-r border-black/20" />
            <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white/40 border-l border-black/20" />

            {/* Infinite Moving White Highway Dashes */}
            <div
              className="highway-dashes absolute left-1/2 -translate-x-1/2 w-3 sm:w-3.5 h-[200%] z-10 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 28px, transparent 28px, transparent 65px)',
              }}
            />
          </div>

          {/* Road Asphalt Edge Shadows */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FBF7EE]/40 via-transparent to-[#E6DAC7]/40" />

          {/* Animated Vehicle Track */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] sm:max-w-[340px] md:max-w-[380px] z-20 pointer-events-none ${
              isVehicleIn
                ? 'vehicle-drive-in'
                : isVehicleOut
                ? 'vehicle-drive-out'
                : 'bottom-[-70%]'
            }`}
          >
            {/* Top-Down Vehicle SVGs */}
            {currentStep === 0 && (
              <ScootyTopSvg />
            )}
            {currentStep === 1 && (
              <RickshawTopSvg />
            )}
          </div>

          {/* Bottom Left Mode Capsule */}
          <div className="absolute bottom-4 left-4 z-30 bg-[#08120B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#eab308]/40 text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping" />
            <span>Prayagraj Highway Loop</span>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: KINETIC 3D CONTENT & SHOWROOM DESTINATION (60% Width) ================= */}
        <div className="relative w-full md:w-[60%] flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-16 overflow-hidden bg-[#FDFBF7]">
          
          {/* Subtle Background Watermark */}
          <div className="absolute -top-6 right-6 pointer-events-none select-none z-0 opacity-[0.04]">
            <span className="font-['Oswald'] font-black text-8xl md:text-9xl text-[#14532d] uppercase italic">
              MADHAV
            </span>
          </div>

          {/* Content Mode A: Vehicle Kinetic 3D Headline */}
          {!isShowroomActive ? (
            <div className="relative z-10 flex flex-col justify-center h-full max-w-xl">
              
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#ea580c] font-mono">
                  SHREE MADHAV ENTERPRISES &bull; {currentSlide.label}
                </span>
              </div>

              {/* Character by Character 3D Flipping Headline */}
              <h2 className="font-['Oswald'] font-extrabold italic uppercase tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[104px] leading-[0.92] text-left">
                {currentChars.map((ch, idx) => {
                  if (ch === '\n') {
                    return <br key={`br-${idx}`} />;
                  }

                  const isRevealed = idx < revealedChars && !isTextHiding;

                  return (
                    <span
                      key={idx}
                      className="flip-char-3d transition-all duration-300"
                      style={{
                        color: currentSlide.color,
                        opacity: isRevealed ? 1 : 0,
                        transform: isRevealed
                          ? 'rotateX(0deg)'
                          : isTextHiding
                          ? 'rotateX(-90deg)'
                          : 'rotateX(90deg)',
                        marginRight: ch === ' ' ? '0.28em' : '0.01em',
                      }}
                    >
                      {ch}
                    </span>
                  );
                })}
              </h2>

              {/* Subtitle & Specs Narrative */}
              <div
                className={`mt-6 text-sm sm:text-base text-stone-700 leading-relaxed max-w-lg transition-all duration-500 ${
                  isSubTextVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <p>{currentSlide.sub}</p>

                {/* Live Specification Pill Strip */}
                <div className="flex flex-wrap items-center gap-2.5 mt-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FBF7EE] border border-[#E6DAC7] text-xs font-bold text-[#14532d] flex items-center gap-1.5 shadow-xs">
                    <Zap className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>{currentSlide.badge}</span>
                  </span>

                  <button
                    onClick={() => onOpenTestRide?.()}
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ea580c] to-[#15803d] hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Test Ride Free &rarr;
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Content Mode B: Showroom Arrival Destination Panel */
            <div className="relative z-10 flex flex-col justify-center space-y-4 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Showroom Header */}
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-black italic text-[#15803d] text-xs uppercase tracking-tight">
                    YOU HAVE ARRIVED AT
                  </span>
                  <span className="bg-[#ea580c] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] uppercase tracking-wider transform -skew-x-12 shadow-xs">
                    THE SHOWROOM
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#15803d] uppercase tracking-tight leading-tight">
                  IN THE HEART OF <span className="text-[#ea580c]">JHALWA, PRAYAGRAJ.</span>
                </h3>
              </div>

              {/* Illuminated Brand Signboard Banner */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] text-white shadow-lg shadow-orange-900/15 border border-[#fef08a]/40 w-fit">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0">
                  <Zap className="w-4 h-4 text-[#fef08a] fill-[#fef08a]" />
                </div>
                <span className="text-base sm:text-lg font-black uppercase tracking-wider text-white">
                  {SHOWROOM_INFO.name}
                </span>
              </div>

              {/* Address Details */}
              <div className="text-xs sm:text-[13px] text-stone-700 leading-relaxed space-y-1">
                <p className="font-bold text-[#14532d]">
                  Shaha Urf Pipal Gaon, Beside Jhalwa Crossing,
                </p>
                <p>
                  Jhalwa, Prayagraj, Uttar Pradesh 211012
                </p>
                <p className="text-[11px] font-mono text-[#ea580c] font-bold">
                  Landmark: Near IIIT-Allahabad Approach Road &bull; Open All 7 Days: 9:30 AM – 8:30 PM
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SHOWROOM_INFO.googleMapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  <span>Get directions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hi%20Shree%20Madhav%20Enterprises,%20I%20am%20visiting%20the%20showroom.%20Please%20share%20location%20pin.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#FDFBF7] hover:bg-[#FBF7EE] text-[#15803d] font-bold text-xs border border-[#E6DAC7] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#ea580c]" />
                  <span>WhatsApp Pin</span>
                </a>

                <a
                  href={`tel:${SHOWROOM_INFO.phone}`}
                  className="px-4 py-2.5 rounded-full bg-[#FDFBF7] hover:bg-[#FBF7EE] text-[#15803d] font-bold text-xs border border-[#E6DAC7] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#eab308]" />
                  <span>Call {SHOWROOM_INFO.phoneFormatted}</span>
                </a>
              </div>

              {/* Showroom Map Preview */}
              <div className="w-full h-36 rounded-xl overflow-hidden border border-[#E6DAC7] shadow-sm">
                <iframe
                  title="Shree Madhav Showroom Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=81.7450%2C25.4050%2C81.8650%2C25.4650&layer=mapnik&marker=25.4320%2C81.7780"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

            </div>
          )}

          {/* Bottom Interactive Step Switcher & Replay Button */}
          <div className="pt-6 mt-6 border-t border-[#E6DAC7] flex flex-wrap items-center justify-between gap-3 relative z-10">
            {/* 3 Steps Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleManualSelect(0)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currentStep === 0 && !isShowroomActive
                    ? 'bg-[#ea580c] text-white shadow-xs'
                    : 'bg-[#FBF7EE] text-stone-600 hover:text-[#ea580c] border border-[#E6DAC7]'
                }`}
              >
                01 E-Scooty
              </button>

              <button
                onClick={() => handleManualSelect(1)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currentStep === 1 && !isShowroomActive
                    ? 'bg-[#15803d] text-white shadow-xs'
                    : 'bg-[#FBF7EE] text-stone-600 hover:text-[#15803d] border border-[#E6DAC7]'
                }`}
              >
                02 E-Rickshaw
              </button>

              <button
                onClick={() => handleManualSelect(2)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isShowroomActive
                    ? 'bg-gradient-to-r from-[#ea580c] to-[#15803d] text-white shadow-xs'
                    : 'bg-[#FBF7EE] text-stone-600 hover:text-[#15803d] border border-[#E6DAC7]'
                }`}
              >
                03 Jhalwa Showroom
              </button>
            </div>

            {/* Replay Button */}
            <button
              onClick={() => handleManualSelect(0)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803d] hover:bg-[#ea580c] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              aria-label="Replay Highway Animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

// ==========================================
// TOP-DOWN SVG VECTORS (FROM test-section.html)
// ==========================================

const ScootyTopSvg = () => (
  <svg viewBox="0 0 300 620" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
    <defs>
      <linearGradient id="scootyRed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#9a3412" />
      </linearGradient>
      <linearGradient id="scootyDark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c2410c" />
        <stop offset="100%" stopColor="#7c2d12" />
      </linearGradient>
      <linearGradient id="scootySeat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a3a3a" />
        <stop offset="100%" stopColor="#1a1a1a" />
      </linearGradient>
      <linearGradient id="scootyTire" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" />
        <stop offset="50%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#333" />
      </linearGradient>
    </defs>
    {/* Front tire */}
    <ellipse cx="150" cy="28" rx="22" ry="28" fill="url(#scootyTire)" />
    <ellipse cx="150" cy="28" rx="18" ry="22" fill="#2a2a2a" />
    <line x1="133" y1="18" x2="133" y2="38" stroke="#3a3a3a" strokeWidth="1.5" />
    <line x1="167" y1="18" x2="167" y2="38" stroke="#3a3a3a" strokeWidth="1.5" />
    {/* Front cowl */}
    <path d="M120 50 Q115 42 125 32 Q140 22 150 20 Q160 22 175 32 Q185 42 180 50 L178 68 Q170 80 150 85 Q130 80 122 68 Z" fill="url(#scootyRed)" />
    {/* Headlight */}
    <ellipse cx="150" cy="52" rx="18" ry="10" fill="#fef08a" opacity="0.8" />
    <ellipse cx="150" cy="52" rx="12" ry="6" fill="#ffffff" opacity="0.9" />
    {/* Upper front red body */}
    <path d="M125 68 Q122 85 124 105 L176 105 Q178 85 175 68 Q170 80 150 85 Q130 80 125 68Z" fill="url(#scootyRed)" />
    {/* TFT Display */}
    <rect x="137" y="92" width="26" height="14" rx="3" fill="#111" />
    <rect x="139" y="94" width="22" height="10" rx="2" fill="#064e3b" />
    <rect x="141" y="96" width="8" height="6" rx="1" fill="#10b981" opacity="0.8" />
    <rect x="151" y="96" width="8" height="6" rx="1" fill="#f59e0b" opacity="0.8" />
    {/* Handlebar */}
    <rect x="48" y="108" width="204" height="7" rx="3.5" fill="#2a2a2a" />
    <path d="M48 111 Q30 112 18 110 Q8 108 5 104" fill="none" stroke="#333" strokeWidth="6" strokeLinecap="round" />
    <rect x="2" y="97" width="22" height="12" rx="4" fill="#1a1a1a" />
    {/* Mirrors */}
    <ellipse cx="8" cy="90" rx="16" ry="9" fill="#3a3a3a" stroke="#2a2a2a" strokeWidth="1.5" />
    <ellipse cx="8" cy="90" rx="12" ry="6" fill="#6ba2c8" />
    <path d="M252 111 Q270 112 282 110 Q292 108 295 104" fill="none" stroke="#333" strokeWidth="6" strokeLinecap="round" />
    <rect x="276" y="97" width="22" height="12" rx="4" fill="#1a1a1a" />
    <ellipse cx="292" cy="90" rx="16" ry="9" fill="#3a3a3a" stroke="#2a2a2a" strokeWidth="1.5" />
    <ellipse cx="292" cy="90" rx="12" ry="6" fill="#6ba2c8" />
    {/* Front body apron */}
    <path d="M118 115 Q112 135 110 165 L108 200 Q108 220 115 235 L185 235 Q192 220 192 200 L190 165 Q188 135 182 115 Z" fill="url(#scootyRed)" />
    <path d="M150 120 L138 180 L150 190 L162 180 Z" fill="url(#scootyDark)" opacity="0.6" />
    {/* EV Green Badge */}
    <rect x="138" y="205" width="24" height="11" rx="3" fill="#15803d" />
    <text x="150" y="214" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="7" fontWeight="700">EV</text>
    {/* Footboard */}
    <path d="M108 235 Q100 238 96 245 L96 280 Q98 290 108 292 L192 292 Q202 290 204 280 L204 245 Q200 238 192 235 Z" fill="#2a2a2a" />
    <path d="M104 242 Q100 245 99 252 L99 275 Q100 282 106 285 L194 285 Q200 282 201 275 L201 252 Q200 245 196 242 Z" fill="#383838" />
    {/* Seat */}
    <path d="M108 292 Q100 300 96 318 Q92 340 95 370 Q98 400 108 420 Q118 435 135 442 L165 442 Q182 435 192 420 Q202 400 205 370 Q208 340 204 318 Q200 300 192 292 Z" fill="url(#scootySeat)" />
    <path d="M150 300 L150 430" stroke="#555" strokeWidth="1" strokeDasharray="8 5" />
    {/* Rear body */}
    <path d="M105 435 Q100 440 98 450 L96 470 Q96 485 100 495 L104 505 Q110 520 125 528 L150 535 L175 528 Q190 520 196 505 L200 495 Q204 485 204 470 L202 450 Q200 440 195 435 Z" fill="url(#scootyRed)" />
    {/* Tail light */}
    <rect x="115" y="525" width="70" height="6" rx="3" fill="#ea580c" />
    <rect x="125" y="526" width="50" height="4" rx="2" fill="#facc15" opacity="0.8" />
    {/* Rear tire */}
    <ellipse cx="150" cy="575" rx="22" ry="26" fill="url(#scootyTire)" />
    <ellipse cx="150" cy="575" rx="18" ry="20" fill="#2a2a2a" />
    {/* Ground shadow */}
    <ellipse cx="150" cy="600" rx="80" ry="8" fill="rgba(0,0,0,0.15)" />
  </svg>
);

const RickshawTopSvg = () => (
  <svg viewBox="0 0 240 680" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
    <defs>
      <linearGradient id="rickshawYellow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="rickshawRoof" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>

    {/* Front Tire */}
    <ellipse cx="120" cy="18" rx="14" ry="18" fill="#2a2a2a" />
    <ellipse cx="120" cy="18" rx="10" ry="13" fill="#1f1f1f" />
    <rect x="116" y="34" width="8" height="35" rx="2" fill="#b45309" />
    <circle cx="120" cy="48" r="11" fill="#3a3a3a" />
    <circle cx="120" cy="48" r="7" fill="#fef08a" />

    {/* Handlebars */}
    <path d="M72 68 Q95 62 120 64 Q145 62 168 68" fill="none" stroke="#3a3a3a" strokeWidth="4.5" strokeLinecap="round" />
    <rect x="62" y="63" width="14" height="9" rx="3" fill="#1a1a1a" />
    <rect x="164" y="63" width="14" height="9" rx="3" fill="#1a1a1a" />

    {/* Driver Front Panel */}
    <path d="M90 72 Q88 80 86 95 L86 115 Q88 120 95 122 L145 122 Q152 120 154 115 L154 95 Q152 80 150 72 Z" fill="url(#rickshawYellow)" />

    {/* Main Sky-Blue Canopy Roof */}
    <rect x="62" y="120" width="116" height="410" rx="14" fill="url(#rickshawRoof)" stroke="#0284c7" strokeWidth="1.5" />
    <line x1="95" y1="130" x2="95" y2="522" stroke="#38bdf8" strokeWidth="1.8" />
    <line x1="120" y1="128" x2="120" y2="524" stroke="#e0f2fe" strokeWidth="1.2" opacity="0.6" />
    <line x1="145" y1="130" x2="145" y2="522" stroke="#38bdf8" strokeWidth="1.8" />

    {/* EV Badge */}
    <rect x="88" y="148" width="64" height="18" rx="4" fill="#15803d" />
    <text x="120" y="161" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="10" fontWeight="700">E-RICKSHAW</text>

    {/* Side Rail Pillars */}
    <rect x="56" y="135" width="6" height="395" rx="2" fill="#0369a1" />
    <rect x="178" y="135" width="6" height="395" rx="2" fill="#0369a1" />
    <rect x="54" y="280" width="132" height="4" rx="2" fill="#d1d5db" />
    <rect x="54" y="420" width="132" height="4" rx="2" fill="#d1d5db" />

    {/* Passenger Seats */}
    <rect x="48" y="185" width="12" height="85" rx="4" fill="#1a1a1a" />
    <rect x="48" y="290" width="12" height="85" rx="4" fill="#1a1a1a" />
    <rect x="48" y="430" width="12" height="70" rx="4" fill="#1a1a1a" />
    <rect x="180" y="185" width="12" height="85" rx="4" fill="#1a1a1a" />
    <rect x="180" y="290" width="12" height="85" rx="4" fill="#1a1a1a" />
    <rect x="180" y="430" width="12" height="70" rx="4" fill="#1a1a1a" />

    {/* Rear Body */}
    <path d="M62 530 L62 548 Q62 558 72 560 L168 560 Q178 558 178 548 L178 530" fill="url(#rickshawYellow)" />
    <circle cx="78" cy="552" r="6" fill="#ea580c" />
    <circle cx="162" cy="552" r="6" fill="#ea580c" />

    {/* Rear Axle + Wheels */}
    <rect x="25" y="555" width="190" height="5" rx="2.5" fill="#555" />
    <ellipse cx="28" cy="568" rx="22" ry="30" fill="#2a2a2a" />
    <ellipse cx="28" cy="568" rx="16" ry="22" fill="#1a1a1a" />
    <ellipse cx="212" cy="568" rx="22" ry="30" fill="#2a2a2a" />
    <ellipse cx="212" cy="568" rx="16" ry="22" fill="#1a1a1a" />

    {/* Ground Shadow */}
    <ellipse cx="120" cy="608" rx="100" ry="8" fill="rgba(0,0,0,0.15)" />
  </svg>
);
