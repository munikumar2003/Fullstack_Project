import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Bell, Lock, Shield, CreditCard } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useStore();

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Bell className="text-[#2874f0]" />
                <h2 className="text-lg font-medium">Notifications</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <span>Order Updates</span>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
                <label className="flex items-center justify-between">
                  <span>Price Drops</span>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
                <label className="flex items-center justify-between">
                  <span>New Arrivals</span>
                  <input type="checkbox" className="form-checkbox" />
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="text-[#2874f0]" />
                <h2 className="text-lg font-medium">Privacy</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <span>Profile Visibility</span>
                  <select className="form-select">
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </label>
                <label className="flex items-center justify-between">
                  <span>Show Order History</span>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="text-[#2874f0]" />
                <h2 className="text-lg font-medium">Security</h2>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  Change Password
                </button>
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  Two-Factor Authentication
                </button>
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  Login Activity
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-3 mb-4">
                <CreditCard className="text-[#2874f0]" />
                <h2 className="text-lg font-medium">Payment Methods</h2>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  Saved Cards
                </button>
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  UPI Settings
                </button>
                <button className="w-full text-left py-2 hover:text-[#2874f0]">
                  Bank Accounts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;