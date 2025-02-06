import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";

import LinkButton from "../Ui/LinkButton";
import Logout from "./Logout";

function HomePage() {
    return (
        <section className="text-6xl">
            <Header />
            <main className="flex ">
                <Sidebar />
                <div className="flex flex-col grow-2 items-center justify-center h-screen space-y-5">
                    <LinkButton to="/login" className="text-5xl" fullRounded>
                        Login
                    </LinkButton>
                    <LinkButton to="/register" className="text-5xl" fullRounded>
                        Register
                    </LinkButton>

                    <LinkButton to="/settings" className="text-5xl" fullRounded>
                        Settings Page for All
                    </LinkButton>

                    <Logout />
                </div>
            </main>
        </section>
    );
}

export default HomePage;
