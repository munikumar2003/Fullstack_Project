import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  isOpen,
  onClose,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping Cart ({items.length})</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-200px)] p-4">
          {items.map((item) => (
            <div key={item.id} className="flex border-b py-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="ml-4 flex-1">
                <h3 className="text-sm line-clamp-2">{item.title}</h3>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 border rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-1 border rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">₹{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#2874f0] text-white py-3 rounded-sm hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;