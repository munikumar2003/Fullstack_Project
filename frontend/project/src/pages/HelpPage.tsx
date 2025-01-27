import React, { useState } from 'react';
import { Search, Package, CreditCard, Truck, HelpCircle, ChevronDown } from 'lucide-react';

const FAQs = [
  {
    category: 'Orders',
    icon: Package,
    questions: [
      {
        q: "Where is my order?",
        a: "You can track your order in the 'My Orders' section of your account."
      },
      {
        q: "How do I cancel my order?",
        a: "You can cancel your order from the 'My Orders' section before it's shipped."
      }
    ]
  },
  {
    category: 'Payment',
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, UPI, net banking, and cash on delivery."
      },
      {
        q: "How do I get a refund?",
        a: "Refunds are automatically processed when you return an item. It takes 5-7 business days."
      }
    ]
  },
  {
    category: 'Shipping',
    icon: Truck,
    questions: [
      {
        q: "What are the shipping charges?",
        a: "Shipping is free for orders above ₹499. Standard shipping charge is ₹40."
      },
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 2-3 business days. Express delivery is available in select cities."
      }
    ]
  }
];

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">How can we help you?</h1>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for help"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 border rounded-lg"
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Package className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Track Order</h3>
            <p className="text-sm text-gray-600">
              Check your order status and delivery updates
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <CreditCard className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">Returns & Refunds</h3>
            <p className="text-sm text-gray-600">
              Process returns and check refund status
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <HelpCircle className="mx-auto text-[#2874f0] mb-4" size={32} />
            <h3 className="font-medium mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              Get help from our support team anytime
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-medium mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQs.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.category} className="border rounded-lg">
                    <button
                      className="w-full p-4 flex items-center justify-between"
                      onClick={() => setExpandedCategory(
                        expandedCategory === category.category ? null : category.category
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="text-[#2874f0]" />
                        <span className="font-medium">{category.category}</span>
                      </div>
                      <ChevronDown
                        className={`transform transition-transform ${
                          expandedCategory === category.category ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedCategory === category.category && (
                      <div className="p-4 pt-0">
                        {category.questions.map((item) => (
                          <div key={item.q} className="border-t">
                            <button
                              className="w-full py-4 flex items-center justify-between"
                              onClick={() => setExpandedQuestion(
                                expandedQuestion === item.q ? null : item.q
                              )}
                            >
                              <span className="text-left">{item.q}</span>
                              <ChevronDown
                                className={`transform transition-transform ${
                                  expandedQuestion === item.q ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {expandedQuestion === item.q && (
                              <p className="pb-4 text-gray-600">{item.a}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Still need help?</p>
          <button className="mt-4 bg-[#2874f0] text-white px-6 py-2 rounded">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;