import './Home.css';
import About from "../../Components/About/About";
import Testimonials from '../../Components/Testimonials/Testimonials';
import heroimg from "../../assets/hero-image.jpg";

function Home() {
  return (
    <div className="home-page">
      <section 
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimg})`,
          backgroundSize: `cover`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Empowering Future Tech Leaders</h1>
            <p className="hero-text">
              Join Murang'a University Tech Club and unlock your potential in the 
              ever-evolving world of technology
            </p>
            <div className="hero-buttons">
              <button className="primary-button">Join Now</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Testimonials />
    </div>
  );
}

export default Home;