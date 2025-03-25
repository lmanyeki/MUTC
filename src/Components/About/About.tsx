import "./About.css";

import missionImage from "../../assets/mission-image.jpg";
import valuesImage from "../../assets/values-image.jpg";
import activitiesImage from "../../assets/activities-image.jpg";
import networkImage from "../../assets/network-image.jpg";

import { FaCode} from 'react-icons/fa';
import {
    FaLightbulb,
    FaUsers,
    FaHandshake
   } from "react-icons/fa6";

   function Testimonials() {
    return (
<section className="about-section">
        <div className="section-header">
          <h2>About MUTC</h2>
          <div className="divider"></div>
          <p className="section-description">
            Fostering innovation and technical excellence since 2018
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-image-container">
              <img src={missionImage} alt="Students collaborating" className="about-image" />
            </div>
            <div className="about-icon">
              <FaLightbulb />
            </div>
            <h3>Our Mission</h3>
            <p>
              To create a vibrant tech community that nurtures talent through 
              hands-on learning, collaboration, and exposure to real-world 
              technologies.
            </p>
          </div>

          <div className="about-card">
            <div className="about-image-container">
              <img src={valuesImage} alt="Diverse team working together" className="about-image" />
            </div>
            <div className="about-icon">
              <FaUsers />
            </div>
            <h3>Our Values</h3>
            <p>
              Innovation, Inclusivity, Collaboration, and Continuous Learning. 
              We believe everyone has potential to excel in technology.
            </p>
          </div>

          <div className="about-card">
            <div className="about-image-container">
              <img src={activitiesImage} alt="Coding workshop" className="about-image" />
            </div>
            <div className="about-icon">
              <FaCode />
            </div>
            <h3>What We Do</h3>
            <p>
              Weekly workshops, hackathons, tech talks, and projects that cover 
              cutting-edge technologies from web development to AI and beyond.
            </p>
          </div>

          <div className="about-card">
            <div className="about-image-container">
              <img src={networkImage} alt="Networking event" className="about-image" />
            </div>
            <div className="about-icon">
              <FaHandshake />
            </div>
            <h3>Our Network</h3>
            <p>
              Partnerships with industry leaders and alumni network that provide 
              mentorship and career opportunities for our members.
            </p>
          </div>
        </div>
      </section>
     );
}
    
export default Testimonials;