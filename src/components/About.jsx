import React from 'react';

import './AboutDogs.css'; // Make sure this file is in the same directory

const dogs = [
  { name: "Buddy", breed: "Golden Retriever", age: 3, image: "https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg" },
  { name: "Max", breed: "German Shepherd", age: 5, image: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg" },
  { name: "Bella", breed: "Labrador Retriever", age: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkyJMaS0M8cslznjj4YYwFq3rAn_VQzZlKCw&s" },
  { name: "Charlie", breed: "Poodle", age: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-YGleSc6UyrtjfByakRZzF2l-3llCToRQg&s" },
  { name: "Lucy", breed: "Beagle", age: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdsI9wiq2mC79VDTPm2bsY8rtck71CrlRrQ&s" },
  { name: "Rocky", breed: "Bulldog", age: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FVzsWj9fGSmF1B5aQdcqZjfxJQtjAZshqw&s" },
  { name: "Daisy", breed: "Shih Tzu", age: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4KMF_CTqJAD_9CoFlsO2ZQFLl3JOEONigA&s" },
  { name: "Molly", breed: "Cocker Spaniel", age: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgovwbNngJsuyfTQS9ITVmVmvA30ETH32v7g&s" },
  { name: "Duke", breed: "Doberman", age: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-bA8pwDhZayp3d6TQRz0BpPO8f8j-PVEbQ&s" },
  { name: "Sadie", breed: "Border Collie", age: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ad2jWu-C927zGw7saSpYNMYEdNv6WQd1WQ&s" }
];

const AboutDogs = () => {
  return (
    <div className="about-dogs-container">
      {dogs.map((dog, index) => (
        <div key={dog.name} className={`dog-section ${index % 2 === 0 ? 'left' : 'right'}`}>
          {index % 2 === 0 ? (
            <>
              <img src={dog.image} alt={dog.name} className="dog-image" />
              <div className="dog-description">
                <h2>{dog.name}</h2>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age} years old</p>
              </div>
            </>
          ) : (
            <>
              <div className="dog-description">
                <h2>{dog.name}</h2>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age} years old</p>
              </div>
              <img src={dog.image} alt={dog.name} className="dog-image" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutDogs;
