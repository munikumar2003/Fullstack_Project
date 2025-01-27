import React, { useState } from 'react';
import { Package, TrendingUp, Users, DollarSign } from 'lucide-react';

const SellerPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Become a Seller</h1>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Package className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Sell Online</h3>
            <p className="text-sm text-gray-600">
              Reach millions of customers across the country
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <TrendingUp className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Grow Faster</h3>
            <p className="text-sm text-gray-600">
              Get business insights and dedicated support
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Users className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Connect Direct</h3>
            <p className="text-sm text-gray-600">
              Build lasting relationships with customers
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <DollarSign className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Low Fees</h3>
            <p className="text-sm text-gray-600">
              Competitive rates and transparent pricing
            </p>
          </div>
        </div>

        {/* Registration Steps */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Register as a Seller</h2>
            
            <div className="flex mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 border-b-2 ${
                    s <= step ? 'border-[#2874f0]' : 'border-gray-200'
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                        s <= step ? 'bg-[#2874f0] text-white' : 'bg-gray-200'
                      }`}
                    >
                      {s}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Business Type
                    </label>
                    <select className="mt-1 w-full p-2 border rounded">
                      <option>Individual</option>
                      <option>Company</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Business Address
                  </label>
                  <textarea
                    className="mt-1 w-full p-2 border rounded"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      GST Number
                    </label>
                    <input
                      type="text"
                      className="mt-1 w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bank Account Details
                  </label>
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="mt-1 w-full p-2 border rounded"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Categories
                  </label>
                  <select className="mt-1 w-full p-2 border rounded" multiple>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Home & Furniture</option>
                    <option>Beauty & Personal Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Commission Agreement
                  </label>
                  <div className="mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to the seller terms and conditions
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 border rounded"
                >
                  Back
                </button>
              )}
              <button
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className="px-6 py-2 bg-[#2874f0] text-white rounded"
              >
                {step === 3 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;