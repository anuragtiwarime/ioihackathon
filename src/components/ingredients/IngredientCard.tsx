import React from 'react';
import { IconType } from 'lucide-react';

interface IngredientCardProps {
  name: string;
  description: string;
  icon: IconType;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-emerald-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default IngredientCard;