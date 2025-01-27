import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { allProducts } from '../data/products';
import { useStore } from '../store/useStore';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useStore();

  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
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
    <div className="pt-16">
      <ProductDetails
        product={product}
        onAddToCart={addToCart}
        onClose={() => navigate('/')}
      />
    </div>
  );
};

export default ProductPage;