export type VehicleCategory = 'all' | 'scooty' | 'rickshaw' | 'battery' | 'parts';

export interface VehicleColor {
  name: string;
  hex: string;
  image?: string;
}

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface Vehicle {
  id: string;
  name: string;
  subName?: string;
  tagline: string;
  category: 'scooty' | 'rickshaw' | 'battery' | 'parts';
  subCategory?: 'low-speed' | 'high-speed' | 'commercial' | 'lithium' | 'lead-acid' | 'accessory';
  price: number;
  originalPrice?: number;
  downPayment: number;
  monthlyEmi: number;
  rangeKm: string;
  topSpeedKmH: string;
  chargingTime: string;
  batteryType: string;
  motorPower: string;
  warranty: string;
  licenseRequired: boolean;
  image: string;
  colors: VehicleColor[];
  highlights: string[];
  specs: VehicleSpec[];
  isPopular?: boolean;
  isOfferEligible?: boolean;
}

export interface TestRideBooking {
  modelId: string;
  modelName: string;
  name: string;
  phone: string;
  pincode: string;
  preferredDate: string;
  timeSlot: string;
  rideType: 'showroom' | 'home';
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  vehicle: string;
  rating: number;
  quote: string;
  savings: string;
  avatar: string;
}

export interface FestivalOffer {
  id: string;
  title: string;
  tag: string;
  description: string;
  giftName: string;
  giftIcon: string;
  bannerImage: string;
  downPayment: string;
  validUntil: string;
}

