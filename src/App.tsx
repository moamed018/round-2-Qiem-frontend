import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./main/pages/HomePage";

import './App.css'
import Login from "./main/pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
