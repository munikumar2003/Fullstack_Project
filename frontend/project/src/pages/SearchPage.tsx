import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products'; // Ensure this is correctly imported and populated
import { useStore } from '../store/useStore';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams(); // Gets query parameters
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Filter products based on the query
  const searchResults = allProducts.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.brand.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for "{query}"
        </h1>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">No products found</h2>
            <p className="text-gray-500">
              Try searching with different keywords or
              <button
                onClick={() => navigate('/')}
                className="text-[#2874f0] hover:underline ml-1"
              >
                browse all products
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
