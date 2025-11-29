import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import PageWrapper from "../components/layout/PageWrapper";

// Import pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import SurplusListings from "../pages/FoodAid/SurplusListings";
import LoanApplication from "../pages/FinGrow/LoanApplication";
// ... all other imports ...

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/food/listings" element={<SurplusListings />} />
          {/* continue adding all pages … */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
