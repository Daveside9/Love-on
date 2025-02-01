import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import StarRating from './StarRating'; // Import the StarRating component

function Home() {
  return (
    <div className="home-container">
      <nav>
        <Link to="/reservation" className="reservation-btn">Reservations</Link>
      </nav>

      <div className="text-container">
        <h1>Living Spring Loveworld</h1>
        <p></p>
        <Link to="/tour">
          <button className="tour-btn">Take a Tour</button>
        </Link>
      </div>

      <div className="romantic-story">
        <p></p>
      </div>

      {/* Star Rating Section */}
      <div className="star-rating-container">
        <h2>Your Feedback Matters!</h2>
        <StarRating /> {/* Display Star Rating Component */}
      </div>

      <div className="contact-us">
        <button className="contact-btn">
          <a href="tel:08108546368" target="_blank" rel="noopener noreferrer">
            Contact Us on WhatsApp
          </a>
        </button>
        <button className="contact-btn">
          <a href="mailto:daveside00468@gmail.com" target="_blank" rel="noopener noreferrer">
            Contact Us via Email
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
