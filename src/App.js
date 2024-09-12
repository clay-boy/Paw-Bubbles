import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import ServiceCard from "./components/ServiceCard";
import Customers_view from "./components/Customers_view";
import Footer from "./components/Contacts";
import Navbar from "./components/NavBar";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from "./components/Services";

function App() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  useEffect(() => {
    fetch("https://dog-server-gray.vercel.app/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleBook = (name, size, price) => {
    setSelectedService({ name, size, price });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <Navbar />
      <About />
      <div className="service-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} onBook={handleBook} />
        ))}
      </div>
      <Services />

      <BookingForm />
      <Customers_view />

      <Footer />
    </div>
  );
}

export default App;
