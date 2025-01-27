import React, { useState } from 'react';
import { Star, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleCardClick = () => {
    onClick(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative pb-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        {/* Product Title and Actions */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm font-medium text-gray-700 line-clamp-2 flex-1">{product.title}</h3>
          <div className="flex space-x-2 ml-2">
            <button 
              className={`${isWishlisted ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
            >
              <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button 
              className="text-gray-400 hover:text-blue-500"
              onClick={(e) => {
                e.stopPropagation();
                // Add share functionality here
              }}
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1">
          <div className="flex items-center bg-green-600 text-white px-1.5 rounded text-sm">
            <span>{product.rating.rate}</span>
            <Star size={12} className="ml-0.5" />
          </div>
          <span className="text-gray-500 text-sm ml-2">({product.rating.count})</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-lg font-bold">₹{product.price}</span>
          <span className="text-green-600 text-sm ml-2">70% off</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="mt-3 w-full bg-[#2874f0] text-white py-2 rounded-sm hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;