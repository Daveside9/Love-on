import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <nav>
        <Link to="/reservation" className="reservation-btn">Reservations</Link>
      </nav>

      <div className="text-container">
        <h1>Living Spring Loveworld</h1>
        <p>Celebrate love this Valentine’s Day with a serene, romantic picnic experience. Book your private space for an unforgettable moment together in a peaceful atmosphere designed just for lovers</p>
        <Link to="/tour">
          <button className="tour-btn">Take a Tour</button>
        </Link>
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
