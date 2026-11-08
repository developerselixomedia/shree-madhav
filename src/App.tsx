import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActionDock } from './components/QuickActionDock';
import { VehicleExplorer } from './components/VehicleExplorer';
import { RacingSection } from './components/RacingSection';
import { VehicleModal } from './components/VehicleModal';
import { TechEcosystem } from './components/TechEcosystem';
import { ScratchAndWin } from './components/ScratchAndWin';
import { WhyShreeMadhav } from './components/WhyShreeMadhav';
import { BatteryExchange } from './components/BatteryExchange';
import { ReelVault } from './components/ReelVault';
import { RoadShowcase } from './components/RoadShowcase';
import { DealerLocator } from './components/DealerLocator';
import { Footer } from './components/Footer';
import { FloatingBar } from './components/FloatingBar';
import { TestRideModal } from './components/TestRideModal';
import { WhatsAppChatWidget } from './components/WhatsAppChatWidget';
import { Vehicle } from './types';

export function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isTestRideModalOpen, setIsTestRideModalOpen] = useState(false);
  const [testRideInitialModelId, setTestRideInitialModelId] = useState<string | undefined>(undefined);

  // Auto-open test ride / booking modal once on 1st visit after 16 seconds (identical to Elixomedia GrowthCallPopup)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('madhav_test_ride_auto_opened');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsTestRideModalOpen(true);
        sessionStorage.setItem('madhav_test_ride_auto_opened', 'true');
      }, 16000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenTestRide = (modelId?: string) => {
    setTestRideInitialModelId(modelId);
    setIsTestRideModalOpen(true);
  };

  const handleOpenOffer = () => {
    const el = document.getElementById('offers');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('calculators');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FBF7EE] text-[#1E291F] flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* 1. TVS-Style Header (White with Navy typography & Red CTAs) */}
      <Header
        onOpenTestRide={handleOpenTestRide}
        onOpenOffer={handleOpenOffer}
        onOpenCalculator={handleOpenCalculator}
      />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 2. TVS-Style Cinematic Hero Banner Carousel */}
        <Hero
          onOpenTestRide={handleOpenTestRide}
          onOpenOffer={handleOpenOffer}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 3. Hallmark TVS Quick Action Dock */}
        <QuickActionDock
          onOpenTestRide={() => handleOpenTestRide()}
          onOpenOffer={handleOpenOffer}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 4. Tabbed Flagship Vehicle Explorer (.vehicleCard) */}
        <VehicleExplorer
          onSelectVehicle={(v) => setSelectedVehicle(v)}
          onOpenTestRide={handleOpenTestRide}
        />

        {/* 5. TVS Motor Signature "Racing DNA Unleashed #TVSRacing" with Scroll-Expanding Video */}
        <RacingSection onExplore={() => handleOpenTestRide()} />

        {/* 6. Smart Connected EV Technology Showcase (Bento Architecture) */}
        <TechEcosystem onOpenTestRide={handleOpenTestRide} />

        {/* 6. Client's Viral Diwali & Festival Scratch & Win Zone */}
        <ScratchAndWin
          onOpenTestRide={() => handleOpenTestRide()}
        />

        {/* 7. Why Shree Madhav EV Trust Grid (Option 3) */}
        <WhyShreeMadhav
          onOpenTestRide={() => handleOpenTestRide()}
        />

        {/* 8. Commercial E-Rickshaw & Loader Rozgaar Hub (Temporarily commented out) */}
        {/* <CommercialHub
          onOpenTestRide={handleOpenTestRide}
        /> */}

        {/* 9. Lithium-Ion & Lead Acid Battery Exchange Hub */}
        <BatteryExchange />

        {/* 10. Book a Test Ride Full Section (Commented out per user request - bookings handled via TestRideModal) */}
        {/* <BookTestRide initialModelId={testRideInitialModelId} /> */}

        {/* 11. Reel Vault: "EVERYTHING YOUR BRAND NEEDS TO GROW" */}
        <ReelVault onOpenTestRide={handleOpenTestRide} />

        {/* 12. Road to Shree Madhav: Electric Highway to Showroom Floor */}
        <RoadShowcase onOpenTestRide={handleOpenTestRide} />

        {/* 13. Dealer Locator & Prayagraj Showroom Center */}
        <DealerLocator />

      </main>

      {/* 14. TVS Motor Signature Deep Navy Footer with Red Accent line */}
      <Footer
        onOpenTestRide={() => handleOpenTestRide()}
        onOpenOffer={handleOpenOffer}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* 15. Mobile Floating Action Dock & Back-To-Top */}
      <FloatingBar
        onOpenTestRide={() => handleOpenTestRide()}
        onOpenOffer={handleOpenOffer}
      />

      {/* 16. Detailed Vehicle Specs & 360 Modal */}
      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onBookTestRide={(modelId) => handleOpenTestRide(modelId)}
      />

      {/* 17. Free Test Ride & Spot Booking Modal (Elixomedia Style) */}
      <TestRideModal
        isOpen={isTestRideModalOpen}
        onClose={() => setIsTestRideModalOpen(false)}
        initialModelId={testRideInitialModelId}
      />

      {/* 18. Floating WhatsApp Chat Widget (Elixomedia Style) */}
      <WhatsAppChatWidget />
    </div>
  );
}

export default App;
