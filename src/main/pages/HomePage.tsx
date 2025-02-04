import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import LinkButton from "../Ui/LinkButton";

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
                    <LinkButton to="/client/offers" className="text-5xl" fullRounded>
                        Client-Offers
                    </LinkButton>
                </div>
            </main>
        </section>
    );
}

export default HomePage;
