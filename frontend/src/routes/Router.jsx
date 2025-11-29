// src/routes/Router.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PageWrapper from "../components/layout/PageWrapper";

// Home
import HomeDashboard from "../pages/Home/HomeDashboard";
import TrendingCommunities from "../pages/Home/TrendingCommunities";
import QuickActions from "../pages/Home/QuickActions";
import MentorshipSessions from "../pages/Home/MentorshipSessions";
import UpdatesFeed from "../pages/Home/UpdatesFeed";

// FoodAid
import SurplusListings from "../pages/FoodAid/SurplusListings";
import MatchingEngine from "../pages/FoodAid/MatchingEngine";
import PickupSchedule from "../pages/FoodAid/PickupSchedule";
import RecipientVerification from "../pages/FoodAid/RecipientVerification";
import RealTimeTracking from "../pages/FoodAid/RealTimeTracking";

// FinGrow
import LoanApplication from "../pages/FinGrow/LoanApplication";
import RiskProfiling from "../pages/FinGrow/RiskProfiling";
import Wallet from "../pages/FinGrow/MpesaWallet";
import RepaymentTracking from "../pages/FinGrow/RepaymentTracking";
import LiteracyPortal from "../pages/FinGrow/FinancialLiteracy";

// Communities
import AllCommunities from "../pages/Communities/CommunityList";
import Recommended from "../pages/Communities/Recommended";
import Stories from "../pages/Communities/Stories";
import ImpactTop from "../pages/Communities/ImpactTop";
import Regional from "../pages/Communities/Regional";

// Projects
import MyProjects from "../pages/Projects/MyProjects";
import TeamProjects from "../pages/Projects/TeamProjects";
import CreateProject from "../pages/Projects/CreateProject";
import KanbanBoard from "../pages/Projects/KanbanBoard";
import Milestones from "../pages/Projects/Milestones";
import Resources from "../pages/Projects/Resources";

// MentorLink
import Directory from "../pages/MentorLink/Directory";
import BecomeMentor from "../pages/MentorLink/BecomeMentor";
import BookSession from "../pages/MentorLink/BookSession";
import SessionHistory from "../pages/MentorLink/SessionHistory";
import Notes from "../pages/MentorLink/Notes";
import Achievements from "../pages/MentorLink/Achievements";

// Chat
import CommunityChannels from "../pages/Chat/CommunityChannels";
import ProjectChannels from "../pages/Chat/ProjectChannels";
import DirectMessages from "../pages/Chat/DirectMessages";
import Announcements from "../pages/Chat/Announcements";
import Media from "../pages/Chat/Media";

// ImpactProfile
import AboutMe from "../pages/ImpactProfile/AboutMe";
import Contributions from "../pages/ImpactProfile/Contributions";
import ProjectsParticipated from "../pages/ImpactProfile/Projects";
import MentorshipHours from "../pages/ImpactProfile/Mentorship";
import Badges from "../pages/ImpactProfile/Badges";
import Statistics from "../pages/ImpactProfile/Statistics";

// Marketplace
import Training from "../pages/Marketplace/Training";
import Tools from "../pages/Marketplace/Tools";
import Guides from "../pages/Marketplace/Guides";
import Toolkits from "../pages/Marketplace/Toolkits";
import Upload from "../pages/Marketplace/Upload";

// Donations
import Donate from "../pages/Donations/Donate";
import Receipts from "../pages/Donations/Receipts";
import SponsorCommunity from "../pages/Donations/SponsorCommunity";
import ImpactOfDonation from "../pages/Donations/ImpactOfDonation";

// Grants
import Available from "../pages/Grants/Available";
import Eligibility from "../pages/Grants/Eligibility";
import HowToApply from "../pages/Grants/HowToApply";
import Calendar from "../pages/Grants/Calendar";
import SuccessStories from "../pages/Grants/SuccessStories";

// Events
import Monthly from "../pages/Events/Monthly";
import Workshops from "../pages/Events/Workshops";
import MentorshipEvents from "../pages/Events/MentorshipEvents";
import TrainingSessions from "../pages/Events/TrainingSessions";
import PastEvents from "../pages/Events/PastEvents";
import RSVP from "../pages/Events/RSVP";

// Admin
import Login from "../pages/Admin/Login";
import UserManagement from "../pages/Admin/UserManagement";
import Moderation from "../pages/Admin/Moderation";
import Oversight from "../pages/Admin/Oversight";
import Reports from "../pages/Admin/Reports";
import Settings from "../pages/Admin/Settings";
import Roles from "../pages/Admin/Roles";

// Support
import LiveChat from "../pages/Support/LiveChat";
import Ticket from "../pages/Support/Ticket";
import Knowledge from "../pages/Support/Knowledge";
import Troubleshoot from "../pages/Support/Troubleshoot";
import Onboarding from "../pages/Support/Onboarding";

const AppRouter = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/home/trending" element={<TrendingCommunities />} />
          <Route path="/home/quick-actions" element={<QuickActions />} />
          <Route path="/home/mentorship-sessions" element={<MentorshipSessions />} />
          <Route path="/home/updates" element={<UpdatesFeed />} />

          {/* FoodAid */}
          <Route path="/foodaid/surplus" element={<SurplusListings />} />
          <Route path="/foodaid/matching" element={<MatchingEngine />} />
          <Route path="/foodaid/pickup" element={<PickupSchedule />} />
          <Route path="/foodaid/verification" element={<RecipientVerification />} />
          <Route path="/foodaid/tracking" element={<RealTimeTracking />} />

          {/* FinGrow */}
          <Route path="/fingrow/loan" element={<LoanApplication />} />
          <Route path="/fingrow/risk" element={<RiskProfiling />} />
          <Route path="/fingrow/wallet" element={<Wallet />} />
          <Route path="/fingrow/repayment" element={<RepaymentTracking />} />
          <Route path="/fingrow/literacy" element={<LiteracyPortal />} />

          {/* Communities */}
          <Route path="/communities/all" element={<CommunityList />} />
          <Route path="/communities/recommended" element={<Recommended />} />
          <Route path="/communities/stories" element={<Stories />} />
          <Route path="/communities/top-impact" element={<ImpactTop />} />
          <Route path="/communities/regions" element={<Regional />} />

          {/* Projects */}
          <Route path="/projects/my" element={<MyProjects />} />
          <Route path="/projects/team" element={<TeamProjects />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/kanban" element={<KanbanBoard />} />
          <Route path="/projects/milestones" element={<Milestones />} />
          <Route path="/projects/resources" element={<Resources />} />

          {/* MentorLink */}
          <Route path="/mentorlink/directory" element={<Directory />} />
          <Route path="/mentorlink/become-mentor" element={<BecomeMentor />} />
          <Route path="/mentorlink/book-session" element={<BookSession />} />
          <Route path="/mentorlink/history" element={<SessionHistory />} />
          <Route path="/mentorlink/notes" element={<Notes />} />
          <Route path="/mentorlink/achievements" element={<Achievements />} />

          {/* Chat */}
          <Route path="/chat/community" element={<CommunityChannels />} />
          <Route path="/chat/project" element={<ProjectChannels />} />
          <Route path="/chat/direct" element={<DirectMessages />} />
          <Route path="/chat/announcements" element={<Announcements />} />
          <Route path="/chat/media" element={<Media />} />

          {/* ImpactProfile */}
          <Route path="/impact/about" element={<AboutMe />} />
          <Route path="/impact/contributions" element={<Contributions />} />
          <Route path="/impact/projects" element={<ProjectsParticipated />} />
          <Route path="/impact/mentorship" element={<MentorshipHours />} />
          <Route path="/impact/badges" element={<Badges />} />
          <Route path="/impact/statistics" element={<Statistics />} />

          {/* Marketplace */}
          <Route path="/marketplace/training" element={<Training />} />
          <Route path="/marketplace/tools" element={<Tools />} />
          <Route path="/marketplace/guides" element={<Guides />} />
          <Route path="/marketplace/toolkits" element={<Toolkits />} />
          <Route path="/marketplace/upload" element={<Upload />} />

          {/* Donations */}
          <Route path="/donations/donate" element={<Donate />} />
          <Route path="/donations/receipts" element={<Receipts />} />
          <Route path="/donations/sponsor" element={<SponsorCommunity />} />
          <Route path="/donations/impact" element={<ImpactOfDonation />} />

          {/* Grants */}
          <Route path="/grants/available" element={<Available />} />
          <Route path="/grants/eligibility" element={<Eligibility />} />
          <Route path="/grants/how-to-apply" element={<HowToApply />} />
          <Route path="/grants/calendar" element={<Calendar />} />
          <Route path="/grants/success-stories" element={<SuccessStories />} />

          {/* Events */}
          <Route path="/events/monthly" element={<Monthly />} />
          <Route path="/events/workshops" element={<Workshops />} />
          <Route path="/events/mentorship" element={<MentorshipEvents />} />
          <Route path="/events/training" element={<TrainingSessions />} />
          <Route path="/events/past" element={<PastEvents />} />
          <Route path="/events/rsvp" element={<RSVP />} />

          {/* Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/moderation" element={<Moderation />} />
          <Route path="/admin/oversight" element={<Oversight />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/roles" element={<Roles />} />

          {/* Support */}
          <Route path="/support/live-chat" element={<LiveChat />} />
          <Route path="/support/ticket" element={<Ticket />} />
          <Route path="/support/knowledge" element={<Knowledge />} />
          <Route path="/support/troubleshoot" element={<Troubleshoot />} />
          <Route path="/support/onboarding" element={<Onboarding />} />

          {/* Redirect unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default AppRouter;
