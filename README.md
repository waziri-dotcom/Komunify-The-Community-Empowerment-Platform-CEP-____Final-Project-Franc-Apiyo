
# Komunify – Community Empowerment Platform

**Empowering Communities Through Food, Finance & Technology**

---

## 🎯 Project Vision

Komunify is a **full-stack digital ecosystem** merging food rescue coordination with micro-lending empowerment. We transform urban compassion into sustainable opportunity by connecting food donors, vulnerable families, and micro-entrepreneurs through transparent technology.

---

## 🚀 Live Demo

- **Frontend:** https://komunify-the-community-empowerment-one.vercel.app
- **Backend API:** https://komunify-the-community-empowerment.onrender.com

---

## 🔑 Core Features

| Feature | Impact |
|---------|--------|
| **FoodAid Engine** | Real-time geo-matched food redistribution reducing waste & hunger |
| **FinGrow Engine** | Micro-loans + mentorship for sustainable entrepreneurship |
| **Impact Dashboard** | SDG-linked analytics showing measurable community transformation |
| **Community Hub** | Centralized spaces for collaboration, mentorship & resource sharing |
| **Transparent Tracking** | Donors visualize real-time social impact of contributions |

---

## 🏗️ Technical Stack

**Frontend:** React • TailwindCSS • Shadcn UI • Vite  
**Backend:** Node.js • Express • Socket.io  
**Database:** MongoDB Atlas  
**Authentication:** Clerk Auth  
**Payments:** M-Pesa Daraja API  
**Hosting:** Vercel (Frontend) • Render (Backend)  
**Storage:** AWS S3 / Cloudinary  

---

## 🎨 Platform Architecture

### Key Pages & Modules

- **📊 Dashboard** – Community hub with trending projects & quick actions
- **🥗 FoodAid** – Surplus listings, matching, pickup scheduling & real-time tracking
- **💸 FinGrow** – Loan applications, wallet, repayment tracking & financial literacy
- **👥 Communities** – Discovery, engagement & impact storytelling
- **💼 Projects** – Kanban workspace with milestones & team collaboration
- **🎓 MentorLink** – Mentor directory, session booking & achievements
- **💬 ComChat** – Channels, direct messages & community announcements
- **👤 Impact Profile** – Personal achievement dashboard & contribution metrics
- **💰 Funding & Grants** – Curated opportunities for community projects
- **📅 Events** – Unified calendar for workshops, training & community activities
- **🛡️ Admin Panel** – Governance, moderation & analytics (Clerk Auth)
- **☎️ Support Center** – 24/7 live chat, ticketing & knowledge base

---

## 🎨 Design System

**Color Palette:** Forest Green • Gold • Mint • Dark Gray  
**UI Style:** Modern glassmorphism with warm, compassionate aesthetics  
**Philosophy:** Human-centered design emphasizing trust, clarity & community ownership

komunify/
├─ backend/
│  ├─ package.json
│  ├─ .env.example
│  ├─ src/
│  │  ├─ index.js
│  │  ├─ app.js
│  │  ├─ config/
│  │  │  ├─ db.js
│  │  │  └─ aws.js
│  │  ├─ models/
│  │  │  ├─ User.js
│  │  │  ├─ Community.js
│  │  │  ├─ FoodListing.js
│  │  │  ├─ Loan.js
│  │  │  ├─ Transaction.js
│  │  │  ├─ Project.js
│  │  │  ├─ Message.js
│  │  │  └─ Event.js
│  │  ├─ controllers/
│  │  │  ├─ authController.js
│  │  │  ├─ foodController.js
│  │  │  ├─ loanController.js
│  │  │  ├─ communityController.js
│  │  │  ├─ projectController.js
│  │  │  └─ chatController.js
│  │  ├─ routes/
│  │  │  ├─ auth.js
│  │  │  ├─ food.js
│  │  │  ├─ loans.js
│  │  │  ├─ communities.js
│  │  │  ├─ projects.js
│  │  │  └─ chat.js
│  │  ├─ services/
│  │  │  ├─ mpesaService.js
│  │  │  ├─ clerkService.js
│  │  │  └─ notificationService.js
│  │  ├─ sockets/
│  │  │  └─ index.js
│  │  ├─ middleware/
│  │  │  ├─ auth.js
│  │  │  └─ errorHandler.js
│  │  └─ utils/
│  │     ├─ generateId.js
│  │     ├─ logger.js
│  │     └─ validators.js
│  └─ README.md
│
└─ frontend/
   ├─ package.json
   ├─ index.html
   ├─ vite.config.js
   ├─ tailwind.config.js
   ├─ postcss.config.js
   ├─ src/
   │  ├─ main.jsx
   │  ├─ App.jsx
   │  ├─ routes/Router.jsx
   │  ├─ components/
   │  │  ├─ layout/
   │  │  │  ├─ TopBar.jsx
   │  │  │  ├─ Sidebar.jsx
   │  │  │  └─ PageWrapper.jsx
   │  │  ├─ ui/
   │  │  │  ├─ Card.jsx
   │  │  │  ├─ Button.jsx
   │  │  │  ├─ Tabs.jsx
   │  │  │  └─ Badge.jsx
   │  │  └─ charts/
   │  │     ├─ LineGraph.jsx
   │  │     ├─ ProgressCircle.jsx
   │  │     └─ BarChart.jsx
   │  ├─ pages/
   │  │  ├─ Dashboard/
   │  │  │  ├─ HomeDashboard.jsx
   │  │  │  ├─ TrendingCommunities.jsx
   │  │  │  ├─ QuickActions.jsx
   │  │  │  ├─ MentorshipSessions.jsx
   │  │  │  └─ UpdatesFeed.jsx
   │  │  ├─ FoodAid/
   │  │  │  ├─ SurplusListings.jsx
   │  │  │  ├─ MatchingEngine.jsx
   │  │  │  ├─ PickupSchedule.jsx
   │  │  │  ├─ RecipientVerification.jsx
   │  │  │  └─ RealTimeTracking.jsx
   │  │  ├─ FinGrow/
   │  │  │  ├─ LoanApplication.jsx
   │  │  │  ├─ RiskProfiling.jsx
   │  │  │  ├─ Wallet.jsx
   │  │  │  ├─ RepaymentTracking.jsx
   │  │  │  └─ LiteracyPortal.jsx
   │  │  ├─ Communities/
   │  │  │  ├─ CommunityList.jsx
   │  │  │  ├─ Recommended.jsx
   │  │  │  ├─ Stories.jsx
   │  │  │  ├─ ImpactTop.jsx
   │  │  │  └─ Regions.jsx
   │  │  ├─ Projects/
   │  │  │  ├─ MyProjects.jsx
   │  │  │  ├─ TeamProjects.jsx
   │  │  │  ├─ CreateProject.jsx
   │  │  │  ├─ TaskBoard.jsx
   │  │  │  ├─ Milestones.jsx
   │  │  │  └─ Resources.jsx
   │  │  ├─ Mentorship/
   │  │  │  ├─ Directory.jsx
   │  │  │  ├─ BecomeMentor.jsx
   │  │  │  ├─ BookSession.jsx
   │  │  │  ├─ SessionHistory.jsx
   │  │  │  ├─ Notes.jsx
   │  │  │  └─ Achievements.jsx
   │  │  ├─ Chat/
   │  │  │  ├─ Channels.jsx
   │  │  │  ├─ ProjectChannels.jsx
   │  │  │  ├─ DirectMessages.jsx
   │  │  │  ├─ Announcements.jsx
   │  │  │  └─ MediaDocs.jsx
   │  │  ├─ ImpactProfile/
   │  │  │  ├─ Profile.jsx
   │  │  │  ├─ Contributions.jsx
   │  │  │  ├─ ProjectsParticipated.jsx
   │  │  │  ├─ MentorshipHours.jsx
   │  │  │  ├─ Certificates.jsx
   │  │  │  └─ ImpactStats.jsx
   │  │  ├─ Marketplace/
   │  │  │  ├─ Materials.jsx
   │  │  │  ├─ Tools.jsx
   │  │  │  ├─ Guides.jsx
   │  │  │  ├─ Toolkits.jsx
   │  │  │  └─ UploadResource.jsx
   │  │  ├─ Donations/
   │  │  │  ├─ Donate.jsx
   │  │  │  ├─ Receipts.jsx
   │  │  │  ├─ Sponsor.jsx
   │  │  │  └─ ImpactOfDonation.jsx
   │  │  ├─ Funding/
   │  │  │  ├─ Grants.jsx
   │  │  │  ├─ Eligibility.jsx
   │  │  │  ├─ HowToApply.jsx
   │  │  │  ├─ FundingCalendar.jsx
   │  │  │  └─ GrantStories.jsx
   │  │  ├─ Events/
   │  │  │  ├─ Calendar.jsx
   │  │  │  ├─ Workshops.jsx
   │  │  │  ├─ MentorshipEvents.jsx
   │  │  │  ├─ Trainings.jsx
   │  │  │  └─ PastEvents.jsx
   │  │  ├─ Admin/
   │  │  │  ├─ Login.jsx
   │  │  │  ├─ UserManagement.jsx
   │  │  │  ├─ Moderation.jsx
   │  │  │  ├─ Oversight.jsx
   │  │  │  ├─ Reports.jsx
   │  │  │  ├─ Settings.jsx
   │  │  │  └─ Roles.jsx
   │  │  ├─ Support/
   │  │  │  ├─ LiveChat.jsx
   │  │  │  ├─ Ticket.jsx
   │  │  │  ├─ Knowledge.jsx
   │  │  │  ├─ Troubleshoot.jsx
   │  │  │  └─ Onboarding.jsx
   │  └─ assets/
   │     ├─ images/
   │     └─ icons/
   └─ README.md


---

## 📈 Development Roadmap

| Phase | Deliverables |
|-------|--------------|
| **MVP** | UI design, auth, donor-recipient dashboard, pilot testing |
| **FinGrow** | Loan engine, M-Pesa wallet, mentor module |
| **Analytics** | SDG dashboard, admin CMS, automated reports |
| **Deployment** | Onboarding, user testing, community training |
| **Scale** | Data-driven improvements, multi-county expansion |

---

## 🎯 Impact Targets (Year 1)

- **10 tonnes** of food redistributed
- **500+ households** reached with food security support
- **50+ micro-loans** issued to youth & women entrepreneurs
- **≥80%** loan repayment rate
- **≥70%** user retention rate

---

## 🌍 SDG Alignment

✅ **SDG 1** – No Poverty (Micro-loans & financial inclusion)  
✅ **SDG 2** – Zero Hunger (Food redistribution & waste reduction)  
✅ **SDG 8** – Decent Work & Economic Growth (Entrepreneurship empowerment)  
✅ **SDG 10** – Reduced Inequalities (Focus on informal settlements)  
✅ **SDG 12** – Responsible Consumption (Resource efficiency)

---

## 💡 Sustainability Model

- **Revolving Loan Fund** – Repayments reinvest into FinGrow pool
- **Corporate Partnerships** – CSR food supply agreements
- **Community Ownership** – Volunteer champions manage operations
- **Data for Good** – Impact metrics attract institutional funding
- **Scalability** – Open-source architecture for replication

---

## 🚨 Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Food donor inconsistency | MoUs with stable suppliers |
| Loan defaults | Pre-loan financial literacy training |
| Data security | End-to-end encryption & role-based access |
| Volunteer burnout | Recognition incentives & digital badges |

---

## 👨‍💼 Leadership

**Founder & Project Lead:** CPA Paul Apiyo  
*"Tech for impact, empathy for sustainability — that's Komunify."*

---

## 📬 Support & Contribution

For issues, feature requests, or contributions, please visit our GitHub repository or contact support through the [24/7 Support Center](https://komunify-the-community-empowerment.vercel.app/support).

---

**Komunify: Transforming urban compassion into sustainable opportunity.**
