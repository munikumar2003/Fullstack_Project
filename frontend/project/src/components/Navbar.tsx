import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, ChevronDown, User, LogOut, Settings, HelpCircle, X } from 'lucide-react';
import { User as UserType } from '../types';
import { useStore } from '../store/useStore';

interface NavbarProps {
  cartItemsCount: number;
  user: UserType | null;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemsCount, user }) => {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const userButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current && 
        !userMenuRef.current.contains(event.target as Node) &&
        !userButtonRef.current?.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-[#2874f0] text-white py-2.5 px-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold">Flipkart</span>
              <span className="text-xs italic">Explore Plus</span>
            </Link>
            
            <form onSubmit={handleSearch} className="relative flex-1">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-[550px] py-2 px-4 pr-10 rounded-sm text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2">
                <Search className="text-gray-400" size={20} />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-8">
            {user ? (
              <div className="relative group">
                <button
                  ref={userButtonRef}
                  className="flex items-center space-x-1 font-medium"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  onMouseEnter={() => setShowUserMenu(true)}
                >
                  <User size={20} />
                  <span>{user.name}</span>
                  <ChevronDown size={16} />
                </button>
                {showUserMenu && (
                  <div
                    ref={userMenuRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                    onMouseLeave={() => setShowUserMenu(false)}
                  >
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <User size={16} className="mr-2" />
                      <span>My Profile</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Settings size={16} className="mr-2" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="mr-2" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate('/auth')}
                className="bg-white text-[#2874f0] px-8 py-1 font-medium"
              >
                Login
              </button>
            )}
            
            <Link to="/seller" className="font-medium">
              Become a Seller
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center space-x-1 font-medium"
              >
                <Menu size={20} />
                <span>More</span>
                <ChevronDown size={16} />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/notifications"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <Settings size={16} className="mr-2" />
                    <span>Notification Preferences</span>
                  </Link>
                  <Link
                    to="/help"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <HelpCircle size={16} className="mr-2" />
                    <span>24x7 Customer Care</span>
                  </Link>
                  <Link
                    to="/advertise"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User size={16} className="mr-2" />
                    <span>Advertise</span>
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/cart"
              className="flex items-center space-x-1 font-medium"
            >
              <div className="relative">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="font-bold text-lg">
              Flipkart
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search size={24} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden mt-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-full py-2 px-4 pr-10 rounded-sm text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2">
                <Search className="text-gray-400" size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full w-4/5 max-w-sm text-gray-800 p-4">
              <div className="flex justify-between items-center mb-4">
                {user ? (
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      navigate('/auth');
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-[#2874f0] text-white px-6 py-2 rounded"
                  >
                    Login
                  </button>
                )}
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <Link
                  to="/profile"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/settings"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/seller"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a Seller
                </Link>
                <Link
                  to="/notifications"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Notifications
                </Link>
                <Link
                  to="/advertise"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Advertise
                </Link>
                <Link
                  to="/help"
                  className="block py-2 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Customer Care
                </Link>
                {user && (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 border-b text-red-600"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;