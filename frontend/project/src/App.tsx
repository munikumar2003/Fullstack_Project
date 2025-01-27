import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SellerPage from './pages/SellerPage';
import SearchPage from './pages/SearchPage';
import NotificationsPage from './pages/NotificationsPage';
import AdvertisePage from './pages/AdvertisePage';
import HelpPage from './pages/HelpPage';
import AddProductPage from './pages/AddProductPage';
import AddReviewPage from './pages/AddReviewPage';
import { useStore } from './store/useStore';

function App() {
  const { user, cartItems } = useStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          user={user}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/product/:productId/add-review" element={<AddReviewPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;