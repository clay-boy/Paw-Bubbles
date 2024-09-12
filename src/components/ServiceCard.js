import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

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
            // SweetAlert confirmation
            Swal.fire({
                icon: 'success',
                title: 'Thanks!',
            
                text: `You've Selected ${service.name} for a ${selectedSize} dog at $${price}. 
                        Proceed to booking form`,
                showConfirmButton: true,
            });
            onBook(service.name, selectedSize, price);
        } else {
            // SweetAlert error if no size selected
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please select a dog size before booking!',
            });
        }
    };

    // Inline styles
    const styles = {
        card: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight blur effect
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(255, 99, 71, 0.5)', // #ff6347 shadow
            padding: '20px',
            maxWidth: '350px',
            margin: '20px auto',
            textAlign: 'center',
            backdropFilter: 'blur(5px)', // Blur effect
        },
        button: {
            backgroundColor: '#ff6347', // Custom button color
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '15px',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#e55337', // Darker on hover
        },
        select: {
            padding: '10px',
            fontSize: '1rem',
            marginTop: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        priceDisplay: {
            marginTop: '10px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#333',
        },
    };

    return (
        <div className="service-card" style={styles.card}>
            <h2>{service.name}</h2>
            <div className="size-selector">
                <label>Select Dog Size:</label>
                <select value={selectedSize} onChange={handleSizeChange} style={styles.select}>
                    <option value="" disabled>Select Size</option>
                    <option value="small">Small (up to 25 lbs)</option>
                    <option value="medium">Medium (25-50 lbs)</option>
                    <option value="large">Large (50-75 lbs)</option>
                    <option value="xxl">XXL (75+ lbs)</option>
                </select>
            </div>
            {price !== null && (
                <div className="price-display" style={styles.priceDisplay}>
                    <p>Price: ${Array.isArray(price) ? `${price[0]} - ${price[1]}` : price}</p>
                </div>
            )}
            <button
                onClick={handleBookNow}
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                Select
            </button>
        </div>
    );
}

export default ServiceCard;
