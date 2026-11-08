import React, { useState } from 'react';
import { 
  IndianRupee, 
  Fuel, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface CalculatorsProps {
  onOpenTestRide: () => void;
}

export const Calculators: React.FC<CalculatorsProps> = ({ onOpenTestRide }) => {
  // Benchmark Values
  const [petrolPrice] = useState(96.50); // Prayagraj petrol price per liter
  const [petrolMileage] = useState(42); // km per liter for 110-125cc petrol scooty
  const [evCostPerKm] = useState(0.20); // 20 paise per km for Madhav EV

  // EMI Calculator States
  const [vehiclePrice, setVehiclePrice] = useState(59999);
  const [downPayment, setDownPayment] = useState(2999);
  const [loanTenureMonths, setLoanTenureMonths] = useState(24);
  const [interestRate] = useState(10.5);

  const principal = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  const calculatedEmi = principal > 0
    ? Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, loanTenureMonths)) /
        (Math.pow(1 + monthlyRate, loanTenureMonths) - 1)
      )
    : 0;

  const handleApplyLoanWhatsApp = () => {
    const text = `Hi Shree Madhav Enterprises, I used your Smart Loan Calculator on the website.%0A%0A*Vehicle Price:* ₹${vehiclePrice.toLocaleString('en-IN')}%0A*My Down Payment:* ₹${downPayment.toLocaleString('en-IN')}%0A*Tenure:* ${loanTenureMonths} Months%0A*Estimated EMI:* ₹${calculatedEmi.toLocaleString('en-IN')}/month%0A%0APlease check my document eligibility for spot loan approval.`;
    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="calculators" 
      className="relative w-full py-16 sm:py-24 overflow-hidden text-[#111827] border-b border-[#E6DAC7] font-sans"
      aria-label="Smart Financial Calculators"
    >
      {/* ================= UNIFIED BACKGROUND VIDEO COVERING BOTH SECTIONS ================= */}
      <video
        src="/vdo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 filter brightness-[1.02]"
      />

      {/* Unified Light Glass Scrim for Maximum Contrast & Readability */}
      <div 
        className="absolute inset-0 bg-[#FBF7EE]/90 sm:bg-[#FBF7EE]/85 backdrop-blur-[2px] pointer-events-none z-0" 
      />

      {/* Subtle Blueprint Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* ================= ONE UNIFIED MAIN HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 relative">
          
          {/* Faint Background Watermark */}
          <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-[#14532d]/[0.05] uppercase whitespace-nowrap">
              CALCULATORS
            </span>
          </div>

          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2 mb-3 relative z-10">
            <span className="font-black italic text-[#15803d] text-xs sm:text-sm tracking-tight uppercase">
              INTERACTIVE
            </span>
            <span className="bg-[#ea580c] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] sm:text-xs tracking-wider uppercase transform -skew-x-12 shadow-xs inline-block">
              FINANCIAL INTELLIGENCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-[#15803d] leading-tight relative z-10">
            SMART FINANCIAL <span className="text-[#ea580c]">CALCULATORS</span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl mx-auto leading-relaxed relative z-10 font-normal">
            Calculate your cumulative fuel savings curve by switching to electric, and plan your customized low-down-payment EMI with instant spot showroom approval.
          </p>
        </div>


        {/* =========================================================================
            SECTION 1: PETROL VS EV FINANCIAL TRAJECTORY (OPEN AIRY LAYOUT, NO HEAVY BOX)
           ========================================================================= */}
        <div className="relative z-10 space-y-8">
          
          {/* Section 1 Header */}
          <div className="text-center space-y-2 pb-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDFBF7] backdrop-blur-md border border-[#E6DAC7] text-[#15803d] text-xs font-black uppercase tracking-wider shadow-xs mb-1">
              <Fuel className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>01. Petrol vs EV Financial Trajectory</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15803d] tracking-tight uppercase">
              Under The <span className="text-[#ea580c]">Hood</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
              The 3 core financial systems Prayagraj riders unlock when switching from petrol to Madhav EV — the infrastructure behind the results.
            </p>

            {/* Benchmarks Badge */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-stone-600 pt-2 flex-wrap">
              <span>Prayagraj Petrol: <strong className="text-stone-900 font-bold">₹{petrolPrice.toFixed(2)}/L</strong></span>
              <span>&bull;</span>
              <span>Petrol Mileage: <strong className="text-stone-900 font-bold">{petrolMileage} km/L</strong></span>
              <span>&bull;</span>
              <span>Madhav EV: <strong className="text-[#15803d] font-bold">₹0.20/km</strong></span>
            </div>
          </div>

          {/* 3-Column Pillars Connected by Horizontal Line with Glowing Saffron Icons */}
          <div className="relative pt-4 pb-2">
            <div 
              className="hidden md:block absolute top-11 left-[16%] right-[16%] h-[2px] bg-[#ea580c]/30 z-0 pointer-events-none" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10 text-center items-start">
              
              {/* Column 1: Sub-Zero Running Cost */}
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] text-white flex items-center justify-center shadow-[0_0_24px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <h4 className="text-base sm:text-lg font-black text-[#15803d] tracking-tight mb-1">
                  Sub-Zero Running Cost
                </h4>
                <span className="text-xs font-black uppercase tracking-wider text-[#ea580c] block mb-3 font-mono">
                  ₹0.20/KM VS ₹2.30/KM PETROL
                </span>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal px-1 max-w-sm">
                  Slash daily commuting and commercial route expenses from ₹2.30/km petrol down to just ₹0.20/km electric — pocketing 90%+ daily savings.
                </p>
              </div>

              {/* Column 2: Lead Acid & Lithium Batteries */}
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] text-white flex items-center justify-center shadow-[0_0_24px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] mb-5">
                  <Zap className="w-6 h-6" />
                </div>

                <h4 className="text-base sm:text-lg font-black text-[#15803d] tracking-tight mb-1">
                  Lead Acid &amp; Lithium Batteries
                </h4>
                <span className="text-xs font-black uppercase tracking-wider text-[#ea580c] block mb-3 font-mono">
                  LFP &amp; TUBULAR BATTERY TECH
                </span>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal px-1 max-w-sm">
                  High-density certified lithium-ion LFP and heavy-duty tubular lead-acid packs engineered for maximum range, zero fire risk, and 3-year warranty.
                </p>
              </div>

              {/* Column 3: Sales, Service & Support */}
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] text-white flex items-center justify-center shadow-[0_0_24px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <h4 className="text-base sm:text-lg font-black text-[#15803d] tracking-tight mb-1">
                  Sales, Service &amp; Support
                </h4>
                <span className="text-xs font-black uppercase tracking-wider text-[#ea580c] block mb-3 font-mono">
                  SHAHA URF PIPAL GAON WORKSHOP
                </span>
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal px-1 max-w-sm">
                  Full authorized showroom sales, genuine spare parts in stock, expert EV technicians, and spot financing keeping your vehicle running 365 days.
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* ================= ELEGANT SEPARATOR BETWEEN SECTION 1 & SECTION 2 ================= */}
        <div className="my-16 sm:my-24 relative flex items-center justify-center z-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6DAC7] to-transparent" />
          <div className="absolute px-5 py-1.5 rounded-full bg-[#FDFBF7] backdrop-blur-md border border-[#E6DAC7] text-[11px] font-black uppercase tracking-widest text-[#15803d] font-mono shadow-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
            <span>FINANCING & SPOT APPROVAL</span>
          </div>
        </div>


        {/* =========================================================================
            SECTION 2: LOAN & EMI CALCULATOR (DIRECTLY BELOW, OPEN AIRY LAYOUT)
           ========================================================================= */}
        <div className="relative z-10 space-y-8">
          
          {/* Section 2 Header */}
          <div className="text-center space-y-2 pb-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDFBF7] backdrop-blur-md border border-[#E6DAC7] text-[#15803d] text-xs font-black uppercase tracking-wider shadow-xs mb-1">
              <IndianRupee className="w-3.5 h-3.5 text-[#eab308]" />
              <span>02. Loan & EMI Financing Matrix</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15803d] tracking-tight uppercase">
              Loan & <span className="text-[#ea580c]">EMI Calculator</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Calculate your low-down-payment monthly installment with instant spot loan approval, zero hidden file charges, and direct UP EV subsidy tie-ups.
            </p>
          </div>

          {/* 2-Column Open Grid: Sliders on Left, EMI Display Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Sliders Area (Open Glass Background) */}
            <div className="lg:col-span-7 space-y-6 bg-[#FDFBF7]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E6DAC7] shadow-sm">
              
              {/* Vehicle Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="vehicle-price-slider" className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-800">
                    Vehicle Ex-Showroom Price:
                  </label>
                  <span className="text-sm sm:text-base font-black text-[#15803d] px-3.5 py-1 rounded-full bg-[#FBF7EE] border border-[#E6DAC7]">
                    ₹{vehiclePrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="vehicle-price-slider"
                  type="range"
                  min="45000"
                  max="160000"
                  step="5000"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#15803d] focus:outline-none"
                />
              </div>

              {/* Down Payment Slider with ₹2,999 Highlight */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="down-payment-slider" className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ea580c]">
                      Down Payment:
                    </label>
                    <button
                      onClick={() => setDownPayment(2999)}
                      className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#ea580c] text-white cursor-pointer hover:bg-[#c2410c] transition-colors"
                    >
                      ⚡ ₹2,999 Offer
                    </button>
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#ea580c] px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200">
                    ₹{downPayment.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="down-payment-slider"
                  type="range"
                  min="2999"
                  max={Math.min(50000, vehiclePrice)}
                  step="1000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#ea580c] focus:outline-none"
                />
              </div>

              {/* Loan Tenure Selector */}
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-stone-800 block mb-2">
                  Select Loan Tenure:
                </span>
                <div className="grid grid-cols-4 gap-2.5">
                  {[12, 18, 24, 36].map((months) => (
                    <button
                      key={months}
                      onClick={() => setLoanTenureMonths(months)}
                      className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                        loanTenureMonths === months
                          ? 'bg-[#15803d] text-white shadow-sm'
                          : 'bg-[#FDFBF7] text-stone-700 hover:bg-[#FBF7EE] border border-[#E6DAC7]'
                      }`}
                    >
                      {months} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Showroom Bank Approval Notice */}
              <div className="p-4 rounded-2xl bg-[#FBF7EE] border border-[#E6DAC7] flex flex-wrap items-center justify-between text-xs text-stone-700 gap-2">
                <span className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Banks: HDFC, SBI, Bajaj Finserv, IDFC First</span>
                </span>
                <span className="text-[#15803d] font-black uppercase tracking-wider">
                  ⚡ Instant Spot Approval in Showroom
                </span>
              </div>

            </div>

            {/* EMI Display Card (Matching Forest Depth & Gold Specular Rim Style) */}
            <div className="lg:col-span-5 relative group">
              
              {/* Offset Stacked Depth Card Behind: Forest Emerald Depth Card */}
              <div 
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 rounded-[28px] border-2 border-[#eab308]/60 bg-gradient-to-br from-[#1b3522] via-[#0d2013] to-[#051109] -z-10 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4" 
                aria-hidden="true"
              />

              {/* Main Front Interactive Card: Luxury Cream */}
              <div className="relative rounded-[28px] border-2 border-[#E6DAC7] bg-[#FDFBF7] p-6 sm:p-7 text-left transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)] space-y-4 shadow-sm">
                
                {/* Top Header Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#ea580c] font-mono font-bold text-xs sm:text-[13px] tracking-[0.12em] uppercase">
                    SPOT FINANCE MATRIX
                  </span>
                  <span className="bg-[#FBF7EE] border border-[#E6DAC7] text-stone-700 font-mono text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-widest">
                    SPOT APPROVAL
                  </span>
                </div>

                {/* Headline & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-[#14532d] tracking-normal leading-snug">
                    02. Low Down-Payment Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-[1.75] font-normal tracking-[0.01em] pt-0.5">
                    Flexible monthly installment structure designed for Prayagraj commuters with low documentation and direct UP EV subsidy processing.
                  </p>
                </div>

                {/* Inner Highlight Pod */}
                <div className="bg-[#FBF7EE] border border-[#E6DAC7] rounded-2xl p-4 sm:p-5 transition-colors group-hover:bg-[#F9F4E8] space-y-1">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-[0.12em] text-stone-500 mb-1">
                    ESTIMATED MONTHLY EMI
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#14532d] tracking-normal leading-none mt-1">
                    ₹{calculatedEmi.toLocaleString('en-IN')}
                    <span className="text-base text-stone-500 font-normal ml-1.5"> / mo*</span>
                  </div>
                  <div className="text-xs text-stone-600 font-medium mt-2.5 leading-relaxed tracking-normal">
                    Down Payment: <strong className="text-[#ea580c] font-bold">₹{downPayment.toLocaleString('en-IN')}</strong> &bull; Loan: <strong className="text-stone-900 font-bold">₹{principal.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                {/* Feature Tags Stack */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <span className="bg-[#FBF7EE] border border-[#E6DAC7] text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-xl w-fit transition-transform group-hover:translate-x-0.5 tracking-wide leading-relaxed">
                    Aadhaar + PAN Card Spot Approval
                  </span>
                  <span className="bg-[#FBF7EE] border border-[#E6DAC7] text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-xl w-fit transition-transform group-hover:translate-x-0.5 delay-75 tracking-wide leading-relaxed">
                    Zero Hidden File Charges / Festive Scheme
                  </span>
                  <span className="bg-[#FBF7EE] border border-[#E6DAC7] text-stone-800 text-xs font-semibold px-3.5 py-2 rounded-xl w-fit transition-transform group-hover:translate-x-0.5 delay-100 tracking-wide leading-relaxed">
                    HDFC, SBI, Bajaj &amp; IDFC Bank Tie-ups
                  </span>
                </div>

                {/* Action CTA Button: WhatsApp Green or Radiant Gradient */}
                <button
                  onClick={handleApplyLoanWhatsApp}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-1 group/btn"
                >
                  <span>Apply for Loan on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                </button>

              </div>

            </div>
          </div>

        </div>


        {/* Showroom Footnote */}
        <div className="mt-14 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-3 border-t border-[#E6DAC7] pt-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Prayagraj Lowest Down-Payment Guarantee &bull; Starting ₹2,999</span>
          </div>
          <div className="text-right">
            <span>Authorized Dealership: <strong className="text-[#14532d]">Shaha Urf Pipal Gaon, Jhalwa, Prayagraj</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
