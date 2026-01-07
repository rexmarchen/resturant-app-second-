import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Why Lisbon Tapas Is the Best Restaurant in Wrexham",
      excerpt: "Discover what makes us the local favorite, from our authentic ingredients to our dedicated service team.",
      date: "Oct 12, 2023",
      category: "Local Guide"
    },
    {
      title: "Top 5 Tapas Dishes You Must Try",
      excerpt: "Confused by the menu? Here are the 5 dishes our customers order again and again.",
      date: "Oct 05, 2023",
      category: "Food & Drink"
    },
    {
      title: "Family-Friendly Dining in Wrexham",
      excerpt: "Dining out with kids? Here is why our relaxed atmosphere makes for the perfect family meal.",
      date: "Sep 28, 2023",
      category: "Lifestyle"
    },
    {
      title: "Benefits of Booking a Restaurant Online",
      excerpt: "Save time and avoid disappointment. Learn how our 24/7 booking system works for you.",
      date: "Sep 15, 2023",
      category: "Tips"
    },
    {
      title: "Local Food Culture in Wrexham",
      excerpt: "Exploring how international cuisines like ours fit into the vibrant local food scene.",
      date: "Sep 01, 2023",
      category: "Culture"
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-stone-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-stone-300">News, updates, and food culture from Lisbon Tapas.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-200 flex flex-col">
              <div className="h-48 bg-stone-200 relative overflow-hidden group">
                 <img 
                   src={`https://picsum.photos/seed/${index + 55}/600/400`} 
                   alt={post.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                   {post.category}
                 </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-xs text-stone-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Admin</span>
                </div>
                <h2 className="text-xl font-bold font-serif mb-3 text-stone-900 leading-tight hover:text-brand-red cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-600 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link to="/contact" className="inline-flex items-center text-brand-red font-semibold hover:underline mt-auto">
                  Read Article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;