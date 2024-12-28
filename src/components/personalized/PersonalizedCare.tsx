import React from 'react';

const PersonalizedCare = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Diverse people with glowing skin"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Why Personalized Skincare Matters
            </h2>
            <p className="text-lg text-gray-600">
              Everyone's skin is unique. By personalizing your skincare routine, 
              we ensure that you're getting the right ingredients for your skin's 
              specific needs. No more guesswork or wasted products – EcoGlam makes 
              skincare effective and easy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedCare;