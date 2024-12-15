import React from "react";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
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
