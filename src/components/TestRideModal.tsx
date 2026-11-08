import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  User, 
  Phone, 
  Clock, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Gauge,
  BatteryCharging,
  Building2,
  Home,
  Zap
} from 'lucide-react';
import { VEHICLES, SHOWROOM_INFO } from '../data/inventory';

interface TestRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelId?: string;
}

export const TestRideModal: React.FC<TestRideModalProps> = ({
  isOpen,
  onClose,
  initialModelId,
}) => {
  if (!isOpen) return null;

  // Only test-rideable models (exclude battery packs and chargers)
  const testRideVehicles = VEHICLES.filter(
    (v) => v.category === 'scooty' || v.category === 'rickshaw'
  );

  const [selectedModel, setSelectedModel] = useState(
    initialModelId && testRideVehicles.some((v) => v.id === initialModelId)
      ? initialModelId
      : testRideVehicles[0]?.id || VEHICLES[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM - 01:00 PM (Morning)');
  const [rideType, setRideType] = useState<'showroom' | 'home'>('showroom');
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedVehicle = testRideVehicles.find((v) => v.id === selectedModel) || testRideVehicles[0] || VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;

    setIsSuccess(true);

    const locationText = rideType === 'showroom' 
      ? 'Showroom Visit (Shaha Urf Pipal Gaon, Jhalwa)' 
      : 'Doorstep Home Delivery (Prayagraj)';

    const msg = `Hi Shree Madhav Enterprises, I want to book a Free EV Test Ride!%0A%0A*Selected EV:* ${encodeURIComponent(selectedVehicle.name)}%0A*Ride Option:* ${encodeURIComponent(locationText)}%0A*Preferred Date:* ${preferredDate || 'Earliest Available'}%0A*Time Slot:* ${encodeURIComponent(preferredTime)}%0A*Customer Name:* ${encodeURIComponent(fullName || 'Valued Customer')}%0A*WhatsApp Phone:* ${phone}%0A*Area / Locality:* ${encodeURIComponent(locality || 'Prayagraj')}%0A%0APlease confirm my appointment.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${msg}`, '_blank');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#08120B]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="test-ride-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#FDFBF7] border-2 border-[#eab308]/60 rounded-3xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FBF7EE] hover:bg-stone-200 text-stone-500 hover:text-stone-900 border border-[#E6DAC7] flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close Test Ride Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="pr-10 mb-6">
              {/* Client's Official Logo & Saffron Heading Badge */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <img
                  src="/logo-emblem.png"
                  alt="Shree Madhav Enterprises"
                  className="h-7 w-auto object-contain filter drop-shadow-xs"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#ea580c] text-white shadow-md shadow-orange-600/20">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-2.5 h-2.5 text-[#fef08a] fill-[#fef08a]" />
                  </div>
                  <span className="font-black tracking-wider text-[11px] sm:text-xs uppercase text-white">
                    SHREE MADHAV ENTERPRISES
                  </span>
                </div>
              </div>

              <h3 
                id="test-ride-modal-title" 
                className="text-2xl sm:text-[28px] font-black text-[#14532d] uppercase tracking-tight leading-snug"
              >
                EXPERIENCE SILENT POWER <span className="text-[#ea580c]">BEFORE YOU BUY</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                Take our high-torque electric scooters &amp; commercial loaders for a test spin at our Jhalwa showroom or right at your doorstep in Prayagraj.
              </p>
            </div>

            {/* Test Ride Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. Model Selector */}
              <div>
                <label 
                  htmlFor="modal-model-select" 
                  className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Choose Your EV Model <span className="text-[#ea580c]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="modal-model-select"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full h-11 px-3.5 pr-10 rounded-xl bg-white focus:bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all appearance-none cursor-pointer"
                  >
                    <optgroup label="⚡ Electric Scooters (Personal & Commuter)">
                      {testRideVehicles
                        .filter((v) => v.category === 'scooty')
                        .map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} — {v.rangeKm} Range • Top Speed {v.topSpeedKmH}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="🛺 Commercial E-Rickshaws & Loaders">
                      {testRideVehicles
                        .filter((v) => v.category === 'rickshaw')
                        .map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} — {v.rangeKm} Range • DP ₹{v.downPayment.toLocaleString('en-IN')}
                          </option>
                        ))}
                    </optgroup>
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Selected Model Spec Pill */}
                {selectedVehicle && (
                  <div className="mt-2 px-3 py-1.5 rounded-lg bg-[#FBF7EE] border border-[#E6DAC7] flex items-center justify-between text-[11px] text-stone-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-stone-500" />
                      <span>{selectedVehicle.topSpeedKmH}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BatteryCharging className="w-3.5 h-3.5 text-[#15803d]" />
                      <span>{selectedVehicle.rangeKm} Range</span>
                    </span>
                    <span className="font-bold text-[#ea580c]">
                      DP: ₹{selectedVehicle.downPayment.toLocaleString('en-IN')}*
                    </span>
                  </div>
                )}
              </div>

              {/* 2. Ride Location Selector (Showroom vs Home Doorstep) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Test Ride Location <span className="text-[#ea580c]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRideType('showroom')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rideType === 'showroom'
                        ? 'border-[#ea580c] bg-orange-50/50 shadow-xs ring-1 ring-[#ea580c]'
                        : 'border-[#E6DAC7] bg-[#FBF7EE] hover:bg-stone-100/70 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                        <Building2 className={`w-4 h-4 ${rideType === 'showroom' ? 'text-[#ea580c]' : 'text-stone-500'}`} />
                        <span>Showroom Visit</span>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        rideType === 'showroom' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-stone-300'
                      }`}>
                        {rideType === 'showroom' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-500 leading-tight">
                      Shaha Urf Pipal Gaon, Jhalwa
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRideType('home')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      rideType === 'home'
                        ? 'border-[#ea580c] bg-orange-50/50 shadow-xs ring-1 ring-[#ea580c]'
                        : 'border-[#E6DAC7] bg-[#FBF7EE] hover:bg-stone-100/70 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                        <Home className={`w-4 h-4 ${rideType === 'home' ? 'text-[#ea580c]' : 'text-stone-500'}`} />
                        <span>Doorstep Delivery</span>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        rideType === 'home' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-stone-300'
                      }`}>
                        {rideType === 'home' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-500 leading-tight">
                      Free delivery across Prayagraj
                    </span>
                  </button>
                </div>
              </div>

              {/* 3. Name & WhatsApp Phone (2 Equal Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label 
                    htmlFor="modal-name-input" 
                    className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Your Full Name <span className="text-[#ea580c]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="modal-name-input"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all placeholder:text-stone-400"
                      autoComplete="name"
                      required
                    />
                    <User className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="modal-phone-input" 
                    className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    WhatsApp Mobile Number <span className="text-[#ea580c]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="modal-phone-input"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="e.g. 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all placeholder:text-stone-400"
                      required
                    />
                    <Phone className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 4. Date & Time Slot (2 Equal Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label 
                    htmlFor="modal-date-input" 
                    className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      id="modal-date-input"
                      type="date"
                      value={preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="modal-time-select" 
                    className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      id="modal-time-select"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all appearance-none cursor-pointer"
                    >
                      <option value="10:00 AM - 01:00 PM (Morning)">10:00 AM – 01:00 PM (Morning)</option>
                      <option value="01:00 PM - 04:00 PM (Afternoon)">01:00 PM – 04:00 PM (Afternoon)</option>
                      <option value="04:00 PM - 07:00 PM (Evening)">04:00 PM – 07:00 PM (Evening)</option>
                      <option value="07:00 PM - 08:30 PM (Night)">07:00 PM – 08:30 PM (Late Evening)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 5. Locality / Address in Prayagraj */}
              <div>
                <label 
                  htmlFor="modal-locality-input" 
                  className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Locality / Landmark in Prayagraj
                </label>
                <div className="relative">
                  <input
                    id="modal-locality-input"
                    type="text"
                    placeholder="e.g. Jhalwa, Civil Lines, Rajrooppur, Naini, Katra, Dhoomanganj..."
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full h-11 px-3.5 pr-10 rounded-xl bg-white border border-[#E6DAC7] focus:border-[#ea580c] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 transition-all placeholder:text-stone-400"
                  />
                  <MapPin className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 6. High-Contrast CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 sm:h-13 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-900/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Test Ride</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#15803d] flex-shrink-0" />
                  <span>100% Free • No Obligation to Buy</span>
                </div>
                <div className="text-stone-400">
                  Instant WhatsApp Booking Confirmation
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803d] flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803d]/10 text-[#15803d] text-xs font-bold uppercase tracking-wider border border-[#15803d]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#eab308]" />
              <span>Test Ride Reserved Successfully</span>
            </div>

            <h3 className="text-2xl font-black text-[#14532d] uppercase tracking-tight">
              We&apos;re Getting Your EV Ready!
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Your test ride for <strong>{selectedVehicle.name}</strong> has been scheduled for <strong>{preferredDate || 'Earliest Slot'}</strong> ({preferredTime}). Our showroom advisor will contact you on <strong>{phone}</strong>.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done
              </button>
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FBF7EE] hover:bg-stone-200 text-stone-800 border border-[#E6DAC7] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book for Another Person
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
