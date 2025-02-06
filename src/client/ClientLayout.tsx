import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function ClientLayout() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-grow p-5">
          <Outlet />
          
        </div>
      </div>
    </div>
  );
}

export default ClientLayout;
