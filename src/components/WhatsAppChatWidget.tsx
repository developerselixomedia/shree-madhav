import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { SHOWROOM_INFO } from "../data/inventory";

const WHATSAPP_PHONE = SHOWROOM_INFO.whatsapp; // "919211509211"
const PREFILLED_MESSAGE =
  "Hi Shree Madhav Enterprises, I am interested in your EV Scooters, E-Rickshaws, and the ₹2,999 Down Payment festive scheme. Please share models, pricing, and test ride details.";

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Auto open on 1st visit to the website (after 2 seconds)
  useEffect(() => {
    const hasAutoOpened = sessionStorage.getItem("madhav_wa_auto_opened");
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("madhav_wa_auto_opened", "true");
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close when clicking outside or pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <div ref={widgetRef} className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-50 select-none">
      {/* ── Chat Window Popup ── */}
      <div
        role="dialog"
        aria-label="WhatsApp Chat Support"
        aria-hidden={!isOpen}
        className={`absolute bottom-16 sm:bottom-18 right-0 w-[calc(100vw-2.5rem)] sm:w-[350px] max-w-[360px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35),0_4px_16px_rgba(0,0,0,0.12)] border border-black/10 origin-bottom-right transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Emerald WhatsApp Header */}
        <div className="bg-[#059669] text-white px-5 py-4 flex items-center gap-3.5 relative select-none">
          {/* WhatsApp Logo */}
          <div className="w-11 h-11 shrink-0 flex items-center justify-center">
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.939l-1.564 5.889 6.088-1.597c1.701.932 3.655 1.469 5.736 1.469 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
          </div>

          <div className="flex-1 pr-1">
            <h3 className="font-bold text-[16px] leading-tight tracking-tight text-white">
              Connect with Shree Madhav EV
            </h3>
            <p className="text-[12px] leading-snug mt-1 text-white/95 font-normal">
              Hi! Click below to chat directly with our{" "}
              <span className="font-bold text-white">EV Specialists</span> on WhatsApp.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 bg-white">
          {/* Incoming Chat Message Bubble */}
          <div className="relative bg-[#FDFBF7] rounded-2xl rounded-tl-sm p-4 text-[13.5px] leading-relaxed text-[#1e293b] font-normal shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] border border-[#E6DAC7]">
            Our team usually responds within a few minutes to discuss test rides, ₹2,999 down payment festive schemes, and spot approvals.
          </div>

          {/* Action CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-[#059669] hover:bg-[#047857] active:scale-[0.98] transition-all duration-200 text-white font-bold text-[15px] py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_6px_20px_rgba(5,150,105,0.4)] hover:shadow-[0_8px_25px_rgba(5,150,105,0.5)] group"
          >
            <svg
              className="w-5 h-5 fill-white transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.939l-1.564 5.889 6.088-1.597c1.701.932 3.655 1.469 5.736 1.469 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
            <span>Chat with Our Team</span>
          </a>
        </div>
      </div>

      {/* ── Floating WhatsApp Trigger Button ── */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={isOpen}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#059669] hover:bg-[#047857] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(5,150,105,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30 focus:outline-none cursor-pointer"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white stroke-[2.5] transition-transform duration-200 rotate-0 hover:rotate-90" />
        ) : (
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.939l-1.564 5.889 6.088-1.597c1.701.932 3.655 1.469 5.736 1.469 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
          </svg>
        )}
      </button>
    </div>
  );
}

