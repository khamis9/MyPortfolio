import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
