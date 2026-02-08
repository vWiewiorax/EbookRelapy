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
  <div className="pointer-events-none absolute inset-0 -z-10
    bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_55%),
        radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.08),transparent_60%),
        linear-gradient(to_bottom,#ffffff,#faf7f7)]
  " />

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
