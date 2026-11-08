import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight, Trophy, Zap } from 'lucide-react';

interface RacingSectionProps {
  onExplore?: () => void;
}

export const RacingSection: React.FC<RacingSectionProps> = ({ onExplore }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoResizeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoWidth, setVideoWidth] = useState<number | string>('918px');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Exact TVS Motor Company scroll-driven video expansion physics
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!videoResizeRef.current) {
            ticking = false;
            return;
          }

          const rect = videoResizeRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;
          const scrollTop = window.scrollY;
          const elementOffsetTop = rect.top + scrollTop;

          // TVS Motor exact formula from home-script.js:
          // o = 918 + 1700 * ((scrollTop - elementOffsetTop + 650) / windowHeight)
          // if windowWidth < 1282: o = 918 + 600 * ((scrollTop - elementOffsetTop + 650) / windowHeight)
          // clamped between base width and windowWidth
          const factor = windowWidth < 1282 ? 600 : 1700;
          let calculatedWidth = 918 + factor * ((scrollTop - elementOffsetTop + 650) / windowHeight);

          if (windowWidth < 960) {
            // Responsive mobile calculation: expand smoothly from contained to edge-to-edge full width
            const mobileBase = Math.min(windowWidth - 24, 918);
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)));
            calculatedWidth = mobileBase + (windowWidth - mobileBase) * scrollProgress;
          } else {
            calculatedWidth = Math.min(Math.max(calculatedWidth, 918), windowWidth);
          }

          setVideoWidth(calculatedWidth);

          // TVS Motor overlay trigger:
          // document.querySelector(".videoOverlay").getBoundingClientRect().bottom - 300 <= windowHeight
          if (rect.bottom - 220 <= windowHeight && rect.bottom > 120) {
            setShowOverlay(true);
          } else {
            setShowOverlay(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById('test-ride') || document.getElementById('vehicles');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="racing"
      ref={sectionRef}
      className="racingWrap relative text-center overflow-hidden bg-[#FBF7EE] pt-16 sm:pt-28 lg:pt-36 transition-colors border-b border-[#E6DAC7]"
      aria-label="Racing DNA Unleashed - Shree Madhav EV"
    >
      {/* Faint Background Watermark */}
      <div className="absolute top-10 sm:top-16 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <span className="text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter text-[#0A0A0A]/[0.03] uppercase whitespace-nowrap">
          SHREE MADHAV
        </span>
      </div>

      {/* 1. Shree Madhav Brand Emblem & Racing Badge */}
      <div className="mb-4 flex justify-center px-4 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E6DAC7] shadow-xs hover:border-[#059669]/50 transition-colors">
          <img
            src="/logo-emblem.png"
            alt="Shree Madhav Enterprises"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-black italic text-sm sm:text-base text-[#0A0A0A] tracking-tight uppercase">
            SHREE MADHAV
          </span>
          <span className="bg-[#059669] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[10px] sm:text-[11px] tracking-wider uppercase transform -skew-x-12 shadow-xs">
            RACING
          </span>
        </div>
      </div>

      {/* 2. Headline: Racing DNA Unleashed #ShreeMadhavEV */}
      <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[48px] lg:leading-[57.6px] text-[#0A0A0A] my-4 px-4 tracking-tight relative z-10">
        Racing DNA Unleashed <span className="text-[#059669]">#ShreeMadhavEV</span>
      </h2>

      {/* 3. Primary CTA Button: Emerald green */}
      <div className="mb-8 sm:mb-12">
        <button
          onClick={handleAction}
          className="btnBlue inline-flex items-center justify-center font-bold text-sm text-white bg-[#059669] hover:bg-[#047857] rounded-full px-7 h-[44px] sm:h-[48px] shadow-[0_8px_25px_rgba(5,150,105,0.3)] hover:scale-105 transition-all cursor-pointer group"
        >
          <span>Explore Now</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4. Expandable Video Cover Container (.videoResize) */}
      <div
        ref={videoResizeRef}
        className="videoResize relative mx-auto transition-all duration-75 ease-out shadow-2xl"
        style={{
          width: typeof videoWidth === 'number' ? `${videoWidth}px` : videoWidth,
          maxWidth: '100vw',
        }}
      >
        {/* Background Accent Track Outline */}
        <div className="relative w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/scooty%20vod.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block object-cover max-h-[750px] min-h-[300px] sm:min-h-[420px]"
          >
            <source
              src="/scooty%20vod.mp4"
              type="video/mp4"
            />
            <source
              src="/scooty vod.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Mute / Unmute Circular Action Button (Matching TVS Motor .mute-video) */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute Shree Madhav Video' : 'Mute Shree Madhav Video'}
            className="absolute top-4 right-4 sm:top-8 sm:right-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center border border-white/25 shadow-lg transition-all z-20 cursor-pointer hover:scale-105 active:scale-95"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            ) : (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] text-[#10b981]" />
            )}
          </button>

          {/* 5. Video Slide-Up Bottom Overlay: Deep Charcoal Darkroom Backdrop */}
          <div
            className={`videoOverlay absolute left-0 right-0 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-t border-[#059669]/40 text-center py-6 sm:py-8 px-4 transition-all duration-500 ease-out z-10 ${
              showOverlay
                ? 'bottom-0 opacity-100 translate-y-0'
                : '-bottom-44 opacity-0 translate-y-10 pointer-events-none'
            }`}
          >
            <h3 className="font-sans font-semibold text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight mb-4">
              Racing DNA Unleashed <span className="text-[#059669]">#ShreeMadhavEV</span>
            </h3>
            <button
              onClick={handleAction}
              className="btnBlue inline-flex items-center justify-center font-bold text-sm text-white bg-[#059669] hover:bg-[#047857] rounded-full px-7 h-[44px] sm:h-[48px] shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all cursor-pointer group"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Buffer for smooth scrolling into next section */}
      <div className="h-10 sm:h-16 w-full" />
    </section>
  );
};

