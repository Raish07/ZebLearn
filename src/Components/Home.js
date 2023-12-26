import React from "react";
import BannerBackground from "../Assets/home-banner-background.jpg";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          No. 1 SAP Training Provider in India
          </h1>
          <p className="primary-text">
          Our SAP Certification Training Classes will enable you to clear SAP certification exams. Master SAP certification skills in this online SAP course.
          </p>
          <button className="secondary-button">
            Discover More <FiArrowRight />{" "}
          </button>
        </div>
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
