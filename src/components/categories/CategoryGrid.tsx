import React from 'react';
import { categories } from '../../data/categories';
import CategoryCard from './CategoryCard';

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          onClick={() => onSelectCategory(category.title)}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;