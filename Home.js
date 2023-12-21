// components/Home.js

import React from "react";
import HeroSection from "./Herosection";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
