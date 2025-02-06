import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./main/pages/HomePage";

import "./App.css";
import Login from "./main/pages/Login";
import RegisterHome from "./main/pages/RegisterHome";
import Clients from "./main/pages/Clients";
import RegisterOutlet from "./main/pages/RegisterOutlet";
import ClientsOutlet from "./main/pages/ClientsOutlet";
import Client from "./main/pages/Client";
<<<<<<< HEAD
=======

import ClientLayout from "./client/ClientLayout";
import Offers from "./client/pages/Offers";
import Offer from "./client/pages/Offer";
import CreateProperty from "./client/pages/CreateProperty";
import Requests from "./client/pages/Requests";
import Request from "./client/pages/Request";
import Payments from "./client/pages/Payments";
import Conditions from "./client/pages/Conditions";
import Settings from "./client/pages/Settings";

import ClientCompany from "./main/pages/ClientCompany";
import Reviewer from "./main/pages/Reviewer";
import Company from "./main/pages/Company";
import ForgotPassword from "./main/pages/ForgotPassword";
import SettingsPage from "./shared/SettingsPage";
>>>>>>> f8a1e6a3b8c820033d185e26e1d048af2edef77c

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register/" element={<RegisterOutlet />}>
          <Route path="" element={<RegisterHome />} />
          <Route path="clients/" element={<ClientsOutlet />}>
            <Route path="" element={<Clients />} />
            <Route path="client/" element={<Client />} />
          </Route>
        </Route>
<<<<<<< HEAD
=======

        {/* Client Routes */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:id" element={<Offer />} />
          <Route path="add-property" element={<CreateProperty />} />
          <Route path="requests" element={<Requests />} />
          <Route path="requests/:id" element={<Request />} />
          <Route path="payments" element={<Payments />} />
          <Route path="terms-conditions" element={<Conditions />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/reviewer" element={<Reviewer />} />
        <Route path="/company" element={<Company />} />
        <Route path="/settings" element={<SettingsPage />} />
>>>>>>> f8a1e6a3b8c820033d185e26e1d048af2edef77c
      </Routes>
    </BrowserRouter>
  );
}

export default App;
