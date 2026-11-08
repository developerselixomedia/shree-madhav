import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Phone, 
  User, 
  Sparkles,
  ShieldCheck, 
  Zap,
  Gauge,
  BatteryCharging,
  Building2,
  Home
} from 'lucide-react';
import { VEHICLES, SHOWROOM_INFO } from '../data/inventory';

interface BookTestRideProps {
  initialModelId?: string;
}

export const BookTestRide: React.FC<BookTestRideProps> = ({ initialModelId }) => {
  // Only test-rideable models (exclude battery packs and chargers)
  const testRideVehicles = VEHICLES.filter(
    (v) => v.category === 'scooty' || v.category === 'rickshaw'
  );

  const [selectedModel, setSelectedModel] = useState(
    initialModelId && testRideVehicles.some((v) => v.id === initialModelId)
      ? initialModelId
      : testRideVehicles[0]?.id || VEHICLES[0].id
  );
  const [rideType, setRideType] = useState<'showroom' | 'home'>('showroom');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM - 01:00 PM (Morning)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocality, setCustomerLocality] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialModelId && testRideVehicles.some((v) => v.id === initialModelId)) {
      setSelectedModel(initialModelId);
    }
  }, [initialModelId]);

  const selectedVehicleObj = testRideVehicles.find((v) => v.id === selectedModel) || testRideVehicles[0] || VEHICLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone || customerPhone.length < 10) return;

    setIsSubmitted(true);

    const msg = `Hi Shree Madhav Enterprises, I want to reserve a Free EV Test Ride!%0A%0A*Selected Model:* ${encodeURIComponent(selectedVehicleObj.name)}%0A*Test Ride Location:* ${rideType === 'showroom' ? 'Showroom Visit (Jhalwa, Prayagraj)' : 'Free Doorstep Home Delivery'}%0A*Preferred Date:* ${preferredDate || 'Earliest Slot'}%0A*Time Slot:* ${encodeURIComponent(preferredTime)}%0A*Customer Name:* ${encodeURIComponent(customerName || 'Customer')}%0A*Phone Number:* ${customerPhone}%0A*Locality / Address:* ${encodeURIComponent(customerLocality || 'Prayagraj')}%0A%0APlease confirm my test ride appointment.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${msg}`, '_blank');
    }, 600);
  };

  return (
    <section 
      id="test-ride" 
      className="w-full bg-[#FBF7EE] text-[#111827] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden relative font-sans border-t border-b border-[#E6DAC7]"
      aria-label="Book Your Free Test Ride"
    >
      {/* Expansive Full-Width Grid (Fills left and right space cleanly, NO awkward floating overlapping boxes) */}
      <div className="w-full max-w-[1640px] mx-auto">
        
        {/* ================= UNIFIED 2-COLUMN SIDE-BY-SIDE LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* ================= LEFT SECTION: EXPERIENCE SHOWCASE & RELEVANT EV IMAGERY (5 COLS) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Top Text Header */}
            <div className="relative">
              {/* Faint Background Watermark */}
              <div className="absolute -top-6 sm:-top-8 left-0 pointer-events-none select-none z-0 overflow-hidden w-full">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-[#14532d]/[0.05] uppercase whitespace-nowrap">
                  SHREE MADHAV
                </span>
              </div>

              {/* Client's Official Logo & Saffron Heading Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-4 relative z-10">
                <img
                  src="/logo-emblem.png"
                  alt="Shree Madhav Enterprises"
                  className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-sm"
                />
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#ea580c] text-white shadow-lg shadow-orange-600/25 transition-transform hover:scale-[1.02]">
                  <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 text-[#fef08a] fill-[#fef08a]" />
                  </div>
                  <span className="font-black tracking-wider text-xs sm:text-sm uppercase text-white">
                    SHREE MADHAV ENTERPRISES
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15803d] tracking-tight leading-tight uppercase relative z-10">
                EXPERIENCE SILENT POWER <br className="hidden sm:inline" />
                <span className="text-[#ea580c]">BEFORE YOU BUY.</span>
              </h2>

              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed relative z-10">
                Take the wheel of our high-torque electric scooters and e-rickshaws. Feel the instant pickup, whisper-quiet motor, and smooth suspension across Prayagraj roads with zero sales pressure.
              </p>
            </div>

            {/* Relevant High-Resolution EV Scooter & Ride Photograph */}
            <div className="relative w-full h-64 sm:h-80 lg:h-88 xl:h-96 rounded-2xl overflow-hidden shadow-lg group border border-[#E6DAC7]">
              <img
                src="/vehicles/scooty-urban-yellow.jpg"
                alt="Modern Electric Scooter Commute in City"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Showroom Location Pill Overlay on Photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2 bg-[#08120B]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#eab308]/40">
                  <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0" />
                  <span className="font-bold truncate">Shaha Urf Pipal Gaon, Jhalwa</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-[#15803d]/90 backdrop-blur-md px-3 py-2 rounded-xl font-bold border border-[#eab308]/40">
                  <Zap className="w-3.5 h-3.5 text-[#fef08a]" />
                  <span>Free 100% Ride</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Assurances Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#15803d] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 uppercase text-[11px]">Zero Fee</div>
                  <div className="text-stone-500 text-[11px]">100% Free Test Ride</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 uppercase text-[11px]">Doorstep Or Hub</div>
                  <div className="text-stone-500 text-[11px]">Home Delivery Available</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#eab308] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900 uppercase text-[11px]">Festival Gift</div>
                  <div className="text-stone-500 text-[11px]">Spin &amp; Win Voucher</div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SECTION: EXPANDED WIDE TEST RIDE BOOKING FORM (7 COLS) ================= */}
          <div className="lg:col-span-7 bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-xl border-2 border-[#E6DAC7] flex flex-col justify-between">
            
            <div>
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#E6DAC7]">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#ea580c] block mb-1">
                    Direct Showroom Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#14532d] uppercase tracking-tight">
                    Reserve Your Free Test Ride
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Select your vehicle and preferred slot. We will prepare your fully charged EV before your arrival.
                  </p>
                </div>
                <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#15803d]/10 text-[#15803d] border border-[#15803d]/30 text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                  <span>Instant Approval</span>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* 1. Choose EV Model */}
                  <div>
                    <label htmlFor="test-ride-model" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                      Choose Your EV Model <span className="text-[#ea580c]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="test-ride-model"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full h-12 px-4 pr-10 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 transition-all appearance-none cursor-pointer"
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
                    {selectedVehicleObj && (
                      <div className="mt-2 px-3.5 py-2 rounded-xl bg-[#FBF7EE] border border-[#E6DAC7] flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-stone-500" />
                          <span>Top Speed: <strong className="text-stone-900">{selectedVehicleObj.topSpeedKmH}</strong></span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BatteryCharging className="w-3.5 h-3.5 text-[#15803d]" />
                          <span>Range: <strong className="text-stone-900">{selectedVehicleObj.rangeKm}</strong></span>
                        </span>
                        <span className="font-bold text-[#ea580c]">
                          Down Payment: ₹{selectedVehicleObj.downPayment.toLocaleString('en-IN')}*
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 2. Test Ride Location (Interactive Cards) */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                      Test Ride Location <span className="text-[#ea580c]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setRideType('showroom')}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          rideType === 'showroom'
                            ? 'border-[#ea580c] bg-orange-50/50 shadow-xs ring-1 ring-[#ea580c]'
                            : 'border-[#E6DAC7] bg-[#FBF7EE] hover:bg-stone-100/70 text-stone-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                            <Building2 className={`w-4 h-4 ${rideType === 'showroom' ? 'text-[#ea580c]' : 'text-stone-500'}`} />
                            <span>Showroom Visit</span>
                          </div>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            rideType === 'showroom' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-stone-300'
                          }`}>
                            {rideType === 'showroom' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <span className="text-[11px] text-stone-500">
                          Shaha Urf Pipal Gaon, Jhalwa
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRideType('home')}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          rideType === 'home'
                            ? 'border-[#ea580c] bg-orange-50/50 shadow-xs ring-1 ring-[#ea580c]'
                            : 'border-[#E6DAC7] bg-[#FBF7EE] hover:bg-stone-100/70 text-stone-600'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
                            <Home className={`w-4 h-4 ${rideType === 'home' ? 'text-[#ea580c]' : 'text-stone-500'}`} />
                            <span>Doorstep Delivery</span>
                          </div>
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            rideType === 'home' ? 'border-[#ea580c] bg-[#ea580c]' : 'border-stone-300'
                          }`}>
                            {rideType === 'home' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <span className="text-[11px] text-stone-500">
                          Free test ride at your home / office
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* 3. Preferred Date & Time Slot (2 Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label htmlFor="test-ride-date" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                        Preferred Date <span className="text-[#ea580c]">*</span>
                      </label>
                      <input
                        id="test-ride-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 transition-all cursor-pointer"
                      />
                    </div>

                    <div>
                      <label htmlFor="test-ride-time" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                        Preferred Time Slot <span className="text-[#ea580c]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="test-ride-time"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full h-12 px-4 pr-10 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 transition-all appearance-none cursor-pointer"
                        >
                          <option value="10:00 AM - 12:00 PM (Morning)">10:00 AM – 12:00 PM (Morning Slot)</option>
                          <option value="12:00 PM - 03:00 PM (Afternoon)">12:00 PM – 03:00 PM (Afternoon Slot)</option>
                          <option value="03:00 PM - 06:00 PM (Evening)">03:00 PM – 06:00 PM (Evening Slot)</option>
                          <option value="06:00 PM - 08:00 PM (Night)">06:00 PM – 08:00 PM (Late Evening)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* 4. Full Name & WhatsApp Mobile Number (2 Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label htmlFor="test-ride-name" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                        Full Name <span className="text-[#ea580c]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="test-ride-name"
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          required
                          className="w-full h-12 px-4 pr-10 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 placeholder:text-stone-400"
                        />
                        <User className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="test-ride-phone" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                        WhatsApp Mobile Number <span className="text-[#ea580c]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="test-ride-phone"
                          type="tel"
                          inputMode="numeric"
                          placeholder="e.g. 9876543210"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          required
                          className="w-full h-12 px-4 pr-10 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 placeholder:text-stone-400"
                        />
                        <Phone className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* 5. Locality / Address in Prayagraj */}
                  <div>
                    <label htmlFor="test-ride-locality" className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-stone-800 mb-1.5">
                      Locality / Address in Prayagraj
                    </label>
                    <div className="relative">
                      <input
                        id="test-ride-locality"
                        type="text"
                        placeholder="e.g. Jhalwa, Civil Lines, Rajrooppur, Naini, Katra, Chowk..."
                        value={customerLocality}
                        onChange={(e) => setCustomerLocality(e.target.value)}
                        className="w-full h-12 px-4 pr-10 rounded-xl border border-[#E6DAC7] bg-white text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/15 placeholder:text-stone-400"
                      />
                      <MapPin className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Full-Width High-Impact Submit Button: Saffron to Emerald Radiant Gradient */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-900/20 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Check Availability &amp; Confirm Test Ride</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-black text-[#14532d] uppercase">
                    Test Ride Reserved!
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your request for <strong>{selectedVehicleObj.name}</strong> on <strong>{preferredDate || 'Earliest Slot'}</strong> ({preferredTime}) has been recorded. Our showroom advisor is connecting with you on WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#FBF7EE] hover:bg-[#FDFBF7] text-stone-800 border border-[#E6DAC7] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Book for Another Family Member
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Trust & Assurance Strip */}
            <div className="pt-5 mt-6 border-t border-[#E6DAC7] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#15803d]" />
                <span>Zero Security Deposit &bull; No Obligation to Buy</span>
              </div>
              <div className="text-[11px] font-mono text-stone-400">
                Helpline: 9211-50-9211
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
