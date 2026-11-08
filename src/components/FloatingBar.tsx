import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, ArrowUp } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface FloatingBarProps {
  onOpenTestRide: () => void;
  onOpenOffer: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onOpenTestRide, onOpenOffer }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Back to Top Button (Saffron) */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 sm:bottom-6 right-6 z-40 p-3 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white shadow-2xl shadow-orange-900/40 transition-all hover:scale-110 cursor-pointer hidden sm:flex items-center justify-center border border-[#fef08a]/30"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Floating Sticky Bottom Conversion Bar for Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7] border-t border-[#E6DAC7] p-2.5 px-4 shadow-2xl">
        <div className="grid grid-cols-4 gap-2">
          {/* 1. Call */}
          <a
            href={`tel:${SHOWROOM_INFO.phone}`}
            className="flex flex-col items-center justify-center p-1.5 rounded-sm bg-[#FBF7EE] border border-[#E6DAC7] text-[#15803d]"
          >
            <Phone className="w-4 h-4 text-[#15803d] mb-0.5" />
            <span className="text-[10px] font-bold uppercase">Call</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hello%20Shree%20Madhav%20Enterprises,%20I%20would%20like%20to%20know%20more%20about%20your%20EV%20scooters%20and%20offers.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 rounded-sm bg-[#FBF7EE] border border-[#E6DAC7] text-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
            <span className="text-[10px] font-bold uppercase">WhatsApp</span>
          </a>

          {/* 3. ₹2,999 Offer */}
          <button
            onClick={onOpenOffer}
            className="flex flex-col items-center justify-center p-1.5 rounded-sm bg-amber-50/80 border border-amber-300/80 text-[#ea580c]"
          >
            <Sparkles className="w-4 h-4 text-[#eab308] mb-0.5" />
            <span className="text-[10px] font-black uppercase">₹2,999 Deal</span>
          </button>

          {/* 4. Test Ride */}
          <button
            onClick={onOpenTestRide}
            className="flex flex-col items-center justify-center p-1.5 rounded-sm bg-gradient-to-r from-[#ea580c] to-[#15803d] text-white shadow-md font-black"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] uppercase tracking-wider">Test Ride</span>
          </button>
        </div>
      </div>
    </>
  );
};
