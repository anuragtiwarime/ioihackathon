import React from 'react';
import { IconType } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: IconType;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
    >
      <Icon size={40} className="text-emerald-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </button>
  );
};

export default CategoryCard;