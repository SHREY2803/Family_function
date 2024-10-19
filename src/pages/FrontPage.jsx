import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import PhotoSlider from "../components/PhotoSlider/PhotoSlider";
import VideoImg from "../components/VideoGallery/VideoImg";
import Footer from "../components/Footer.jsx/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function FrontPage() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <PhotoSlider />
        <VideoImg />
        <Footer />
      </div>
    </div>
  );
}

export default FrontPage;
