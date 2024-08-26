import React, { useState } from 'react';

function ServiceCard({ service, onBook }) {
    const [selectedSize, setSelectedSize] = useState(''); // State for selected dog size
    const [price, setPrice] = useState(null); // State for the calculated price

    const handleSizeChange = (e) => {
        const size = e.target.value;
        setSelectedSize(size);
        // Automatically fetch price based on selected size
        const price = service.pricing[size];
        setPrice(price);
    };

    const handleBookNow = () => {
        if (selectedSize) {
            onBook(service.name, selectedSize, price);
        } else {
            alert('Please select a dog size before booking.');
        }
    };

    return (
        <div className="service-card">
            <h2>{service.name}</h2>
            <div className="size-selector">
                <label>Select Dog Size:</label>
                <select value={selectedSize} onChange={handleSizeChange}>
                    <option value="" disabled>Select Size</option>
                    <option value="small">Small (up to 25 lbs)</option>
                    <option value="medium">Medium (25-50 lbs)</option>
                    <option value="large">Large (50-75 lbs)</option>
                    <option value="xxl">XXL (75+ lbs)</option>
                </select>
            </div>
            {price !== null && (
                <div className="price-display">
                    <p>Price: ${Array.isArray(price) ? `${price[0]} - ${price[1]}` : price}</p>
                </div>
            )}
            <button onClick={handleBookNow} className="book-now-btn">Book Now</button>
        </div>
    );
}

export default ServiceCard;
