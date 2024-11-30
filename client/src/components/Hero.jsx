import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Care Circle <br />
          Because Caregivers Deserve Care Too
        </h1>
        <p>
        CareCircle is a support platform designed to uplift caregivers facing the challenges of caretaker syndrome. From booking therapy sessions to accessing paramedical support and healthcare resources, CareCircle ensures that caregivers receive the help they need while providing care to their loved ones
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
