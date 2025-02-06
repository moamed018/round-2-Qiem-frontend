import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./main/pages/HomePage";

import "./App.css";
import Login from "./main/pages/Login";
import RegisterHome from "./main/pages/RegisterHome";
import Clients from "./main/pages/Clients";
import RegisterOutlet from "./main/pages/RegisterOutlet";
import ClientsOutlet from "./main/pages/ClientsOutlet";
import Client from "./main/pages/Client";
import ClientCompany from "./main/pages/ClientCompany";
import Reviewer from "./main/pages/Reviewer";
import Company from "./main/pages/Company";
import ForgotPassword from "./main/pages/ForgotPassword";
import SettingsPage from "./shared/SettingsPage";
import SettingsReviewer from "./reviewer/pages/SettingsReviewer";
import SettingsClient from "./client/pages/SettingsClient";
import SettingsCompany from "./company/pages/SettingsCompany";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />

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

                {/*//* Reviewer */}
                <Route path="reviewer/" element={""}>
                    <Route path="settings/" element={<SettingsReviewer />} />
                </Route>

                {/*//* Client */}
                <Route path="client/" element={""}>
                    <Route path="settings/" element={<SettingsClient />} />
                </Route>

                {/*//* Company */}
                <Route path="company/" element={""}>
                    <Route path="settings/" element={<SettingsCompany />} />
                </Route>

                {/*//! For Development only  */}
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
