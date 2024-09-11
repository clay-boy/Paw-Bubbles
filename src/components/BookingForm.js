import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './BookingForm.css'; // Import the CSS file for styling

function BookingForm({ serviceId, onClose }) {
  const [ownerName, setOwnerName] = useState('');
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!ownerName || !petName || !email || !location || !date || !size) {
      let missingFields = [];
      if (!ownerName) missingFields.push('Owner Name');
      if (!petName) missingFields.push('Pet Name');
      if (!email) missingFields.push('Email');
      if (!location) missingFields.push('Location');
      if (!date) missingFields.push('Date');
      if (!size) missingFields.push('Dog Size');

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Please fill out the following fields: ${missingFields.join(', ')}`,
      });
      return;
    }

    const newBooking = {
      serviceId,
      ownerName,
      petName,
      email,
      location,
      date,
      size,
      price
    };

    fetch('https://dog-server-gray.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBooking)
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your booking has been confirmed!',
        showConfirmButton: false,
        timer: 1500
      });
      onClose(); 
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong with the booking!',
      });
    });
  };

  return (
    <form onSubmit={handleBooking} className="booking-form">
      <h2>Book Your Service</h2>
      <input type="text" placeholder="Owner Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
      <input type="text" placeholder="Pet Name" value={petName} onChange={(e) => setPetName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Select Dog Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xxl">XXL</option>
      </select>
      <button type="submit" className="submit-btn">Book Now</button>
    </form>
  );
}

export default BookingForm;
