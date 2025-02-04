import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./main/pages/HomePage";

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
        <Route path="/client" element={<ClientLayout />}>
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:id" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
