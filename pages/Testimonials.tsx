import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Emily R.", location: "Dine-In", rating: 5, text: "Hands down the best restaurant in Wrexham. Every dish was outstanding." },
  { id: 2, name: "Mark T.", location: "Family Dinner", rating: 5, text: "Perfect family restaurant in Wrexham. Clean, welcoming, and delicious food." },
  { id: 3, name: "Ayesha K.", location: "Online Booking", rating: 5, text: "Loved how easy it was to book online. Food and service were excellent." },
  { id: 4, name: "David P.", location: "Date Night", rating: 5, text: "Great atmosphere and friendly staff. Highly recommended." },
  { id: 5, name: "Laura S.", location: "Tapas Lover", rating: 5, text: "Authentic flavours and generous portions." },
  { id: 6, name: "Tom B.", location: "Regular Customer", rating: 5, text: "Consistent quality every visit." },
  { id: 7, name: "Nina D.", location: "Visiting Wrexham", rating: 5, text: "Best dine-in restaurant near me while visiting." },
  { id: 8, name: "Chris W.", location: "Local Resident", rating: 5, text: "Reliable, tasty, and welcoming." },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-stone-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-stone-300">See why over 5,000 customers love Lisbon Tapas.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-stone-100">
              <div className="mb-4">
                <Quote className="h-8 w-8 text-brand-red/20" />
              </div>
              <p className="text-stone-700 italic mb-6 flex-grow text-lg">"{review.text}"</p>
              
              <div className="border-t border-stone-200 pt-4 mt-auto">
                 <div className="flex text-brand-gold mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-bold text-stone-900 block">{review.name}</span>
                    <span className="text-xs text-stone-500 uppercase tracking-wide">{review.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-red rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Experience it for yourself</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Join our satisfied customers and enjoy an authentic meal in the heart of Wrexham.</p>
          <a href="#/services" className="inline-block bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-stone-100 transition-colors shadow-lg">
            Book a Table Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;