import React, { useState } from 'react';
import { ArrowRight, RefreshCw, X, ShieldCheck, Zap } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

export const BatteryExchange: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [oldBatteryType, setOldBatteryType] = useState('lead-acid-48v');
  const [estimatedDiscount, setEstimatedDiscount] = useState(4500);

  const handleTypeChange = (val: string) => {
    setOldBatteryType(val);
    if (val === 'lead-acid-48v') setEstimatedDiscount(4000);
    else if (val === 'lead-acid-60v') setEstimatedDiscount(5000);
    else if (val === 'lead-acid-72v') setEstimatedDiscount(6000);
    else setEstimatedDiscount(3500);
  };

  const handleWhatsAppExchange = () => {
    const text = `Hi Shree Madhav Enterprises, I want to exchange my old battery for a high-range Lithium-Ion LFP pack under your Exchange & Upgrade scheme.%0A%0A*Selected Battery:* ${oldBatteryType}%0A*Estimated Buyback Discount:* Up to ₹${estimatedDiscount.toLocaleString('en-IN')}%0A%0APlease check stock and arrange free load testing at your Jhalwa showroom.`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="battery-exchange" 
      className="w-full bg-[#FBF7EE] text-[#1E291F] font-sans selection:bg-[#ea580c] selection:text-white overflow-hidden border-t-2 border-b-2 border-[#E6DAC7]"
      aria-label="Exchange and Upgrade to Lithium-Ion Power"
    >
      {/* Swiss Architectural Grid (Spans Full Width without outer margin/padding boxes) */}
      <div className="w-full bg-[#FBF7EE]">
        
        {/* ================= TOP GRID (2 COLUMNS: HEADLINES + MEDIA) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-[#E6DAC7] items-stretch">
          
          {/* LEFT COLUMN: 3 STACKED ROWS WITH GIANT HEADLINES + ACTION BAR (65% WIDTH) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            {/* Row 1 */}
            <div className="p-5 sm:p-10 lg:p-12 xl:p-14 border-b-2 border-[#E6DAC7] bg-[#FDFBF7]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
                SHREE MADHAV ENTERPRISES &bull; BATTERY TRADE-IN PROGRAM
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-black uppercase tracking-tight text-[#15803d] leading-none break-words">
                EXCHANGE &
              </h2>
            </div>

            {/* Row 2 */}
            <div className="p-5 sm:p-10 lg:p-12 xl:p-14 border-b-2 border-[#E6DAC7] bg-[#FDFBF7]">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-black uppercase tracking-tight text-[#ea580c] leading-none break-words">
                UPGRADE TO LITHIUM-ION
              </h2>
            </div>

            {/* Row 3 */}
            <div className="p-5 sm:p-10 lg:p-12 xl:p-14 border-b-2 border-[#E6DAC7] bg-[#FDFBF7]">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-black uppercase tracking-tight text-[#15803d] leading-none break-words">
                POWER THAT ENDURES.
              </h2>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-wrap items-center justify-between gap-4 bg-[#FBF7EE]">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleWhatsAppExchange}
                  className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-900/20 hover:scale-105 cursor-pointer group"
                >
                  <span>LAUNCH ON WHATSAPP</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-white">→</span>
                </button>

                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FDFBF7] hover:bg-[#15803d] hover:text-white text-[#15803d] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#15803d] transition-colors cursor-pointer shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span>Calculate Old Battery Value</span>
                </button>
              </div>

              <div className="text-xs font-mono font-bold text-[#15803d] uppercase tracking-wider">
                ★ Up to ₹6,000* Trade-In Discount &bull; 3-Yr Warranty
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 8-PETAL ASTERISK + EV BATTERY & CHARGING VISUAL (35% WIDTH) */}
          <div className="lg:col-span-4 border-t-2 lg:border-t-0 lg:border-l-2 border-[#E6DAC7] flex flex-col justify-between bg-[#FDFBF7]">
            
            {/* Top Sub-Compartment: Centered 8-Petal Geometric Asterisk + Certification */}
            <div className="p-8 sm:p-10 lg:p-12 border-b-2 border-[#E6DAC7] bg-[#FDFBF7] flex flex-col items-center justify-center text-center group">
              <svg 
                viewBox="0 0 100 100" 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 fill-[#15803d] transition-transform duration-700 group-hover:rotate-90 group-hover:scale-105 mb-4"
                aria-label="Geometric Emblem"
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <rect
                    key={angle}
                    x="46"
                    y="10"
                    width="8"
                    height="32"
                    rx="4"
                    transform={`rotate(${angle} 50 50)`}
                  />
                ))}
                <circle cx="50" cy="50" r="7" fill="#15803d" />
              </svg>
              <div className="text-[11px] font-mono font-black uppercase tracking-widest text-[#15803d]">
                SHREE MADHAV ENTERPRISES
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mt-1">
                JHALWA SHOWROOM &bull; PRAYAGRAJ
              </div>
            </div>

            {/* Bottom Sub-Compartment: Client Video (Autoplay, Loop, Muted) */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] overflow-hidden bg-black group">
              <video
                src="/vdo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/vdo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Floating White Pill Badge */}
              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-[#FDFBF7] text-[#14532d] font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-2xl border-2 border-[#eab308]/60 inline-block">
                  GRADE-A LFP CELL LOAD TESTING &amp; UPGRADE
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM GRID (2 SUB-COLUMNS: STANDARDS + EDITORIAL COPY) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* BOTTOM LEFT COLUMN: BATTERY UPGRADE STANDARDS (25% WIDTH) */}
          <div className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-[#E6DAC7] p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#FDFBF7] min-h-[220px]">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                BATTERY UPGRADE
              </div>
              <div className="text-xs sm:text-sm font-mono font-black uppercase tracking-widest text-[#ea580c] leading-relaxed">
                L I T H I U M · I R O N · P H O S P H A T E
              </div>
            </div>

            <div className="pt-8 border-t border-[#E6DAC7] mt-6">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-1">
                WARRANTY STANDARD
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold uppercase text-[#14532d] tracking-wider">
                3 YEARS 100% REPLACEMENT
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT COLUMN: BOLD HEADLINE & 2 EDITORIAL PROSE COLUMNS (75% WIDTH) */}
          <div className="lg:col-span-9 flex flex-col justify-between bg-[#FDFBF7]">
            
            {/* Top Sub-Row: High-Impact Bold Uppercase Headline */}
            <div className="p-6 sm:p-8 lg:p-10 border-b-2 border-[#E6DAC7] bg-[#FDFBF7]">
              <h3 className="text-lg sm:text-2xl lg:text-[26px] xl:text-[30px] font-black uppercase text-[#14532d] leading-snug tracking-tight">
                REPLACE SLOW, HEAVY LEAD-ACID BATTERIES WITH AUTOMOTIVE-GRADE LITHIUM LFP. DOUBLE YOUR RANGE, CUT CHARGING TIME TO 3 HOURS, AND PREVENT YEARLY REPLACEMENT EXPENSES.
              </h3>
            </div>

            {/* Bottom Sub-Row: 2 Editorial Prose Columns Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-8 lg:p-10 gap-6 sm:gap-8 lg:gap-12 text-xs sm:text-sm leading-relaxed text-[#212121]">
              {/* Left Column: Italic Prose Lead */}
              <div>
                <p className="italic font-serif text-sm sm:text-base leading-relaxed text-stone-800">
                  Lead-acid batteries lose up to 40% capacity in 45°C Prayagraj summers and require expensive replacements every 12 to 14 months. Our Grade-A Lithium-ion (LFP) packs weigh 70% less, deliver over 2,500 charging cycles (5-7 years life), and handle extreme weather with intelligent Smart BMS thermal protection.
                </p>
              </div>

              {/* Right Column: Explanatory Technical Execution */}
              <div>
                <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
                  Bring any 48V, 60V, or 72V lead-acid battery set or degraded lithium battery to Shree Madhav Enterprises in Shaha Urf Pipal Gaon (Jhalwa). Our technicians perform free computerized cell load testing and apply an instant discount of up to ₹6,000* directly towards your new battery pack with same-day installation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= TRADE-IN CALCULATOR MODAL: DEEP EMERALD DARKROOM BACKDROP ================= */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08120B]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FDFBF7] border-2 border-[#eab308] p-6 sm:p-8 rounded-2xl shadow-2xl">
            <button
              onClick={() => setIsCalculatorOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              aria-label="Close Calculator"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <RefreshCw className="w-5 h-5 text-[#ea580c]" />
              <h3 className="text-lg font-black uppercase text-[#14532d]">
                Old Battery Buyback Estimator
              </h3>
            </div>

            <p className="text-xs text-stone-600 mb-4">
              Select your existing battery set to calculate your trade-in discount at our Jhalwa showroom.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="battery-modal-select" className="block text-xs font-bold text-stone-800 uppercase mb-1.5">
                  Select Battery Type:
                </label>
                <select
                  id="battery-modal-select"
                  value={oldBatteryType}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E6DAC7] text-xs font-bold bg-white text-stone-800 focus:outline-none focus:border-[#ea580c] cursor-pointer"
                >
                  <option value="lead-acid-48v">48V Lead-Acid Battery Set (4 Units) — Up to ₹4,000 Off</option>
                  <option value="lead-acid-60v">60V Lead-Acid Battery Set (5 Units) — Up to ₹5,000 Off</option>
                  <option value="lead-acid-72v">72V Commercial E-Rickshaw Battery Set — Up to ₹6,000 Off</option>
                  <option value="old-lithium">Old / Degraded Lithium-Ion Pack — Up to ₹3,500 Off</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF7EE] border border-[#E6DAC7] text-center">
                <span className="text-xs font-mono uppercase text-stone-500 block">Instant Trade-in Discount:</span>
                <div className="text-3xl font-black text-[#ea580c] mt-1">
                  Up to ₹{estimatedDiscount.toLocaleString('en-IN')}*
                </div>
                <span className="text-[11px] text-stone-600 block mt-1">
                  Directly deducted from the price of your new Lithium LFP battery pack!
                </span>
              </div>

              <button
                onClick={() => {
                  setIsCalculatorOpen(false);
                  handleWhatsAppExchange();
                }}
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-900/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Exchange on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
