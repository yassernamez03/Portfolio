import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "PostgreSQL",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Data Analysis",
    "Statistics",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Cybersecurity",
    "CI/CD",
    "DevOps",
];

const labelsThird = [
    "AI Models",
    "OpenAI",
    "TensorFlow",
    "Keras",
    "Hugging Face",
    "Streamlit",
    "Data Visualization",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Machine Learning</h3>
                    <p>I specialize in extracting insights from data using Python and machine learning techniques. I have experience in building predictive models and data analysis pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cybersecurity</h3>
                    <p>I focus on implementing security best practices and automation for deployment processes. My goal is to ensure robust and secure application environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>AI & GenAI Solutions</h3>
                    <p>I leverage the latest advancements in AI to create intelligent applications that enhance user experiences and support decision-making processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
