import React from 'react';
import { Instagram, Play, Heart, ExternalLink } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/inventory';

export const SocialFeed: React.FC = () => {
  const posts = [
    {
      id: 'p1',
      type: 'video',
      title: 'Happy Diwali Dhamaka Announcement',
      subtitle: 'Electric Scooty Now at Just ₹2,999 Down Payment!',
      image: '/vehicles/scooty-fascino-style.jpg',
      badge: '₹2,999 Scheme',
      likes: '412',
    },
    {
      id: 'p2',
      type: 'photo',
      title: 'Diwali Dhamaka Scratch & Win Gifts',
      subtitle: 'Win Washing Machine, Fridge, TV, AC & RO on every EV scooty!',
      image: '/vehicles/scooty-urban-yellow.jpg',
      badge: 'Scratch Card',
      likes: '685',
    },
    {
      id: 'p3',
      type: 'video',
      title: 'Customer Vehicle Delivery Moment',
      subtitle: 'Congratulating our newest family member on their new EV Scooty in Jhalwa.',
      image: '/vehicles/scooty-red-ev.jpg',
      badge: 'Showroom Delivery',
      likes: '529',
    },
    {
      id: 'p4',
      type: 'photo',
      title: 'Commercial E-Rickshaw Handover',
      subtitle: 'Empowering local Prayagraj drivers with Allfine 60V electric rickshaws.',
      image: '/vehicles/e-rickshaw-allfine.jpg',
      badge: 'Rozgaar Series',
      likes: '344',
    }
  ];

  return (
    <section className="py-20 bg-[#FBF7EE] border-b border-[#E6DAC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-1 bg-[#ea580c] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
                Community &amp; Customer Buzz
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#15803d] tracking-tight uppercase">
              Follow <span className="text-[#ea580c]">@ev.shreemadhav</span> on Instagram
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
              Check out daily customer delivery celebrations, festival discount announcements, and new EV arrivals.
            </p>
          </div>

          <a
            href={SHOWROOM_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] hover:brightness-110 text-white shadow-lg shadow-orange-500/25 transition-all self-start md:self-auto flex items-center gap-2 cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={SHOWROOM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E6DAC7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block relative cursor-pointer group"
            >
              <div className="relative h-60 bg-stone-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-md bg-[#08120B]/85 text-[#fef08a] border border-[#eab308]/40 shadow-sm backdrop-blur-xs">
                    {post.badge}
                  </span>
                </div>

                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#15803d] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-sm">
                  <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span>{post.likes}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-xs font-black text-[#15803d] group-hover:text-[#ea580c] transition-colors line-clamp-1 uppercase">
                  {post.title}
                </h4>
                <p className="text-[11px] text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                  {post.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
