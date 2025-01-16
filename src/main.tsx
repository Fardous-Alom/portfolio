import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.tsx';
import { navItems } from "@/data";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { About } from './components/About.tsx';

import { ThreeDCardDemo } from './components/3DCard.tsx';
import { Hero3 } from './components/AboutText.tsx';
import Footer from './components/Footer.tsx';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FloatingNav navItems={navItems} />
    {/* <FloatingNavDemo /> */}
    <Hero />
    <Hero3 />

    <ThreeDCardDemo />
    <Footer/>
  </StrictMode>
);
