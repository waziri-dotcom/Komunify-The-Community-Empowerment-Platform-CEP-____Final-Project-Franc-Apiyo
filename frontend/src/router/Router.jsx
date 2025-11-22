import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PageWrapper from '../components/layout/PageWrapper'
// Dashboard
import DashboardHome from '../pages/Dashboard/DashboardHome'
import TrendingCommunities from '../pages/Dashboard/TrendingCommunities'
import QuickActions from '../pages/Dashboard/QuickActions'
import MentorshipSessions from '../pages/Dashboard/MentorshipSessions'
import LatestUpdates from '../pages/Dashboard/LatestUpdates'
// FoodAid
import SurplusListings from '../pages/FoodAid/SurplusListings'
import MatchingEngine from '../pages/FoodAid/MatchingEngine'
import PickupScheduling from '../pages/FoodAid/PickupScheduling'
import RecipientVerification from '../pages/FoodAid/RecipientVerification'
import RealTimeTracking from '../pages/FoodAid/RealTimeTracking'
// FinGrow
import LoanApplication from '../pages/FinGrow/LoanApplication'
import RiskProfile from '../pages/FinGrow/RiskProfile'
import MpesaWallet from '../pages/FinGrow/MpesaWallet'
import RepaymentTracking from '../pages/FinGrow/RepaymentTracking'
import FinancialLiteracy from '../pages/FinGrow/FinancialLiteracy'
// Communities
import AllCommunities from '../pages/Communities/AllCommunities'
import Recommended from '../pages/Communities/Recommended'
import Stories from '../pages/Communities/Stories'
import ImpactTop from '../pages/Communities/ImpactTop'
import Regional from '../pages/Communities/Regional'
// Projects
import MyProjects from '../pages/Projects/MyProjects'
import TeamProjects from '../pages/Projects/TeamProjects'
import CreateProject from '../pages/Projects/CreateProject'
import KanbanBoard from '../pages/Projects/KanbanBoard'
import Milestones from '../pages/Projects/Milestones'
import Resources from '../pages/Projects/Resources'
// MentorLink
import Directory from '../pages/MentorLink/Directory'
import BecomeMentor from '../pages/MentorLink/BecomeMentor'
import BookSession from '../pages/MentorLink/BookSession'
import SessionHistory from '../pages/MentorLink/SessionHistory'
import Notes from '../pages/MentorLink/Notes'
import Achievements from '../pages/MentorLink/Achievements'
// Chat
import CommunityChannels from '../pages/Chat/CommunityChannels'
import ProjectChannels from '../pages/Chat/ProjectChannels'
import DirectMessages from '../pages/Chat/DirectMessages'
import Announcements from '../pages/Chat/Announcements'
import Media from '../pages/Chat/Media'
// Impact Profile
import AboutMe from '../pages/ImpactProfile/AboutMe'
import Contributions from '../pages/ImpactProfile/Contributions'
import ProjectsParticipated from '../pages/ImpactProfile/Projects'
import Mentorship from '../pages/ImpactProfile/Mentorship'
import Badges from '../pages/ImpactProfile/Badges'
import Statistics from '../pages/ImpactProfile/Statistics'
// Marketplace
import Training from '../pages/Marketplace/Training'
import Tools from '../pages/Marketplace/Tools'
import Guides from '../pages/Marketplace/Guides'
import Toolkits from '../pages/Marketplace/Toolkits'
import Upload from '../pages/Marketplace/Upload'
// Donations
import Donate from '../pages/Donations/Donate'
import Receipts from '../pages/Donations/Receipts'
import SponsorCommunity from '../pages/Donations/SponsorCommunity'
import ImpactOfDonation from '../pages/Donations/ImpactOfDonation'
// Grants
import AvailableGrants from '../pages/Grants/Available'
import Eligibility from '../pages/Grants/Eligibility'
import HowToApply from '../pages/Grants/HowToApply'
import CalendarPage from '../pages/Grants/Calendar'
import SuccessStories from '../pages/Grants/SuccessStories'
// Events
import Monthly from '../pages/Events/Monthly'
import Workshops from '../pages/Events/Workshops'
import MentorshipEvents from '../pages/Events/MentorshipEvents'
import TrainingSessions from '../pages/Events/TrainingSessions'
import PastEvents from '../pages/Events/PastEvents'
import RSVP from '../pages/Events/RSVP'
// Admin
import AdminLogin from '../pages/Admin/Login'
import UsersAdmin from '../pages/Admin/Users'
import CommunitiesAdmin from '../pages/Admin/Communities'
import ProjectsAdmin from '../pages/Admin/Projects'
import ReportsAdmin from '../pages/Admin/Reports'
import SettingsAdmin from '../pages/Admin/Settings'
import RolesAdmin from '../pages/Admin/Roles'
// Support
import LiveChat from '../pages/Support/LiveChat'
import Ticket from '../pages/Support/Ticket'
import KnowledgeBase from '../pages/Support/KnowledgeBase'
import Troubleshooting from '../pages/Support/Troubleshooting'
import Onboarding from '../pages/Support/Onboarding'
import Emergency from '../pages/Support/Emergency'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/dashboard/trending" element={<TrendingCommunities />} />
      <Route path="/dashboard/quick" element={<QuickActions />} />
      <Route path="/dashboard/mentorship" element={<MentorshipSessions />} />
      <Route path="/dashboard/updates" element={<LatestUpdates />} />
      {/* FoodAid */}
      <Route path="/foodaid/listings" element={<SurplusListings />} />
      <Route path="/foodaid/matching" element={<MatchingEngine />} />
      <Route path="/foodaid/pickup" element={<PickupScheduling />} />
      <Route path="/foodaid/verify" element={<RecipientVerification />} />
      <Route path="/foodaid/tracking" element={<RealTimeTracking />} />
      {/* FinGrow */}
      <Route path="/fingrow/apply" element={<LoanApplication />} />
      <Route path="/fingrow/risk" element={<RiskProfile />} />
      <Route path="/fingrow/wallet" element={<MpesaWallet />} />
      <Route path="/fingrow/repayments" element={<RepaymentTracking />} />
      <Route path="/fingrow/literacy" element={<FinancialLiteracy />} />
      {/* Communities */}
      <Route path="/communities" element={<AllCommunities />} />
      <Route path="/communities/recommended" element={<Recommended />} />
      <Route path="/communities/stories" element={<Stories />} />
      <Route path="/communities/top" element={<ImpactTop />} />
      <Route path="/communities/regional" element={<Regional />} />
      {/* Projects */}
      <Route path="/projects/my" element={<MyProjects />} />
      <Route path="/projects/team" element={<TeamProjects />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/projects/kanban" element={<KanbanBoard />} />
      <Route path="/projects/milestones" element={<Milestones />} />
      <Route path="/projects/resources" element={<Resources />} />
      {/* MentorLink */}
      <Route path="/mentors" element={<Directory />} />
      <Route path="/mentors/become" element={<BecomeMentor />} />
      <Route path="/mentors/book" element={<BookSession />} />
      <Route path="/mentors/history" element={<SessionHistory />} />
      <Route path="/mentors/notes" element={<Notes />} />
      <Route path="/mentors/achievements" element={<Achievements />} />
      {/* Chat */}
      <Route path="/chat/community" element={<CommunityChannels />} />
      <Route path="/chat/projects" element={<ProjectChannels />} />
      <Route path="/chat/dm" element={<DirectMessages />} />
      <Route path="/chat/announcements" element={<Announcements />} />
      <Route path="/chat/media" element={<Media />} />
      {/* Impact Profile */}
      <Route path="/impact/about" element={<AboutMe />} />
      <Route path="/impact/contributions" element={<Contributions />} />
      <Route path="/impact/projects" element={<ProjectsParticipated />} />
      <Route path="/impact/mentorship" element={<Mentorship />} />
      <Route path="/impact/badges" element={<Badges />} />
      <Route path="/impact/stats" element={<Statistics />} />
      {/* Marketplace */}
      <Route path="/marketplace/training" element={<Training />} />
      <Route path="/marketplace/tools" element={<Tools />} />
      <Route path="/marketplace/guides" element={<Guides />} />
      <Route path="/marketplace/toolkits" element={<Toolkits />} />
      <Route path="/marketplace/upload" element={<Upload />} />
      {/* Donations */}
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/receipts" element={<Receipts />} />
      <Route path="/donate/sponsor" element={<SponsorCommunity />} />
      <Route path="/donate/impact" element={<ImpactOfDonation />} />
      {/* Grants */}
      <Route path="/grants/available" element={<AvailableGrants />} />
      <Route path="/grants/eligibility" element={<Eligibility />} />
      <Route path="/grants/howto" element={<HowToApply />} />
      <Route path="/grants/calendar" element={<CalendarPage />} />
      <Route path="/grants/success" element={<SuccessStories />} />
      {/* Events */}
      <Route path="/events/monthly" element={<Monthly />} />
      <Route path="/events/workshops" element={<Workshops />} />
      <Route path="/events/mentorship" element={<MentorshipEvents />} />
      <Route path="/events/trainings" element={<TrainingSessions />} />
      <Route path="/events/past" element={<PastEvents />} />
      <Route path="/events/rsvp" element={<RSVP />} />
      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/users" element={<UsersAdmin />} />
      <Route path="/admin/communities" element={<CommunitiesAdmin />} />
      <Route path="/admin/projects" element={<ProjectsAdmin />} />
      <Route path="/admin/reports" element={<ReportsAdmin />} />
      <Route path="/admin/settings" element={<SettingsAdmin />} />
      <Route path="/admin/roles" element={<RolesAdmin />} />
      {/* Support */}
      <Route path="/support/live" element={<LiveChat />} />
      <Route path="/support/ticket" element={<Ticket />} />
      <Route path="/support/knowledge" element={<KnowledgeBase />} />
      <Route path="/support/troubleshoot" element={<Troubleshooting />} />
      <Route path="/support/onboarding" element={<Onboarding />} />
      <Route path="/support/emergency" element={<Emergency />} />
      {/* Not found */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}
