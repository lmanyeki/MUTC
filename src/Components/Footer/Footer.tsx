import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MUTC</h3>
          <p>Murang'a University Tech Club</p>
          <p>P.O. Box 75-10200</p>
          <p>Murang'a, Kenya</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/tracks"> Tracks</a>
          <a href="/contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <p>info@mutc.ac.ke</p>
          <p>+254 712 345 678</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MUTC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;