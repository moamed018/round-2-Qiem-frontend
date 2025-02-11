import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./main/pages/Home";

import "./App.css";
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
import Payments from "./client/pages/Payments";
import Conditions from "./client/pages/Conditions";
// import Settings from "./client/pages/Settings";

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
import TermsAndConditions from "./client/components/terms_and_conditions";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/*//* Login & Logout & Register */}
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
          <Route path="payments" element={<Payments />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="settings" element={<SettingsClient />} />
          {/* From Mohamed */}
        </Route>
        {/* End Client Routes  */}


                {/*//* Company */}
                <Route path="company/" element={<CompanyLayout />}>
                    <Route path="add/" element={<AddReviewerDrawer />} />
                    <Route path="settings/" element={<SettingsCompany />} />
                </Route>

                {/*//* Reviewer */}
                <Route path="reviewer/" element={""}>
                    <Route path="settings/" element={<SettingsReviewer />} />
                </Route>

                {/*//! For Development only  */}
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
