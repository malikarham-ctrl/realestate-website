'use client';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-tight leading-tight"
        >
          Discover Your <br/>
          <span className="text-accent italic">Dream Home</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 font-sans mb-12 max-w-2xl mx-auto font-light"
        >
          Exclusive luxury properties and unparalleled service in the world's most sought-after locations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Search by location, neighborhood, or city..." 
              className="flex-1 px-6 py-4 rounded-lg bg-white text-primary font-sans focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <select className="px-6 py-4 rounded-lg bg-white text-primary font-sans border-none focus:outline-none focus:ring-2 focus:ring-accent md:w-48 cursor-pointer">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
            </select>
            <button className="bg-accent hover:bg-accent-light text-primary px-8 py-4 rounded-lg font-bold font-sans flex items-center justify-center gap-2 transition-colors">
              <Search size={20} />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
