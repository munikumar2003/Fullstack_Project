import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, CartItem } from '../types';

interface StoreState {
  user: User | null;
  cartItems: CartItem[];
  setUser: (user: User | null) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      user: null,
      cartItems: [],
      setUser: (user) => set({ user }),
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i.id !== itemId),
        })),
      updateCartItemQuantity: (itemId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'flipkart-store',
    }
  )
);