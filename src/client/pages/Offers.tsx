import { Outlet } from "react-router-dom";
import Cards from "../components/OfferCards";
import "../style/HomePage.css";

function Offers() {
  return (
    <div dir="rtl" className="flex flex-col gap-10 w-full px-5 py-10">
      <h1 className="offers-header">العروض المقدمة لك</h1>
      <Cards />
      <Outlet />
    </div>
  );
}

export default Offers;
