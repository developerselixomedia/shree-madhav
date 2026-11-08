import React, { useState } from 'react';
import { X, Zap, ShieldCheck, BatteryCharging, Gauge, Check, Calendar, Phone, Sparkles, RotateCcw } from 'lucide-react';
import { Vehicle } from '../types';
import { SHOWROOM_INFO } from '../data/inventory';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookTestRide: (modelId: string) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({
  vehicle,
  onClose,
  onBookTestRide,
}) => {
  if (!vehicle) return null;

  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const activeColor = vehicle.colors[activeColorIdx] || vehicle.colors[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08120B]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FDFBF7] border-2 border-[#E6DAC7] rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FBF7EE] border border-[#E6DAC7] text-stone-600 hover:text-black hover:bg-stone-200 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Vehicle Image & Colors */}
          <div className="bg-[#FBF7EE] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E6DAC7]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#15803d] text-white uppercase border border-[#eab308]/40">
                  {vehicle.category}
                </span>
                {vehicle.isOfferEligible && (
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#ea580c] text-white uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#fef08a]" />
                    <span>Scratch Card Offer</span>
                  </span>
                )}
              </div>
              <h2 id="modal-title" className="text-2xl font-black text-[#15803d] uppercase tracking-tight">
                {vehicle.name}
              </h2>
              {vehicle.subName && (
                <p className="text-xs text-[#ea580c] font-bold uppercase">{vehicle.subName}</p>
              )}
            </div>

            {/* Vehicle Preview Image */}
            <div className="my-6 relative rounded-2xl overflow-hidden bg-white p-2 border border-[#E6DAC7] shadow-sm">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-56 sm:h-64 object-cover object-center rounded-xl"
              />
              <div className="absolute bottom-4 left-4 bg-[#14532d] text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm border border-[#eab308]/40">
                {vehicle.category === 'battery' ? (
                  <span>Warranty: <strong className="text-[#fef08a]">{vehicle.warranty}</strong></span>
                ) : (
                  <span>Color: <strong className="text-[#fef08a]">{activeColor.name}</strong></span>
                )}
              </div>
            </div>

            {/* Color Selector (Vehicles only) */}
            {vehicle.category !== 'battery' && vehicle.colors.length > 1 && (
              <div>
                <span className="text-xs font-bold uppercase text-[#15803d] block mb-2">Available Colors:</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {vehicle.colors.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveColorIdx(idx)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        idx === activeColorIdx
                          ? 'border-[#ea580c] bg-orange-50 text-[#ea580c] shadow-xs'
                          : 'border-[#E6DAC7] bg-[#FDFBF7] text-stone-600 hover:border-[#ea580c]/50'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-stone-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Compatibility info for batteries */}
            {vehicle.category === 'battery' && (
              <div className="p-3.5 rounded-xl bg-[#FBF7EE] border border-[#E6DAC7] text-xs text-stone-700 space-y-1">
                <span className="font-black text-[#14532d] uppercase tracking-wider block">Universal Compatibility:</span>
                <p className="text-[11px] leading-relaxed text-stone-600">
                  Engineered to fit high-speed and low-speed Electric Scooties, Commercial E-Rickshaws, and Loaders across Prayagraj.
                </p>
              </div>
            )}
          </div>

          {/* Right: Specs, Pricing & Actions */}
          <div className="p-6 flex flex-col justify-between max-h-[80vh] overflow-y-auto bg-[#FDFBF7]">
            <div className="space-y-5">
              {/* Pricing Callout */}
              <div className="p-4 rounded-2xl bg-[#FBF7EE] border border-[#E6DAC7] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold">
                    {vehicle.category === 'battery' ? 'Showroom Price' : 'Ex-Showroom Prayagraj'}
                  </span>
                  <div className="text-2xl font-black text-[#14532d]">
                    ₹{vehicle.price.toLocaleString('en-IN')}*
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#ea580c] uppercase font-bold">
                    {vehicle.category === 'battery' ? 'Old Battery Trade-in' : 'Down Payment From'}
                  </span>
                  <div className="text-xl font-black text-[#ea580c]">
                    {vehicle.category === 'battery' ? 'Up to ₹5,000 Off*' : `₹${vehicle.downPayment.toLocaleString('en-IN')}*`}
                  </div>
                  {vehicle.monthlyEmi > 0 && (
                    <span className="text-[11px] text-[#15803d] font-bold">EMI ₹{vehicle.monthlyEmi}/mo*</span>
                  )}
                </div>
              </div>

              {/* Category-Relevant 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {vehicle.category === 'battery' ? (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Capacity &amp; Voltage</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">
                        {vehicle.id === 'ultra-lfp-master-pack' ? '72V 45Ah (3.24 kWh)' : vehicle.id === 'lithium-smart-pack' ? '60V / 72V 36Ah' : '48V/60V 28-32Ah'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <BatteryCharging className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>Cycle Lifespan</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">
                        {vehicle.subCategory === 'lead-acid' ? '1200+ Cycles (SMF)' : '3000+ Deep Cycles'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <BatteryCharging className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Fast Charge Time</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">{vehicle.chargingTime}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#eab308]" />
                        <span>Official Warranty</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">{vehicle.warranty}</div>
                    </div>
                  </>
                ) : vehicle.category === 'rickshaw' ? (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Daily Route Range</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">{vehicle.rangeKm}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <Gauge className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>Seating / Payload</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">
                        {vehicle.id === 'shakti-cargo-loader' ? '750 KG Payload' : '4+1 Passenger (RTO)'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <BatteryCharging className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Daily Running Cost</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">Only ₹35 - ₹45 / day</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#eab308]" />
                        <span>Warranty</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">{vehicle.warranty}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Range per Charge</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">{vehicle.rangeKm}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <Gauge className="w-3.5 h-3.5 text-[#ea580c]" />
                        <span>Top Speed</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">{vehicle.topSpeedKmH}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <BatteryCharging className="w-3.5 h-3.5 text-[#15803d]" />
                        <span>Charging Time</span>
                      </div>
                      <div className="font-black text-stone-900 text-sm">{vehicle.chargingTime}</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#E6DAC7] shadow-xs">
                      <div className="flex items-center gap-1.5 text-stone-500 mb-1 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#eab308]" />
                        <span>Warranty</span>
                      </div>
                      <div className="font-black text-[#15803d] text-sm">{vehicle.warranty}</div>
                    </div>
                  </>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#15803d] mb-2">
                  Key Features &amp; Highlights
                </h4>
                <ul className="space-y-1.5">
                  {vehicle.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-[#15803d] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Specs Table */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#15803d] mb-2">
                  Technical Specifications
                </h4>
                <div className="rounded-xl border border-[#E6DAC7] overflow-hidden text-xs">
                  {vehicle.specs.map((s, idx) => (
                    <div
                      key={s.label}
                      className={`flex justify-between py-2 px-3 ${
                        idx % 2 === 0 ? 'bg-[#FBF7EE]' : 'bg-white'
                      }`}
                    >
                      <span className="text-stone-600">{s.label}</span>
                      <span className="text-[#15803d] font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 border-t border-[#E6DAC7] mt-5 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onClose();
                  if (vehicle.category === 'battery') {
                    const text = `Hi Shree Madhav Enterprises, I want to trade in my old battery for ${vehicle.name} (Price: ₹${vehicle.price.toLocaleString('en-IN')}). Please share exchange scheme and pickup details.`;
                    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  } else {
                    onBookTestRide(vehicle.id);
                  }
                }}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-900/20 cursor-pointer flex items-center justify-center gap-1.5"
              >
                {vehicle.category === 'battery' ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Trade-in Battery</span>
                  </>
                ) : vehicle.category === 'rickshaw' ? (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Book E-Rickshaw Demo</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Book a Test Ride</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  const message = vehicle.category === 'battery'
                    ? `Hi Shree Madhav Enterprises, I am interested in ${vehicle.name} (₹${vehicle.price.toLocaleString('en-IN')}). Please share availability and battery specifications.`
                    : `Hi Shree Madhav Enterprises, I am interested in ${vehicle.name} (Color: ${activeColor.name}). Please share finance breakdown for ₹${vehicle.downPayment} down payment.`;
                  window.open(
                    `https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(message)}`,
                    '_blank'
                  );
                }}
                className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
