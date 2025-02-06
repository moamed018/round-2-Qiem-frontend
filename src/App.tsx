import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./main/pages/HomePage";

import "./App.css";
import Login from "./main/pages/Login";
import RegisterHome from "./main/pages/RegisterHome";
import Clients from "./main/pages/Clients";
import RegisterOutlet from "./main/pages/RegisterOutlet";
import ClientsOutlet from "./main/pages/ClientsOutlet";
import Client from "./main/pages/Client";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
