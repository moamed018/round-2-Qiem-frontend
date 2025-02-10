import About from "../Ui/About";
import Hero from "../Ui/Hero";
import Partners from "../Ui/Partners";

function Home() {
    return (
        <section className="text-6xl">
            <Hero />
            <About />
            <Partners />
        </section>
    );
}

export default Home;
