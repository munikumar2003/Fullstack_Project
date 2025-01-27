import React from 'react';
import { Bell, Settings } from 'lucide-react';

const NotificationsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notification Preferences</h1>
          <button className="text-[#2874f0]">
            <Settings size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Desktop Notifications</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order Updates</p>
                    <p className="text-sm text-gray-500">
                      Get notifications about your order status
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-500">
                      Know when prices drop on your wishlist items
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Deals & Offers</p>
                    <p className="text-sm text-gray-500">
                      Get notified about exclusive deals and offers
                    </p>
                  </div>
                  <input type="checkbox" className="form-checkbox" />
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Email Notifications</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order Confirmation</p>
                    <p className="text-sm text-gray-500">
                      Receive order confirmation emails
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Newsletters</p>
                    <p className="text-sm text-gray-500">
                      Weekly updates about new products and deals
                    </p>
                  </div>
                  <input type="checkbox" className="form-checkbox" />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Bell className="text-[#2874f0]" />
                <h2 className="text-lg font-medium">Recent Notifications</h2>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">Order Delivered</p>
                  <p className="text-sm text-gray-500">
                    Your order #12345 has been delivered
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">Price Drop Alert</p>
                  <p className="text-sm text-gray-500">
                    Price dropped for an item in your wishlist
                  </p>
                  <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;