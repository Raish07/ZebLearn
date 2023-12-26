import React from "react";
import pic1 from "../Assets/feature-pic1.jpg";
// import pic3 from "../Assets/feature-pic-3.jpg";
// import pic2 from "../Assets/feature-pic-2.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: pic1,
      title: "SAP Power User Program",
      text: "Get the latest version of SAP Power User Program Business Suite Software,and get the unmatched speed and access to real-time data.",
    },
    {
      image: pic1,
      title: "SAP Exam Assistance",
      text: "Get assistance for SAP exam from experts for scheduling, registration, and clearing the certificate requirement",
    },
    {
      image: pic1,
      title: "Ranked Amongst Top",
      text: "ZebLearn Certified SAP Power User Program is ranked amongst the top 3 courses in the industry by BestCourseNews.com",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">Key Features</h1>
      
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <  img src={data.image} className = 'feature-img' alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
