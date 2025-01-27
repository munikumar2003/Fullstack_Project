import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  onRegister,
}) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      onLogin(email, password);
    } else {
      onRegister(email, password, name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="flex">
          {/* Left Panel */}
          <div className="bg-[#2874f0] text-white p-8 w-2/5 rounded-l-lg">
            <h2 className="text-2xl font-bold mb-4">
              {isLoginMode ? 'Login' : 'Looks like you\'re new here!'}
            </h2>
            <p className="text-sm">
              {isLoginMode
                ? 'Get access to your Orders, Wishlist and Recommendations'
                : 'Sign up with your email to get started'}
            </p>
          </div>

          {/* Right Panel */}
          <div className="p-8 w-3/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginMode && (
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-[#2874f0]"
                    required
                  />
                </div>
              )}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-[#2874f0]"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-[#2874f0]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#fb641b] text-white py-3 rounded-sm font-medium hover:bg-orange-600 transition-colors"
              >
                {isLoginMode ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-[#2874f0] hover:underline"
              >
                {isLoginMode
                  ? 'New to Flipkart? Create an account'
                  : 'Existing user? Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;