import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  BatteryCharging, 
  Calendar, 
  Eye, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { VEHICLES, SHOWROOM_INFO } from '../data/inventory';
import { Vehicle } from '../types';

interface VehicleExplorerProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenTestRide: (modelId?: string) => void;
}

export const VehicleExplorer: React.FC<VehicleExplorerProps> = ({
  onSelectVehicle,
  onOpenTestRide,
}) => {
  // Category for the 3D Flip Carousel
  const [fleetCategory, setFleetCategory] = useState<'all' | 'scooty' | 'rickshaw' | 'battery'>('all');

  // Filtered fleet based on category
  const filteredFleet = fleetCategory === 'all'
    ? VEHICLES
    : VEHICLES.filter((v) => v.category === fleetCategory);

  // 3D Cover Flow Carousel State
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [responsiveScale, setResponsiveScale] = useState(1);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
    setIsFlipped(false);
  }, [fleetCategory]);

  // Responsive scale factor (calculated for expansive card widths)
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setResponsiveScale(Math.max(0.68, w / 480));
      } else if (w < 1024) {
        setResponsiveScale(Math.max(0.78, w / 850));
      } else if (w < 1440) {
        setResponsiveScale(Math.min(1.05, w / 1280));
      } else {
        setResponsiveScale(Math.min(1.2, w / 1440));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance interval (pauses while hovering so user can read flipped specs)
  useEffect(() => {
    if (isHovered || filteredFleet.length <= 1) return;
    const interval = setInterval(() => {
      setIsFlipped(false);
      setActiveIndex((prev) => (prev + 1) % filteredFleet.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, filteredFleet.length]);

  // Navigate carousel
  const handleNavigate = (direction: number) => {
    setIsFlipped(false);
    setActiveIndex((prev) => {
      const total = filteredFleet.length;
      return (prev + direction + total) % total;
    });
  };

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handleNavigate(-1);
    if (e.key === 'ArrowRight') handleNavigate(1);
  };

  // Calculate circular distance in Cover Flow
  const getDistance = (idx: number) => {
    const total = filteredFleet.length;
    let dist = idx - activeIndex;
    if (dist > total / 2) dist -= total;
    if (dist < -total / 2) dist += total;
    return dist;
  };

  // 3D Matrix Math (Calibrated for bigger cards with generous spacing)
  const get3DTransform = (dist: number) => {
    const absDist = Math.abs(dist);
    const sign = Math.sign(dist);
    const s = responsiveScale;

    if (dist === 0) {
      return { rotateY: 0, z: 0, scale: 1, x: 0, opacity: 1, zIndex: 50, show: true };
    } else if (absDist === 1) {
      return { rotateY: -sign * 36, z: -200, scale: 0.84, x: sign * 520 * s, opacity: 0.86, zIndex: 40, show: true };
    } else if (absDist === 2) {
      return { rotateY: -sign * 54, z: -440, scale: 0.68, x: sign * 900 * s, opacity: 0.45, zIndex: 30, show: true };
    } else {
      return { rotateY: -sign * 72, z: -620, scale: 0.5, x: sign * 1150 * s, opacity: 0, zIndex: 10, show: false };
    }
  };

  const springConfig = { type: 'spring' as const, stiffness: 260, damping: 20 };

  return (
    <section 
      id="vehicles" 
      className="w-full bg-[#FBF7EE] text-[#111827] py-14 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden relative font-sans border-b border-[#E6DAC7]"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Dynamic Background Accents: Emerald Green & Subtle Dark Grey */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Bottom-Left Dynamic Warm Brand Graphics */}
      <div 
        className="absolute left-0 bottom-0 w-72 sm:w-96 h-36 sm:h-48 bg-slate-200/50 pointer-events-none z-0"
        style={{ clipPath: 'polygon(0 45%, 100% 100%, 0 100%)' }}
      />
      <div 
        className="absolute left-0 bottom-0 w-84 sm:w-[420px] h-28 sm:h-36 bg-[#059669]/10 pointer-events-none z-0"
        style={{ clipPath: 'polygon(0 68%, 80% 100%, 0 100%)' }}
      />

      <div id="all-fleet-catalog" className="w-full relative z-10">
        {/* Section Header & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 relative">
          {/* Faint Background Watermark */}
          <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-black/[0.04] uppercase whitespace-nowrap">
              SHREE MADHAV
            </span>
          </div>

          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2 mb-3 relative z-10">
            <span className="font-black italic text-[#059669] text-xs sm:text-sm tracking-tight uppercase">
              SHREE MADHAV
            </span>
            <span className="bg-[#0A0A0A] text-white px-2.5 py-0.5 rounded-sm font-black italic text-[11px] sm:text-xs tracking-wider uppercase transform -skew-x-12 shadow-xs inline-block">
              LINEUP &bull; PRAYAGRAJ
            </span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight relative z-10">
            DISCOVER YOUR <span className="text-[#059669]">ELECTRIC RIDE</span>
          </h3>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-stone-600 leading-relaxed max-w-xl mx-auto font-normal relative z-10">
            Slide through our complete fleet. Hover over or tap any model to flip and explore live performance specs, range, down payments, and test ride bookings.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2.5 mt-6 flex-wrap">
            {[
              { id: 'all', label: 'All Fleet' },
              { id: 'scooty', label: 'E-Scooty' },
              { id: 'rickshaw', label: 'E-Rickshaw' },
              { id: 'battery', label: '🔋 Lead Acid & Lithium Batteries' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFleetCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  fleetCategory === cat.id
                    ? 'bg-[#0A0A0A] text-white shadow-md border border-[#0A0A0A] scale-105'
                    : 'bg-[#FDFBF7] text-stone-700 hover:text-[#059669] hover:bg-[#FBF7EE] border border-[#E6DAC7] shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Cover Flow Stage with Increased Height (Fully responsive) */}
        <div 
          className="relative flex items-center justify-center w-full h-[36rem] sm:h-[42rem] md:h-[46rem] lg:h-[50rem] xl:h-[54rem] outline-none my-2 select-none"
          style={{ perspective: '2200px' }}
        >
          {filteredFleet.map((vehicle, idx) => {
            const dist = getDistance(idx);
            const transform = get3DTransform(dist);
            const isCenter = dist === 0;

            return (
              <motion.div
                key={vehicle.id}
                className="absolute w-[88vw] sm:w-[420px] md:w-[460px] lg:w-[490px] xl:w-[530px] 2xl:w-[560px] h-[550px] sm:h-[610px] md:h-[660px] lg:h-[700px] xl:h-[730px] cursor-pointer"
                style={{
                  zIndex: transform.zIndex,
                  pointerEvents: transform.show ? 'auto' : 'none',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: transform.rotateY,
                  z: transform.z,
                  scale: transform.scale,
                  x: transform.x,
                  opacity: transform.opacity,
                }}
                transition={springConfig}
                onMouseEnter={() => {
                  if (isCenter) {
                    setIsHovered(true);
                    setIsFlipped(true);
                  }
                }}
                onMouseLeave={() => {
                  if (isCenter) {
                    setIsHovered(false);
                    setIsFlipped(false);
                  }
                }}
                onClick={() => {
                  if (!isCenter) {
                    setIsFlipped(false);
                    setActiveIndex(idx);
                  } else {
                    setIsFlipped((prev) => !prev);
                  }
                }}
              >
                {/* 3D Flip Card Container */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: isCenter && isFlipped ? 180 : 0 }}
                  transition={springConfig}
                >
                  
                  {/* ================= FRONT FACE: CREAM CARD WITH EMERALD GREEN & BLACK ACCENTS ================= */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[32px] sm:rounded-[36px] border-2 border-[#E6DAC7] shadow-[0_20px_50px_rgba(5,150,105,0.12)] bg-[#FDFBF7] flex flex-col justify-between hover:border-[#059669]/50 transition-all duration-300"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg) translateZ(1px)',
                    }}
                  >
                    {/* Top Image Container */}
                    <div className="relative w-full h-[62%] sm:h-[65%] overflow-hidden bg-[#FBF7EE] flex-shrink-0">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Subtle Top & Bottom Gradient for Badging Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35 pointer-events-none" />

                      {/* Top Badges (Emerald Green Down Payment & Black Warranty) */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#059669] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md border border-[#10b981]/40">
                          {vehicle.category === 'battery' ? (
                            <>
                              <RotateCcw className="w-3.5 h-3.5 text-[#10b981]" />
                              <span>Trade-in: Up to ₹5,000 Off*</span>
                            </>
                          ) : (
                            <>
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span>DP ₹{vehicle.downPayment.toLocaleString('en-IN')}*</span>
                            </>
                          )}
                        </div>
                        
                        <div className="px-3 py-1 rounded-full bg-[#0A0A0A] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md border border-white/20">
                          {vehicle.category === 'battery'
                            ? vehicle.warranty
                            : vehicle.category === 'rickshaw'
                            ? vehicle.id === 'shakti-cargo-loader'
                              ? '750 KG Payload'
                              : '4+1 Seating (RTO)'
                            : !vehicle.licenseRequired
                            ? 'No License Needed'
                            : `Top Speed: ${vehicle.topSpeedKmH}`}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Content Area (Prime Cream Luxury Styling, Clean Typography) */}
                    <div className="p-5 sm:p-7 bg-[#FDFBF7] border-t border-[#E6DAC7] flex flex-col justify-between flex-1 text-left">
                      <div>
                        <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#059669] block mb-1">
                          Shree Madhav &bull; {vehicle.category === 'scooty' ? 'Electric Scooty' : vehicle.category === 'rickshaw' ? 'Commercial E-Rickshaw' : vehicle.subCategory === 'lead-acid' ? 'Tubular Lead-Acid Battery' : 'Lithium-Ion LFP Battery'}
                        </span>

                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                          {vehicle.name}
                        </h4>
                        
                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 mt-1 font-normal">
                          {vehicle.tagline}
                        </p>
                      </div>

                      {/* Bottom Range & Flip Prompt */}
                      <div className="w-full flex items-center justify-between pt-3.5 border-t border-[#E6DAC7] mt-2">
                        <div className="text-xs sm:text-sm font-black text-[#059669] flex items-center gap-1.5">
                          {vehicle.category === 'battery' ? (
                            <>
                              <BatteryCharging className="w-4 h-4 text-[#059669]" />
                              <span>{vehicle.subCategory === 'lead-acid' ? 'Heavy Deep Cycle SMF' : '3000+ LFP Deep Cycles'}</span>
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 text-[#059669] fill-[#059669]" />
                              <span>{vehicle.rangeKm}</span>
                            </>
                          )}
                        </div>

                        <div className="text-xs sm:text-sm font-bold text-[#059669] flex items-center gap-1.5 animate-pulse">
                          <span>Hover / Tap to flip specs</span>
                          <RotateCcw className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= BACK FACE: LUXURY BLACK DEPTH CARD WITH EMERALD SPECULAR RIMS ================= */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[32px] sm:rounded-[36px] border-2 border-[#059669]/60 shadow-[0_25px_60px_rgba(0,0,0,0.4)] bg-gradient-to-br from-[#111827] via-[#0A0A0A] to-[#000000] text-white p-4 sm:p-5 lg:p-6 flex flex-col justify-between text-left"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(1px)',
                    }}
                  >
                    {/* Back Inner Content (PERFECTLY PROPORTIONED, NO OVERFLOW) */}
                    <div className="flex flex-col justify-between flex-1 space-y-2 sm:space-y-2.5">
                      
                      {/* Top Header */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#059669] whitespace-nowrap">
                            Shree Madhav EV &bull; Prayagraj
                          </span>
                          <span className="text-[10px] sm:text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-full border border-[#059669]/40 whitespace-nowrap">
                            {vehicle.category === 'battery' ? 'Certified Exchange' : '3-Year Warranty'}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-white leading-tight line-clamp-2">
                          {vehicle.name}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-stone-300 font-medium truncate mt-0.5">
                          {vehicle.subName || vehicle.tagline}
                        </p>
                      </div>

                      {/* Pricing & EMI Layout */}
                      <div className="flex items-center justify-between py-2 border-y border-white/10">
                        <div>
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                            {vehicle.category === 'battery' ? 'Showroom Price' : 'Ex-Showroom Price'}
                          </span>
                          <span className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
                            ₹{vehicle.price.toLocaleString('en-IN')}*
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                            {vehicle.category === 'battery' ? 'Old Battery Trade-In' : 'Easy Down Payment'}
                          </span>
                          <span className="text-sm sm:text-base font-black text-emerald-400 tracking-tight">
                            {vehicle.category === 'battery' ? 'Up to ₹5,000 Off*' : `From ₹${vehicle.downPayment.toLocaleString('en-IN')}*`}
                          </span>
                          {vehicle.monthlyEmi > 0 && (
                            <span className="text-[10px] sm:text-[11px] font-mono text-emerald-300 font-bold block">
                              EMI: ₹{vehicle.monthlyEmi}/mo*
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Category-Relevant 4 Key Specifications Grid with Emerald Metrics */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 py-0.5 text-left">
                        {vehicle.category === 'battery' ? (
                          <>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Capacity &amp; Voltage
                              </span>
                              <span className="text-xs sm:text-sm font-black text-emerald-400 tracking-tight">
                                {vehicle.id === 'ultra-lfp-master-pack' ? '72V 45Ah (3.24 kWh)' : vehicle.id === 'lithium-smart-pack' ? '60V / 72V 36Ah' : '48V/60V 28-32Ah'}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Cycle Lifespan
                              </span>
                              <span className="text-xs sm:text-sm font-black text-white tracking-tight">
                                {vehicle.subCategory === 'lead-acid' ? '1200+ Cycles (SMF)' : '3000+ Deep Cycles'}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Fast Charging
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200">
                                {vehicle.chargingTime}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Cell Chemistry
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200">
                                {vehicle.subCategory === 'lead-acid' ? 'Tubular Lead-Acid' : 'Grade-A LiFePO4'}
                              </span>
                            </div>
                          </>
                        ) : vehicle.category === 'rickshaw' ? (
                          <>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Daily Route Range
                              </span>
                              <span className="text-xs sm:text-sm font-black text-emerald-400 tracking-tight">
                                {vehicle.rangeKm}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Seating / Payload
                              </span>
                              <span className="text-xs sm:text-sm font-black text-white tracking-tight">
                                {vehicle.id === 'shakti-cargo-loader' ? '750 KG Payload' : '4+1 Passenger'}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Daily Running Cost
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200">
                                Only ₹35 - ₹45 / day
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Motor &amp; Axle
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200 truncate block">
                                {vehicle.motorPower}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Riding Range
                              </span>
                              <span className="text-xs sm:text-sm font-black text-emerald-400 tracking-tight">
                                {vehicle.rangeKm}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Top Speed
                              </span>
                              <span className="text-xs sm:text-sm font-black text-white tracking-tight">
                                {vehicle.topSpeedKmH}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Fast Charging
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200">
                                {vehicle.chargingTime}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#e6dac7]/70 block mb-0.5">
                                Motor Power
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-stone-200 truncate block">
                                {vehicle.motorPower}
                              </span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Feature Highlights Bullets */}
                      <div className="space-y-1 py-1.5 border-t border-white/10 text-[11px] sm:text-xs text-stone-300">
                        {vehicle.highlights.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#059669] font-black text-xs leading-none mt-0.5 shrink-0">&bull;</span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Compatibility Row for Batteries, Color Swatches for Vehicles */}
                      {vehicle.category === 'battery' ? (
                        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[10px] sm:text-[11px]">
                          <span className="font-bold text-emerald-400 uppercase tracking-wider">
                            COMPATIBILITY:
                          </span>
                          <span className="font-medium text-stone-200">
                            All Electric Scooties &amp; E-Rickshaws
                          </span>
                        </div>
                      ) : vehicle.colors && vehicle.colors.length > 0 ? (
                        <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-stone-400">
                            COLORS:
                          </span>
                          <div className="flex items-center gap-1.5">
                            {vehicle.colors.map((c, ci) => (
                              <span
                                key={ci}
                                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white/30 shadow-xs inline-block"
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}

                    </div>

                    {/* Bottom Action CTAs on Back Face */}
                    <div className="pt-2.5 sm:pt-3 border-t border-white/15 grid grid-cols-2 gap-2.5 mt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (vehicle.category === 'battery') {
                            const text = `Hi Shree Madhav Enterprises, I want to inquire about the ${vehicle.name} (₹${vehicle.price.toLocaleString('en-IN')}) and trade-in exchange scheme for my old battery.`;
                            window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                          } else {
                            onOpenTestRide(vehicle.id);
                          }
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
                      >
                        {vehicle.category === 'battery' ? (
                          <>
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Trade-In</span>
                          </>
                        ) : vehicle.category === 'rickshaw' ? (
                          <>
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Demo</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Ride</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectVehicle(vehicle);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#FDFBF7] hover:bg-[#FBF7EE] text-stone-900 font-black text-xs uppercase tracking-wider transition-all shadow-sm border border-stone-300 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <span>Full Specs</span>
                        <Eye className="w-3.5 h-3.5 text-stone-700" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls: Emerald Green Hover & Warm Cream Palette */}
        <div className="flex items-center justify-center gap-6 mt-8 sm:mt-12">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() => handleNavigate(-1)}
            className="w-12 h-12 rounded-full border border-[#E6DAC7] bg-[#FDFBF7] hover:bg-[#059669] hover:border-[#059669] text-stone-900 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Previous Vehicle"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {filteredFleet.map((v, i) => (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setIsFlipped(false);
                  setActiveIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex 
                    ? 'w-8 bg-[#059669]' 
                    : 'w-2.5 bg-[#E6DAC7] hover:bg-[#059669]/50'
                }`}
                aria-label={`Go to ${v.name}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => handleNavigate(1)}
            className="w-12 h-12 rounded-full border border-[#E6DAC7] bg-[#FDFBF7] hover:bg-[#059669] hover:border-[#059669] text-stone-900 hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Next Vehicle"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>

    </section>
  );
};
