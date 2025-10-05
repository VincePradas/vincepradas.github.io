import Header from "../components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Projects";
import '@/styles/scrollBar.css'
export default function App() {
  return (
    <div className="bg-white dark:bg-background h-fit text-primary overflow-hidden font-sans">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  )
}