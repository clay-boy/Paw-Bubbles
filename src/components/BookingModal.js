// src/components/BookingModal.js
import React, { useState } from 'react';

function BookingModal({ service, dogSize, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        ownerName: '',
        petName: '',
        email: '',
        location: '',
        bookingDate: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingData = {
            ...formData,
            service: service.name,
            dogSize,
            price: service.pricing[dogSize],
        };
        onSubmit(bookingData);
    };

    return (
        <div className="modal show">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="ownerName"
                        placeholder="Owner's Name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="petName"
                        placeholder="Pet's Name"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
}

export default BookingModal;
