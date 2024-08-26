// BookingForm.js

import React, { useState } from 'react';

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
      console.log('Booking added:', data);
      alert('Booking confirmed!');
      onClose();  
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleBooking}>
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
      {/* Assume price is calculated based on size and service */}
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
