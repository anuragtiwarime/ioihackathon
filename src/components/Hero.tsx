import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
            Welcome to EcoGlam
          </h1>
          <h2 className="text-2xl text-emerald-600 font-semibold mb-6">
            Skincare that is good for you and the planet
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Discover our range of eco-friendly skincare products, thoughtfully crafted to nourish your skin while being kind to the planet. Each product is made with sustainable ingredients and environmentally conscious packaging.
          </p>
          <div className="space-x-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
              Take Your Skin Quiz
            </button>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
              Shop Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;