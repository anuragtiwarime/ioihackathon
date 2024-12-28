import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-emerald-600 font-medium">${price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;