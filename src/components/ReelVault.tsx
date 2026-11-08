import React, { useState, useRef } from "react";
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Instagram, 
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { SHOWROOM_INFO } from "../data/inventory";

export interface ReelItem {
  id: string;
  instagramId: string;
  instagramUrl: string;
  embedUrl: string;
  title: string;
  titleLines: [string, string];
  category: string;
  tag: string;
  subtitle: string;
  metrics: string;
  posterSrc: string;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: "reel-1",
    instagramId: "De1iY3dPfZ8",
    instagramUrl: "https://www.instagram.com/p/De1iY3dPfZ8/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/p/De1iY3dPfZ8/embed/",
    title: "Diwali ₹2,999 Down Payment Scheme",
    titleLines: ["Diwali ₹2,999", "Down Payment"],
    category: "Festive Special",
    tag: "Diwali Offer",
    subtitle: "Instant spot loan approval with minimum documentation. Drive home your favorite EV scooty this festive season from our Jhalwa showroom.",
    metrics: "₹2,999 Scheme • Spot Approval",
    posterSrc: "/vehicles/scooty-fascino-style.jpg",
  },
  {
    id: "reel-2",
    instagramId: "De82ybmvA29",
    instagramUrl: "https://www.instagram.com/reel/De82ybmvA29/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/reel/De82ybmvA29/embed/",
    title: "Prayagraj Customer Delivery Celebration",
    titleLines: ["Customer", "Celebration"],
    category: "Customer Story",
    tag: "Delivery Moment",
    subtitle: "Welcoming another proud family to the Shree Madhav electric revolution. Key handover and joyful first ride in Jhalwa.",
    metrics: "500+ Happy Riders • Jhalwa",
    posterSrc: "/vehicles/scooty-urban-yellow.jpg",
  },
  {
    id: "reel-3",
    instagramId: "DfVDDTEPh_Z",
    instagramUrl: "https://www.instagram.com/reel/DfVDDTEPh_Z/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/reel/DfVDDTEPh_Z/embed/",
    title: "Thunder Pro Instant Pickup & High Range",
    titleLines: ["Thunder Pro", "Instant Torque"],
    category: "Performance Test",
    tag: "Speed & Range",
    subtitle: "Testing 0-40 km/h acceleration, waterproof BLDC motor, and real-world 120 KM range through Prayagraj city traffic.",
    metrics: "120 KM Range • 60 KM/H",
    posterSrc: "/vehicles/scooty-red-ev.jpg",
  },
  {
    id: "reel-4",
    instagramId: "DfWw6zVT_8G",
    instagramUrl: "https://www.instagram.com/reel/DfWw6zVT_8G/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/reel/DfWw6zVT_8G/embed/",
    title: "Commercial Shaan Loader High Daily Profit",
    titleLines: ["Commercial", "Daily Rozgaar"],
    category: "Commercial Fleet",
    tag: "E-Rickshaw Earnings",
    subtitle: "How Prayagraj drivers save ₹350+ per day in fuel and earn up to ₹55,000 monthly with Shree Madhav heavy-duty rickshaws.",
    metrics: "₹55,000/Mo • UP Subsidy",
    posterSrc: "/vehicles/e-rickshaw-allfine.jpg",
  },
  {
    id: "reel-5",
    instagramId: "DfXosxWvFIj",
    instagramUrl: "https://www.instagram.com/reel/DfXosxWvFIj/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/reel/DfXosxWvFIj/embed/",
    title: "Shaha Urf Pipal Gaon Showroom Fleet Tour",
    titleLines: ["Showroom", "Fleet Tour"],
    category: "Showroom Tour",
    tag: "Walkthrough & Stock",
    subtitle: "Explore all models on the showroom floor: Falcon Neo, Thunder Pro, Urban Glide DX, and commercial loaders in stock for spot delivery.",
    metrics: "All Models In Stock • Spot Delivery",
    posterSrc: "/vehicles/e-rickshaw-commercial.jpg",
  },
  {
    id: "reel-6",
    instagramId: "DfXo-IpN-dr",
    instagramUrl: "https://www.instagram.com/reel/DfXo-IpN-dr/?utm_source=ig_web_copy_link",
    embedUrl: "https://www.instagram.com/reel/DfXo-IpN-dr/embed/",
    title: "Live Lucky Spin & Assured Festival Gifts",
    titleLines: ["Lucky Spin", "Assured Gifts"],
    category: "Scratch & Win",
    tag: "Assured Gifts",
    subtitle: "Real customers winning 32\" Smart LED TVs, Washing Machines, Refrigerators, and Inverter ACs on spot with every EV booking.",
    metrics: "100% Assured Gifts • Live Win",
    posterSrc: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
  },
];

interface ReelVaultProps {
  onOpenTestRide?: (modelId?: string) => void;
}

export const ReelVault: React.FC<ReelVaultProps> = ({ onOpenTestRide }) => {
  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);

  return (
    <section 
      id="reels-vault" 
      className="relative py-20 sm:py-28 bg-[#FBF7EE] text-[#1E291F] w-full max-w-full overflow-hidden border-b border-[#E6DAC7] selection:bg-[#ea580c] selection:text-white"
    >
      {/* Luxury Brand Ambient Glows: Saffron, Yellow, and Green */}
      <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-[#fed7aa]/55 via-[#fef08a]/35 to-[#bbf7d0]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-[550px] h-[550px] bg-gradient-to-tr from-[#bbf7d0]/60 via-[#fef08a]/35 to-[#fed7aa]/35 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. Section Header: Centered Title */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12">
        <h2 
          className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-center leading-[1.08]"
        >
          <span className="text-[#15803d]">EVERYTHING </span>
          <span className="text-[#78716c]">YOUR</span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-[#78716c]">BRAND </span>
            <span className="text-[#ea580c]">NEEDS TO GROW</span>
          </span>
        </h2>

        <div className="mt-4 sm:mt-5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base text-[#4b5563] font-normal leading-relaxed">
            Explore our trending customer deliveries, high-speed acceleration tests, commercial rozgaar reviews, and live festival gift wins straight from our Prayagraj showroom floor.
          </p>
        </div>
      </div>

      {/* 2. Interactive Horizontal Carousel Track: Full Section Width with Reduced Side Spacing */}
      <div className="relative w-full mb-12 sm:mb-16">
        <EditorialReelRow 
          rowId="reels-row"
          reels={REEL_ITEMS}
          onOpenModal={(reel) => setActiveModalReel(reel)}
        />
      </div>

      {/* 3. Bottom Banner: Full Luxury Width Showcase */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#FDFBF7] border-2 border-[#E5DAC8] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-[0_8px_32px_rgba(234,88,12,0.08)]">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-xs font-bold text-[#ea580c] uppercase tracking-widest font-mono">
                <Sparkles className="w-4 h-4 text-[#eab308]" />
                <span>Authorized Showroom &bull; Prayagraj</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#14532d] uppercase tracking-tight">
                Want To Test Ride Any Of These Electric Vehicles?
              </h3>
              <div className="mt-2 max-w-xl">
                <p className="text-[#4b5563] text-xs sm:text-sm leading-relaxed">
                  Visit Shree Madhav Enterprises in Shaha Urf Pipal Gaon, Jhalwa. Test ride our complete fleet and take home with festive ₹2,999 down payment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap justify-center">
              <a
                href={SHOWROOM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white border-2 border-[#E5DAC8] hover:border-[#ea580c] text-[#14532d] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#ea580c]" />
                <span>Follow Instagram</span>
              </a>

              <button
                onClick={() => onOpenTestRide?.()}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_4px_24px_rgba(234,88,12,0.4)] hover:shadow-[0_8px_32px_rgba(22,163,74,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span>Book Test Ride</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Reel Modal */}
      {activeModalReel && (
        <ReelModal
          reel={activeModalReel}
          onClose={() => setActiveModalReel(null)}
          onOpenTestRide={onOpenTestRide}
        />
      )}
    </section>
  );
};

/**
 * EditorialReelRow: Horizontal track with Saffron, Green, Yellow & Cream styling
 */
function EditorialReelRow({
  rowId,
  reels,
  onOpenModal,
}: {
  rowId: string;
  reels: ReelItem[];
  onOpenModal: (reel: ReelItem) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const scrollByAmount = (delta: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative w-full group/row">
      {/* Subtle edge fades in cream tone */}
      <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-10 lg:w-16 bg-gradient-to-r from-[#FBF7EE] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-10 lg:w-16 bg-gradient-to-l from-[#FBF7EE] to-transparent z-20 pointer-events-none" />

      {/* Left Navigation Arrow: Edge positioned */}
      <button
        type="button"
        onClick={() => scrollByAmount(-400)}
        aria-label="Scroll left"
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#ea580c] text-[#ea580c] hover:text-white border-2 border-[#E5DAC8] flex items-center justify-center backdrop-blur-md shadow-[0_8px_24px_rgba(234,88,12,0.22)] opacity-90 sm:opacity-0 sm:group-hover/row:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Right Navigation Arrow: Edge positioned */}
      <button
        type="button"
        onClick={() => scrollByAmount(400)}
        aria-label="Scroll right"
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#ea580c] text-[#ea580c] hover:text-white border-2 border-[#E5DAC8] flex items-center justify-center backdrop-blur-md shadow-[0_8px_24px_rgba(234,88,12,0.22)] opacity-90 sm:opacity-0 sm:group-hover/row:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Horizontal Scrollable Container: Full Width Edge-to-Edge with Minimal Side Spacing */}
      <div
        ref={scrollRef}
        onMouseLeave={() => setHoveredIdx(null)}
        className="flex items-center justify-start gap-4 sm:gap-6 md:gap-7 overflow-x-auto no-scrollbar pl-3 sm:pl-6 lg:pl-8 pr-3 sm:pr-6 lg:pr-8 pt-12 sm:pt-16 pb-16 sm:pb-20 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ 
          perspective: "1400px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {reels.map((reel, idx) => (
          <EditorialCard
            key={`${rowId}-${reel.id}`}
            reel={reel}
            isLifted={hoveredIdx === idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onOpenModal={() => onOpenModal(reel)}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * EditorialCard: Switched to Brand Palette (Saffron, Green, Cream, Yellow):
 * - Saffron & Green ambient aura glow
 * - Forest Green depth card fanning out
 * - Saffron & Yellow glowing play button & pill tag
 * - 2-line bold stacked white title with yellow metric highlight
 */
function EditorialCard({
  reel,
  isLifted,
  onMouseEnter,
  onOpenModal,
}: {
  reel: ReelItem;
  isLifted: boolean;
  onMouseEnter: () => void;
  onOpenModal: () => void;
}) {
  const [titleLine1, titleLine2] = reel.titleLines;

  return (
    <div className="relative shrink-0 select-none mx-1.5 sm:mx-2.5 my-3 sm:my-5">
      {/* 3D Radiant Ambient Glow Aura: Saffron, Yellow, and Green */}
      <div
        className={`absolute -inset-4 sm:-inset-6 rounded-[2.5rem] bg-gradient-to-tr from-[#ea580c] via-[#eab308] to-[#16a34a] blur-2xl sm:blur-3xl pointer-events-none transition-all duration-500 ease-out z-0 ${
          isLifted
            ? "opacity-70 scale-105 -translate-y-10 sm:-translate-y-14"
            : "opacity-0 scale-90 translate-y-0"
        }`}
      />

      {/* Physical Diffused Floor Shadow */}
      <div
        className={`absolute -bottom-14 sm:-bottom-16 inset-x-10 sm:inset-x-14 h-6 sm:h-8 bg-black/45 rounded-[50%] blur-xl pointer-events-none transition-all duration-500 ease-out z-0 ${
          isLifted
            ? "opacity-80 scale-110 translate-y-6 sm:-translate-y-10"
            : "opacity-0 scale-75 translate-y-0"
        }`}
      />

      {/* LAYER 1: Background 3D Depth Card (Forest Emerald & Saffron Obsidian Layer) */}
      <div
        className={`absolute inset-0 rounded-[2rem] sm:rounded-[2.25rem] bg-gradient-to-b from-[#1b3522] via-[#0d2013] to-[#051109] border border-[#eab308]/40 pointer-events-none transition-all duration-500 cubic-bezier(0.16,1,0.3,1) z-20 overflow-hidden ${
          isLifted
            ? "opacity-100 -translate-x-4 sm:-translate-x-6 -translate-y-5 sm:-translate-y-7 scale-[1.005] shadow-[0_25px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(234,88,12,0.35)]"
            : "opacity-0 translate-x-0 translate-y-0 scale-95"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-[#fef08a]/15 pointer-events-none" />
      </div>

      {/* LAYER 0: Main Front Card */}
      <div
        onClick={onOpenModal}
        onMouseEnter={onMouseEnter}
        className={`group/card relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] xl:w-[400px] 2xl:w-[430px] max-w-[85vw] aspect-[4/4.8] rounded-[2rem] sm:rounded-[2.25rem] bg-gradient-to-b from-[#142318] via-[#0b140e] to-[#040805] cursor-pointer will-change-transform transition-all duration-500 cubic-bezier(0.16,1,0.3,1) z-30 ${
          isLifted
            ? "-translate-y-10 sm:-translate-y-14 scale-[1.03] border-2 border-[#eab308]/60 shadow-[0_0_35px_rgba(234,88,12,0.55),0_0_60px_rgba(234,179,8,0.3),0_25px_50px_-10px_rgba(0,0,0,0.85)]"
            : "translate-y-0 scale-100 border border-white/20 opacity-95 hover:opacity-100 shadow-[0_12px_26px_-8px_rgba(0,0,0,0.35)]"
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Visual Poster Container */}
        <div className="relative w-full h-full overflow-hidden bg-black pointer-events-none rounded-[1.95rem] sm:rounded-[2.2rem]">
          <img
            src={reel.posterSrc}
            alt={reel.title}
            className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700 pointer-events-none select-none filter brightness-95 contrast-105"
          />

          {/* Atmospheric Scrim Gradient */}
          <div className="absolute bottom-0 inset-x-0 h-[52%] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

          {/* Top-left Pill Badge (Yellow / Gold Accent) */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 pointer-events-auto">
            <span className="inline-block px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#eab308]/60 bg-black/60 backdrop-blur-md text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase text-[#fef08a] shadow-md">
              {reel.tag}
            </span>
          </div>

          {/* Center Play Button with Saffron to Green Gradient Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] text-white flex items-center justify-center shadow-[0_0_35px_rgba(234,88,12,0.85)] border-2 border-[#fef08a]/60 backdrop-blur-md group-hover/card:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1 text-white" />
            </div>
          </div>

          {/* Bottom Typography (Stacked 2-line title on left + Yellow metric on right) */}
          <div className="absolute bottom-7 inset-x-6 sm:bottom-8 sm:inset-x-7 z-20 flex items-end justify-between gap-3 pointer-events-auto">
            <div className="flex-1 min-w-0">
              <h4 className="text-xl sm:text-2xl md:text-[1.85rem] font-bold text-white tracking-tight leading-[1.08] capitalize drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                <span className="block whitespace-nowrap text-white">{titleLine1}</span>
                <span className="block whitespace-nowrap text-white">{titleLine2}</span>
              </h4>
            </div>

            <div className="text-right max-w-[140px] sm:max-w-[165px] shrink-0 pl-1 pb-0.5">
              <p className="text-[11px] sm:text-xs text-[#fef08a] font-bold leading-tight line-clamp-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                {reel.metrics}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Fullscreen Interactive Reel Modal: Saffron & Green Theme with Live Instagram Player
 */
function ReelModal({
  reel,
  onClose,
  onOpenTestRide,
}: {
  reel: ReelItem;
  onClose: () => void;
  onOpenTestRide?: (modelId?: string) => void;
}) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#08120B] border-2 border-[#ea580c]/60 rounded-3xl overflow-hidden shadow-[0_0_90px_rgba(234,88,12,0.45)] flex flex-col md:flex-row my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/85 border border-white/20 text-white flex items-center justify-center hover:bg-[#ea580c] hover:border-[#fef08a] transition-all cursor-pointer shadow-lg touch-manipulation"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player (9:16 Aspect Ratio) */}
        <div className="md:w-1/2 bg-black flex items-center justify-center relative aspect-[9/16] max-h-[50vh] md:max-h-[80vh] mx-auto w-full overflow-hidden">
          <iframe
            src={reel.embedUrl}
            title={reel.title}
            className="w-full h-full border-0 rounded-l-2xl md:rounded-l-3xl"
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* Video Details Column (Saffron, Green, Yellow & Cream Highlights) */}
        <div className="md:w-1/2 p-5 sm:p-8 flex flex-col justify-between text-left">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#ea580c]/20 border border-[#ea580c]/50 text-[#fb923c] text-xs font-black uppercase tracking-wider mb-2.5 sm:mb-3">
              {reel.category} &bull; {reel.tag}
            </span>

            <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-2 sm:mb-3 leading-snug">
              {reel.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6">
              {reel.subtitle}
            </p>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-[#eab308]/25 mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
              <div className="text-xs text-[#fef08a] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#eab308]" />
                <span>Showroom Verified &bull; Official Post</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-[#4ade80] flex items-center gap-2">
                <span>{reel.metrics}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Available now at Shree Madhav Enterprises, Shaha Urf Pipal Gaon, Jhalwa, Prayagraj.
              </p>
            </div>
          </div>

          {/* Quick Connect & Direct Channels */}
          <div className="my-auto py-2 sm:py-3 space-y-2">
            <div className="text-xs text-gray-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
              <span>Direct Inquiries &amp; Official Links</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-gradient-to-r from-pink-500/15 via-rose-500/15 to-purple-500/15 border border-pink-500/35 text-white font-bold text-xs uppercase tracking-wider hover:border-pink-400 hover:bg-pink-500/25 hover:shadow-[0_0_22px_rgba(236,72,153,0.45)] hover:scale-[1.02] transition-all cursor-pointer group touch-manipulation"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-pink-400 opacity-70" />
              </a>

              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=Hi%20Shree%20Madhav%20Enterprises%2C%20I%20saw%20your%20reel%20%22${encodeURIComponent(reel.title)}%22%20and%20want%20to%20know%20more.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 border border-emerald-500/40 text-white font-bold text-xs uppercase tracking-wider hover:border-emerald-400 hover:bg-emerald-500/30 hover:shadow-[0_0_22px_rgba(16,185,129,0.45)] hover:scale-[1.02] transition-all cursor-pointer group touch-manipulation"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onOpenTestRide?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] text-white font-black text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(234,88,12,0.85)] hover:scale-[1.02] transition-all cursor-pointer touch-manipulation"
            >
              <span>Book Doorstep Test Ride &bull; ₹2,999 Offer →</span>
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 sm:py-2.5 rounded-xl bg-white/5 text-amber-100/70 hover:text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer touch-manipulation"
            >
              Back to Video Vault
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
