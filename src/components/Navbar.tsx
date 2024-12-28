import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-serif text-emerald-600">EcoGlam</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">Our Products</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Reviews</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">
                <User size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed bottom buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-lg">
          Take a Quiz
        </button>
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-center">
          <ShoppingCart size={20} className="mr-2" />
          Cart
        </button>
      </div>
    </>
  );
};

export default Navbar;