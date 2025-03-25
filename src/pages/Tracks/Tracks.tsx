import React, { useState } from 'react';
import './Tracks.css';
import {  } from "react-icons/fa6";
import {  } from "react-icons/fa";
import { 
  FaShieldHalved,
  FaPalette,
  FaMobileScreenButton } from "react-icons/fa6";
import {
  FaCode,
  FaCloud,
  FaMicrosoft
} from 'react-icons/fa';

import cyberSecurityImg from "../../assets/cyber-security.jpg";
import uiUxImg from "../../assets/ui-ux.jpg";
import webDevImg from "../../assets/web-dev.jpg";
import mobileDevImg from "../../assets/mobile-dev.jpg";
import cloudImg from "../../assets/cloud.jpg";
import powerPlatformImg from "../../assets/power-platform.jpg";

interface Track {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  image: string;
}

interface FormData {
  fullName: string;
  email: string;
  courseOfStudy: string;
  yearOfStudy: string;
  selectedTrack: string;
}

function TracksPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    courseOfStudy: '',
    yearOfStudy: '',
    selectedTrack: ''
  });

  const tracks: Track[] = [
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      description: 'Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities.',
      icon: <FaShieldHalved className="track-icon" />,
      image: cyberSecurityImg
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences.',
      icon: <FaPalette className="track-icon" />,
      image: uiUxImg
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop full-stack web applications.',
      icon: <FaCode className="track-icon" />,
      image: webDevImg
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Apps Development',
      description: 'Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Students will develop the skills to create user-friendly and efficient mobile applications.',
      icon: <FaMobileScreenButton className="track-icon" />,
      image: mobileDevImg
    },
    {
      id: 'cloud',
      title: 'Cloud Engineering',
      description: 'Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Students will gain experience in cloud architecture and DevOps practices.',
      icon: <FaCloud className="track-icon" />,
      image: cloudImg
    },
    {
      id: 'power-platform',
      title: 'Power Platform',
      description: 'Students who select the Power Platform track will explore the capabilities of Microsoft\'s Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Students will gain practical experience in leveraging these tools to enhance business processes.',
      icon: <FaMicrosoft className="track-icon" />,
      image: powerPlatformImg
    }
  ];

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted for ' + formData.selectedTrack);
    setFormData({
      fullName: '',
      email: '',
      courseOfStudy: '',
      yearOfStudy: '',
      selectedTrack: ''
    });
  }

  return (
    <div className="tracks-page">
      <header className="page-header">
        <h1>MUTC Tracks</h1>
        <p className="page-description">
          The Tracks Page provides an overview of the various specialized tracks offered by MUTC. 
          Choose your focus area and register below to begin your tech specialization journey.
        </p>
      </header>

      <section className="tracks-container">
        {tracks.map(function(track) {
          return (
            <div key={track.id} className="track-card">
              <div className="track-image-container">
                <img src={track.image} alt={track.title} className="track-image" />
                <div className="track-icon-container">
                  {track.icon}
                </div>
              </div>
              <div className="track-content">
                <h2 className="track-title">{track.title}</h2>
                <p className="track-description">{track.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="registration-section">
        <h2 className="section-title">Track Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="courseOfStudy">Current Course of Study</label>
            <input
              type="text"
              id="courseOfStudy"
              name="courseOfStudy"
              value={formData.courseOfStudy}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="yearOfStudy">Year of Study</label>
            <select
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5+">Fifth Year or Above</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="selectedTrack">Preferred Track</label>
            <select
              id="selectedTrack"
              name="selectedTrack"
              value={formData.selectedTrack}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Track</option>
              {tracks.map(function(track) {
                return (
                  <option key={track.id} value={track.title}>{track.title}</option>
                );
              })}
            </select>
          </div>
          
          <button type="submit" className="submit-button">Register Now</button>
        </form>
      </section>
    </div>
  );
}

export default TracksPage;