import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <section className="content container-1680">
        <Hero />
        <AboutUs />
        <HomeCircles />
        <Testimonials/>
        <Contact />
      </section>
    </>
  );
};

export default Home;
