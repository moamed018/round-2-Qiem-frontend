import "./App.css";
import TermsAndConditions from "./client/components/terms_and_conditions";
import ClientHomePage from "./client/pages/HomePage";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <section>
      <Header />
      <main className="flex flex-row-reverse">
        <ClientHomePage />
        <Sidebar />
      </main>
      <Routes>
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
    </section>
    </Router>
    
  );
}

export default App;
