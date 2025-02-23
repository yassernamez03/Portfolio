import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQGtw2T-25tpiA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731537069691?e=1746057600&v=beta&t=Z0mylepOCa4RgT1QyfPmucHCS5RTquhZnYWci88XV18" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yassernamez03" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yasser-namez-0898a322b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Yasser Namez</h1>
          <p>Cybersecurity Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yassernamez03" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yasser-namez-0898a322b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;