import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-[#ff9f00] text-white py-4 rounded-sm font-medium hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>ADD TO CART</span>
              </button>
              <button className="flex-1 bg-[#fb641b] text-white py-4 rounded-sm font-medium hover:bg-orange-600 transition-colors">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-xl font-medium">{product.title}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                  <span>{product.rating.rate}</span>
                  <Star size={12} className="ml-1" />
                </div>
                <span className="text-gray-500">
                  {product.rating.count.toLocaleString()} Ratings
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-medium">₹{product.price}</span>
                <span className="text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 font-medium">{discount}% off</span>
              </div>
              <p className="text-sm text-gray-500">
                + ₹29 Secured Packaging Fee
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Available offers</h3>
              <ul className="space-y-2 text-sm">
                <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                <li>Special Price Get extra ₹3000 off (price inclusive of discount)</li>
                <li>Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-500">{key}:</span>
                    <span className="ml-2">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded ${
                  isWishlisted ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="p-2 rounded text-gray-500">
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">Product Description</h2>
          <p className="text-gray-700">{product.description}</p>
          
          <div className="mt-4">
            <h3 className="font-medium mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                    <span>{review.rating}</span>
                    <Star size={12} className="ml-1" />
                  </div>
                  <span className="font-medium">{review.userName}</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="mt-2">{review.comment}</p>
                <div className="mt-2 text-sm text-gray-500">
                  {review.helpful} people found this helpful
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;