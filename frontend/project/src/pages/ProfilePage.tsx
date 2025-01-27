import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Package, MapPin, Heart, Bell } from 'lucide-react';
import { Address } from '../types';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useStore();
  const [activeTab, setActiveTab] = useState<'info' | 'orders' | 'addresses' | 'wishlist' | 'notifications'>('info');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.addresses[0] || {
      type: 'home' as const,
      street: '',
      city: '',
      state: '',
      pincode: '',
      phone: ''
    }
  });
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedAddresses = [...user.addresses];
    if (updatedAddresses.length === 0) {
      updatedAddresses.push({
        ...formData.address,
        id: Date.now().toString(),
        name: formData.name,
        isDefault: true
      });
    } else {
      updatedAddresses[0] = {
        ...updatedAddresses[0],
        ...formData.address,
        name: formData.name
      };
    }

    setUser({
      ...user,
      name: formData.name,
      phone: formData.phone,
      addresses: updatedAddresses
    });
    setIsEditing(false);
  };

  // Mock data
  const orders = [
    {
      id: '1',
      date: '2024-03-10',
      total: 999.99,
      status: 'Delivered',
      items: [
        {
          id: 1,
          title: 'iPhone 13 Pro',
          price: 999.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400'
        }
      ]
    }
  ];

  const wishlist = [
    {
      id: 1,
      title: 'iPhone 13 Pro',
      price: 999.99,
      image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const notifications = [
    {
      id: 1,
      title: 'Order Delivered',
      message: 'Your order #12345 has been delivered',
      date: '2 hours ago'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Personal Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[#2874f0] hover:underline"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="mt-1 w-full p-2 border rounded bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-1 w-full p-2 border rounded"
                />
              </div>

              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-medium mb-4">Default Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <textarea
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="mt-1 w-full p-2 border rounded"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        name="address.pincode"
                        value={formData.address.pincode}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="address.phone"
                        value={formData.address.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="mt-1 w-full p-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {isEditing && (
                <button
                  type="submit"
                  className="bg-[#2874f0] text-white px-6 py-2 rounded"
                >
                  Save Changes
                </button>
              )}
            </form>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Order #{order.id}</h3>
                    <p className="text-sm text-gray-500">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-green-600">{order.status}</span>
                </div>
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">₹{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'addresses':
        return (
          <div className="space-y-4">
            {user.addresses.map((address: Address) => (
              <div key={address.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{address.type.toUpperCase()}</h3>
                  {address.isDefault && (
                    <span className="text-green-600 text-sm">Default</span>
                  )}
                </div>
                <p>{address.name}</p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.pincode}</p>
                <p>Phone: {address.phone}</p>
              </div>
            ))}
            <button
              onClick={() => setIsEditing(true)}
              className="w-full p-4 border-2 border-dashed rounded-lg text-center text-gray-500 hover:text-gray-700 hover:border-gray-400"
            >
              + Add New Address
            </button>
          </div>

        );
      case 'wishlist':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-lg font-bold mt-2">₹{item.price}</p>
              </div>
            ))}
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'info'
                ? 'bg-[#2874f0] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'orders'
                ? 'bg-[#2874f0] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            <Package size={18} className="mr-2" />
            My Orders
          </button>
          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'addresses'
                ? 'bg-[#2874f0] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            <MapPin size={18} className="mr-2" />
            Addresses
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'wishlist'
                ? 'bg-[#2874f0] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            <Heart size={18} className="mr-2" />
            Wishlist
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'notifications'
                ? 'bg-[#2874f0] text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            <Bell size={18} className="mr-2" />
            Notifications
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;