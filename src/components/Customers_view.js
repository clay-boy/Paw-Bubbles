import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Nav.css'; // External CSS for styling

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [formError, setFormError] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setFormError(''); // Clear any previous errors when rating changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      setFormError("Please select a rating.");
      return;
    }
    if (!feedback.trim()) {
      setFormError("Please provide feedback.");
      return;
    }

    // Handle feedback submission logic here
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    // Show SweetAlert2 alert
    Swal.fire({
      title: "Thank you!",
      text: "Your feedback has been submitted successfully.",
      icon: "success",
      confirmButtonText: "Okay"
    }).then(() => {
      // Reset form after the alert is closed
      setRating(0);
      setFeedback('');
    });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">We Value Your Feedback!</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="rating-container">
          <p className="rating-title">Rate Us:</p>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`fa fa-star ${star <= rating ? 'filled' : ''}`}
                onClick={() => handleRating(star)}
              ></i>
            ))}
          </div>
        </div>
        {formError && <p className="form-error">{formError}</p>}
        <textarea
          className="feedback-textarea"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
