import React from "react";
import '../assets/styles/Education.scss';

const Education = () => {
  const educationData = [
    {
      institution: "ENSET Mohammedia",
      program: "Cybersecurity and Numerical Confidence Engineering (CCN)",
      status: "Currently Enrolled",
      graduation: "Expected Graduation: June 2027",
    },
    {
      institution: "École supérieure de technologie Meknes",
      program: "Bachelor's Degree in Artificial Intelligence and Data Science",
      status: "Graduated",
      graduation: "June 2024",
    },
    {
      institution: "École supérieure de technologie Essaouira",
      program: "Diploma in Business Intelligence and Data Science",
      status: "Graduated",
      graduation: "June 2022",
    },
  ];

  return (
    <div className="education-container" id="education">
      <h1 className="education-title">Education</h1>
      {educationData.map((edu, index) => (
        <div className="education-item" key={index}>
          <h2 className="institution-name">{edu.institution}</h2>
          <p className="program-name">{edu.program}</p>
          <p className="graduation-status">
            {edu.status} - {edu.graduation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;