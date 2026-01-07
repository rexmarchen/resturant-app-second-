import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-stone-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-stone-300">We'd love to hear from you. Book a table or ask a question.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Get In Touch</h2>
            <p className="text-stone-600">
              Located in central Wrexham, easily accessible on foot and by public transport. We respond to online enquiries within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-brand-red mb-3" />
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-stone-600 text-sm">6 Church St, Wrexham<br/>LL13 8LS, United Kingdom</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Phone className="h-8 w-8 text-brand-red mb-3" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-stone-600 text-sm">+44 1978 123456<br/>Mon-Sun 12pm - 10pm</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Mail className="h-8 w-8 text-brand-red mb-3" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-stone-600 text-sm">info@lisbontapas.co.uk<br/>General Enquiries</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-brand-red mb-3" />
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-stone-600 text-sm">Monday – Sunday<br/>12:00 PM – 10:00 PM</p>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="w-full h-64 bg-stone-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
              <span className="text-stone-500 font-medium flex items-center">
                <MapPin className="mr-2" /> Google Map Integration
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <input type="text" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-brand-red focus:border-brand-red" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 border border-stone-300 rounded-lg focus:ring-brand-red focus:border-brand-red"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;