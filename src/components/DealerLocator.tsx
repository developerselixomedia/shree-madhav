import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUpRight, 
  MessageCircle, 
  Check, 
  Zap, 
  Compass, 
  Plus, 
  Minus 
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

export const DealerLocator: React.FC = () => {
  return (
    <section 
      id="dealership" 
      className="w-full bg-[#FBF7EE] text-[#1E291F] py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-b border-[#E6DAC7] font-sans overflow-hidden"
      aria-label="Visit Our Showroom in Prayagraj"
    >
      <div className="w-full max-w-[1560px] mx-auto">
        
        {/* ================= TOP SECTION: EDITORIAL HEADLINE + ILLUMINATED SIGNBOARD & ADDRESS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
          
          {/* Left Column: Eyebrow + TVS Racing Styled Headline */}
          <div className="lg:col-span-5 relative">
            {/* Faint Background Watermark */}
            <div className="absolute -top-6 sm:-top-8 left-0 pointer-events-none select-none z-0 overflow-hidden w-full">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-[#14532d]/[0.05] uppercase whitespace-nowrap">
                PRAYAGRAJ
              </span>
            </div>

            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 mb-3 relative z-10">
              <span className="font-black italic text-[#15803d] text-xs sm:text-sm tracking-tight uppercase">
                VISIT
              </span>
              <span className="bg-[#ea580c] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] sm:text-xs tracking-wider uppercase transform -skew-x-12 shadow-xs inline-block">
                THE SHOWROOM
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#15803d] uppercase tracking-tight leading-[1.08] relative z-10">
              IN THE HEART <br />
              OF <br />
              <span className="text-[#ea580c]">JHALWA, PRAYAGRAJ.</span>
            </h2>
          </div>

          {/* Right Column: Illuminated Signboard Banner + Address & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end text-left lg:text-right space-y-4">
            
            {/* Illuminated Signboard Banner in Saffron / Amber Brand Theme */}
            <div className="inline-flex items-center gap-3.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] text-white shadow-xl shadow-orange-900/20 border border-[#fef08a]/40">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 flex-shrink-0">
                <Zap className="w-5 h-5 text-[#fef08a] fill-[#fef08a]" />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-white drop-shadow-md">
                {SHOWROOM_INFO.name}
              </span>
            </div>

            {/* Preserved Full Address & Showroom Details */}
            <div className="text-xs sm:text-sm text-[#44403c] leading-relaxed max-w-lg space-y-1">
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

            {/* Action Buttons: Radiant Gradient + Warm Cream Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SHOWROOM_INFO.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <span>Get directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hi%20Shree%20Madhav%20Enterprises,%20I%20am%20planning%20to%20visit%20the%20showroom%20today.%20Please%20share%20exact%20location%20pin.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#FDFBF7] hover:bg-[#FBF7EE] text-[#15803d] font-bold text-xs sm:text-sm border border-[#E6DAC7] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#ea580c]" />
                <span>WhatsApp Pin</span>
              </a>

              <a
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="px-5 py-2.5 rounded-full bg-[#FDFBF7] hover:bg-[#FBF7EE] text-[#15803d] font-bold text-xs sm:text-sm border border-[#E6DAC7] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#eab308]" />
                <span>Call {SHOWROOM_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM MAP CONTAINER ================= */}
        <div className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border-2 border-[#E6DAC7] bg-stone-100 shadow-xl relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
          
          {/* Interactive OpenStreetMap Embed of Prayagraj & Jhalwa */}
          <iframe
            title="Shree Madhav Enterprises Location Map in Prayagraj"
            src="https://www.openstreetmap.org/export/embed.html?bbox=81.7450%2C25.4050%2C81.8650%2C25.4650&layer=mapnik&marker=25.4320%2C81.7780"
            className="w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] border-0"
            loading="lazy"
          />

          {/* Top-Right Simulated Map Zoom Controls */}
          <div className="absolute top-4 right-4 z-10 flex flex-col rounded-lg bg-[#FDFBF7] shadow-md border border-[#E6DAC7] overflow-hidden text-stone-700">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SHOWROOM_INFO.googleMapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#FBF7EE] transition-colors flex items-center justify-center border-b border-[#E6DAC7]"
              aria-label="Zoom in on Map"
            >
              <Plus className="w-4 h-4" />
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SHOWROOM_INFO.googleMapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#FBF7EE] transition-colors flex items-center justify-center"
              aria-label="Zoom out on Map"
            >
              <Minus className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom-Right Floating Dark Pill: Open in Google Maps ↗ */}
          <div className="absolute bottom-4 right-4 z-10">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SHOWROOM_INFO.googleMapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#08120B]/95 hover:bg-black text-white text-xs font-bold shadow-xl backdrop-blur-md transition-all hover:scale-105 border border-[#eab308]/40"
            >
              <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-300" />
            </a>
          </div>

          {/* Bottom-Center Map Attribution */}
          <div className="absolute bottom-2 left-4 z-10 hidden sm:flex items-center gap-2 text-[10px] text-stone-500 font-mono bg-[#FDFBF7]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-[#E6DAC7]">
            <span>Shree Madhav Enterprises &bull; Jhalwa, Prayagraj</span>
            <span>|</span>
            <span>&copy; OpenStreetMap contributors</span>
          </div>

        </div>

        {/* ================= PRESERVED SHOWROOM FACILITIES & AMENITIES STRIP ================= */}
        <div className="mt-6 pt-6 border-t border-[#E6DAC7] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-[#14532d]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#15803d] flex-shrink-0" />
            <span>Dedicated Test Track</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#15803d] flex-shrink-0" />
            <span>Spot Loan Approval Desk</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#15803d] flex-shrink-0" />
            <span>Battery Testing &amp; Exchange Lab</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#15803d] flex-shrink-0" />
            <span>100% Genuine Spare Parts in Stock</span>
          </div>
        </div>

      </div>
    </section>
  );
};
