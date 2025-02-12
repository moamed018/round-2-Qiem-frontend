import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./main/pages/Home";
import Login from "./main/pages/Login";
import RegisterHome from "./main/pages/RegisterHome";
import Clients from "./main/pages/Clients";
import RegisterOutlet from "./main/pages/RegisterOutlet";
import ClientsOutlet from "./main/pages/ClientsOutlet";
import Client from "./main/pages/Client";
import ClientLayout from "./client/ClientLayout";
import Offers from "./client/pages/Offers";
import Offer from "./client/pages/Offer";
import CreateProperty from "./client/pages/CreateProperty";
import Requests from "./client/pages/RequestsPage";
import PaymentsPage from "./client/pages/PaymentsPage";
import ClientCompany from "./main/pages/ClientCompany";
import Reviewer from "./main/pages/Reviewer";
import Company from "./main/pages/Company";
import ForgotPassword from "./main/pages/ForgotPassword";
import SettingsPage from "./shared/SettingsPage";
import AddReviewerDrawer from "./company/pages/AddReviewerDrawer";
import CompanyLayout from "./company/CompanyLayout";
import SettingsReviewer from "./reviewer/pages/SettingsReviewer";
import SettingsClient from "./client/pages/SettingsClient";
import SettingsCompany from "./company/pages/SettingsCompany";
import ClientHomePage from "./client/pages/ClientHomePage";
import TermsAndConditions from "./client/components/TermConditions";
import CompanyHomePage from "./company/pages/CompanyHomePage";
import PropertyPage from "./company/pages/PropertyPage";
import ProjectsPage from "./company/pages/ProjectsPage";
import ProjectPage from "./company/pages/ProjectPage";
import Dashboards from "./shared/Dashboards";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Login & Registration */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register/" element={<RegisterOutlet />}>
          <Route path="" element={<RegisterHome />} />
          <Route path="clients/" element={<ClientsOutlet />}>
            <Route path="" element={<Clients />} />
            <Route path="client/" element={<Client />} />
            <Route path="company/" element={<ClientCompany />} />
          </Route>
          <Route path="reviewer/" element={<Reviewer />} />
          <Route path="company/" element={<Company />} />
        </Route>

        {/* Client Routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="home" element={<ClientHomePage />} />
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:id" element={<Offer />} />
          <Route path="add-property" element={<CreateProperty />} />
          <Route path="requests" element={<Requests />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="settings" element={<SettingsClient />} />
        </Route>

        {/* Company Routes */}
        <Route path="company/" element={<CompanyLayout />}>
          <Route path="" element={<CompanyHomePage />} />
          <Route path="properties/" element={<CompanyHomePage />} />
          <Route path="properties/:id" element={<PropertyPage />} />
          <Route path="add/" element={<AddReviewerDrawer />} />
          <Route path="projects/" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="settings/" element={<SettingsCompany />} />
        </Route>

        {/* Reviewer Routes */}
        <Route path="reviewer/" element={""}>
          <Route path="settings/" element={<SettingsReviewer />} />
        </Route>

        {/* Development Routes */}
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dashboard" element={<Dashboards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
