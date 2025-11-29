// src/components/layout/PageWrapper.jsx
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const overlayRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("komunify_theme") || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (value) => {
    if (value === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("komunify_theme", value);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  // Disable body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileSidebarOpen]);

  const sidebarVariants = {
    hidden: { x: -320, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 28 } },
    exit: { x: -320, opacity: 0, transition: { ease: "easeInOut", duration: 0.18 } },
  };

  return (
    <div className={`flex min-h-screen ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900"}`}>
      {/* Sidebar Desktop */}
      <aside className="hidden md:block sticky top-0">
        <Sidebar isMobileOpen={false} setIsMobileOpen={() => {}} />
      </aside>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              ref={overlayRef}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 left-0 z-50 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              style={{ width: 280 }}
            >
              <Sidebar isMobileOpen={mobileSidebarOpen} setIsMobileOpen={setMobileSidebarOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <TopBar onToggleMobileMenu={() => setMobileSidebarOpen((s) => !s)} onToggleTheme={toggleTheme} />

        <main className="flex-1 overflow-auto p-6 md:p-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="hidden md:flex items-center justify-center py-3 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <span>© {new Date().getFullYear()} Komunify</span>
            <span className="text-amber-500 font-medium">Empowering Communities</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PageWrapper;
