import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import * as LucideIcons from 'lucide-react';

const CategoryMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2 no-scrollbar">
          {categories.map((category) => {
            const Icon = LucideIcons[category.icon as keyof typeof LucideIcons];
            return (
              <div
                key={category.id}
                className="group relative flex flex-col items-center cursor-pointer min-w-[60px]"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="p-1 rounded-full hover:bg-gray-100">
                  {Icon && <Icon size={20} className="text-gray-600" />}
                </div>
                <span className="text-xs mt-0.5 md:block hidden">{category.name}</span>

                <div className="invisible group-hover:visible absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-1 z-50">
                  {category.subCategories.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-2 hover:bg-gray-50 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/category/${category.id}/${sub.id}`);
                      }}
                    >
                      <h3 className="font-medium text-sm">{sub.name}</h3>
                      <div className="mt-1 text-xs text-gray-500">
                        {sub.brands.slice(0, 3).join(', ')}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;