import Header from "../components/Header";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <div className="bg-white dark:bg-background h-fit text-primary font-sans">
      <Header/>
      <Hero/>
    </div>
  )
}