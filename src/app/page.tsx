import Header from "../components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
export default function App() {
  return (
    <div className="bg-white dark:bg-background h-fit text-primary font-sans">
      <Header/>
      <div className="snap-y snap-mandatory h-screen overflow-y-auto no-scrollbar">
        <Hero/>
        <About/>
      </div>
    </div>
  )
}