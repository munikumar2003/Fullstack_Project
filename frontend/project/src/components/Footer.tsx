import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
  Truck,
  Gift
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172337] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          <div className="flex items-center space-x-3">
            <CreditCard className="text-gray-400" size={24} />
            <div>
              <h4 className="font-medium">100% Secure Payments</h4>
              <p className="text-xs text-gray-400">All major cards accepted</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="text-gray-400" size={24} />
            <div>
              <h4 className="font-medium">Trustpay</h4>
              <p className="text-xs text-gray-400">100% Payment Protection</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="text-gray-400" size={24} />
            <div>
              <h4 className="font-medium">Free Delivery</h4>
              <p className="text-xs text-gray-400">On orders above ₹499</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Gift className="text-gray-400" size={24} />
            <div>
              <h4 className="font-medium">Genuine Products</h4>
              <p className="text-xs text-gray-400">100% Original items</p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Flipkart Clone. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Advertise</a>
            <a href="#" className="hover:text-white">Gift Cards</a>
            <a href="#" className="hover:text-white">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;