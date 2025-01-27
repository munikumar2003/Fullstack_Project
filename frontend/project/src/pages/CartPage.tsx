import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, updateCartItemQuantity, removeFromCart, user } = useStore();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 499 ? 0 : 40;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#2874f0] hover:underline"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart ({cartItems.length})</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() => updateCartItemQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 border rounded"
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                        className="p-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow h-fit sticky top-24">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <hr />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#fb641b] text-white py-3 rounded-sm font-medium hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;