import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, BatteryCharging, Wrench, ShieldCheck, MapPin } from 'lucide-react';

interface TechEcosystemProps {
  onOpenTestRide?: (modelId?: string) => void;
}

export const TechEcosystem: React.FC<TechEcosystemProps> = ({ onOpenTestRide }) => {
  // Slide cards data representing the 3 client business pillars:
  // 1. E-Rickshaw & E-Scooty Showroom
  // 2. Lead Acid & Lithium Batteries
  // 3. Sales | Service | Support
  const cardSets = [
    [
      {
        id: 'card-1',
        category: 'E-SCOOTY SHOWROOM',
        title: 'High-Torque Electric Scooties for Prayagraj',
        body: 'Zero petrol expense, whisper-quiet motor, and up to 120 km range per charge. Down payments start from just ₹2,999 on spot.',
        image: '/vehicles/scooty-fascino-style.jpg',
        buttonText: 'EXPLORE SCOOTIES',
        badge: 'From ₹2,999 DP',
        action: '#vehicles'
      },
      {
        id: 'card-2',
        category: 'E-RICKSHAW SHOWROOM',
        title: 'Passenger & Cargo Commercial E-Rickshaws',
        body: 'High-capacity 4+1 passenger e-rickshaws and heavy cargo loaders built for Prayagraj roads. Earn ₹45,000+ monthly with electricity cost under ₹50/day.',
        image: '/vehicles/e-rickshaw-allfine.jpg',
        buttonText: 'VIEW E-RICKSHAWS',
        badge: 'Earn ₹45k+/mo',
        action: '#vehicles'
      },
      {
        id: 'card-3',
        category: 'LITHIUM & LEAD ACID BATTERIES',
        title: '3-Year Warranty Lithium-Ion & Tubular Batteries',
        body: 'Grade A+ Lithium Iron Phosphate (LFP) battery packs and deep-cycle lead-acid sets with instant spot trade-in exchange at our Jhalwa showroom.',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
        buttonText: 'BATTERY TRADE-IN',
        badge: '3-Year Warranty',
        action: '#battery-exchange'
      },
    ],
    [
      {
        id: 'card-4',
        category: 'SALES & FINANCING',
        title: 'Aadhaar + PAN Spot Loan Approval in 15 Minutes',
        body: 'Direct tie-ups with leading banks & NBFCs. Minimum documentation, zero hidden charges, and direct Uttar Pradesh EV government subsidy processing.',
        image: '/vehicles/scooty-urban-yellow.jpg',
        buttonText: 'CALCULATE EMI',
        badge: 'Instant Spot Loan',
        action: '#calculators'
      },
      {
        id: 'card-5',
        category: 'WORKSHOP & SPARE PARTS',
        title: 'Full-Service Workshop in Shaha Urf Pipal Gaon',
        body: 'Certified EV technicians and 100% genuine spare parts in stock: motors, controllers, brake shoes, heavy-duty tires, and microprocessor chargers.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        buttonText: 'BOOK SERVICE',
        badge: '100% Genuine Parts',
        action: '#dealership'
      },
      {
        id: 'card-6',
        category: 'CUSTOMER CARE & SUPPORT',
        title: '24/7 Prayagraj Customer Helpline & Roadside Support',
        body: 'Dedicated phone assistance (9211-50-9211), free scheduled checkups, doorstep test rides, and instant WhatsApp support across Prayagraj.',
        image: '/vehicles/scooty-red-ev.jpg',
        buttonText: 'CONTACT SUPPORT',
        badge: '9211-50-9211',
        action: '#dealership'
      },
    ]
  ];

  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const currentCards = cardSets[activeSetIndex];

  const handlePrev = () => {
    setActiveSetIndex((prev) => (prev === 0 ? cardSets.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSetIndex((prev) => (prev + 1) % cardSets.length);
  };

  return (
    <section 
      id="technology" 
      className="w-full bg-[#FBF7EE] py-14 sm:py-20 font-sans overflow-hidden border-t border-b border-[#E6DAC7]"
      aria-label="Shree Madhav EV Sales, Batteries and Support Hub"
    >
      <div className="relative w-full max-w-[1740px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Decorative Graphic Bars */}
        <div 
          className="absolute left-0 top-16 sm:top-24 w-4 sm:w-6 h-32 sm:h-44 bg-[#ea580c] z-0 rounded-r-md pointer-events-none" 
        />

        <div className="absolute left-4 sm:left-8 -bottom-3 sm:-bottom-4 w-72 sm:w-96 h-40 z-0 pointer-events-none">
          <div 
            className="absolute left-0 bottom-0 w-48 sm:w-60 h-28 sm:h-32 bg-[#ea580c]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 75% 0, 0 0)' }}
          />
          <div 
            className="absolute left-28 sm:left-36 bottom-0 w-40 sm:w-48 h-24 sm:h-28 bg-[#eab308]"
            style={{ clipPath: 'polygon(0 100%, 100% 100%, 70% 0, 0 0)' }}
          />
        </div>

        <div 
          className="absolute right-0 -bottom-2 w-72 sm:w-96 lg:w-[480px] h-60 sm:h-72 bg-[#eab308]/20 z-0 pointer-events-none"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />

        {/* ================= MAIN CARD CONTAINER ================= */}
        <div 
          className="relative z-10 bg-[#FDFBF7] text-[#111827] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 xl:p-14 shadow-2xl min-h-[720px] sm:min-h-[780px] flex flex-col justify-between overflow-hidden border-2 border-[#E6DAC7]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, min(180px, 15vw) 100%, 0 calc(100% - min(120px, 10vw)))'
          }}
        >
          {/* Top Bar Header with Shree Madhav Official Branding */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
            {/* Left: Saffron Circle Badge + Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ea580c] flex items-center justify-center text-white font-black text-sm shadow-md flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-black tracking-wide uppercase text-[#14532d]">
                  E-Rickshaw &amp; E-Scooty Showroom &bull; Batteries &bull; Service
                </h2>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-stone-500 uppercase tracking-wider block">
                  Shaha Urf Pipal Gaon, Jhalwa, Prayagraj
                </span>
              </div>
            </div>

            {/* Right: Shree Madhav Brand Capsule */}
            <div className="flex items-center gap-2 bg-[#FBF7EE] px-4 py-2 rounded-full border border-[#E6DAC7] shadow-xs">
              <img
                src="/logo-emblem.png"
                alt="Shree Madhav Enterprises"
                className="h-6 w-auto object-contain"
              />
              <span className="text-xs sm:text-sm font-black italic tracking-wider text-[#14532d]">
                SHREE MADHAV <span className="text-[#ea580c]">EV</span>
              </span>
            </div>
          </div>

          {/* Center Main Area: Left Article Directly on Background + Right 3 Slider Cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center flex-1 my-auto">
            
            {/* Left Article */}
            <div className="lg:col-span-5 flex flex-col justify-start pt-2 pb-6 max-w-lg">
              <span className="bg-[#ea580c] text-white font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-widest inline-block w-max mb-3.5 shadow-xs">
                AUTHORIZED SHOWROOM
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#14532d] leading-tight mb-4">
                Pure Electric Freedom, <br />
                <span className="text-[#ea580c]">Maximum Daily Savings.</span>
              </h3>

              <p className="text-sm sm:text-base text-stone-600 leading-[1.8] font-normal mb-6 max-w-md">
                Say goodbye to petrol queues and rising fuel bills. Shree Madhav Enterprises provides Prayagraj with high-performance Electric Scooties and commercial E-Rickshaws, backed by certified Lithium &amp; Lead-Acid batteries and complete workshop sales, service, and spare parts support.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenTestRide?.()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-500/25 cursor-pointer group hover:scale-105"
                >
                  <span>BOOK A FREE TEST RIDE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#dealership"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border-2 border-[#15803d] hover:bg-[#15803d] hover:text-white text-[#15803d] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span>Visit Jhalwa Hub</span>
                </a>
              </div>
            </div>

            {/* Right 3 Floating Slider Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {currentCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#FDFBF7] text-[#16171b] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 border border-[#E6DAC7] hover:border-[#ea580c]/60 group"
                >
                  {/* Top Image Flush with Card Edges */}
                  <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-stone-100 flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#08120B]/85 backdrop-blur-md text-[#fef08a] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#eab308]/40 shadow-xs">
                      {card.badge}
                    </div>
                  </div>

                  {/* Card Content with Pill Button */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                        {card.category}
                      </span>
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#14532d] leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-[1.7] font-normal">
                        {card.body}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={card.action}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FBF7EE] hover:bg-[#ea580c] hover:text-white text-[#15803d] border border-[#E6DAC7] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer w-full justify-center"
                      >
                        <span>{card.buttonText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Controls Bar: < > SEE ALL Centered in Bottom */}
          <div className="relative z-10 flex items-center justify-center gap-3 pt-8 pb-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#FDFBF7] hover:bg-[#ea580c] hover:text-white text-[#15803d] flex items-center justify-center border border-[#E6DAC7] hover:border-[#ea580c] shadow-md transition-all hover:scale-105 cursor-pointer text-sm font-bold"
              aria-label="Previous Slide Set"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-stone-500 px-2">
              {activeSetIndex + 1} / {cardSets.length}
            </span>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#FDFBF7] hover:bg-[#ea580c] hover:text-white text-[#15803d] flex items-center justify-center border border-[#E6DAC7] hover:border-[#ea580c] shadow-md transition-all hover:scale-105 cursor-pointer text-sm font-bold"
              aria-label="Next Slide Set"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <a
              href="#vehicles"
              className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#15803d] hover:text-[#ea580c] transition-colors ml-4 cursor-pointer"
            >
              VIEW ALL FLEET &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
