import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            CareCircle is a dedicated platform designed to cater to the unique needs of caregivers, recognizing their efforts and providing them with the support they deserve. We aim to be a reliable companion for those caring for loved ones by offering essential resources such as therapy sessions, mental health support, and paramedical assistance. Our mission is to empower caregivers, help them navigate their challenges, and ensure they have access to the tools and services needed to prioritize both their well-being and the well-being of those they care for.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
