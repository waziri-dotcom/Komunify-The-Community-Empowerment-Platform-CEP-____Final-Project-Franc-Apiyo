// src/App.jsx 

// Layout
import Navigation from "./components/layout/PageWrapper.jsx";
import Footer from "./components/layout/PageWrapper.jsx";

// Dashboard Pages
import DashboardHome from "./pages/Home/DashboardHome.jsx";
import TrendingCommunities from "./pages/Home/TrendingCommunities.jsx";
import QuickActions from "./pages/Home/QuickActions.jsx";
import MentorshipSessions from "./pages/Home/MentorshipSessions.jsx";
import UpdatesFeed from "./pages/Home/UpdatesFeed.jsx";

// FoodAid Pages
import SurplusListings from "./pages/FoodAid/SurplusListings.jsx";
import MatchingEngine from "./pages/FoodAid/MatchingEngine.jsx";
import PickupScheduling from "./pages/FoodAid/PickupScheduling.jsx";
import RecipientVerification from "./pages/FoodAid/RecipientVerification.jsx";
import RealTimeTracking from "./pages/FoodAid/RealTimeTracking.jsx";

// FinGrow Pages
import LoanApplication from "./pages/FinGrow/LoanApplication.jsx";
import RiskProfile from "./pages/FinGrow/RiskProfile.jsx";
import MpesaWallet from "./pages/FinGrow/MpesaWallet.jsx";
import RepaymentTracking from "./pages/FinGrow/RepaymentTracking.jsx";
import FinancialLiteracy from "./pages/FinGrow/FinancialLiteracy.jsx";

// Communities
import AllCommunities from "./pages/Communities/CommunityList.jsx";
import Recommended from "./pages/Communities/Recommended.jsx";
import Stories from "./pages/Communities/Stories.jsx";
import ImpactTop from "./pages/Communities/ImpactTop.jsx";
import Regions from "./pages/Communities/Regions.jsx";

// Projects
import MyProjects from "./pages/Projects/MyProjects.jsx";
import TeamProjects from "./pages/Projects/TeamProjects.jsx";
import CreateProject from "./pages/Projects/CreateProject.jsx";
import KanbanBoard from "./pages/Projects/KanbanBoard.jsx";
import Milestones from "./pages/Projects/Milestones.jsx";
import Resources from "./pages/Projects/Resources.jsx";

// MentorLink
import Directory from "./pages/MentorLink/Directory.jsx";
import BecomeMentor from "./pages/MentorLink/BecomeMentor.jsx";
import BookSession from "./pages/MentorLink/BookSession.jsx";
import SessionHistory from "./pages/MentorLink/SessionHistory.jsx";
import Notes from "./pages/MentorLink/Notes.jsx";
import Achievements from "./pages/MentorLink/Achievements.jsx";

// Chat
import Channels from "./pages/Chat/Channels.jsx";
import ProjectChannels from "./pages/Chat/ProjectChannels.jsx";
import DirectMessages from "./pages/Chat/DirectMessages.jsx";
import Announcements from "./pages/Chat/Announcements.jsx";
import MediaDocs from "./pages/Chat/MediaDocs.jsx";

// Impact Profile
import Profile from "./pages/ImpactProfile/Profile.jsx";
import Contributions from "./pages/ImpactProfile/Contributions.jsx";
import ProjectsParticipated from "./pages/ImpactProfile/ProjectsParticipated.jsx";
import MentorshipHours from "./pages/ImpactProfile/MentorshipHours.jsx";
import Certificates from "./pages/ImpactProfile/Certificates.jsx";
import ImpactStats from "./pages/ImpactProfile/ImpactStats.jsx";

// Marketplace
import Materials from "./pages/Resources/Materials.jsx";
import Tools from "./pages/Resources/Tools.jsx";
import Guides from "./pages/Resources/Guides.jsx";
import Toolkits from "./pages/Resources/Toolkits.jsx";
import UploadResource from "./pages/Resources/UploadResource.jsx";

// Donations
import Donate from "./pages/Donations/Donate.jsx";
import Receipts from "./pages/Donations/Receipts.jsx";
import Sponsor from "./pages/Donations/Sponsor.jsx";
import ImpactOfDonation from "./pages/Donations/ImpactOfDonation.jsx";

// Grants
import AvailableGrants from "./pages/Grants/Available.jsx";
import Eligibility from "./pages/Grants/Eligibility.jsx";
import HowToApply from "./pages/Grants/HowToApply.jsx";
import CalendarPage from "./pages/Grants/Calendar.jsx";
import SuccessStories from "./pages/Grants/SuccessStories.jsx";

// Events
import Monthly from "./pages/Events/Calendar.jsx";
import Workshops from "./pages/Events/Workshops.jsx";
import MentorshipEvents from "./pages/Events/MentorshipEvents.jsx";
import TrainingSessions from "./pages/Events/Trainings.jsx";
import PastEvents from "./pages/Events/PastEvents.jsx";

// Admin
import AdminLogin from "./pages/Admin/Login.jsx";
import UsersAdmin from "./pages/Admin/Users.jsx";
import CommunitiesAdmin from "./pages/Admin/Communities.jsx";
import ProjectsAdmin from "./pages/Admin/Projects.jsx";
import ReportsAdmin from "./pages/Admin/Reports.jsx";
import SettingsAdmin from "./pages/Admin/Settings.jsx";
import RolesAdmin from "./pages/Admin/Roles.jsx";

// Support
import KnowledgeBase from "./pages/Support/KnowledgeBase.jsx";
import Troubleshooting from "./pages/Support/Troubleshooting.jsx";
import Onboarding from "./pages/Support/Onboarding.jsx";
import Emergency from "./pages/Support/Emergency.jsx";

// Support Chat Components (integrated)
import AuthForm from "./components/AuthForm";
import TicketList from "./components/TicketList";
import ChatWindow from "./components/ChatWindow";

import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import PageWrapper from "./components/layout/PageWrapper.jsx";

export default function App() {
  return (
    <PageWrapper>
    <Routes>
      {/* All routes are wrapped inside PageWrapper */}
      <Route path="/" element={<PageWrapper />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/trending" element={<TrendingCommunities />} />
          <Route path="/dashboard/quick" element={<QuickActions />} />
          <Route path="/dashboard/mentorship" element={<MentorshipSessions />} />
          <Route path="/dashboard/updates" element={<UpdatesFeed />} />

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
          <Route path="/fingrow/repayments"  element={<RepaymentTracking />} />
          <Route path="/fingrow/literacy" element={<FinancialLiteracy />} />

          {/* Communities */}
          <Route path="/communities" element={<AllCommunities />} />
          <Route path="/communities/recommended" element={<Recommended />} />
          <Route path="/communities/stories" element={<Stories />} />
          <Route path="/communities/top" element={<ImpactTop />} />
          <Route path="/communities/regions" element={<Regions />} />

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
          <Route path="/chat/community" element={<Channels />} />
          <Route path="/chat/projects" element={<ProjectChannels />} />
          <Route path="/chat/dm" element={<DirectMessages />} />
          <Route path="/chat/announcements" element={<Announcements />} />
          <Route path="/chat/mediaDocs" element={<MediaDocs />} />

          {/* Impact Profile */}
          <Route path="/impact/profile" element={<Profile />} />
          <Route path="/impact/contributions" element={<Contributions />} />
          <Route path="/impact/projects" element={<ProjectsParticipated />} />
          <Route path="/impact/mentorshiphours" element={<MentorshipHours />} />
          <Route path="/impact/certificates" element={<Certificates />} />
          <Route path="/impact/impactstats" element={<ImpactStats />} />

          {/* Marketplace */}
          <Route path="/marketplace/materials" element={<Materials />} />
          <Route path="/marketplace/tools" element={<Tools />} />
          <Route path="/marketplace/guides" element={<Guides />} />
          <Route path="/marketplace/toolkits" element={<Toolkits />} />
          <Route path="/marketplace/uploadresource" element={<UploadResource />} />

          {/* Donations */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/receipts" element={<Receipts />} />
          <Route path="/donate/sponsor" element={<Sponsor />} />
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

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/communities" element={<CommunitiesAdmin />} />
          <Route path="/admin/projects" element={<ProjectsAdmin />} />
          <Route path="/admin/reports" element={<ReportsAdmin />} />
          <Route path="/admin/settings" element={<SettingsAdmin />} />
          <Route path="/admin/roles" element={<RolesAdmin />} />

          {/* Support – Integrated Chat */}
          <Route
            path="/support/live"
            element={<SupportChatPage />}
          />
          <Route path="/support/ticket" element={<TicketList />} />
          <Route path="/support/knowledge" element={<KnowledgeBase />} />
          <Route path="/support/troubleshoot" element={<Troubleshooting />} />
          <Route path="/support/onboarding" element={<Onboarding />} />
          <Route path="/support/emergency" element={<Emergency />} />

          {/* Not Found */}
         <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
    </PageWrapper>
  );
}
/* ---------------------------
   Support Chat Wrapper Page
---------------------------- */

function SupportChatPage() {
  const [user, setUser] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      {!user ? (
        <AuthForm onAuthSuccess={setUser} />
      ) : (
        <>
          <TicketList user={user} onSelectTicket={setSelectedTicket} />
          <ChatWindow ticket={selectedTicket} user={user} />
        </>
      )}
    </div>
  );
}
