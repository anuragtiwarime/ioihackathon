import React, { useState } from 'react';
import CategoryGrid from './CategoryGrid';
import ProductGrid from './ProductGrid';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Our Categories
        </h2>
        
        <CategoryGrid onSelectCategory={setSelectedCategory} />
        {selectedCategory && <ProductGrid category={selectedCategory} />}
      </div>
    </section>
  );
};

export default Categories;