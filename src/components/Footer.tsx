import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Zap, ArrowUp, Calendar } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface FooterProps {
  onOpenTestRide: () => void;
  onOpenOffer: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTestRide, onOpenOffer, onOpenCalculator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08120B] text-stone-300 border-t-4 border-[#ea580c] pt-14 sm:pt-16 pb-24 sm:pb-16 font-sans">
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Footer Banner: Clean Cream Surface with Refined Warm Borders */}
        <div className="bg-[#FDFBF7] text-[#1E291F] p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#E6DAC7] shadow-2xl mb-14 sm:mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#ea580c]">
              Ready to Ride The Future?
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#15803d] uppercase tracking-tight mt-1">
              Visit Shree Madhav Enterprises Showroom or Book Doorstep Test Ride
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
              Take home any EV Scooty with down payments starting at just ₹2,999. Fast spot financing with minimum paperwork at our Jhalwa showroom.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <button
              onClick={onOpenTestRide}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-900/20 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Test Ride</span>
            </button>

            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl border-2 border-[#15803d] text-[#15803d] hover:bg-[#15803d] hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>9211-50-9211</span>
            </a>
          </div>
        </div>

        {/* Multi-column Sitemap with Generous 12-Column Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info & Contacts (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg flex-shrink-0">
                <img 
                  src="/logo-emblem.png" 
                  alt="Shree Madhav Enterprises Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center text-lg sm:text-xl font-black tracking-wide leading-none">
                  <span className="text-[#ea580c]">SHREE </span>
                  <span className="text-[#4ade80] ml-1.5">MADHAV</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="h-[1.5px] w-2 bg-[#facc15]" />
                  <span className="text-[10px] font-bold tracking-[0.25em] text-stone-200 uppercase font-mono">
                    ENTERPRISES &bull; PRAYAGRAJ
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-[1.8] tracking-normal font-normal max-w-sm pt-1">
              Authorized multi-brand showroom &amp; service facility for Electric Scooters, Commercial E-Rickshaws, Lithium-Ion battery packs, and genuine spare parts in Shaha Urf Pipal Gaon (Jhalwa), Prayagraj, Uttar Pradesh.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-1" />
                <span className="leading-relaxed tracking-normal">{SHOWROOM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="leading-relaxed tracking-normal">
                  Customer Care:{' '}
                  <a href={`tel:${SHOWROOM_INFO.phone}`} className="text-white hover:underline font-bold ml-1 tracking-wide">
                    {SHOWROOM_INFO.phoneFormatted}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#fef08a] flex-shrink-0" />
                <span className="leading-relaxed tracking-normal">
                  Email: <span className="text-stone-100 ml-1">contact@shreemadhavev.com</span>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={SHOWROOM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ea580c] text-stone-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram @ev.shreemadhav"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SHOWROOM_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#ea580c] text-stone-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook Shree Madhav Enterprises"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] text-stone-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp Showroom"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Electric Scooters Lineup (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.12em] text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ea580c] flex-shrink-0" />
              <span>Electric Scooters</span>
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Madhav Falcon Neo (₹2,999 DP)
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Madhav Thunder Pro Max (120 KM)
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Madhav Urban Glide DX
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Low-Speed (No License Required)
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  High-Speed Performance Models
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Commercial & Batteries (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.12em] text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ea580c] flex-shrink-0" />
              <span>Commercial &amp; Power</span>
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Passenger E-Rickshaw (4+1)
                </a>
              </li>
              <li>
                <a href="#vehicles" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Cargo Delivery Loader (750 KG)
                </a>
              </li>
              <li>
                <a href="#battery-exchange" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Lithium-Ion LFP Battery (3 Yr)
                </a>
              </li>
              <li>
                <a href="#battery-exchange" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Tubular Lead-Acid Battery Packs
                </a>
              </li>
              <li>
                <a href="#battery-exchange" className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-relaxed tracking-normal">
                  Battery Trade-In Exchange Scheme
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Services & Portals (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-[0.12em] text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ea580c] flex-shrink-0" />
              <span>Customer Services</span>
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={onOpenTestRide} 
                  className="text-stone-300 hover:text-[#fef08a] transition-colors text-left cursor-pointer block leading-relaxed tracking-normal"
                >
                  Book a Test Ride
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenOffer} 
                  className="text-[#fef08a] hover:text-white transition-colors text-left font-bold cursor-pointer block leading-relaxed tracking-normal"
                >
                  Diwali Scratch &amp; Win Offers
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCalculator} 
                  className="text-stone-300 hover:text-[#fef08a] transition-colors text-left cursor-pointer block leading-snug"
                >
                  Petrol vs EV Fuel Savings
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenCalculator} 
                  className="text-stone-300 hover:text-[#fef08a] transition-colors text-left cursor-pointer block leading-snug"
                >
                  Monthly EMI Calculator
                </button>
              </li>
              <li>
                <a 
                  href="#dealership" 
                  className="text-stone-300 hover:text-[#fef08a] transition-colors block leading-snug"
                >
                  Dealer Locator (Jhalwa, Prayagraj)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Shree Madhav Enterprises. All Rights Reserved. Shaha Urf Pipal Gaon, Jhalwa, Prayagraj.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              Crafted by <strong className="text-white font-bold">Elixomedia</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-[#15803d]/40 hover:bg-[#ea580c] text-white border border-[#eab308]/30 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
