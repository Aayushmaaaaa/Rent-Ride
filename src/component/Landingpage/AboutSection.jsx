import React from "react";
import carBlack from "./Images/p11.png";
import carYellow from "./Images/p12.png";


const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-left">
        <h2>
          Ride Your <br />
          <span>Dreame car With drifty</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Purus sociis diam sit
          adipiscing feugiat commodo est eget. Tortor nulla diam pellentesque
          lorem fringilla pulvinar. Suspendisse lacus vulputate elementum id
          dolor nulla. Diam in augue sed habitasse erat varius mattis
          consectetur. Faucibus pulvinar vestibulum elit donec nullam ultrices
          nisl cursus. Arcu tellus non lectus eget facilisi quisque. Justo non
          quam pulvinar risus mauris nisi bibendum interdum egestas.
        </p>
      </div>
      <div className="about-right">
        <div className="about-images">
          <img src={carBlack} alt="Black car" className="top-img" />
          <img src={carYellow} alt="Yellow car" className="bottom-img" />
        </div>
        <div className="contract-block">
          <div className="contract-text">
            <h3>Contracts ready to sign</h3>
            <p>
              Easily edit and share pre-populated contracts that build secure,
              fair relationships between you and your clients.
            </p>
            <a href="#" className="contract-link">
              Take a Closer Look &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
