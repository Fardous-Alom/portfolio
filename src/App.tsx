import { navItems } from "@/data";
import { FloatingNav } from "./components/FloatingNavbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Project from "./components/Project.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
