import './Leadership.css';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaClipboardList,
  FaCode,
  FaCloud,
  FaMicrosoft
} from 'react-icons/fa';

import { 
  LiaUniversitySolid, 
  LiaUserFriendsSolid,
  LiaShieldAltSolid,
} from "react-icons/lia";
import { 
  FaUserTie,
  FaMoneyBillWave,
  FaPalette,
  FaMobileScreenButton
} from "react-icons/fa6";

import patron from  "../../assets/patron.jpg";
import chairperson from "../../assets/chairperson.jpg";
import vicechair from "../../assets/vicechair.jpg";
import secretary from "../../assets/secretary.jpg";
import treasurer from  "../../assets/treasurer.jpg";
import cybersecurity from "../../assets/cybersecurity.jpg";
import uiux from "../../assets/uiux.jpg";
import webdev from "../../assets/webdev.jpg";
import mobiledev from  "../../assets/mobiledev.jpg";
import cloudeng from "../../assets/cloudeng.jpg";
import powerp from "../../assets/powerp.jpg";

interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  icon: React.ReactElement;
}

function Leadership() {
  const leaders: Leader[] = [
    {
      id: 'patron',
      name: 'Dr. John Ndia',
      role: 'Patron',
      bio: 'With over 15 years in academia and technology leadership, Dr. Ndia provides strategic guidance to MUTC. He specializes in educational technology and innovation, helping bridge the gap between academia and industry.',
      image: patron,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      },
      icon: <LiaUniversitySolid className="role-icon" />
    },
    {
      id: 'chairperson',
      name: 'Victory Njeri',
      role: 'Chairperson',
      bio: 'A final-year Computer Science student with exceptional leadership skills. Victory oversees all club operations and represents MUTC in university forums. She is passionate about women in tech initiatives.',
      image: chairperson,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaUserTie className="role-icon" />
    },
    {
      id: 'vice-chair',
      name: 'Allan Muhari',
      role: 'Vice Chairperson',
      bio: 'Software engineering student with a knack for team management. Allan coordinates between different departments and ensures smooth execution of all club activities and events.',
      image: vicechair,
      socials: {
        linkedin: '#',
        twitter: '#'
      },
      icon: <LiaUserFriendsSolid className="role-icon" />
    },
    {
      id: 'secretary',
      name: 'Bridget Gitonga',
      role: 'Secretary',
      bio: 'Organized and detail-oriented, Bridget handles all club documentation, meeting minutes, and member communications. She maintains the club\'s institutional memory.',
      image: secretary,
      socials: {
        linkedin: '#',
        twitter: '#'
      },
      icon: <FaClipboardList className="role-icon" />
    },
    {
      id: 'treasurer',
      name: 'Ruth Mutisya',
      role: 'Treasurer',
      bio: 'Finance student who manages all club funds and budgets. Ruth ensures financial accountability and transparency in all MUTC operations and events.',
      image: treasurer,
      socials: {
        linkedin: '#',
        instagram: '#'
      },
      icon: <FaMoneyBillWave className="role-icon" />
    },
    {
      id: 'cyber-lead',
      name: 'Webster Ifedha',
      role: 'Cyber Security Lead',
      bio: 'Certified ethical hacker who leads our cybersecurity initiatives. Webster organizes workshops, CTF competitions, and keeps members updated on the latest security trends.',
      image: cybersecurity,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <LiaShieldAltSolid className="role-icon" />
    },
    {
      id: 'uiux-lead',
      name: 'Manase Gunga',
      role: 'UI/UX Lead',
      bio: 'Product designer passionate about human-centered design. Manase leads design thinking workshops and helps members build beautiful, functional interfaces.',
      image: uiux,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaPalette className="role-icon" />
    },
    {
      id: 'web-lead',
      name: 'Carolyne Githenduka',
      role: 'Web Development Lead',
      bio: 'Full-stack developer specializing in modern JavaScript frameworks. Carolyne coordinates web development projects and hackathons for the club.',
      image: webdev,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaCode className="role-icon" />
    },
    {
      id: 'mobile-lead',
      name: 'Stanley Amunze',
      role: 'Mobile Apps Lead',
      bio: 'Cross-platform mobile developer fluent in Flutter and React Native. Stanley leads mobile development projects and helps members publish their first apps.',
      image: mobiledev,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaMobileScreenButton className="role-icon" />
    },
    {
      id: 'cloud-lead',
      name: 'Paul Karanja',
      role: 'Cloud Engineering Lead',
      bio: 'AWS Certified Solutions Architect who demystifies cloud computing. Paul organizes cloud challenges and helps members deploy their projects to the cloud.',
      image: cloudeng,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaCloud className="role-icon" />
    },
    {
      id: 'power-lead',
      name: 'Evyonn Mbithe',
      role: 'Power Platform Lead',
      bio: 'Microsoft-certified Power Platform expert who leads our low-code initiatives. Evyonn helps members automate processes and build business applications.',
      image: powerp,
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#'
      },
      icon: <FaMicrosoft className="role-icon" />
    }
  ];

  return (
    <div className="leadership-page">
      <header className="page-header">
        <h1>MUTC Leadership</h1>
        <p className="page-description">
          Meet the dedicated team behind Murang'a University Tech Club. Our leaders bring diverse expertise
          and passion to guide the club's vision and operations.
        </p>
      </header>

      <div className="leadership-container">
        {leaders.map(function(leader) {
          return (
            <div key={leader.id} className="leader-card">
              <div className="leader-image-container">
                <img src={leader.image} alt={leader.name} className="leader-image" />
                <div className="role-icon-container">
                  {leader.icon}
                </div>
              </div>
              <div className="leader-content">
                <h2 className="leader-name">{leader.name}</h2>
                <h3 className="leader-role">{leader.role}</h3>
                <p className="leader-bio">{leader.bio}</p>
                <div className="social-links">
                  {leader.socials.linkedin && (
                    <a href={leader.socials.linkedin} aria-label="LinkedIn">
                      <FaLinkedin className="social-icon" />
                    </a>
                  )}
                  {leader.socials.twitter && (
                    <a href={leader.socials.twitter} aria-label="Twitter">
                      <FaTwitter className="social-icon" />
                    </a>
                  )}
                  {leader.socials.facebook && (
                    <a href={leader.socials.facebook} aria-label="Facebook">
                      <FaFacebook className="social-icon" />
                    </a>
                  )}
                  {leader.socials.instagram && (
                    <a href={leader.socials.instagram} aria-label="Instagram">
                      <FaInstagram className="social-icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Leadership;