import React from 'react';
import './Services.css'; // Importing external CSS for better separation

const Services = () => {
  return (
    <div className="paw-bubbles-services">
      <h2>Our Grooming Services</h2>
      <p>At Paw Bubbles, we pamper your dogs with the best grooming experience!</p>

      <div className="services-list">
        <div className="service-card">
          <img src="https://thumbs.dreamstime.com/b/cheerful-cartoon-dog-surrounded-grooming-supplies-ready-bath-grooming-session-cartoon-dog-grooming-supplies-327385812.jpg" alt="Dog Bathing" />
          <h3>Full Bath & Groom</h3>
          <p>A complete bath with shampoo, blow-dry, brushing, and a stylish haircut tailored to your dog's needs.</p>
          <ul>
            <li>Shampooing with organic, hypoallergenic products</li>
            <li>Nail trimming and filing</li>
            <li>Ear cleaning</li>
            <li>Coat conditioning for a shiny, healthy fur</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8ZHwy-j4dPG8iJ3-IluRlcg8VmDgCX3Q8w&s" alt="Dog Nail Trimming" />
          <h3>Nail Trimming</h3>
          <p>Professional nail trimming and filing to keep your dog’s paws safe and healthy.</p>
          <ul>
            <li>Gentle and stress-free nail trimming</li>
            <li>Quick and safe techniques</li>
            <li>Paw massage included</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://southcentralvet.com/wp-content/uploads/2022/02/dog-teeth-cleaning-important.jpg" alt="Dog Dental Care" />
          <h3>Dental Cleaning</h3>
          <p>We offer dog-safe dental care, ensuring your pet’s teeth are clean and healthy.</p>
          <ul>
            <li>Teeth brushing with specialized dog toothpaste</li>
            <li>Breath freshening treatments</li>
            <li>Healthy gums and oral hygiene</li>
          </ul>
        </div>

        <div className="service-card">
          <img src="https://dogcoach.dog/cdn/shop/articles/hund-faelder-1024x640_700x.png?v=1618226270" alt="Dog Deshedding" />
          <h3>De-shedding Treatment</h3>
          <p>Our de-shedding treatment reduces shedding and keeps your home cleaner.</p>
          <ul>
            <li>Thorough brushing and de-shedding techniques</li>
            <li>Coat treatments for reducing hair fall</li>
            <li>Great for long-haired and double-coated breeds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
