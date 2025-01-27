import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronLeft } from 'lucide-react';
import { Product } from '../types';
import { getProductReviews } from '../data/reviews';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart, onClose }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const reviews = getProductReviews(product.id);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleBuyNow = () => {
    navigate('/checkout', { 
      state: { 
        buyNow: true,
        product: {
          ...product,
          quantity: 1
        }
      }
    });
  };

  return (
    <div className="mt-1 mb-8">
      <button
        onClick={onClose}
        className="flex items-center text-[#2874f0] mb-4 ml-2"
      >
        <ChevronLeft size={20} />
        <span>Back to Products</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-white ml-2">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 ml-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`border rounded-lg p-2 ${
                  selectedImage === image ? 'border-[#2874f0]' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  className="w-full h-20 object-contain"
                />
              </button>
            ))}
          </div>
          <div className="flex space-x-4 ml-2">
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-[#ff9f00] text-white py-4 rounded-sm font-medium hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>ADD TO CART</span>
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-[#fb641b] text-white py-4 rounded-sm font-medium hover:bg-orange-600 transition-colors"
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="bg-white p-6 rounded-lg">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-medium">{product.title}</h1>
              <div className="flex space-x-4">
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

            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                <span>{product.rating.rate}</span>
                <Star size={12} className="ml-1" />
              </div>
              <span className="text-gray-500">
                {product.rating.count.toLocaleString()} Ratings
              </span>
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
              <h3 className="text-lg font-medium">Available offers</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Special Price Get extra ₹3000 off (price inclusive of discount)
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">•</span>
                  Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Product Details</h3>
              <p className="text-gray-700">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="text-gray-500">{key}:</span>
                    <span className="ml-2 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Customer Reviews</h2>
          <button
            onClick={() => navigate(`/product/${product.id}/add-review`)}
            className="text-[#2874f0] hover:underline"
          >
            Write a Review
          </button>
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                  <span>{review.rating}</span>
                  <Star size={12} className="ml-1" />
                </div>
                <span className="font-medium">{review.userName}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="mt-2">{review.comment}</p>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {review.helpful} people found this helpful
                </span>
                <button className="text-[#2874f0] text-sm">Helpful</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;