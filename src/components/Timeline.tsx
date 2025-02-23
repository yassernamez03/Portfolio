import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Apr 2024 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist (Internship)</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre Hospitalier Universitaire Mohammed VI (Remote)</h4>
            <p>
              Developed a machine learning app using CNNs to detect diabetic retinopathy from retinal images. 
              Implemented with Python, TensorFlow, and Flask, integrating image preprocessing and a user-friendly interface.
              Collaborated with healthcare professionals to understand medical requirements and improve app accuracy and usability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2023 - Jun 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Intelligence Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">AgilOrg</h4>
            <p>
              Collaborated with developers to modify existing programs or develop new ones according to business needs.
              Maintained up-to-date knowledge of ERP technologies, software development tools, and programming languages.
              Developed new software solutions to meet specific business requirements.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Sept 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">SYNTEC Inc. (Remote)</h4>
            <p>
              Developed and maintained e-commerce web applications using HTML, CSS, and JavaScript.
              Collaborated with cross-functional teams, including marketing and product development, to understand business requirements 
              and integrate them into the design and functionality of web applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
