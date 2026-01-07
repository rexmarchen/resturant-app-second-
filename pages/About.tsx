import React from 'react';
import { Award, Heart, CheckCircle, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-900 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Lisbon Tapas</h1>
          <p className="text-xl text-stone-300">Family-owned, locally loved.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/chef/800/600" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-brand-dark">Our Story</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Lisbon Tapas Restaurant was founded 5 years ago with one simple goal — to bring authentic tapas flavours to Wrexham. What started as a passion for quality food has grown into one of the most trusted dining spots in the area.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed">
              We believe in the power of sharing food. Our tables are designed for conversation, laughter, and the joy of discovering new tastes together.
            </p>
            
            <div className="bg-brand-cream p-6 rounded-lg border-l-4 border-brand-gold">
               <h3 className="font-bold text-lg mb-2 text-brand-dark">Achievements & Milestones</h3>
               <ul className="space-y-2 text-sm text-stone-700">
                 <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-brand-green-600" /> Served 5,000+ customers</li>
                 <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-brand-green-600" /> 5 successful years in Wrexham</li>
                 <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-brand-green-600" /> Consistently positive local reviews</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Our Mission & Values</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xl italic text-stone-600">
              "To serve consistently great food in a clean, friendly environment where everyone feels welcome."
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-sm text-stone-600">Quality without compromise in every ingredient.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hygiene</h3>
              <p className="text-sm text-stone-600">Highest respect for hygiene and safety standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hospitality</h3>
              <p className="text-sm text-stone-600">Warm, genuine hospitality for every guest.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-sm text-stone-600">We proudly support local events and the Wrexham community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-4">
               <h2 className="text-3xl font-serif font-bold">Meet The Team</h2>
               <div className="space-y-6">
                 <div>
                   <h3 className="text-xl font-bold text-brand-red">Owner & Head Chef</h3>
                   <p className="text-stone-600">With years of culinary experience, our head chef leads a dedicated team focused on flavour, freshness, and presentation.</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-red">Front-of-House Team</h3>
                   <p className="text-stone-600">Friendly, attentive, and always ready to help makes your dining experience stress-free and enjoyable.</p>
                 </div>
               </div>
             </div>
             <div>
                <img src="https://picsum.photos/seed/team/600/400" alt="Kitchen Team" className="rounded-lg shadow-lg w-full h-auto" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;