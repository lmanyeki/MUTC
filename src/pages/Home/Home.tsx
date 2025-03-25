import './Home.css';
import About from "../../Components/About/About";
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Testimonials from '../../Components/Testimonials/Testimonials';


function Home() {
  
  return (
    <div className="home-page">
      <Nav />
      <section className="hero-section">
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
      <Footer />
      

      
    </div>
  );
}

export default Home;