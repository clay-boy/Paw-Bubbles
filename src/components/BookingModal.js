import React, { useState } from 'react';
import Swal from 'sweetalert2';
import BookingModal from './BookingModal';

function BookingContainer() {
  const [showModal, setShowModal] = useState(false);
  
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBookingSubmit = (bookingData) => {
    fetch('https://example.com/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Booking confirmed!',
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false); // Close the modal after success
        } else {
          throw new Error('Booking failed');
        }
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Book Now</button>
      {showModal && (
        <BookingModal
          service={{ name: 'Dog Walking', pricing: { small: 20, medium: 30, large: 40 } }}
          dogSize="medium"
          onClose={handleModalClose}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}

export default BookingContainer;
