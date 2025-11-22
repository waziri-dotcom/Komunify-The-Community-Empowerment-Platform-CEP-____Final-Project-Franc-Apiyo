import React, { useState } from 'react';
import { ChevronDown, Home, Utensils, DollarSign, Users, Briefcase, GraduationCap, MessageSquare, User, ShoppingBag, Heart, TrendingUp, Calendar, Shield, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const isActive = (path) => location.pathname.includes(path);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: Home,
      path: '/dashboard',
      subItems: [
        { label: 'Overview Feed', path: '/dashboard/feed' },
        { label: 'Quick Actions', path: '/dashboard/quick-actions' },
        { label: 'Trending Communities', path: '/dashboard/trending' },
        { label: 'Mentorship Sessions', path: '/dashboard/mentorship' },
        { label: 'Updates & Announcements', path: '/dashboard/updates' },
      ],
    },
    {
      id: 'foodaid',
      label: 'FoodAid Engine',
      icon: Utensils,
      path: '/foodaid',
      subItems: [
        { label: 'Surplus Listings', path: '/foodaid/listings' },
        { label: 'Matching Engine', path: '/foodaid/matching' },
        { label: 'Pickup Schedule', path: '/foodaid/schedule' },
        { label: 'Recipient Verification', path: '/foodaid/verification' },
        { label: 'Real-Time Tracking', path: '/foodaid/tracking' },
      ],
    },
    {
      id: 'fingrow',
      label: 'FinGrow Engine',
      icon: DollarSign,
      path: '/fingrow',
      subItems: [
        { label: 'Loan Application', path: '/fingrow/loan-application' },
        { label: 'Risk Profiling', path: '/fingrow/risk-profiling' },
        { label: 'M-PESA Wallet', path: '/fingrow/wallet' },
        { label: 'Repayment Tracking', path: '/fingrow/repayment' },
        { label: 'Financial Literacy', path: '/fingrow/literacy' },
      ],
    },
    {
      id: 'communities',
      label: 'Community Discovery',
      icon: Users,
      path: '/communities',
      subItems: [
        { label: 'All Communities', path: '/communities/all' },
        { label: 'Recommended for You', path: '/communities/recommended' },
        { label: 'Community Stories', path: '/communities/stories' },
        { label: 'Top Impact Communities', path: '/communities/top-impact' },
        { label: 'Regional Communities', path: '/communities/regions' },
      ],
    },
    {
      id: 'projects',
      label: 'Project Workspace',
      icon: Briefcase,
      path: '/projects',
      subItems: [
        { label: 'My Projects', path: '/projects/my-projects' },
        { label: 'Team Projects', path: '/projects/team' },
        { label: 'Create Project', path: '/projects/create' },
        { label: 'Task Board', path: '/projects/board' },
        { label: 'Milestones', path: '/projects/milestones' },
        { label: 'Resources', path: '/projects/resources' },
      ],
    },
    {
      id: 'mentorship',
      label: 'MentorLink Hub',
      icon: GraduationCap,
      path: '/mentorship',
      subItems: [
        { label: 'Mentor Directory', path: '/mentorship/directory' },
        { label: 'Become a Mentor', path: '/mentorship/become-mentor' },
        { label: 'Book Session', path: '/mentorship/book' },
        { label: 'Session History', path: '/mentorship/history' },
        { label: 'Notes', path: '/mentorship/notes' },
        { label: 'Achievements', path: '/mentorship/achievements' },
      ],
    },
    {
      id: 'chat',
      label: 'ComChat',
      icon: MessageSquare,
      path: '/chat',
      subItems: [
        { label: 'Community Channels', path: '/chat/channels' },
        { label: 'Project Channels', path: '/chat/project-channels' },
        { label: 'Direct Messages', path: '/chat/direct' },
        { label: 'Announcements', path: '/chat/announcements' },
        { label: 'Media & Documents', path: '/chat/media' },
      ],
    },
    {
      id: 'profile',
      label: 'Impact Profile',
      icon: User,
      path: '/profile',
      subItems: [
        { label: 'About Me & Skills', path: '/profile/about' },
        { label: 'My Contributions', path: '/profile/contributions' },
        { label: 'Projects Participated', path: '/profile/projects' },
        { label: 'Mentorship Hours', path: '/profile/hours' },
        { label: 'Badges & Certificates', path: '/profile/badges' },
        { label: 'Impact Statistics', path: '/profile/stats' },
      ],
    },
    {
      id: 'marketplace',
      label: 'Resource Marketplace',
      icon: ShoppingBag,
      path: '/marketplace',
      subItems: [
        { label: 'Training Materials', path: '/marketplace/materials' },
        { label: 'Tools & Templates', path: '/marketplace/tools' },
        { label: 'Guides & Manuals', path: '/marketplace/guides' },
        { label: 'Community Toolkits', path: '/marketplace/toolkits' },
        { label: 'Upload Resource', path: '/marketplace/upload' },
      ],
    },
    {
      id: 'donations',
      label: 'Donations',
      icon: Heart,
      path: '/donations',
      subItems: [
        { label: 'Donate', path: '/donations/donate' },
        { label: 'Donation Receipts', path: '/donations/receipts' },
        { label: 'Sponsor a Community', path: '/donations/sponsor' },
        { label: 'Impact of Your Donation', path: '/donations/impact' },
      ],
    },
    {
      id: 'funding',
      label: 'Funding & Grants',
      icon: TrendingUp,
      path: '/funding',
      subItems: [
        { label: 'Available Grants', path: '/funding/grants' },
        { label: 'Eligibility & Requirements', path: '/funding/eligibility' },
        { label: 'How to Apply', path: '/funding/how-to-apply' },
        { label: 'Funding Calendar', path: '/funding/calendar' },
        { label: 'Success Stories', path: '/funding/stories' },
      ],
    },
    {
      id: 'events',
      label: 'Events & Workshops',
      icon: Calendar,
      path: '/events',
      subItems: [
        { label: 'Monthly Calendar', path: '/events/calendar' },
        { label: 'Upcoming Workshops', path: '/events/workshops' },
        { label: 'Mentorship Events', path: '/events/mentorship' },
        { label: 'Training Sessions', path: '/events/training' },
        { label: 'Past Events', path: '/events/past' },
      ],
    },
    {
      id: 'admin',
      label: 'Admin Governance',
      icon: Shield,
      path: '/admin',
      subItems: [
        { label: 'User Management', path: '/admin/users' },
        { label: 'Community Moderation', path: '/admin/moderation' },
        { label: 'Project Oversight', path: '/admin/projects' },
        { label: 'Reports & Analytics', path: '/admin/reports' },
        { label: 'System Settings', path: '/admin/settings' },
        { label: 'Admin Roles', path: '/admin/roles' },
      ],
    },
    {
      id: 'support',
      label: '24/7 Support Center',
      icon: Phone,
      path: '/support',
      subItems: [
        { label: 'Live Chat Support', path: '/support/chat' },
        { label: 'Submit a Ticket', path: '/support/ticket' },
        { label: 'Knowledge Base', path: '/support/knowledge' },
        { label: 'Troubleshooting', path: '/support/troubleshoot' },
        { label: 'Onboarding', path: '/support/onboarding' },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 h-screen overflow-y-auto shadow-lg border-r border-slate-700">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <span>Komunify</span>
        </h1>
        <p className="text-xs text-emerald-400 mt-1 font-medium">Community Empowerment</p>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isItemActive = isActive(item.path);
          const isExpanded = expandedMenu === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => toggleMenu(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isItemActive
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-emerald-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={20}
                    className={`transition-colors ${
                      isItemActive ? 'text-white' : 'text-emerald-500 group-hover:text-emerald-400'
                    }`}
                  />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  } ${isItemActive ? 'text-white' : 'text-slate-500'}`}
                />
              </button>

              {/* Submenu Items */}
              {isExpanded && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-emerald-600 pl-4">
                  {item.subItems.map((subItem, idx) => (
                    <Link
                      key={idx}
                      to={subItem.path}
                      className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 ${
                        isActive(subItem.path)
                          ? 'bg-emerald-500/20 text-emerald-300 font-medium border-l-2 border-emerald-400 pl-2'
                          : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-700/50'
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-900">
        <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
          Get Help
        </button>
        <p className="text-xs text-slate-500 text-center mt-3">v1.0 • Powered by Komunify</p>
      </div>
      
    </aside>
  );
};

export default Sidebar;