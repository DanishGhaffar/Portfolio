import { useRef, useEffect, useState } from 'react';
import { Star, Award, MessageSquareHeart, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    image: '/images/review-1.png',
    alt: 'Fiverr Client Review 1',
  },
  {
    id: 2,
    image: '/images/review-2.png',
    alt: 'Fiverr Client Review 2',
  },
  {
    id: 3,
    image: '/images/review-3.png',
    alt: 'Fiverr Client Review 3',
  },
];

function ReviewImage({ review, index }) {
  const [visible, setVisible] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        onClick={() => setEnlarged(true)}
        className={`group relative cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-green-500/30 transition-all duration-700 hover:shadow-xl hover:shadow-green-500/10 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <img
          src={review.image}
          alt={review.alt}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
            <ExternalLink className="w-4 h-4" />
            Click to enlarge
          </div>
        </div>

        {/* Fiverr badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold backdrop-blur-sm">
          Fiverr ✓
        </div>
      </div>

      {/* Lightbox */}
      {enlarged && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setEnlarged(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={review.image}
              alt={review.alt}
              className="w-full h-full object-contain rounded-2xl"
            />
            <button
              onClick={() => setEnlarged(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Reviews() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="relative py-28 bg-[#050508] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <MessageSquareHeart className="w-4 h-4" />
            Client Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Happy Clients
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real feedback from clients on Fiverr — every project delivered with quality,
            precision, and on time.
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <span className="text-white font-bold text-lg">5.0</span>
                <span className="text-gray-400 text-sm ml-1">/ 5.0</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5">
              <Award className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="text-white font-bold">Top Rated</div>
                <div className="text-gray-400 text-xs">Fiverr Seller</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5">
              <MessageSquareHeart className="w-6 h-6 text-green-400" />
              <div>
                <div className="text-white font-bold">100%</div>
                <div className="text-gray-400 text-xs">Positive Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Review images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewImage key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Fiverr CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Fiverr Profile
          </a>
        </div>
      </div>
    </section>
  );
}
