import React, { useState } from 'react';
import { Menu, X, Bell, Search, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-green-700 font-bold text-sm leading-none">KOMUNIFY</span>
                <span className="text-amber-600 text-xs font-semibold">Empowering Communities Through Food, Finance & Tech.</span>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search communities, projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-green-700 mb-3">Notifications</h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    <div className="p-2 bg-green-50 rounded border-l-2 border-green-600 text-sm">
                      <p className="font-medium text-green-900">New food listing available</p>
                      <p className="text-gray-600 text-xs">2 hours ago</p>
                    </div>
                    <div className="p-2 bg-amber-50 rounded border-l-2 border-amber-600 text-sm">
                      <p className="font-medium text-amber-900">Loan application approved</p>
                      <p className="text-gray-600 text-xs">5 hours ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-600 hidden sm:block" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                  >
                    Settings
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="mt-4 space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg text-green-700 font-medium hover:bg-green-50"
              >
                Dashboard
              </Link>
              <Link
                to="/food-aid"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                FoodAid Engine
              </Link>
              <Link
                to="/fin-grow"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                FinGrow Engine
              </Link>
              <Link
                to="/communities"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Communities
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Projects
              </Link>
              <Link
                to="/mentorship"
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Mentorship
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar;