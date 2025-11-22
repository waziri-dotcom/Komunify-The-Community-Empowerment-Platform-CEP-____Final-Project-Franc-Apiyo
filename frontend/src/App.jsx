// src/App.jsx

// Layout
import Navigation from './components/layout/TopBar.jsx';
import Footer from './components/layout/PageWrapper.jsx';

// Dashboard Pages
import DashboardHome from './pages/Home/DashboardHome.jsx';
import TrendingCommunities from './pages/Home/TrendingCommunities.jsx';
import QuickActions from './pages/Home/QuickActions.jsx';
import MentorshipSessions from './pages/Home/MentorshipSessions.jsx';
import LatestUpdates from './pages/Home/LatestUpdates.jsx';

// FoodAid Pages
import SurplusListings from './pages/FoodAid/SurplusListings.jsx';
import MatchingEngine from './pages/FoodAid/MatchingEngine.jsx';
import PickupScheduling from './pages/FoodAid/PickupScheduling.jsx';
import RecipientVerification from './pages/FoodAid/RecipientVerification.jsx';
import RealTimeTracking from './pages/FoodAid/RealTimeTracking.jsx';

// FinGrow Pages
import LoanApplication from './pages/FinGrow/LoanApplication.jsx';
import RiskProfile from './pages/FinGrow/RiskProfile.jsx';
import MpesaWallet from './pages/FinGrow/MpesaWallet.jsx';
import RepaymentTracking from './pages/FinGrow/RepaymentTracking.jsx';
import FinancialLiteracy from './pages/FinGrow/FinancialLiteracy.jsx';

//Communities
import AllCommunities from './pages/Communities/AllCommunities.jsx';
import Recommended from './pages/Communities/Recommended.jsx';
import Stories from './pages/Communities/Stories.jsx';
import ImpactTop from './pages/Communities/ImpactTop.jsx';
import Regional from './pages/Communities/Regional.jsx';

//Projects
import MyProjects from './pages/Projects/MyProjects.jsx';
import TeamProjects from './pages/Projects/TeamProjects.jsx';
import CreateProject from './pages/Projects/CreateProject.jsx';
import KanbanBoard from './pages/Projects/KanbanBoard.jsx';
import Milestones from './pages/Projects/Milestones.jsx';
import Resources from './pages/Projects/Resources.jsx';

//MentorLink
import Directory from './pages/MentorLink/Directory.jsx';
import BecomeMentor from './pages/MentorLink/BecomeMentor.jsx';
import BookSession from './pages/MentorLink/BookSession.jsx';
import SessionHistory from './pages/MentorLink/SessionHistory.jsx';
import Notes from './pages/MentorLink/Notes.jsx';
import Achievements from './pages/MentorLink/Achievements.jsx';

//Chat
import CommunityChannels from './pages/Chat/CommunityChannels.jsx';
import ProjectChannels from './pages/Chat/ProjectChannels.jsx';
import DirectMessages from './pages/Chat/DirectMessages.jsx';
import Announcements from './pages/Chat/Announcements.jsx';
import Media from './pages/Chat/Media.jsx';

//Impact Profile
import AboutMe from './pages/ImpactProfile/AboutMe.jsx';
import Contributions from './pages/ImpactProfile/Contributions.jsx';
import ProjectsParticipated from './pages/ImpactProfile/Projects.jsx';
import Mentorship from './pages/ImpactProfile/Mentorship.jsx';
import Badges from './pages/ImpactProfile/Badges.jsx';
import Statistics from './pages/ImpactProfile/Statistics.jsx';

//Marketplace
import Training from './pages/Resources/Training.jsx';
import Tools from './pages/Resources/Tools.jsx';
import Guides from './pages/Resources/Guides.jsx';
import Toolkits from './pages/Resources/Toolkits.jsx';
import Upload from './pages/Resources/Upload.jsx';

//Donations
import Donate from './pages/Donations/Donate.jsx';
import Receipts from './pages/Donations/Receipts.jsx';
import SponsorCommunity from './pages/Donations/SponsorCommunity.jsx';
import ImpactOfDonation from './pages/Donations/ImpactOfDonation.jsx';

  //Grants
import AvailableGrants from './pages/Grants/Available.jsx';
import Eligibility from './pages/Grants/Eligibility.jsx';
import HowToApply from './pages/Grants/HowToApply.jsx';
import CalendarPage from './pages/Grants/Calendar.jsx';
import SuccessStories from './pages/Grants/SuccessStories.jsx';

//Events
import Monthly from './pages/Events/Monthly.jsx';
import Workshops from './pages/Events/Workshops.jsx';
import MentorshipEvents from './pages/Events/MentorshipEvents.jsx';
import TrainingSessions from './pages/Events/TrainingSessions.jsx';
import PastEvents from './pages/Events/PastEvents.jsx';
import RSVP from './pages/Events/RSVP.jsx';

//Admin
import AdminLogin from './pages/Admin/Login.jsx';
import UsersAdmin from './pages/Admin/Users.jsx';
import CommunitiesAdmin from './pages/Admin/Communities.jsx';
import ProjectsAdmin from './pages/Admin/Projects.jsx';
import ReportsAdmin from './pages/Admin/Reports.jsx';
import SettingsAdmin from './pages/Admin/Settings.jsx';
import RolesAdmin from './pages/Admin/Roles.jsx';

//Support
import LiveChat from './pages/Support/LiveChat.jsx';
import Ticket from './pages/Support/Ticket.jsx';
import KnowledgeBase from './pages/Support/KnowledgeBase.jsx';
import Troubleshooting from './pages/Support/Troubleshooting.jsx';
import Onboarding from './pages/Support/Onboarding.jsx';
import Emergency from './pages/Support/Emergency.jsx';

// Import React Router
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          
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
          {/* Add other routes similarly */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

