import React from "react";
import mock01 from '../assets/images/mock01.png'; // Replace with your own images
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/yassernamez03/Diabetic-Retinopathy-Detection-App" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/yassernamez03/Diabetic-Retinopathy-Detection-App" target="_blank" rel="noreferrer">
                    <h2>Diabetic Retinopathy Detection</h2>
                </a>
                <p>Developed a machine learning application using CNNs to detect diabetic retinopathy from retinal images. Implemented with Python, TensorFlow, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://github.com/YasserNamez/business-intelligence-solution" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/YasserNamez/business-intelligence-solution" target="_blank" rel="noreferrer">
                    <h2>Business Intelligence Solution</h2>
                </a>
                <p>Collaborated on a business intelligence project to develop software solutions that meet specific business requirements, enhancing data-driven decision-making.</p>
            </div>
            <div className="project">
                <a href="https://github.com/YasserNamez/e-commerce-website" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/YasserNamez/e-commerce-website" target="_blank" rel="noreferrer">
                    <h2>E-commerce Website</h2>
                </a>
                <p>Developed and maintained an e-commerce web application using HTML, CSS, and JavaScript, collaborating with cross-functional teams to meet business needs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/YasserNamez/finance-chatbot" target="_blank" rel="noreferrer">
                    <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/YasserNamez/finance-chatbot" target="_blank" rel="noreferrer">
                    <h2>Finance Chatbot</h2>
                </a>
                <p>Created a finance chatbot using natural language processing to provide users with personalized financial advice and information.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yassernamez03/Career-Consultant-Voice-Chatbot-" target="_blank" rel="noreferrer">
                    <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/yassernamez03/Career-Consultant-Voice-Chatbot-" target="_blank" rel="noreferrer">
                    <h2>Tari9i: AI Career Counseling Chatbot</h2>
                </a>
                <p>Developed an AI-powered career counseling chatbot using LangChain and Hugging Face's text generation model to guide users in their career paths.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
