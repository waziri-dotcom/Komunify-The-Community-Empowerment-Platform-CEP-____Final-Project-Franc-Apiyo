// src/components/layout/TopBar.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Bell,
  Search,
  User,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Clerk auth imports with role-based support
import {
  useUser,
  UserButton,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";

// Role-based authentication hook
export const useUserRole = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role || "member";
  return { role, isAdmin: role === "admin", isModerator: role === "moderator" };
};

// Role-based sign in component
export const RoleBasedSignIn = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState("member");

  const roles = [
    { id: "admin", label: "System Admin", icon: "🛡️" },
    { id: "moderator", label: "Moderator", icon: "👥" },
    { id: "analyst", label: "Analyst", icon: "⚡" },
    { id: "support", label: "Support Lead", icon: "🔒" },
    { id: "member", label: "Community Member", icon: "👤" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-6 border border-slate-200 dark:border-slate-800">
      <label className="block text-slate-900 dark:text-white text-sm font-semibold mb-4">
        Select Your Role
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {roles.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => {
              setSelectedRole(id);
              onRoleSelect?.(id);
            }}
            className={`p-3 rounded-lg border-2 transition-all text-xs font-medium ${
              selectedRole === id
                ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-500 text-emerald-700 dark:text-emerald-300"
                : "bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-400"
            }`}
          >
            <span className="text-lg mb-1">{icon}</span>
            <div>{label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * TopBar
 * - props:
 *    isMobileOpen: boolean (controls mobile sidebar)
 *    setIsMobileOpen: function setter
 */
const TopBar = ({ isMobileOpen, setIsMobileOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : true
  );

  // Clerk user (optional)
  const { isSignedIn, user } = useUser ? useUser() : { isSignedIn: false, user: null };

  // Close popovers on outside click
  const profileRef = useRef();
  const notifRef = useRef();

  useEffect(() => {
    const handleOut = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
    };
    window.addEventListener("mousedown", handleOut);
    return () => window.removeEventListener("mousedown", handleOut);
  }, []);

  // Theme toggle - toggles 'dark' class on html (Tailwind dark mode = class)
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const toggleTheme = () => setDark((s) => !s);

  // Framer motion variants
  const popover = {
    hidden: { opacity: 0, y: -6, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -6, scale: 0.98 },
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle sidebar"
              onClick={() => setIsMobileOpen && setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg bg-white/30 dark:bg-slate-800/50 hover:bg-white/40 dark:hover:bg-slate-700/60 transition shadow-sm border border-white/5"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow">
                <span className="text-white font-bold">K</span>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-slate-900 dark:text-white font-semibold text-sm">
                  KOMUNIFY
                </span>
                <span className="text-amber-500 text-[10px] font-medium">
                  Empowering Communities
                </span>
              </div>
            </Link>
          </div>

          {/* Middle: Search (desktop) */}
          <div className="flex-1 hidden md:flex justify-center px-4">
            <div className="w-full max-w-md">
              <label htmlFor="topbar-search" className="sr-only">
                Search communities, projects...
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-300" />
                <input
                  id="topbar-search"
                  type="search"
                  placeholder="Search communities, projects, resources..."
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Compact mobile search */}
            <div className="md:hidden">
              <button
                aria-label="Search"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                onClick={() => {
                  // simple approach: open native prompt for mobile quick search - replace with modal if desired
                  const q = prompt("Search communities, projects...");
                  if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`;
                }}
              >
                <Search size={16} />
              </button>
            </div>

            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                aria-haspopup="true"
                aria-expanded={notifOpen}
                onClick={() => {
                  setNotifOpen((s) => !s);
                  setProfileOpen(false);
                }}
                className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Bell size={18} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
              </button>

              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={popover}
                    transition={{ duration: 0.12 }}
                    className="origin-top-right absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Notifications
                      </h4>
                      <button
                        onClick={() => setNotifOpen(false)}
                        className="text-xs text-slate-400 hover:text-slate-600"
                      >
                        Clear
                      </button>
                    </div>

                    <div className="space-y-2 max-h-56 overflow-y-auto">
                      <article className="p-2 rounded-lg bg-emerald-50 dark:bg-slate-800/50 border-l-2 border-emerald-500">
                        <p className="text-sm font-medium text-emerald-700">New food listing available</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">2 hours ago</p>
                      </article>

                      <article className="p-2 rounded-lg bg-amber-50 dark:bg-slate-800/50 border-l-2 border-amber-500">
                        <p className="text-sm font-medium text-amber-700">Loan application approved</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">5 hours ago</p>
                      </article>

                      <article className="p-2 rounded-lg bg-white/40 dark:bg-slate-800/50 border-l-2 border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Mentor session in 1 day</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Tomorrow • 10:00 AM</p>
                      </article>
                    </div>

                    <div className="mt-3 text-center">
                      <Link
                        to="/notifications"
                        className="text-xs px-3 py-1 rounded-md bg-emerald-600 text-white font-medium"
                      >
                        View all
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <div>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title={dark ? "Switch to light" : "Switch to dark"}
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => {
                  setProfileOpen((s) => !s);
                  setNotifOpen(false);
                }}
                className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {/* Avatar: if Clerk user exists - show their image */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white">
                  {isSignedIn && user?.imageUrl ? (
                    <img src={user.imageUrl} alt={user.fullName || "User"} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <User size={16} className="text-white" />
                  )}
                </div>

                <div className="hidden sm:flex items-center gap-1">
                  <span className="text-sm text-slate-900 dark:text-white font-medium">
                    {isSignedIn ? user.firstName || user.fullName || "Member" : "Guest"}
                  </span>
                  <ChevronDown size={14} className="text-slate-400" />
                </div>
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={popover}
                    transition={{ duration: 0.12 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 py-2"
                  >
                    {/* If using Clerk, show user profile button and SignOut; otherwise fall back */}
                    {isSignedIn ? (
                      <>
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800"
                        >
                          <User size={16} /> My Profile
                        </Link>

                        <Link
                          to="/settings"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800"
                        >
                          ⚙️ Settings
                        </Link>

                        <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                        {/* Clerk SignOut button placeholder */}
                        <div className="px-4">
                          {/* If you use Clerk: this SignOutButton will render a proper sign out */}
                          <SignOutButton>
                            <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                              Logout
                            </button>
                          </SignOutButton>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-4 py-3">
                          <p className="text-sm text-slate-700 dark:text-slate-200">Hello — welcome to Komunify</p>
                        </div>

                        <div className="px-3 space-y-2">
                          {/* Clerk SignIn / SignUp buttons */}
                          <SignInButton>
                            <button className="w-full px-3 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium">
                              Sign in / Sign up
                            </button>
                          </SignInButton>

                          <Link
                            to="/about"
                            className="block text-center text-xs text-slate-500 dark:text-slate-400 mt-1"
                          >
                            Learn more about Komunify
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop: small gap placeholder to keep layout stable */}
            <div className="hidden md:block w-2" />
          </div>
        </div>

        {/* Mobile menu: expanded nav items (basic quick links) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.16 }}
              className="md:hidden pb-4 border-t border-slate-200 dark:border-slate-800"
            >
              <div className="mt-4 space-y-2 px-2">
                <Link to="/dashboard" className="block px-3 py-2 rounded-lg text-emerald-700 font-medium hover:bg-emerald-50">Dashboard</Link>
                <Link to="/foodaid" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">FoodAid Engine</Link>
                <Link to="/fingrow" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">FinGrow Engine</Link>
                <Link to="/communities" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Communities</Link>
                <Link to="/projects" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Projects</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default TopBar;
