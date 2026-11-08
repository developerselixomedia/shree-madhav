import React from 'react';
import { 
  Fuel, 
  Wrench, 
  Headphones, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  BatteryCharging 
} from 'lucide-react';

interface WhyShreeMadhavProps {
  onOpenTestRide: () => void;
}

export const WhyShreeMadhav: React.FC<WhyShreeMadhavProps> = ({ onOpenTestRide }) => {
  const TRUST_PILLARS = [
    {
      id: 1,
      tag: 'FINANCIAL SAVINGS',
      title: 'Zero Petrol Inflation',
      metric: '₹35,000+',
      metricLabel: 'Net Yearly Fuel Savings',
      desc: 'Slash daily commuting expenses from ₹2.30/km petrol down to just ₹0.20/km electric. A full 120 km charge costs under ₹12 at home.',
      badge: '90% Daily Commute Savings',
      icon: Fuel,
      accentColor: '#ea580c', // Saffron
      bgAccent: 'from-orange-500/15 via-orange-500/5 to-transparent',
      plateGradient: 'from-orange-200/70 via-amber-100/60 to-orange-100/50',
    },
    {
      id: 2,
      tag: 'CERTIFIED BATTERY TECH',
      title: '3-Year Battery Warranty',
      metric: '3,000+ Cycles',
      metricLabel: 'Prismatic LFP Chemistry',
      desc: 'Automotive-grade Lithium Iron Phosphate (LiFePO4) with active thermal balancing BMS. Zero fire hazard, heavy heat tolerance, and hassle-free warranty.',
      badge: 'Certified Safe & Flame-Proof',
      icon: BatteryCharging,
      accentColor: '#15803d', // Green
      bgAccent: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
      plateGradient: 'from-emerald-200/70 via-teal-100/60 to-emerald-100/50',
    },
    {
      id: 3,
      tag: 'LOCAL SHOWROOM & REPAIRS',
      title: 'Jhalwa Workshop & Spares',
      metric: '100% In-Stock',
      metricLabel: 'Genuine EV Spares & Tyres',
      desc: 'Authorized dealership & state-of-the-art service center right beside Jhalwa Crossing. Same-day repair turnaround by certified EV technicians.',
      badge: 'Shaha Urf Pipal Gaon Hub',
      icon: Wrench,
      accentColor: '#eab308', // Gold
      bgAccent: 'from-amber-500/15 via-amber-500/5 to-transparent',
      plateGradient: 'from-amber-200/70 via-yellow-100/60 to-amber-100/50',
    },
    {
      id: 4,
      tag: '24/7 HELPLINE & ROADSIDE',
      title: '1st Year Free Assistance',
      metric: '24/7 Citywide',
      metricLabel: 'Across Greater Prayagraj',
      desc: 'Stranded with a puncture or low charge? Our mobile service van covers Civil Lines, Naini, Jhalwa, Katra, and Phaphamau with rapid on-spot support.',
      badge: 'Zero-Downtime Guarantee',
      icon: Headphones,
      accentColor: '#ea580c', // Saffron
      bgAccent: 'from-orange-500/15 via-emerald-500/5 to-transparent',
      plateGradient: 'from-orange-200/70 via-emerald-100/60 to-amber-100/50',
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      className="relative w-full py-18 sm:py-28 overflow-hidden bg-[#FBF7EE] border-b border-[#E6DAC7] font-sans select-none"
      aria-label="Why Choose Shree Madhav EV Trust Grid"
    >
      {/* ================= BACKGROUND VIDEO LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30 filter saturate-[1.25] brightness-105"
        >
          <source src="/vdo.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Luxury Cream Gradient Overlay to preserve contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF7EE]/92 via-[#FDFBF7]/85 to-[#F5ECDD]/95 backdrop-blur-[1.5px]" />
      </div>

      {/* Background Ambient Radial Glows */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#ea580c]/12 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-[#15803d]/12 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* Blueprint Grid Texture */}
      <div 
        className="absolute inset-0 z-[2] opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 relative">
          
          {/* Faint Background Watermark */}
          <div className="absolute -top-7 sm:-top-11 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-[#14532d]/[0.06] uppercase whitespace-nowrap">
              TRUST GRID
            </span>
          </div>

          {/* Kicker Pill */}
          <div className="inline-flex items-center gap-2 mb-3.5 relative z-10">
            <span className="font-black italic text-[#15803d] text-xs sm:text-sm tracking-tight uppercase">
              THE SHREE MADHAV ADVANTAGE
            </span>
            <span className="bg-[#ea580c] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] sm:text-xs tracking-wider uppercase transform -skew-x-12 shadow-xs inline-block">
              PRAYAGRAJ TRUST
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#15803d] leading-tight relative z-10">
            WHY RIDERS CHOOSE <span className="text-[#ea580c]">SHREE MADHAV EV</span>
          </h2>

          {/* Subtitle */}
          <p className="text-stone-700 text-xs sm:text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">
            We don’t just sell electric two-wheelers and commercial rickshaws — we build lifetime ownership security with genuine spare parts, certified local technicians, and spot bank approvals in Prayagraj.
          </p>
        </div>

        {/* ================= 4-CARD 2-LAYER 3D BENTO TRUST GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TRUST_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div 
                key={pillar.id}
                className="group relative"
                style={{ perspective: '1200px' }}
              >
                {/* ── LAYER 1: Deep Offset 3D Backplate Layer ── */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.plateGradient} border-2 border-[#E6DAC7] translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:scale-[1.01] transition-all duration-500 ease-out shadow-md pointer-events-none`}
                  aria-hidden="true"
                >
                  {/* Decorative Corner Bevel Accent */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1 opacity-70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803d]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  </div>
                </div>

                {/* ── LAYER 2: Foreground 3D Floating Interactive Card ── */}
                <div 
                  className="relative z-10 rounded-3xl bg-[#FDFBF7]/95 backdrop-blur-md border-2 border-[#E6DAC7] p-7 sm:p-8 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden shadow-[0_12px_28px_-8px_rgba(0,0,0,0.08)] transform-gpu group-hover:-translate-y-3.5 group-hover:-translate-x-1.5 group-hover:border-[#ea580c] group-hover:shadow-[0_32px_64px_-16px_rgba(234,88,12,0.3),0_16px_32px_-8px_rgba(20,83,45,0.18)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Top Edge Specular Lighting Line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ea580c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Subtle Hover Gradient Backdrop */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Top Row: Tag & 3D Glowing Floating Icon */}
                  <div className="relative z-10 flex items-start justify-between gap-4 mb-5">
                    <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#ea580c]">
                      {pillar.tag}
                    </span>

                    <div 
                      className="w-13 h-13 rounded-2xl flex items-center justify-center border shadow-xs transition-all duration-500 group-hover:scale-115 group-hover:-translate-y-1 group-hover:shadow-md"
                      style={{
                        backgroundColor: `${pillar.accentColor}18`,
                        borderColor: `${pillar.accentColor}45`,
                        color: pillar.accentColor
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Center Content: Title, Highlight Metric, & Narrative */}
                  <div className="relative z-10 space-y-3.5">
                    <h3 className="text-xl sm:text-2xl font-black text-[#14532d] uppercase tracking-tight group-hover:text-[#ea580c] transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Highlight Metric Pod with 3D Pop */}
                    <div className="inline-flex items-baseline gap-2.5 px-4 py-2 rounded-xl bg-[#FBF7EE] border border-[#E6DAC7] shadow-2xs transition-all duration-300 group-hover:border-[#ea580c]/50 group-hover:shadow-xs group-hover:translate-x-1">
                      <span className="text-xl sm:text-2xl font-black text-[#15803d]">
                        {pillar.metric}
                      </span>
                      <span className="text-xs font-bold text-stone-700">
                        {pillar.metricLabel}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal pt-1">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Badge Strip */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-[#E6DAC7] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#15803d]">
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
                      <span>{pillar.badge}</span>
                    </div>

                    <span className="text-xs font-bold text-stone-500 group-hover:text-[#ea580c] transition-colors flex items-center gap-1">
                      <span>Verified</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CONVERSION BAR ================= */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-[#FDFBF7]/95 backdrop-blur-md border-2 border-[#E6DAC7] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ea580c] to-[#15803d] text-white flex items-center justify-center shadow-md shrink-0">
              <Sparkles className="w-6 h-6 text-[#fef08a]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black uppercase text-[#14532d] tracking-tight">
                Ready to Experience Electric Power in Prayagraj?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Book a free test ride at our Jhalwa Showroom or doorstep across Prayagraj. Spot ₹2,999 down payment offer valid this month!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenTestRide}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#15803d] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-900/15 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Free Test Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#dealership"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#FBF7EE] hover:bg-stone-200 text-[#15803d] font-bold text-xs uppercase border border-[#E6DAC7] transition-all flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-[#ea580c]" />
              <span>Visit Showroom</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
