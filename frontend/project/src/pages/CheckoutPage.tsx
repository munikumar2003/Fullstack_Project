import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Address } from '../types';
import { ChevronLeft, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, cartItems, clearCart } = useStore();
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    type: 'home',
    name: user?.name || '',
  });

  const isBuyNow = location.state?.buyNow;
  const itemsToCheckout = isBuyNow ? [location.state.product] : cartItems;

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Redirect to cart if empty and not buy now
  useEffect(() => {
    if (!isBuyNow && cartItems.length === 0) {
      navigate('/cart');
    }
  }, [isBuyNow, cartItems, navigate]);

  const subtotal = itemsToCheckout.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 499 ? 0 : 40;
  const total = subtotal + shipping;

  const handleAddAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.phone ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.pincode
    ) {
      alert('Please fill in all address fields');
      return;
    }

    const address: Address = {
      id: Date.now().toString(),
      type: newAddress.type as 'home' | 'work' | 'other',
      name: newAddress.name,
      phone: newAddress.phone,
      street: newAddress.street,
      city: newAddress.city,
      state: newAddress.state,
      pincode: newAddress.pincode,
      isDefault: false,
    };
    setSelectedAddress(address);
    setIsAddingAddress(false);
  };

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-4">
            Thank you for shopping with us. Your order will be delivered soon.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#2874f0] text-white px-6 py-2 rounded hover:bg-blue-600"
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
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#2874f0] mb-4"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Address and Payment */}
          <div className="md:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
              
              {!isAddingAddress ? (
                <div className="space-y-4">
                  {selectedAddress ? (
                    <div className="border p-4 rounded">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{selectedAddress.name}</p>
                          <p>{selectedAddress.street}</p>
                          <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.pincode}</p>
                          <p>Phone: {selectedAddress.phone}</p>
                        </div>
                        <button
                          onClick={() => setIsAddingAddress(true)}
                          className="text-[#2874f0]"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsAddingAddress(true)}
                      className="flex items-center space-x-2 text-[#2874f0]"
                    >
                      <Plus size={20} />
                      <span>Add New Address</span>
                    </button>
                  )}
                </div>
              ) : (
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      className="p-2 border rounded"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={newAddress.phone}
                      onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                      className="p-2 border rounded"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Street Address"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="PIN Code"
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      className="p-2 border rounded"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={handleAddAddress}
                      className="bg-[#2874f0] text-white px-6 py-2 rounded"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingAddress(false)}
                      className="border border-gray-300 px-6 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                    className="text-[#2874f0]"
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'upi')}
                    className="text-[#2874f0]"
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                    className="text-[#2874f0]"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-24">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="space-y-4">
                {itemsToCheckout.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</p>
                </div>
                <hr />
                <div className="flex justify-between font-medium">
                  <p>Total</p>
                  <p>₹{total.toFixed(2)}</p>
                </div>
                <button
                  onClick={handlePlaceOrder}
                  disabled={!selectedAddress}
                  className={`w-full py-3 rounded ${
                    selectedAddress
                      ? 'bg-[#fb641b] text-white hover:bg-orange-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;