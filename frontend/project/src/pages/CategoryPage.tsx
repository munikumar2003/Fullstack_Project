import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';
import { categories } from '../data/categories';
import { useStore } from '../store/useStore';

const CategoryPage: React.FC = () => {
  const { categoryId, subCategoryId } = useParams<{ categoryId: string; subCategoryId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useStore();

  const category = categories.find(c => c.id === categoryId);
  const subCategory = category?.subCategories.find(s => s.id === subCategoryId);

  const filteredProducts = allProducts.filter(product => {
    if (subCategoryId) {
      return product.subCategory.toLowerCase() === subCategory?.name.toLowerCase();
    }
    return product.category.toLowerCase() === category?.name.toLowerCase();
  });

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#2874f0] hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            {subCategory ? subCategory.name : category.name}
          </h1>
          {subCategory && (
            <p className="text-gray-500 mt-1">
              {subCategory.brands.join(', ')}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">No products found in this category</h2>
            <button
              onClick={() => navigate('/')}
              className="text-[#2874f0] hover:underline"
            >
              Browse all products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;