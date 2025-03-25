import { Link } from 'react-router-dom';
import './Nav.css';
import logoImage from "../../assets/icon.png";

function Nav() {
  return (
    <nav className="simple-navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          <img src={logoImage} alt="MUTC Logo" className="logo-image" />
          <span className="logo-text">MUTC</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tracks" className="nav-link">Tracks</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/leadership" className="nav-link">Leadership</Link>
        </div>
        
        <button className="join-button">Join Now</button>
      </div>
    </nav>
  );
}

export default Nav;