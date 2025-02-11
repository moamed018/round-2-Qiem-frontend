import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function CompanyLayout() {
    return (
        <div className="">
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default CompanyLayout;
