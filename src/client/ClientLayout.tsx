import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function ClientLayout() {
    return (
        <div className="">
            <Header />
            <div className="flex lg:flex-row flex-col">
                <Sidebar
                    prenetPage="client"
                    showTeam={false}
                    showProjects={false}
                    showBalance={false}
                />
                <div className="flex-1 p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ClientLayout;
