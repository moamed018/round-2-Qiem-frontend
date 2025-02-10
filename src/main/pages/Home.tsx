import About from "../Ui/About";
import ContactUs from "../Ui/ContactUs";
import GetApp from "../Ui/GetApp";
import Hero from "../Ui/Hero";
import Partners from "../Ui/Partners";

function Home() {
    return (
        <section className="text-6xl">
            <Hero />
            <About />
            <Partners />
            <ContactUs />
            <GetApp />
        </section>
    );
}

export default Home;
