import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function DrawerLayout() {
    return (
        <div className="">
            <Header />
            <div className="flex lg:flex-row flex-col">
                <Sidebar
                    prenetPage="drawer"
                    showTeam={false}
                    showProjects={false}
                    showAddProperty={false}
                    showOffers={false}
                    showRequests={false}
                    showPayments={false}
                />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DrawerLayout;
