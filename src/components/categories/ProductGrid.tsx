import React from 'react';
import { productsByCategory } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const products = productsByCategory[category];

  if (!products) return null;

  return (
    <div>
      <h3 className="text-2xl font-serif text-gray-900 mb-8">
        {category} Products
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;