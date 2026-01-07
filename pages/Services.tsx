import React, { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';

const Services: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your table request for ${formData.date} at ${formData.time} has been received. We will confirm shortly.`);
    // In a real app, send to backend here
  };

  return (
    <div className="bg-stone-50 min-h-screen">
       <div className="bg-stone-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Online Table Booking</h1>
          <p className="text-xl text-stone-300">Reserve your spot at Wrexham's favorite tapas restaurant.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Stress-Free Reservations</h2>
            <p className="text-stone-600 leading-relaxed">
              Our online booking service is designed to make dining at Lisbon Tapas Restaurant effortless. Whether you’re planning a casual lunch, family dinner, or special evening out, our system allows you to reserve your table in just a few clicks.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Located at 6 Church St, we’re a popular restaurant in Wrexham, United Kingdom, and tables fill up quickly during peak hours. Online booking ensures you never miss out.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-lg mb-4">Benefits & Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center text-stone-700"><Check className="h-5 w-5 text-green-500 mr-2" /> 24/7 online availability</li>
                <li className="flex items-center text-stone-700"><Check className="h-5 w-5 text-green-500 mr-2" /> Instant confirmation</li>
                <li className="flex items-center text-stone-700"><Check className="h-5 w-5 text-green-500 mr-2" /> Ideal for families</li>
                <li className="flex items-center text-stone-700"><Check className="h-5 w-5 text-green-500 mr-2" /> Free to book</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Booking FAQs</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-stone-900">
                    Can I modify my booking?
                  </summary>
                  <p className="mt-2 text-stone-600 text-sm">Yes, through confirmation details or by contacting us.</p>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between font-medium text-stone-900">
                    Can I book for large groups?
                  </summary>
                  <p className="mt-2 text-stone-600 text-sm">Yes, please mention group size when booking or call us directly.</p>
                </details>
              </div>
            </div>
          </div>

          {/* Booking Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">Secure Your Table</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                    <input 
                      type="date" 
                      name="date"
                      required
                      className="pl-10 w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                    <select 
                      name="time"
                      required
                      className="pl-10 w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white"
                      onChange={handleChange}
                    >
                      <option value="">Select Time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                  <select 
                    name="guests"
                    className="pl-10 w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red bg-white"
                    onChange={handleChange}
                    value={formData.guests}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} People</option>
                    ))}
                    <option value="group">Group (9+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="07700 900000"
                    required
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-red text-white font-bold text-lg p-4 rounded-lg hover:bg-red-800 transition-colors shadow-lg mt-4"
              >
                Reserve Your Table Now
              </button>
              <p className="text-center text-xs text-stone-500 mt-2">No advance charges for standard reservations.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;