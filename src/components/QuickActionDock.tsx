import React from 'react';
import { Gift, Calculator, MapPin } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

interface QuickActionDockProps {
  onOpenTestRide: () => void;
  onOpenOffer: () => void;
  onOpenCalculator: () => void;
}

export const QuickActionDock: React.FC<QuickActionDockProps> = ({
  onOpenTestRide,
  onOpenOffer,
  onOpenCalculator,
}) => {
  const actions = [
    {
      id: 'test-ride',
      title: 'Book a Test Ride',
      subtitle: 'Free test drive at showroom or home',
      action: onOpenTestRide,
      icon: (
        /* Real Electric Scooter Silhouette Vector Icon - NO surrounding box */
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-8 h-8 text-[#ea580c] flex-shrink-0 group-hover:scale-110 transition-transform"
        >
          {/* Rear Wheel */}
          <circle cx="8" cy="24" r="4" strokeWidth="2.2" />
          {/* Front Wheel */}
          <circle cx="24" cy="24" r="4" strokeWidth="2.2" />
          {/* Chassis / Footboard */}
          <path d="M12 24 h6 l2 -10 l-4 -2" strokeWidth="2" />
          {/* Steering column & Handlebar */}
          <path d="M22 24 l-3 -14 h4" strokeWidth="2" />
          {/* Seat */}
          <path d="M10 16 h5" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      id: 'offers',
      title: 'Festive Offers',
      subtitle: '₹2,999 Down Payment & Scratch Card',
      action: onOpenOffer,
      icon: (
        /* Real Gift Box Vector Icon - NO surrounding box */
        <Gift 
          className="w-8 h-8 text-[#ea580c] flex-shrink-0 group-hover:scale-110 transition-transform" 
          strokeWidth={1.8} 
        />
      )
    },
    {
      id: 'emi',
      title: 'Savings & EMI',
      subtitle: 'Calculate loan EMI & fuel savings',
      action: onOpenCalculator,
      icon: (
        /* Real Calculator Vector Icon - NO surrounding box */
        <Calculator 
          className="w-8 h-8 text-[#15803d] flex-shrink-0 group-hover:scale-110 transition-transform" 
          strokeWidth={1.8} 
        />
      )
    },
    {
      id: 'dealer',
      title: 'Showroom Location',
      subtitle: 'Shaha Urf Pipal Gaon, Jhalwa',
      action: () => {
        const el = document.getElementById('dealership');
        el?.scrollIntoView({ behavior: 'smooth' });
      },
      icon: (
        /* Real Location Map Pin Vector Icon - NO surrounding box */
        <MapPin 
          className="w-8 h-8 text-[#16a34a] flex-shrink-0 group-hover:scale-110 transition-transform" 
          strokeWidth={1.8} 
        />
      )
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Specialist',
      subtitle: 'Instant price quote & advice',
      action: () => {
        window.open(
          `https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hello%20Shree%20Madhav%20Enterprises,%20I%20am%20interested%20in%20an%20EV%20Scooty%20/%20E-Rickshaw.%20Please%20share%20details%20and%20offers.`,
          '_blank'
        );
      },
      icon: (
        /* Real Official WhatsApp Logo Icon - NO surrounding box */
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.16C10.56 20.16 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16ZM16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.58C14.64 13.5 14.47 13.46 14.3 13.71C14.14 13.96 13.66 14.52 13.51 14.69C13.37 14.85 13.22 14.88 12.97 14.75C12.72 14.63 11.92 14.37 10.97 13.52C10.23 12.86 9.73 12.04 9.58 11.79C9.44 11.54 9.57 11.41 9.69 11.28C9.8 11.17 9.94 10.99 10.07 10.84C10.19 10.69 10.23 10.59 10.31 10.42C10.39 10.25 10.35 10.11 10.29 9.98C10.23 9.86 9.73 8.63 9.53 8.12C9.33 7.63 9.12 7.7 8.97 7.69C8.83 7.68 8.66 7.68 8.49 7.68C8.32 7.68 8.05 7.74 7.82 7.99C7.6 8.24 6.96 8.84 6.96 10.05C6.96 11.27 7.85 12.44 7.97 12.61C8.1 12.77 9.71 15.26 12.18 16.33C12.77 16.58 13.22 16.73 13.58 16.85C14.17 17.03 14.71 17.01 15.13 16.94C15.6 16.87 16.57 16.35 16.78 15.77C16.98 15.19 16.98 14.69 16.92 14.59C16.86 14.49 16.71 14.43 16.46 14.31L16.56 14.39Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8 mb-4">
      {/* Spacious, Luxury Cream Card Strip with Refined Warm Borders */}
      <div className="bg-[#FDFBF7] rounded-2xl border border-[#E6DAC7] shadow-[0_8px_30px_rgba(234,88,12,0.07)] px-4 sm:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E6DAC7]">
          {actions.map((act, index) => (
            <button
              key={act.id}
              onClick={act.action}
              className={`group flex items-center gap-3.5 p-3 sm:px-4 sm:py-2 hover:bg-orange-50/50 transition-colors text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] rounded-xl ${
                index !== 0 ? 'sm:pl-5' : ''
              }`}
            >
              {/* Standalone Real Icon - NO surrounding box */}
              {act.icon}

              {/* Text: Title + Subtitle with comfortable breathing space */}
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-[13px] font-black uppercase text-[#15803d] group-hover:text-[#ea580c] transition-colors tracking-tight truncate">
                  {act.title}
                </div>
                <div className="text-[11px] text-stone-500 font-medium truncate mt-0.5">
                  {act.subtitle}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
