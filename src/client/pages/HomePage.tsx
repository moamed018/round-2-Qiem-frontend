
import Cards from "../components/Cards";
import "../style/HomePage.css";

function ClientHomePage() {
  return (
    <div  dir="rtl" className="flex flex-col gap-10 w-full px-5 py-10 ">
      <h1  className="offers-header">العروض المقدمة لك </h1>
      <Cards/>
    </div>
  );
}

export default ClientHomePage;
