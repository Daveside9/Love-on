import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/reservation.css";

function ReservationForm() {
  const [reservationType, setReservationType] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTypeChange = (e) => {
    setReservationType(e.target.value);
    setShowForm(false); // Hide form when changing reservation type
  };

  // URLs for your Google Forms
  const weddingProposalFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScYgBSQduJ-Ir6-KZqOuNahN1jZn-4hdu-Rr8jaWx42dpCG3w/viewform?embedded=true";
  const couplesNightOutFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSduHE94tDPEptGBo7lPS0lz2pnt0lq3D8d8RkPa1PO17LDttA/viewform?embedded=true000";

  const toggleFormVisibility = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  // Function to navigate back to the Home page
  const goBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="reservation-form">
      <label>
        Select Reservation Type:
        <select value={reservationType} onChange={handleTypeChange}>
          <option value="">-- Select --</option>
          <option value="Wedding proposal">Wedding proposal</option>
          <option value="Couples Night Out">Couples Night Out</option>
        </select>
      </label>

      <button onClick={toggleFormVisibility} className="show-form-btn">
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {/* Show form based on the reservation type */}
      {showForm && reservationType && (
        <div className="form-container">
          {reservationType === "Wedding proposal" && (
            <iframe
              src={weddingProposalFormUrl}
              width="300"
              height="1144"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Wedding Proposal Form"
            >
              Loading…
            </iframe>
          )}

          {reservationType === "Couples Night Out" && (
            <iframe
              src={couplesNightOutFormUrl}
              width="300"
              height="1144"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Couples Night Out Form"
            >
              Loading…
            </iframe>
          )}
        </div>
      )}

      {/* Add a button to go back to the home page */}
      <button onClick={goBackToHome} className="back-to-home-btn">
        Back to Home
      </button>
    </div>
  );
}

export default ReservationForm;
