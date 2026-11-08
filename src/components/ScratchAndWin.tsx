import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Gift, 
  Check, 
  IndianRupee, 
  ShieldCheck, 
  RotateCw, 
  Trophy, 
  Star, 
  X, 
  ArrowRight,
  Tv,
  Droplets,
  Flame,
  Zap,
  Coins,
  Wind,
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

// ==========================================
// REAL VECTOR SVG APPLIANCE & GIFT ICONS (NO EMOJIS)
// ==========================================

export const WashingMachineIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="18" height="20" rx="3" />
    <circle cx="12" cy="13" r="5" />
    <path d="M12 10a3 3 0 0 1 3 3" />
    <circle cx="7" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="9.5" cy="5.5" r="0.8" fill="currentColor" />
    <line x1="14" y1="5.5" x2="17" y2="5.5" />
  </svg>
);

export const FridgeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="8" y1="5" x2="8" y2="7" />
    <line x1="8" y1="12" x2="8" y2="15" />
  </svg>
);

export const AcUnitIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="8" rx="2" />
    <line x1="6" y1="8" x2="8" y2="8" />
    <path d="M6 16c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0" />
    <path d="M7 19c1.2 1.2 2.5 1.2 3.7 0s2.5-1.2 3.7 0 2.5 1.2 3.7 0" />
  </svg>
);

export const InductionCooktopIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="2" />
    <line x1="6" y1="7" x2="8" y2="7" />
  </svg>
);

export const HelmetCoinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="11" r="6" />
    <path d="M10 5v6h6" />
    <circle cx="17" cy="16" r="4.5" />
    <path d="M15.5 16h3" />
  </svg>
);

interface ScratchAndWinProps {
  onOpenTestRide: () => void;
}

export interface PrizeItem {
  id: number;
  name: string;
  fullName: string;
  rarity: string;
  color: string;
  accentColor: string;
  iconType: 'washing' | 'tv' | 'fridge' | 'ac' | 'water' | 'induction' | 'helmet' | 'voucher';
}

// Light theme luxury wheel slices (alternating soft ivory, warm cream, sky tint & blush)
const PRIZES: PrizeItem[] = [
  { id: 1, name: 'Washing Machine', fullName: 'Fully Automatic Washing Machine', rarity: 'Mega Prize', color: '#ffffff', accentColor: '#0284c7', iconType: 'washing' },
  { id: 2, name: 'Smart LED TV', fullName: '32-inch Smart LED HD TV', rarity: 'Grand Prize', color: '#fffdf5', accentColor: '#ea580c', iconType: 'tv' },
  { id: 3, name: 'Refrigerator', fullName: 'Double-Door Refrigerator', rarity: 'Mega Prize', color: '#ffffff', accentColor: '#0d9488', iconType: 'fridge' },
  { id: 4, name: 'Inverter AC', fullName: '1.5 Ton Split Inverter AC', rarity: 'Mega Prize', color: '#f0f9ff', accentColor: '#0284c7', iconType: 'ac' },
  { id: 5, name: 'RO Purifier', fullName: 'Smart RO Water Purifier', rarity: 'Special Prize', color: '#ffffff', accentColor: '#06b6d4', iconType: 'water' },
  { id: 6, name: 'Induction Cooktop', fullName: 'Smart Induction Cooktop', rarity: 'Assured Prize', color: '#fff7ed', accentColor: '#ea580c', iconType: 'induction' },
  { id: 7, name: 'Helmet + Coin', fullName: 'ISI Certified Helmet + Pure Silver Coin', rarity: 'Assured Gift', color: '#ffffff', accentColor: '#eab308', iconType: 'helmet' },
  { id: 8, name: '₹2,999 DP Voucher', fullName: '₹2,999 Down Payment Booking Voucher', rarity: 'Diwali Dhamaka', color: '#fefce8', accentColor: '#ea580c', iconType: 'voucher' },
];

export const ScratchAndWin: React.FC<ScratchAndWinProps> = ({ onOpenTestRide }) => {
  // Mode: 'wheel' or 'scratch'
  const [activeTab, setActiveTab] = useState<'wheel' | 'scratch'>('wheel');

  // Spinning Wheel States
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<PrizeItem | null>(null);
  const [voucherCode, setVoucherCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [claimed, setClaimed] = useState(false);

  // Scratch Card States
  const [isScratched, setIsScratched] = useState(false);
  const [scratchPrize, setScratchPrize] = useState(PRIZES[0]);

  // Winning Result Modal Popup State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Body scroll lock and ESC key handling for Modal Popup
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsModalOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  // Handle Spinning Wheel Execution (Exact slice math targeting top 12 o'clock pointer)
  const handleSpinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setClaimed(false);
    setWonPrize(null);

    // Pick random prize from 8 segments
    const prizeIndex = Math.floor(Math.random() * PRIZES.length);
    const selectedPrize = PRIZES[prizeIndex];

    // Mathematical formula to align target sector at 12 o'clock (0 deg):
    // 8 segments = 45 deg each. Sector i center is i*45 + 22.5 deg.
    const currentMod = wheelRotation % 360;
    const targetAngle = 360 - (prizeIndex * 45 + 22.5);
    let delta = targetAngle - currentMod;
    if (delta <= 0) delta += 360;

    const fullSpins = 6; // 6 full 360 degree rotations
    const totalRotation = wheelRotation + (360 * fullSpins) + delta;

    setWheelRotation(totalRotation);

    // Award prize after 4.5s deceleration physics
    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
      setVoucherCode(`SM-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsModalOpen(true);

      try {
        confetti({
          particleCount: 160,
          spread: 85,
          origin: { y: 0.5 },
        });
      } catch {
        // ignore
      }
    }, 4500);
  };

  // Handle Scratch Card Reveal
  const handleRevealScratch = () => {
    if (isScratched) return;
    
    const randomPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    setScratchPrize(randomPrize);
    setIsScratched(true);
    setVoucherCode(`SM-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsModalOpen(true);

    try {
      confetti({
        particleCount: 120,
        spread: 75,
        origin: { y: 0.5 }
      });
    } catch {
      // ignore
    }
  };

  // Handle WhatsApp Claim Submission
  const handleClaimSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone || customerPhone.length < 10) return;

    setClaimed(true);

    const prizeTitle = wonPrize ? wonPrize.fullName : scratchPrize.fullName;
    const prizeRarity = wonPrize ? wonPrize.rarity : scratchPrize.rarity;

    const msg = `Hi Shree Madhav Enterprises, I have won *${prizeTitle}* (${prizeRarity}) on your Official Festive Lucky Gift Wheel!%0A%0A*Voucher Code:* ${voucherCode}%0A*Name:* ${encodeURIComponent(customerName || 'Customer')}%0A*Phone:* ${customerPhone}%0APlease book my EV Scooty under the ₹2,999 down payment festive scheme.`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  // Spin Again from Modal Popup
  const handleSpinAgainFromModal = () => {
    setIsModalOpen(false);
    setClaimed(false);
    setWonPrize(null);
    setTimeout(() => {
      handleSpinWheel();
    }, 250);
  };

  // Helper to render real SVG icon component for a prize
  const renderPrizeIcon = (type: PrizeItem['iconType'], className = "w-6 h-6") => {
    switch (type) {
      case 'washing':
        return <WashingMachineIcon className={className} />;
      case 'tv':
        return <Tv className={className} />;
      case 'fridge':
        return <FridgeIcon className={className} />;
      case 'ac':
        return <AcUnitIcon className={className} />;
      case 'water':
        return <Droplets className={className} />;
      case 'induction':
        return <InductionCooktopIcon className={className} />;
      case 'helmet':
        return <HelmetCoinIcon className={className} />;
      case 'voucher':
        return <Zap className={className} />;
    }
  };

  const currentPrize = wonPrize;

  return (
    <section 
      id="offers" 
      className="w-full bg-[#FBF7EE] text-[#1E291F] py-14 sm:py-20 lg:py-24 border-b border-[#E6DAC7] overflow-hidden relative font-sans"
      aria-label="Festive Lucky Spin Wheel & Rewards"
    >
      {/* Background Ambient Radial Highlights */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#eab308]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#ea580c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* =========================================================================
            EDGE-TO-EDGE EXPANDED GRID: MASSIVE LIGHT THEME SPINNING WHEEL + FULL WIDTH RIGHT COLUMN
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: BIGGER LIGHT THEME SPINNING DIAL ================= */}
          <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Outer Dial Container (Made significantly bigger to fill section space) */}
            <div className="relative w-[290px] h-[290px] min-[380px]:w-[340px] min-[380px]:h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[580px] lg:h-[580px] xl:w-[650px] xl:h-[650px] 2xl:w-[700px] 2xl:h-[700px] flex items-center justify-center select-none">
              
              {/* TOP SAFFRON LASER POINTER (12 o'clock landing target) */}
              <div className="absolute -top-3.5 sm:-top-5 z-40 flex flex-col items-center pointer-events-none drop-shadow-[0_4px_12px_rgba(234,88,12,0.45)]">
                <div 
                  className="w-8 h-10 sm:w-10 sm:h-12 bg-[#ea580c] border-2 border-white rounded-t-sm flex items-center justify-center shadow-2xl"
                  style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
                />
                <div className="w-4 h-4 rounded-full bg-[#eab308] -mt-3 border-2 border-[#ea580c] shadow-sm animate-pulse" />
              </div>

              {/* OUTER LIGHT THEME HOUSING RING (POLISHED LUXURY BEZEL WITH GOLD & SAFFRON ACCENTS) */}
              <div className="absolute inset-0 rounded-full border-[10px] sm:border-[16px] border-[#E6DAC7] shadow-[0_25px_60px_-15px_rgba(234,88,12,0.14)] bg-[#FDFBF7] p-2 sm:p-2.5 flex items-center justify-center ring-4 sm:ring-8 ring-[#eab308]/20">
                
                {/* 16 Precision Radial Bezel Markers in Gold and Saffron */}
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 360) / 16;
                  const isNorth = i === 0;
                  return (
                    <div
                      key={i}
                      className={`absolute rounded-full transition-all ${
                        isNorth 
                          ? 'w-2 h-4 sm:w-2.5 sm:h-5 bg-[#ea580c] shadow-[0_0_8px_#ea580c]' 
                          : 'w-1.5 h-2.5 sm:w-2 sm:h-3.5 bg-[#eab308]/90'
                      }`}
                      style={{
                        transform: `rotate(${angle}deg) translate(0, -${window.innerWidth > 640 ? 312 : 160}px)`,
                      }}
                    />
                  );
                })}

                {/* THE ROTATING 600x600 LIGHT THEME SVG DIAL */}
                <svg
                  viewBox="0 0 600 600"
                  className="w-full h-full rounded-full transition-transform duration-[4500ms]"
                  style={{
                    transform: `rotate(${wheelRotation}deg)`,
                    transitionTimingFunction: 'cubic-bezier(0.15, 0.9, 0.25, 1)',
                  }}
                >
                  {/* Outer Rim Ring */}
                  <circle cx="300" cy="300" r="290" fill="#ffffff" stroke="#f1efe9" strokeWidth="3" />

                  {/* 8 SLICES (45 DEGREES EACH) IN CRISP LIGHT THEME */}
                  {PRIZES.map((prize, idx) => {
                    const sliceAngle = 45;
                    const startAngle = idx * sliceAngle;
                    const endAngle = startAngle + sliceAngle;
                    const midAngle = startAngle + sliceAngle / 2;

                    // Polar coordinates: 0 deg is at top (12 o'clock)
                    const r = 286;
                    const x1 = 300 + r * Math.sin((startAngle * Math.PI) / 180);
                    const y1 = 300 - r * Math.cos((startAngle * Math.PI) / 180);
                    const x2 = 300 + r * Math.sin((endAngle * Math.PI) / 180);
                    const y2 = 300 - r * Math.cos((endAngle * Math.PI) / 180);

                    const pathData = `M 300 300 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;

                    return (
                      <g key={prize.id}>
                        {/* Slice Wedge with subtle warm light fill */}
                        <path
                          d={pathData}
                          fill={prize.color}
                          stroke="#eab308"
                          strokeWidth="1.5"
                          strokeOpacity="0.8"
                        />

                        {/* Concentric Golden Arcs for Luxury Festive Feel */}
                        <path
                          d={`M ${300 + 242 * Math.sin((startAngle * Math.PI) / 180)} ${300 - 242 * Math.cos((startAngle * Math.PI) / 180)} A 242 242 0 0 1 ${300 + 242 * Math.sin((endAngle * Math.PI) / 180)} ${300 - 242 * Math.cos((endAngle * Math.PI) / 180)}`}
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="1.2"
                          strokeDasharray="4 3"
                          strokeOpacity="0.6"
                        />
                        <path
                          d={`M ${300 + 175 * Math.sin((startAngle * Math.PI) / 180)} ${300 - 175 * Math.cos((startAngle * Math.PI) / 180)} A 175 175 0 0 1 ${300 + 175 * Math.sin((endAngle * Math.PI) / 180)} ${300 - 175 * Math.cos((endAngle * Math.PI) / 180)}`}
                          fill="none"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                        />

                        {/* Content inside each slice: Real SVG icon + Crisp Dark Typography */}
                        <g transform={`rotate(${midAngle} 300 300)`}>
                          
                          {/* REAL VECTOR ICON SHAPES IN VIBRANT COLORS (NO EMOJIS) */}
                          <g transform="translate(300, 72)" stroke={prize.accentColor} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            {prize.iconType === 'washing' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <rect x="3" y="2" width="18" height="20" rx="3" stroke="#0284c7" />
                                <circle cx="12" cy="13" r="5" stroke="#f59e0b" />
                                <path d="M12 10a3 3 0 0 1 3 3" />
                                <circle cx="7" cy="5.5" r="0.8" fill="#0284c7" />
                              </g>
                            )}
                            {prize.iconType === 'tv' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <rect x="2" y="4" width="20" height="14" rx="2" stroke="#ea580c" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="18" x2="12" y2="21" />
                              </g>
                            )}
                            {prize.iconType === 'fridge' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <rect x="4" y="2" width="16" height="20" rx="2" stroke="#0d9488" />
                                <line x1="4" y1="9" x2="20" y2="9" />
                                <line x1="8" y1="5" x2="8" y2="7" />
                                <line x1="8" y1="12" x2="8" y2="15" />
                              </g>
                            )}
                            {prize.iconType === 'ac' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <rect x="2" y="4" width="20" height="8" rx="2" stroke="#0284c7" />
                                <line x1="6" y1="8" x2="8" y2="8" />
                                <path d="M6 16c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0" stroke="#06b6d4" />
                              </g>
                            )}
                            {prize.iconType === 'water' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="#0284c7" fill="#0284c7" fillOpacity="0.15" />
                                <path d="M12 12a3 3 0 0 0 3 3" stroke="#f59e0b" />
                              </g>
                            )}
                            {prize.iconType === 'induction' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <rect x="3" y="4" width="18" height="16" rx="2" stroke="#ea580c" />
                                <circle cx="12" cy="12" r="5" stroke="#f97316" />
                                <circle cx="12" cy="12" r="2" stroke="#f59e0b" />
                              </g>
                            )}
                            {prize.iconType === 'helmet' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <circle cx="10" cy="11" r="6" stroke="#eab308" />
                                <path d="M10 5v6h6" stroke="#eab308" />
                                <circle cx="17" cy="16" r="4.5" stroke="#94a3b8" />
                              </g>
                            )}
                            {prize.iconType === 'voucher' && (
                              <g transform="translate(-13, -13) scale(1.15)">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#ea580c" fill="#ea580c" fillOpacity="0.25" />
                              </g>
                            )}
                          </g>

                          {/* CRISP DARK VISIBLE LABEL TEXT */}
                          <text
                            x="300"
                            y="114"
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="#111827"
                            fontSize="13"
                            fontWeight="900"
                            fontFamily="system-ui, sans-serif"
                            letterSpacing="0.6"
                          >
                            {prize.name.toUpperCase()}
                          </text>

                          {/* SUB-TAG / RARITY BADGE */}
                          <text
                            x="300"
                            y="134"
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="#ea580c"
                            fontSize="8.5"
                            fontWeight="900"
                            fontFamily="system-ui, sans-serif"
                            letterSpacing="1.2"
                          >
                            {prize.rarity.toUpperCase()}
                          </text>

                        </g>
                      </g>
                    );
                  })}

                  {/* Concentric Center Luxury Light Core */}
                  <circle cx="300" cy="300" r="115" fill="#ffffff" stroke="#f1efe9" strokeWidth="4" />
                  <circle cx="300" cy="300" r="85" fill="#fdfbf7" stroke="#eab308" strokeWidth="2.5" strokeDasharray="6 4" />
                  <circle cx="300" cy="300" r="64" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                </svg>

                {/* CENTER STATIONARY SPIN BUTTON (PRESS TO TRIGGER) */}
                <button
                  onClick={handleSpinWheel}
                  disabled={isSpinning}
                  className={`absolute z-30 w-28 h-28 sm:w-32 sm:h-32 xl:w-36 xl:h-36 rounded-full flex flex-col items-center justify-center font-black text-white uppercase tracking-widest shadow-2xl border-4 border-white transition-all cursor-pointer ${
                    isSpinning
                      ? 'bg-stone-400 cursor-not-allowed scale-95 opacity-80'
                      : 'bg-gradient-to-tr from-[#ea580c] via-[#f97316] to-[#eab308] hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(234,88,12,0.4)] ring-4 sm:ring-8 ring-[#fef08a]'
                  }`}
                  aria-label="Spin the official rewards wheel"
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#fef08a] mb-0.5" />
                  <span className="text-sm sm:text-base font-black tracking-wider">
                    {isSpinning ? 'SPINNING' : 'SPIN'}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-amber-100 font-bold -mt-0.5">CLICK ME</span>
                </button>

              </div>
            </div>

            {/* Quick Action below the dial when modal is closed */}
            {wonPrize && !isModalOpen && (
              <div className="mt-6 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E6DAC7] shadow-md flex items-center gap-3 w-full max-w-md">
                <div className="w-10 h-10 rounded-full bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center flex-shrink-0">
                  {renderPrizeIcon(wonPrize.iconType, "w-5 h-5")}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 line-clamp-1">
                    Won: {wonPrize.fullName}
                  </div>
                  <div className="text-[11px] font-mono font-bold text-[#ea580c]">
                    Voucher: {voucherCode}
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-auto px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-black uppercase transition-all shadow-sm hover:bg-[#c2410c] cursor-pointer"
                >
                  View
                </button>
              </div>
            )}

          </div>

          {/* ================= RIGHT COLUMN: EXPANDED TEXT & FULL SECTION COVERAGE ================= */}
          <div className="lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Top Festive Eyebrow Pill */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
                <span>DIWALI & FESTIVAL MAHA DHAMAKA</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                100% Assured Gifts on Spot
              </span>
            </div>

            {/* Huge Stacked Headline */}
            <div>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#15803d] tracking-normal leading-[1.12] uppercase">
                WIN ASSURED <br />
                FESTIVAL <br />
                <span className="text-[#ea580c]">GIFTS.</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#ea580c] to-[#eab308] mt-4 mb-3 rounded-full" />
            </div>

            {/* Comprehensive Descriptive Paragraph */}
            <p className="text-sm sm:text-base lg:text-[16px] text-stone-600 leading-[1.8] sm:leading-[1.85] font-normal tracking-[0.015em] pt-1">
              Book any Electric Scooty (Falcon Neo, Thunder Pro Max) or Commercial E-Rickshaw at Shree Madhav Enterprises in Jhalwa, Prayagraj, and unlock guaranteed high-value home appliances. No empty spins, zero luck required — every single customer takes home an assured reward under our ₹2,999 down payment festive scheme.
            </p>

            {/* Scheme Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E6DAC7] text-stone-800 text-[11px] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span>8 Assured Prizes</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E6DAC7] text-stone-800 text-[11px] font-bold shadow-xs">
                <span>₹2,999 Lowest DP</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E6DAC7] text-stone-800 text-[11px] font-bold shadow-xs">
                <span>100% Assured Code</span>
              </span>
            </div>

            {/* Action Buttons: SPIN THE WHEEL NOW */}
            <div className="pt-2">
              <button
                onClick={handleSpinWheel}
                disabled={isSpinning}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95"
              >
                <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
                <span>{isSpinning ? 'SPINNING DIAL...' : 'SPIN THE WHEEL NOW'}</span>
              </button>
            </div>

            {/* Showroom Verification Stamp */}
            <div className="pt-4 border-t border-[#E6DAC7] flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
              <span className="flex items-center gap-1.5 font-bold text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Authorized Offer &bull; Shree Madhav Enterprises</span>
              </span>
              <span className="font-bold text-[#14532d] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Shaha Urf Pipal Gaon, Jhalwa</span>
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          WINNING PRIZE MODAL POPUP
         ========================================================================= */}
      {isModalOpen && currentPrize && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08120B]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="win-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-[480px] my-auto space-y-3.5 animate-in zoom-in-95 duration-200">
            
            {/* Circular Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-2 sm:-right-3 z-30 w-8 h-8 rounded-full bg-[#FDFBF7] text-stone-600 hover:text-black shadow-xl border border-[#E6DAC7] flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              aria-label="Close winning prize voucher modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* TOP CARD: GOLD BORDERED CONGRATULATIONS VOUCHER */}
            <div className="bg-[#FDFBF7] rounded-2xl border-2 border-[#eab308] p-6 sm:p-7 text-center shadow-2xl relative">
              
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#ea580c]/10 border border-[#ea580c]/20 flex items-center justify-center text-[#ea580c] shadow-sm">
                {renderPrizeIcon(currentPrize.iconType, "w-8 h-8")}
              </div>

              <div className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#ea580c] flex items-center justify-center gap-1.5 mb-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#eab308]" />
                <span>CONGRATULATIONS! YOU WON:</span>
              </div>

              <h3 
                id="win-modal-title"
                className="text-2xl sm:text-3xl font-black text-[#14532d] tracking-tight uppercase leading-snug mb-2"
              >
                {currentPrize.fullName}
              </h3>

              <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
                Applicable on booking any EV Scooty or E-Rickshaw at Shree Madhav Enterprises Showroom!
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#FBF7EE] border border-[#E6DAC7] text-xs shadow-xs">
                <span className="font-bold text-stone-500 tracking-wider uppercase text-[11px]">VOUCHER CODE :</span>
                <span className="font-mono font-black text-sm text-[#ea580c] tracking-wider">{voucherCode}</span>
              </div>

            </div>

            {/* BOTTOM CARD: DETAILS & WHATSAPP CLAIM FORM */}
            <div className="bg-[#FDFBF7] rounded-2xl border border-[#E6DAC7] shadow-2xl p-5 sm:p-6 text-left">
              
              {!claimed ? (
                <form onSubmit={handleClaimSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="modal-customer-name" className="block text-xs font-bold text-stone-800 mb-1.5">
                        Your Name:
                      </label>
                      <input
                        id="modal-customer-name"
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E6DAC7] text-xs text-stone-800 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-customer-phone" className="block text-xs font-bold text-stone-800 mb-1.5">
                        Mobile Number (WhatsApp):
                      </label>
                      <input
                        id="modal-customer-phone"
                        type="tel"
                        inputMode="numeric"
                        placeholder="e.g. 9876543210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E6DAC7] text-xs text-stone-800 focus:outline-none focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Sparkles className="w-4 h-4 text-[#fef08a]" />
                    <span>CLAIM GIFT VOUCHER ON WHATSAPP</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSpinAgainFromModal}
                    className="w-full text-center text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors pt-1 cursor-pointer"
                  >
                    Spin Again for Another Prize &gt;
                  </button>
                </form>
              ) : (
                <div className="py-4 text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Voucher Sent via WhatsApp!
                  </h4>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto">
                    Show your voucher code <span className="font-mono font-bold text-stone-800">{voucherCode}</span> at Shree Madhav Enterprises in Jhalwa to collect your reward upon vehicle booking.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-2 rounded-lg bg-[#14532d] text-white text-xs font-bold uppercase transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
