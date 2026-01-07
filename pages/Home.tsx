import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Utensils, Award, Users, MapPin, Clock, CalendarCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/tapashero/1920/1080" 
            alt="Tapas Spread" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Authentic Tapas Experience in the Heart of Wrexham
          </h1>
          <p className="text-lg md:text-xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Enjoy freshly prepared Portuguese & Spanish tapas at Lisbon Tapas Restaurant — trusted by 5,000+ happy customers over 5 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all shadow-lg">
              👉 Book a Table Online
            </Link>
            <Link to="/contact" className="bg-white hover:bg-stone-100 text-brand-dark px-8 py-3 rounded-md font-semibold text-lg transition-all shadow-lg border border-transparent hover:border-stone-300">
              📞 Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Why Customers Love Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-stone-900">An Unforgettable Dining Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full mb-4 text-brand-red">
                <Utensils className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exceptional Food</h3>
              <p className="text-stone-600">Chefs prepare every dish using high-quality ingredients and authentic recipes for bold flavours.</p>
            </div>
            
            <div className="p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full mb-4 text-brand-red">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean & Welcoming</h3>
              <p className="text-stone-600">Strict hygiene standards ensuring you can relax in a spotless, friendly environment.</p>
            </div>
            
            <div className="p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full mb-4 text-brand-red">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Service</h3>
              <p className="text-stone-600">From first-time visitors to regulars, our team treats every guest like family.</p>
            </div>
            
            <div className="p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-red/10 flex items-center justify-center rounded-full mb-4 text-brand-red">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Central Location</h3>
              <p className="text-stone-600">Located centrally at Church Street, we’re a top-rated spot with simple online booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offerings */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Discover Our Menu</h2>
              <p className="text-stone-400 text-lg">
                Explore a variety of traditional dishes designed for sharing. From sizzling prawns to patatas bravas, our menu brings the taste of the Iberian Peninsula to Wrexham.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><ChevronRight className="text-brand-gold mr-2" /> Authentic Tapas Dishes</li>
                <li className="flex items-center"><ChevronRight className="text-brand-gold mr-2" /> Curated Wine & Beverage Selection</li>
                <li className="flex items-center"><ChevronRight className="text-brand-gold mr-2" /> Relaxed Dine-In Experience</li>
                <li className="flex items-center"><ChevronRight className="text-brand-gold mr-2" /> Seamless Online Booking</li>
              </ul>
              <div className="pt-4">
                 <Link to="/services" className="inline-block bg-brand-gold hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                  Reserve a Table
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tapas1/400/500" alt="Gambas" className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-4" />
              <img src="https://picsum.photos/seed/wine1/400/500" alt="Wine" className="rounded-lg shadow-xl w-full h-64 object-cover transform -translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-serif mb-2">5+</div>
              <div className="text-sm opacity-90">Years Serving Wrexham</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-serif mb-2">5,000+</div>
              <div className="text-sm opacity-90">Satisfied Customers</div>
            </div>
             <div>
              <div className="text-4xl font-bold font-serif mb-2">5/5</div>
              <div className="text-sm opacity-90">Hygiene Standards</div>
            </div>
             <div>
              <div className="text-4xl font-bold font-serif mb-2">#1</div>
              <div className="text-sm opacity-90">Local Favorite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', loc: 'Wrexham', text: 'The best restaurant in Wrexham. Every dish was packed with flavour and beautifully presented.' },
              { name: 'James L.', loc: 'Gresford', text: 'Fantastic tapas, friendly staff, and a clean environment. Perfect for family dinners.' },
              { name: 'Priya K.', loc: 'Wrexham', text: 'Easy online booking and amazing food. This is our go-to family restaurant in Wrexham.' },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-stone-700 italic mb-6">"{review.text}"</p>
                <div className="font-bold text-stone-900">{review.name}</div>
                <div className="text-sm text-stone-500">{review.loc}</div>
              </div>
            ))}
          </div>
           <div className="text-center mt-10">
            <Link to="/testimonials" className="text-brand-red font-semibold hover:underline">Read more reviews &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do you accept online bookings?', a: 'Yes, our online booking system is available 24/7.' },
              { q: 'Are you suitable for families?', a: 'Absolutely. We’re a welcoming family restaurant in Wrexham.' },
              { q: 'Do you offer takeaway or food delivery in Wrexham?', a: 'Selected dishes are available for takeaway. Delivery options may vary.' },
              { q: 'Where are you located?', a: '6 Church St, Wrexham LL13 8LS, United Kingdom.' },
              { q: 'Do you cater for special occasions?', a: 'Yes, contact us for group bookings or celebrations.' },
               { q: 'Is walk-in dining available?', a: 'Yes, but booking is recommended during busy hours.' },
            ].map((item, i) => (
              <div key={i} className="border-b border-stone-200 pb-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.q}</h3>
                <p className="text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;