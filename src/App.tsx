import "./App.css";
import ClientHomePage from "./client/pages/HomePage";

import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";

function App() {
  return (
    <section>
      <Header />
      <main className="flex">
        <ClientHomePage/>

        <Sidebar />
      </main>
    </section>
  );
}

export default App;
