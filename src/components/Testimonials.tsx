import React from 'react';
import { Star, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/inventory';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#FBF7EE] border-b border-[#E6DAC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FDFBF7] text-[#ea580c] border border-[#E6DAC7] rounded-full text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
            <ThumbsUp className="w-3.5 h-3.5 text-[#15803d]" />
            <span>Customer Stories &amp; Real Savings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#15803d] tracking-tight uppercase">
            Stories of <span className="text-[#ea580c]">Pride &amp; Trust</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ea580c] to-[#eab308] mx-auto my-3 rounded-full" />
          <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Hear from commuters, students, and commercial drivers in Prayagraj who made the switch to electric mobility with Shree Madhav Enterprises.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#E6DAC7] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#eab308]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#eab308]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="py-2 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#15803d] mb-4 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#15803d]" />
                  <span>{t.savings}</span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#E6DAC7]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#15803d]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#15803d] uppercase">{t.name}</h4>
                    <p className="text-[11px] text-stone-500">{t.role} &bull; {t.location}</p>
                    <span className="text-[10px] text-[#ea580c] font-black uppercase tracking-wider">{t.vehicle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
