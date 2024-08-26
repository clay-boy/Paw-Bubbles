import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

function App() {
    const [services, setServices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState({});

    useEffect(() => {
        fetch('https://dog-server-gray.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const handleBook = (name, size, price) => {
        setSelectedService({ name, size, price });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app">
            <Navbar />
            <div className="service-container">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} onBook={handleBook} />
                ))}
            </div>
            {isModalOpen && (
                <BookingModal 
                    service={selectedService} 
                    onClose={closeModal} 
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
