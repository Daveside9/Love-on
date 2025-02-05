import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/tour.css"; // Your custom styles

function Tour() {
  return (
    <div className="tour-container">
      <h1>Welcome to the Valentine's Day gift packs!</h1>

      <section className="tour-content" style={{ maxWidth: '640px', margin: '0 auto' }}>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSfWA9C17DjdeYqppQuYgivL3B3R0eFdHgsdXFdPLb8n6hH5pA/viewform?embedded=true"
    width="100%" 
    height="1000"  // Adjust the height as needed based on your form's content
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    title="Valentine's Day Gift Packs Form"
  >
    Loading…
  </iframe>
</section>

      {/* Home button to navigate back to the homepage */}
      <div className="home-button-container">
        <Link to="/" className="home-button">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Tour;
