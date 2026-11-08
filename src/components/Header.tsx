import React, { useState, useEffect } from 'react';
import { ChevronDown, Headphones, Menu, X, Sparkles, Bike } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface HeaderProps {
  onOpenTestRide: (modelId?: string) => void;
  onOpenOffer: () => void;
  onOpenCalculator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTestRide, onOpenOffer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md transition-all duration-200">
      <nav 
        className={`w-full px-4 sm:px-8 bg-[#FDFBF7]/90 transition-all ${
          isScrolled ? 'shadow-md py-2.5 border-b border-[#E6DAC7]' : 'border-b border-[#E6DAC7]/80 py-3'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: TVS-Style Brand Logo + Main Relevant Navigation Links */}
          <div className="flex items-center gap-7 xl:gap-9">
            {/* Official Shree Madhav Enterprises Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group py-0.5">
              <img 
                src="/logo-emblem.png" 
                alt="Shree Madhav Enterprises Emblem" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <div className="flex items-center text-lg sm:text-xl font-black tracking-tight leading-none">
                  <span className="text-[#0A0A0A]">SHREE </span>
                  <span className="text-[#059669] ml-1">MADHAV</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-[1.5px] w-2.5 bg-[#059669]" />
                  <span className="text-[9px] font-bold tracking-[0.22em] text-stone-600 uppercase font-mono">
                    ENTERPRISES
                  </span>
                  <span className="h-[1.5px] w-2.5 bg-[#059669]" />
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links — Clean, Uncongested & Relevant */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] font-bold text-stone-800">
              
              {/* 1. Vehicles Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setVehiclesOpen(true)}
                onMouseLeave={() => setVehiclesOpen(false)}
              >
                <a 
                  href="#vehicles"
                  className="flex items-center gap-1 hover:text-[#059669] py-2 transition-colors cursor-pointer"
                >
                  <span>Vehicles</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${vehiclesOpen ? 'rotate-180' : ''}`} />
                </a>

                {vehiclesOpen && (
                  <div className="absolute top-full left-0 w-80 bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E6DAC7] p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <a 
                      href="#vehicles" 
                      onClick={() => setVehiclesOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/70 text-xs font-bold text-stone-900 hover:text-[#059669] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Bike className="w-4 h-4 text-[#059669]" />
                        <div>
                          <div>Electric Scooters (EV Scooty)</div>
                          <div className="text-[10px] text-stone-500 font-normal">Falcon EV &bull; Thunder Max &bull; Neo</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#059669] bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-full font-black">₹2,999 DP</span>
                    </a>

                    <a 
                      href="#vehicles" 
                      onClick={() => setVehiclesOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/70 text-xs font-bold text-stone-900 hover:text-[#059669] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-4 h-4 text-center font-black text-xs text-[#059669]">🛺</span>
                        <div>
                          <div>Commercial E-Rickshaws</div>
                          <div className="text-[10px] text-stone-500 font-normal">Shaan Rozgaar (4+1 Passenger)</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-full font-black">Earn ₹45k+</span>
                    </a>

                    <a 
                      href="#road-showcase" 
                      onClick={() => setVehiclesOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-stone-100/70 text-xs font-bold text-stone-900 hover:text-[#059669] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#059669]" />
                        <div>
                          <div>Prayagraj Highway Expressway</div>
                          <div className="text-[10px] text-stone-500 font-normal">Interactive Top-Down Vehicle Loop</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full font-mono">Live</span>
                    </a>
                  </div>
                )}
              </div>

              {/* 2. Battery Hub */}
              <a 
                href="#battery-exchange" 
                className="hover:text-[#059669] py-2 transition-colors cursor-pointer"
              >
                Battery Hub
              </a>

              {/* 3. Festive Offers */}
              <a 
                href="#offers" 
                onClick={(e) => {
                  e.preventDefault();
                  onOpenOffer();
                  const el = document.getElementById('offers');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#059669] py-2 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Festive Offers</span>
                <span className="text-[10px] font-black text-white bg-[#059669] px-2 py-0.5 rounded-full shadow-2xs">
                  ₹2,999 DP
                </span>
              </a>

              {/* 4. Showroom & Service */}
              <a 
                href="#dealership" 
                className="hover:text-[#059669] py-2 transition-colors cursor-pointer"
              >
                Showroom
              </a>

            </div>
          </div>

          {/* Right: Clean, Uncluttered Action Utilities */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-bold text-stone-800">
            {/* Region Indicator */}
            <div className="flex items-center gap-1.5 text-stone-600">
              <span className="text-sm">🇮🇳</span>
              <span className="font-semibold text-stone-700">Prayagraj</span>
            </div>

            <span className="text-[#E6DAC7]">|</span>

            {/* Direct Call Helpline */}
            <a 
              href={`tel:${SHOWROOM_INFO.phone}`} 
              title={`Call Showroom: ${SHOWROOM_INFO.phoneFormatted}`}
              className="flex items-center gap-1.5 text-stone-700 hover:text-[#059669] transition-colors"
            >
              <Headphones className="w-3.5 h-3.5 text-[#059669]" />
              <span>{SHOWROOM_INFO.phoneFormatted}</span>
            </a>

            {/* High-Impact Book Test Ride CTA */}
            <button 
              onClick={() => onOpenTestRide()} 
              className="px-4 py-2 rounded-xl bg-[#0A0A0A] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Bike className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Book Test Ride</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button 
              onClick={() => onOpenTestRide()}
              className="px-3.5 py-1.5 rounded-lg bg-[#059669] text-white font-black text-xs uppercase shadow-sm"
            >
              Test Ride
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-700 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E6DAC7] space-y-2 pb-3 bg-[#FDFBF7] animate-in fade-in duration-150">
            <a 
              href="#vehicles" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-stone-100 text-xs font-bold uppercase text-stone-900"
            >
              <span>Electric Scooters (EV Scooty)</span>
              <span className="text-[10px] text-[#059669] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-black">₹2,999 DP</span>
            </a>

            <a 
              href="#vehicles" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-stone-100 text-xs font-bold uppercase text-stone-900"
            >
              <span>Commercial E-Rickshaws</span>
              <span className="text-[10px] text-[#059669] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-black">Rozgaar</span>
            </a>

            <a 
              href="#battery-exchange" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl hover:bg-stone-100 text-xs font-bold uppercase text-stone-800"
            >
              Battery Exchange Hub (3-Yr Warranty)
            </a>

            <a 
              href="#offers" 
              onClick={() => { setMobileMenuOpen(false); onOpenOffer(); }}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs font-black uppercase text-[#059669]"
            >
              <span>Festive Scratch &amp; Win Offers</span>
              <span>🎁</span>
            </a>

            <a 
              href="#reels-vault" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl hover:bg-stone-100 text-xs font-bold uppercase text-stone-800"
            >
              Customer Delivery Reels
            </a>

            <a 
              href="#dealership" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl hover:bg-stone-100 text-xs font-bold uppercase text-[#059669]"
            >
              Showroom Locator (Jhalwa, Prayagraj)
            </a>

            <div className="pt-2 px-1">
              <a 
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="block text-center py-2.5 rounded-xl bg-[#0A0A0A] hover:bg-[#059669] text-white font-bold text-xs uppercase shadow-sm transition-colors"
              >
                📞 Call Showroom: {SHOWROOM_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
