import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryMenu from '../components/CategoryMenu';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { carouselItems } from '../data/carouselData';
import { allProducts } from '../data/products';
import { useStore } from '../store/useStore';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useStore();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  // Group products by category
  const productsByCategory = allProducts.reduce((acc: { [key: string]: typeof allProducts }, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="pt-16">
      <CategoryMenu />
      
      <div className="max-w-11xl mx-auto px-4">
        <div className="my-6">
          <Carousel items={carouselItems} />
        </div>

        {/* Render categories with products */}
        {Object.entries(productsByCategory).map(([category, products]) => (
          <div key={category} className="mb-8">
            {/* Category Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
              {category}
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onClick={handleProductClick}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;