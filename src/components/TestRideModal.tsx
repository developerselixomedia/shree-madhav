import React, { useState, useEffect } from 'react';
import { 
  X, 
  Phone, 
  User, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Zap,
  MapPin,
  Bike,
  MessageSquare,
  BadgeCheck,
  Headset,
  Users
} from 'lucide-react';
import { VEHICLES, SHOWROOM_INFO } from '../data/inventory';

interface TestRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelId?: string;
}

const TRUST_POINTS = [
  { icon: Users, value: "500+", label: "Happy Riders" },
  { icon: Headset, value: "Jhalwa", label: "Showroom Hub" },
  { icon: BadgeCheck, value: "100% Free", label: "No Sales Pressure" },
];

export const TestRideModal: React.FC<TestRideModalProps> = ({
  isOpen,
  onClose,
  initialModelId,
}) => {
  const [animateIn, setAnimateIn] = useState(false);

  // Filter test-rideable models
  const testRideVehicles = VEHICLES.filter(
    (v) => v.category === 'scooty' || v.category === 'rickshaw'
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: initialModelId && testRideVehicles.some((v) => v.id === initialModelId)
      ? initialModelId
      : testRideVehicles[0]?.id || 'falcon-ev',
    location: 'Showroom Visit (Jhalwa Crossing, Prayagraj)',
    message: ''
  });

  useEffect(() => {
    if (initialModelId && testRideVehicles.some((v) => v.id === initialModelId)) {
      setFormData((prev) => ({ ...prev, model: initialModelId }));
    }
  }, [initialModelId]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimateIn(true), 40);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name.trim() !== '' &&
           formData.phone.trim() !== '' &&
           formData.phone.length === 10;
  };

  const selectedVehicleObj = testRideVehicles.find((v) => v.id === formData.model) || testRideVehicles[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please enter your full name and 10-digit mobile number.');
      return;
    }

    const message = `⚡ Free EV Test Ride & Spot Booking Request

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
🛵 EV Model: ${selectedVehicleObj?.name || formData.model}
📍 Location: ${formData.location}
💬 Notes / Preferred Slot: ${formData.message || 'Earliest available today'}

I'd like to book a free test ride and explore the ₹2,999 festive down payment scheme!`;

    const whatsappUrl = `https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    onClose();
  };

  const fieldClass =
    "w-full pl-11 pr-4 py-3.5 bg-black/60 border border-white/15 rounded-xl text-white placeholder-gray-500 " +
    "focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/25 focus:outline-none transition-all duration-200 " +
    "hover:border-white/25 text-sm";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book Your Free Test Ride"
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300 p-0 sm:p-4 select-none"
      style={{ opacity: animateIn ? 1 : 0 }}
      onClick={onClose}
    >
      <div
        className={`relative w-full sm:max-w-lg flex flex-col bg-gradient-to-br from-[#161616] via-[#111111] to-[#0a0a0a] border border-[#ea580c]/35 rounded-t-3xl sm:rounded-3xl shadow-[0_0_120px_rgba(234,88,12,0.3)] transition-all max-h-[92vh] overflow-hidden duration-300 ${
          animateIn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Saffron Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#ea580c]/20 rounded-full blur-[110px] pointer-events-none" />

        {/* Sticky Header */}
        <div className="relative z-10 flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#161616]/95 backdrop-blur-xl">
          <div className="w-8 h-1 bg-white/20 rounded-full sm:hidden absolute left-1/2 -translate-x-1/2 top-2" />
          
          <div className="flex items-center gap-2.5">
            <img 
              src="/logo-emblem.png" 
              alt="Shree Madhav Emblem" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain" 
            />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#ea580c]">
              Free EV Test Ride
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-[#ea580c] border border-white/15 hover:border-[#ea580c] rounded-xl transition-all touch-manipulation cursor-pointer text-white"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="relative z-10 px-4 sm:px-7 py-5 sm:py-7 overflow-y-auto flex-1">
          
          {/* Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-[#ea580c]/25 to-[#ea580c]/5 rounded-2xl border border-[#ea580c]/30 mb-4 shadow-[0_0_30px_rgba(234,88,12,0.25)]">
              <Bike className="w-7 h-7 sm:w-8 sm:h-8 text-[#ea580c]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-[1.1] mb-2.5">
              Book Your Free<br />
              <span className="text-[#ea580c]">Test Ride</span>
            </h3>

            <p className="flex items-start justify-center gap-2 text-xs sm:text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
              <Zap className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-0.5" />
              <span>
                Experience <span className="text-white font-semibold">silent electric torque</span> and zero petrol queues on Prayagraj roads.
              </span>
            </p>
          </div>

          {/* Scarcity Badge */}
          <div className="mb-5 flex items-center gap-3 px-4 py-3 bg-[#ea580c]/10 border border-[#ea580c]/25 rounded-xl">
            <span className="relative flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-[#ea580c]/20 border border-[#ea580c]/30">
              <Clock className="w-4 h-4 text-[#ea580c]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-0.5">
                Limited Slots Today
              </p>
              <p className="text-xs text-gray-300">
                Only <span className="text-white font-bold">4 test ride slots</span> left in Jhalwa today — reserve now
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label htmlFor="tr-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Full Name <span className="text-[#ea580c]">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <input
                  id="tr-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={fieldClass}
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="tr-phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Phone Number (WhatsApp) <span className="text-[#ea580c]">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <input
                  id="tr-phone"
                  type="tel"
                  inputMode="numeric"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className={fieldClass}
                  required
                />
              </div>
            </div>

            {/* Choose EV Model */}
            <div>
              <label htmlFor="tr-model" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Choose EV Model
              </label>
              <div className="relative">
                <Bike className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <select
                  id="tr-model"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
                  style={{ color: '#ffffff' }}
                >
                  {testRideVehicles.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id} style={{ color: '#ffffff', background: '#111111' }}>
                      {vehicle.name} ({vehicle.rangeKm} • {vehicle.topSpeedKmH})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Test Ride Location */}
            <div>
              <label htmlFor="tr-location" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Test Ride Option
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <select
                  id="tr-location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
                  style={{ color: '#ffffff' }}
                >
                  <option value="Showroom Visit (Jhalwa Crossing, Prayagraj)" style={{ color: '#ffffff', background: '#111111' }}>
                    Showroom Visit (Beside Jhalwa Crossing, Prayagraj)
                  </option>
                  <option value="Doorstep Test Ride (At my Home / Office in Prayagraj)" style={{ color: '#ffffff', background: '#111111' }}>
                    Doorstep Test Ride (At My Home / Office in Prayagraj)
                  </option>
                </select>
              </div>
            </div>

            {/* Message / Preferred Slot */}
            <div>
              <label htmlFor="tr-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Preferred Slot / Notes <span className="text-gray-500 normal-case tracking-normal">(optional)</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                <textarea
                  id="tr-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. Visiting today around 4:00 PM, interested in ₹2,999 festive scheme..."
                  rows={2}
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className="group w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#15803d] text-white font-black uppercase tracking-wide rounded-xl hover:brightness-110 hover:shadow-[0_0_45px_rgba(234,88,12,0.55)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer shadow-lg mt-2"
            >
              <Phone className="w-5 h-5" />
              <span>Confirm Free Test Ride</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-disabled:translate-x-0 transition-transform" />
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-5 pt-5 border-t border-white/10">
            <div className="grid grid-cols-3 gap-2">
              {TRUST_POINTS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1">
                  <Icon className="w-5 h-5 text-[#ea580c]" />
                  <div className="text-base sm:text-lg font-black text-white leading-none">{value}</div>
                  <div className="text-[10px] text-gray-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Authorized Dealership &bull; Shaha Urf Pipal Gaon, Jhalwa</span>
          </p>
        </div>
      </div>
    </div>
  );
};
