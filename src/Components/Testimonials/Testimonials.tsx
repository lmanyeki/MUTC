import "./Testimonials.css";
import testimonials from "../../store/testimonials";
import { FaQuoteLeft} from 'react-icons/fa6';

function Testimonials() {
    return (
<section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Members Say</h2>
          <div className="divider"></div>
          <p className="section-description">
            Hear from students who've transformed their tech journey with MUTC
          </p>
        </div>

        <div className="testimonials-container">
          {testimonials.map(function(testimonial) {
            return (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image-container">
                  <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                </div>
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )

}
export default Testimonials;