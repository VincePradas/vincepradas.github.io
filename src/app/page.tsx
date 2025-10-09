import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Projects";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

import "@/styles/scrollBar.css";

export default function App() {
  return (
    <div className="bg-white dark:bg-background h-fit text-primary overflow-hidden font-sans">
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
