import HomeCards from "./HomeCards";
import "../style/HomePage.css";

function NotEmptyHomePage() {
  return (
    <div className="flex flex-col gap-5 py-10">
      <h1 id="home-page-header">الرئيسية - جميع العقارات</h1>
      <HomeCards />
    </div>
  );
}

export default NotEmptyHomePage;
