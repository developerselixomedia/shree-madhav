import React from 'react';
import { IndianRupee, ShieldCheck, Zap, Phone, ArrowRight, Wrench, CheckCircle2, TrendingUp, Sparkles, Check } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface CommercialHubProps {
  onOpenTestRide: (modelId?: string) => void;
}

export const CommercialHub: React.FC<CommercialHubProps> = ({ onOpenTestRide }) => {
  return (
    <section 
      id="commercial" 
      className="w-full bg-[#FBF7EE] text-[#1E291F] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden relative font-sans border-b border-[#E6DAC7]"
      aria-label="Commercial E-Rickshaws and Loaders Hub"
    >
      {/* Decorative Blueprint Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ================= SECTION HEADER ================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 relative z-10 max-w-7xl mx-auto">
        <div className="relative">
          {/* Faint Background Watermark */}
          <div className="absolute -top-6 sm:-top-10 left-0 pointer-events-none select-none z-0 overflow-hidden w-full">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-[#14532d]/[0.05] uppercase whitespace-nowrap">
              COMMERCIAL
            </span>
          </div>

          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2 mb-3 relative z-10">
            <span className="font-black italic text-[#15803d] text-xs sm:text-sm tracking-tight uppercase">
              LIVELIHOOD & ROZGAAR
            </span>
            <span className="bg-[#ea580c] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] sm:text-xs tracking-wider uppercase transform -skew-x-12 shadow-xs inline-block">
              COMMERCIAL SERIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15803d] tracking-tight uppercase leading-tight relative z-10">
            COMMERCIAL <span className="text-[#ea580c]">E-RICKSHAWS & LOADERS</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed relative z-10">
            Turn small daily electricity costs into high daily income. Reliable, heavy-duty commercial electric vehicles engineered for high passenger safety, heavy loads, and rough Prayagraj city roads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SHOWROOM_INFO.phone}`}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#FDFBF7] hover:bg-[#FBF7EE] text-[#15803d] font-bold text-xs uppercase tracking-wider border border-[#E6DAC7] transition-all shadow-sm cursor-pointer group"
          >
            <Phone className="w-4 h-4 text-[#ea580c] group-hover:scale-110 transition-transform" />
            <span>Fleet Advisor: {SHOWROOM_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>

      {/* ================= THE TWO CARDS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10 max-w-7xl mx-auto">
        
        {/* =========================================================================
            CARD 1: DAILY EARNINGS MATH IN PRAYAGRAJ
           ========================================================================= */}
        <div className="lg:col-span-6 relative bg-[#FDFBF7] text-[#111827] rounded-3xl border-2 border-[#E6DAC7] shadow-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Header */}
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]" />
              <span className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider text-[#15803d]">
                DAILY EARNINGS MATH IN PRAYAGRAJ
              </span>
            </div>
            <span className="bg-emerald-50 text-[#15803d] border border-emerald-200 font-mono text-[11px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
              HIGH ROI
            </span>
          </div>

          {/* 3 Highlight Rows */}
          <div className="space-y-3.5 mb-7 relative z-10">
            <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#FBF7EE] border border-[#E6DAC7] text-xs sm:text-sm transition-colors hover:bg-amber-50/50">
              <span className="text-stone-700 font-bold">Daily Passenger Ticket Collections:</span>
              <span className="font-black text-[#15803d] font-mono sm:text-base">~₹1,800 to ₹2,200</span>
            </div>

            <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm transition-colors hover:bg-emerald-50">
              <span className="text-emerald-950 font-bold">Daily Electricity Charging Cost:</span>
              <span className="font-black text-[#15803d] font-mono sm:text-base">Only ₹40 - ₹50</span>
            </div>

            <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm transition-colors hover:bg-orange-50">
              <span className="text-orange-950 font-bold">Diesel/Petrol Rickshaw Fuel Expense:</span>
              <span className="font-black text-[#ea580c] font-mono sm:text-base">₹350 - ₹450 / day</span>
            </div>
          </div>

          {/* Bottom Summary: Monthly Profit & Down Payment */}
          <div className="flex items-end justify-between pt-5 pb-6 border-t border-[#E6DAC7] relative z-10">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase font-black text-stone-500 tracking-wider block mb-1">
                ESTIMATED NET MONTHLY PROFIT:
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#15803d] tracking-tight">
                ₹45,000 - ₹55,000*
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] sm:text-[11px] uppercase font-black text-stone-500 tracking-wider block mb-1">
                DOWN PAYMENT FROM
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#ea580c] tracking-tight">
                ₹4,999*
              </span>
            </div>
          </div>

          {/* Radiant Saffron Button */}
          <button
            onClick={() => onOpenTestRide?.('shaan-passenger-rickshaw')}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 active:scale-[0.99] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 cursor-pointer relative z-10"
          >
            <span>BOOK E-RICKSHAW DEMO & QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>


        {/* =========================================================================
            CARD 2: INFRASTRUCTURE & ASSURANCE
           ========================================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5 relative">
          
          {/* Subtle Vertical Connecting Line */}
          <div 
            className="hidden sm:block absolute left-[3.25rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#ea580c]/40 via-[#ea580c]/60 to-[#ea580c]/20 z-0 pointer-events-none" 
            aria-hidden="true"
          />

          {/* ITEM 1: HEAVY-GAUGE STEEL CHASSIS & TRIPLE BRAKES */}
          <div className="bg-[#FDFBF7] rounded-2xl border-2 border-[#E6DAC7] hover:border-[#ea580c]/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6 relative z-10 group">
            <div className="relative shrink-0 pt-0.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] flex items-center justify-center text-white shadow-[0_0_22px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
            </div>
            <div className="flex-1 space-y-1.5">
              <h3 className="font-black text-[#14532d] text-sm sm:text-base uppercase tracking-wide leading-snug">
                HEAVY-GAUGE STEEL CHASSIS &amp; TRIPLE BRAKES
              </h3>
              <div className="font-mono font-bold text-[11px] text-[#ea580c] uppercase tracking-[0.12em] pt-0.5">
                STRUCTURAL STRENGTH // BUILT FOR UP ROADS
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-[1.75] tracking-normal font-normal pt-1">
                Reinforced steel frame engineered specifically to endure potholes, heavy monsoons, and passenger overloads with zero body flex.
              </p>
            </div>
          </div>

          {/* ITEM 2: GOVERNMENT SUBSIDY & LOW DOWN PAYMENT */}
          <div className="bg-[#FDFBF7] rounded-2xl border-2 border-[#E6DAC7] hover:border-[#ea580c]/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6 relative z-10 group">
            <div className="relative shrink-0 pt-0.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] flex items-center justify-center text-white shadow-[0_0_22px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] group-hover:scale-105 transition-transform duration-300">
                <IndianRupee className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
            </div>
            <div className="flex-1 space-y-1.5">
              <h3 className="font-black text-[#14532d] text-sm sm:text-base uppercase tracking-wide leading-snug">
                GOVERNMENT SUBSIDY &amp; LOW DOWN PAYMENT
              </h3>
              <div className="font-mono font-bold text-[11px] text-[#ea580c] uppercase tracking-[0.12em] pt-0.5">
                STATE INCENTIVES // FAST LOAN APPROVAL
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-[1.75] tracking-normal font-normal pt-1">
                Get full support on UP government EV subsidies, fast bank loan disbursements with minimal documentation, and down payments starting at just ₹4,999.
              </p>
            </div>
          </div>

          {/* ITEM 3: GENUINE SPARE PARTS & SERVICE WORKSHOP IN JHALWA */}
          <div className="bg-[#FDFBF7] rounded-2xl border-2 border-[#E6DAC7] hover:border-[#ea580c]/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-6 relative z-10 group">
            <div className="relative shrink-0 pt-0.5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#ea580c] to-[#c2410c] flex items-center justify-center text-white shadow-[0_0_22px_rgba(234,88,12,0.45)] ring-4 ring-[#fef08a] group-hover:scale-105 transition-transform duration-300">
                <Wrench className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
            </div>
            <div className="flex-1 space-y-1.5">
              <h3 className="font-black text-[#14532d] text-sm sm:text-base uppercase tracking-wide leading-snug">
                GENUINE SPARE PARTS &amp; SERVICE WORKSHOP IN JHALWA
              </h3>
              <div className="font-mono font-bold text-[11px] text-[#ea580c] uppercase tracking-[0.12em] pt-0.5">
                GUARANTEED UPTIME // SHAHA URF PIPAL GAON
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-[1.75] tracking-normal font-normal pt-1">
                Never lose a day's income waiting for parts. Motors, differential axles, chargers, tires, and brake shoes are always in stock at our Shaha Urf Pipal Gaon facility.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
