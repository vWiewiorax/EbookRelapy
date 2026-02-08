"use client"
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import Benefits from "@/app/components/sections/Benefits";
import Testimonials from "@/app/components/sections/Testimonials";
import Pricing from "@/app/components/sections/Pricing";
import { useState } from "react";

const Index = () => {
const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden">
  {/* Global background */}
  
  {!isFullscreen && <Navbar />}

  <main>
    <Hero isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
    <Benefits />
    <Testimonials />
    <Pricing />
  </main>

  <Footer />
</div>

  );
};

export default Index;
