import React from 'react';
import { ingredients } from '../../data/ingredients';
import IngredientCard from './IngredientCard';

const Ingredients = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Ingredients We Use for Your Skin's Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient.name}
              name={ingredient.name}
              description={ingredient.description}
              icon={ingredient.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;