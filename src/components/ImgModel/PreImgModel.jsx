import React, { useState } from "react";

import FirstImg from "../../assets/one.jpg";
import SecondImg from "../../assets/two.jpg";
import ThreeImg from "../../assets/three.jpg";
import ImageModel from "./ImageModel.jsx"

function PreImgModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Array of image URLs
    FirstImg,
    SecondImg,
    ThreeImg,
    // Add more images as needed
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="cursor-pointer object-cover max-w-full h-64"
            onClick={() => openModal(imageUrl)}
          />
        ))}
      </div>

      {/* Modal for viewing the image */}
      <ImageModel isOpen={isModalOpen} imageUrl={selectedImage} onClose={closeModal} /> 
    </div>
    </>
  );
}

export default PreImgModel;