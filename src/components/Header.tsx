import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Headphones, User, Menu, X, Zap } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface HeaderProps {
  onOpenTestRide: (modelId?: string) => void;
  onOpenOffer: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTestRide, onOpenOffer, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

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
          {/* Left: TVS-Style Brand Logo + Main Navigation Dropdowns */}
          <div className="flex items-center gap-8">
            {/* Official Shree Madhav Enterprises Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group py-0.5">
              <img 
                src="/logo-emblem.png" 
                alt="Shree Madhav Enterprises Emblem" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <div className="flex items-center text-lg sm:text-xl font-black tracking-tight leading-none">
                  <span className="text-[#ea580c]">SHREE </span>
                  <span className="text-[#15803d] ml-1">MADHAV</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-[1.5px] w-2.5 bg-[#eab308]" />
                  <span className="text-[9px] font-bold tracking-[0.22em] text-[#166534] uppercase font-mono">
                    ENTERPRISES
                  </span>
                  <span className="h-[1.5px] w-2.5 bg-[#eab308]" />
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-[#1E291F]">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 hover:text-[#ea580c] py-2 transition-colors cursor-pointer"
                >
                  <span>Products</span>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-0 w-72 bg-[#FDFBF7] rounded-xl shadow-2xl border border-[#E6DAC7] p-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <a 
                      href="#vehicles" 
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-orange-50/70 text-xs font-bold text-[#15803d] hover:text-[#ea580c]"
                    >
                      <span>Electric Scooters (EV Scooty)</span>
                      <span className="text-[10px] text-[#ea580c] bg-orange-100/70 border border-orange-200 px-1.5 py-0.5 rounded font-black">₹2,999 DP</span>
                    </a>
                    <a 
                      href="#vehicles" 
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-emerald-50/70 text-xs font-bold text-[#15803d] hover:text-[#ea580c]"
                    >
                      <span>Commercial E-Rickshaws</span>
                      <span className="text-[10px] text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-1.5 py-0.5 rounded font-black">Rozgaar</span>
                    </a>
                    <a 
                      href="#battery-exchange" 
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-amber-50/70 text-xs font-bold text-[#15803d] hover:text-[#ea580c]"
                    >
                      <span>Lithium-Ion Batteries</span>
                      <span className="text-[10px] text-amber-800 bg-amber-100/70 border border-amber-200 px-1.5 py-0.5 rounded font-black">3 Yr Wty</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Services */}
              <a 
                href="#dealership" 
                className="hover:text-[#ea580c] py-2 transition-colors cursor-pointer"
              >
                Services
              </a>

              {/* Shop / Accessories */}
              <div 
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 hover:text-[#ea580c] py-2 transition-colors cursor-pointer"
                >
                  <span>Shop</span>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
                </button>

                {shopOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FDFBF7] rounded-xl shadow-2xl border border-[#E6DAC7] p-2 z-50">
                    <a 
                      href="#battery-exchange" 
                      onClick={() => setShopOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-orange-50/70 text-xs font-bold text-[#15803d] hover:text-[#ea580c]"
                    >
                      Genuine Spare Parts &amp; Fast Chargers
                    </a>
                    <a 
                      href="#offers" 
                      onClick={() => { setShopOpen(false); onOpenOffer(); }}
                      className="block p-2.5 rounded-lg hover:bg-orange-50/70 text-xs font-bold text-[#ea580c]"
                    >
                      Diwali Scratch &amp; Win Offers
                    </a>
                  </div>
                )}
              </div>

              {/* Company / About */}
              <a 
                href="#dealership" 
                className="hover:text-[#ea580c] py-2 transition-colors cursor-pointer"
              >
                Company
              </a>
            </div>
          </div>

          {/* Right: Utility Links */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-[#1E291F]">
            <button 
              onClick={onOpenOffer} 
              className="text-[#ea580c] hover:text-[#c2410c] transition-colors cursor-pointer uppercase tracking-tight"
            >
              Buy Vehicle (₹2,999 DP)
            </button>
            <span className="text-[#E6DAC7]">|</span>

            <button 
              onClick={() => onOpenTestRide()} 
              className="text-[#15803d] hover:text-[#ea580c] transition-colors cursor-pointer uppercase tracking-tight"
            >
              Test Ride
            </button>
            <span className="text-[#E6DAC7]">|</span>

            <a 
              href="#dealership" 
              className="hover:text-[#ea580c] transition-colors uppercase tracking-tight"
            >
              Dealers
            </a>
            <span className="text-[#E6DAC7]">|</span>

            {/* Region / City Indicator */}
            <div className="flex items-center gap-1 cursor-pointer text-[#15803d]">
              <span>🇮🇳</span>
              <span>Prayagraj</span>
              <ChevronDown className="w-3 h-3 text-stone-400" />
            </div>

            {/* Icon Buttons */}
            <div className="flex items-center gap-3 ml-2 pl-3 border-l border-[#E6DAC7] text-stone-600">
              <a 
                href="#vehicles" 
                aria-label="Search Vehicles" 
                className="hover:text-[#ea580c] transition-colors"
              >
                <Search className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${SHOWROOM_INFO.phone}`} 
                aria-label="Customer Helpline" 
                title={`Call ${SHOWROOM_INFO.phoneFormatted}`}
                className="hover:text-[#ea580c] transition-colors"
              >
                <Headphones className="w-4 h-4" />
              </a>
              <button 
                onClick={() => onOpenTestRide()} 
                aria-label="User Account" 
                className="hover:text-[#ea580c] transition-colors"
              >
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button 
              onClick={() => onOpenTestRide()}
              className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-white font-bold text-xs uppercase shadow-sm"
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
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E6DAC7] space-y-2 pb-3 bg-[#FDFBF7]">
            <a 
              href="#vehicles" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-bold uppercase text-[#15803d]"
            >
              Electric Scooters (EV Scooty)
            </a>
            <a 
              href="#vehicles" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-bold uppercase text-[#15803d]"
            >
              Commercial E-Rickshaws
            </a>
            <a 
              href="#offers" 
              onClick={() => { setMobileMenuOpen(false); onOpenOffer(); }}
              className="block px-3 py-2 text-xs font-bold uppercase text-[#ea580c]"
            >
              Festive ₹2,999 Down Payment Offer
            </a>
            <a 
              href="#dealership" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-bold uppercase text-stone-700"
            >
              Showroom Locator (Jhalwa, Prayagraj)
            </a>
            <div className="pt-2">
              <a 
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="block text-center py-2.5 rounded-xl bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs uppercase shadow-sm"
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
