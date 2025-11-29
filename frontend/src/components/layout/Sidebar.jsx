// src/components/layout/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Utensils,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  MessageSquare,
  User,
  ShoppingBag,
  Heart,
  TrendingUp,
  Calendar,
  Shield,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [hideFooter, setHideFooter] = useState(false);

  const isActive = (path) => location.pathname.includes(path);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHideFooter(currentScroll > lastScroll);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (id) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  const brand = {
    emerald: "from-emerald-400 to-emerald-600",
    sidebarBg: "bg-gradient-to-b from-slate-950 to-slate-900",
    glass: "backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl rounded-2xl",
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: Home,
      path: "/dashboard",
      subItems: [
        { label: "Overview Feed", path: "/dashboard" },
        { label: "Quick Actions", path: "/dashboard/quick" },
        { label: "Trending Communities", path: "/dashboard/trending" },
        { label: "Mentorship Sessions", path: "/dashboard/mentorship" },
        { label: "Updates & Announcements", path: "/dashboard/updates" },
      ],
    },
    {
      id: "foodaid",
      label: "FoodAid Engine",
      icon: Utensils,
      path: "/foodaid",
      subItems: [
        { label: "Food Listings", path: "/foodaid/listings" },
        { label: "Donor Matching", path: "/foodaid/matching" },
        { label: "Pickup Scheduling", path: "/foodaid/pickup" },
        { label: "Recipient Verification", path: "/foodaid/verify" },
        { label: "Real-time Tracking", path: "/foodaid/tracking" },
      ],
    },
    {
      id: "fingrow",
      label: "FinGrow Engine",
      icon: DollarSign,
      path: "/fingrow",
      subItems: [
        { label: "Loan Application", path: "/fingrow/apply" },
        { label: "Risk Profiling", path: "/fingrow/risk" },
        { label: "M-PESA Wallet", path: "/fingrow/wallet" },
        { label: "Repayment Tracking", path: "/fingrow/repayments" },
        { label: "Financial Literacy", path: "/fingrow/literacy" },
      ],
    },
     {
      id: "Community",
      label: "Community Discovery",
      icon: TrendingUp,
      path: "/communities",
      subItems: [
        { label: "Communities", path: "/communities" },
        { label: "Recommended For You", path: "/communities/recommended" },
        { label: "Story Spotlight", path: "/communities/stories" },
        { label: "Top Impact Communities", path: "/communities/top" },
        { label: "Regional Communities", path: "/communities/regions" },
      ],
    },
    {
      id: "projects",
      label: "Project Workspace",
      icon: Briefcase,
      path: "/projects",
      subItems: [
        { label: "My Projects", path: "/projects/my" },
        { label: "Team Projects", path: "/projects/team" },
        { label: "Create Project", path: "/projects/create" },
        { label: "Kanban Board", path: "/projects/kanban" },
        { label: "Milestones", path: "/projects/milestones" },
        { label: "Resources", path: "/projects/resources" },
      ],
    },
    {
      id: "mentorlink",
      label: "MentorLink Hub",
      icon: GraduationCap,
      path: "/mentorlink",
      subItems: [
        { label: "Mentors", path: "/mentors" },
        { label: "Become A Mentor", path: "/mentors/become" },
        { label: "Book A Session", path: "/mentors/book" },
        { label: "Session History", path: "/mentors/history" },
        { label: "Mentorship Notes", path: "/mentors/notes" },
        { label: "Achievements & Badges", path: "/mentors/achievements" },
        
      ],
    },
    {
      id: "chat",
      label: "ComChat",
      icon: MessageSquare,
      path: "/chat",
      subItems: [
        { label: "Community Channels", path: "/chat/community" },
        { label: "Project Channels", path: "/chat/projects" },
        { label: "Direct Messages", path: "/chat/dm" },
        { label: "Announcements", path: "/chat/announcements" },
        { label: "Media & Documents", path: "/chat/mediaDocs" },
      ],
    },
    {
      id: "impact",
      label: "Impact Profile",
      icon: User,
      path: "/impact",
      subItems: [
        { label: "My Profile", path: "/impact/profile" },
        { label: "My Contributions", path: "/impact/contributions" },
        { label: "Projects Participated", path: "/impact/projects" },
        { label: "Mentorship Hours", path: "/impact/mentorshiphours" },
        { label: "Badges & Certificates", path: "/impact/certificates" },
        { label: "Impact Statistics", path: "/impact/impactstats" },
      ],
    },
    {
      id: "marketplace",
      label: "Resource Library",
      icon: ShoppingBag,
      path: "/resources",
      subItems: [
        { label: "Training Materials", path: "/marketplace/materials" },
        { label: "Tools & Templates", path: "/marketplace/tools" },
        { label: "Guides & Manuals", path: "/marketplace/guides" },
        { label: "Community Toolkits", path: "/marketplace/toolkits" },
        { label: "Upload Your Resource", path: "/marketplace/uploadresource" },
      ],
    },
    {
      id: "donations",
      label: "Donations",
      icon: Heart,
      path: "/donation",
      subItems: [
        { label: "Donate", path: "/donate" },
        { label: "Donation Receipts", path: "/donate/receipts" },
        { label: "Sponsor a Community", path: "/donate/sponsor" },
        { label: "Impact of Your Donation", path: "/donate/impact" },
      ],
    },
    {
      id: "funding",
      label: "Funding & Grants",
      icon: TrendingUp,
      path: "/grants",
      subItems: [
        { label: "Available Grants", path: "/grants/available" },
        { label: "Eligibility & Requirements", path: "/grants/eligibility" },
        { label: "How to Apply", path: "/grants/howto" },
        { label: "Funding Calendar", path: "/grants/calendar" },
        { label: "Success Stories", path: "/grants/success" },
      ],
    },
    {
      id: "events",
      label: "Events & Workshops",
      icon: Calendar,
      path: "/events",
      subItems: [
        { label: "Monthly Calendar", path: "/events/monthly" },
        { label: "Upcoming Workshops", path: "/events/workshops" },
        { label: "Mentorship Events", path: "/events/mentorship" },
        { label: "Training Sessions", path: "/events/trainings" },
        { label: "Past Events Archive", path: "/events/past" },
        { label: "RSVP & Reminders", path: "/events/rsvp" },
      ],
    },
    {
      id: "admin",
      label: "Admin Governance",
      icon: Shield,
      path: "/admin",
      subItems: [
        { label: "User Management", path: "/admin/users" },
        { label: "Community Moderation", path: "/admin/communities" },
        { label: "Project Oversight", path: "/admin/projects" },
        { label: "Reports & Analytics", path: "/admin/reports" },
        { label: "System Settings", path: "/admin/settings" },
        { label: "Admin Roles", path: "/admin/roles" },
        { label: "Login", path: "/admin/login" },
      ],
    },
    {
      id: "support",
      label: "24/7 Support Center",
      icon: Phone,
      path: "/support",
      subItems: [
        { label: "Live Chat Support", path: "/support/live" },
        { label: "Submit a Ticket", path: "/support/ticket" },
        { label: "Knowledge Base(FAQs)", path: "/support/kb" },
        { label: "Troubleshooting Guides", path: "/support/troubleshoot" },
        { label: "Onboarding Support", path: "/support/onboarding" },
        { label: "Emergency", path: "/support/emergency" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[40] md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isMobileOpen ? 0 : 0 }}
        className={`fixed top-0 left-0 md:static h-screen w-72 ${brand.sidebarBg} shadow-xl border-r border-white/10 flex flex-col z-[50]`}
      >
        <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const expanded = expandedMenu === item.id;
            const active = isActive(item.path);

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    active
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-emerald-400 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={`${
                        active
                          ? "text-white"
                          : "text-emerald-500 group-hover:text-emerald-300"
                      }`}
                    />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Submenu */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-6 mt-2 border-l border-emerald-600/50 pl-4 space-y-1"
                    >
                      {item.subItems.map((sub, index) => (
                        <Link
                          key={index}
                          to={sub.path}
                          className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 ${
                            isActive(sub.path)
                              ? "bg-emerald-600/20 text-emerald-300 border-l-2 border-emerald-400 pl-2"
                              : "text-slate-400 hover:text-emerald-300 hover:bg-white/5"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Disappearing Footer */}
        <motion.div
          animate={{ opacity: hideFooter ? 0 : 1, y: hideFooter ? 20 : 0 }}
          transition={{ duration: 0.4 }}
          className={`p-4 ${brand.glass} m-4 mb-5`}
        >
          <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-xl">
            Get Help
          </button>
          <p className="text-xs text-slate-400 text-center mt-3">
            v1.5.0 • Powered by Komunify
          </p>
        </motion.div>
      </motion.aside>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] bg-slate-900/70 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg"
      >
        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </>
  );
};

export default Sidebar;
