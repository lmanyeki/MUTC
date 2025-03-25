import './Events.css';
import { 
    FaCode,  
    FaCloud, 
    FaMicrosoft 
  } from 'react-icons/fa';
  
  import { 
    FaShieldHalved,
    FaPalette,
    FaMobileScreenButton
  } from "react-icons/fa6";

interface Event {
    day: string;
    title: string;
    time: string;
    location: string;
    instructor: string;
    icon: React.ReactElement;
  }
  
  function Events () {
    const events: Event[] = [
      {
        day: "Monday",
        title: "Cyber Security",
        time: "4pm - 7pm",
        location: "Computer Lab F04",
        instructor: "Webster Ifedha",
        icon: <FaShieldHalved className="event-icon" />
      },
      {
        day: "Tuesday",
        title: "UI/UX",
        time: "5pm - 8pm",
        location: "Computer Lab F04",
        instructor: "Manase Gunga",
        icon: <FaPalette className="event-icon" />
      },
      {
        day: "Wednesday",
        title: "Web Development",
        time: "6pm - 9pm",
        location: "Computer Lab F04",
        instructor: "Carolyne Githenduka",
        icon: <FaCode className="event-icon" />
      },
      {
        day: "Thursday",
        title: "Mobile Apps Development",
        time: "4pm - 7pm",
        location: "Computer Lab F04",
        instructor: "Stanley Amunze",
        icon: <FaMobileScreenButton className="event-icon" />
      },
      {
        day: "Friday",
        title: "Cloud Engineering",
        time: "3pm - 6pm",
        location: "Computer Lab F04",
        instructor: "Paul Karanja",
        icon: <FaCloud className="event-icon" />
      },
      {
        day: "Saturday",
        title: "Power Platform",
        time: "1pm - 4pm",
        location: "Computer Lab F04",
        instructor: "Evyonn Mbithe",
        icon: <FaMicrosoft className="event-icon" />
      }
    ];

  return (
    <div className="events-page">
      <header className="page-header">
        <h1>MUTC Events Schedule</h1>
        <p className="page-description">
          The Events Page serves as a comprehensive guide to the weekly schedule of MUTC. 
          From Monday through Saturday, members can expect a diverse range of learning 
          opportunities and activities.
        </p>
      </header>

      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-day">{event.day}</div>
            <div className="event-content">
              <div className="event-icon-container">
                {event.icon}
                <h2 className="event-title">{event.title}</h2>
              </div>
              <div className="event-details">
                <p><span className="detail-label">Time:</span> {event.time}</p>
                <p><span className="detail-label">Location:</span> {event.location}</p>
                <p><span className="detail-label">Instructor:</span> {event.instructor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;