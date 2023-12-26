import React from "react";
import AboutBackground from "../Assets/about-background.jpg";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      
      <div className="about-section-text-container">
       
        <h1 className="primary-heading-about">
          Who can go for this SAP Certification?
        </h1>
        <ul className="primary-text">
        <li>SAP Professionals, Software Administrators, App Builders</li>
        <li>Developers, Analysts, IT Managers</li>
        <li>Sales Managers, Executives, and any enthusiast who is willing to learn the SAP can take up this certification.</li>
        </ul>
  
        <div className="about-buttons-container">
          <button className="secondary-button-about">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
