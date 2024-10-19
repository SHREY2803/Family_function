// ImageModal.jsx
import React from 'react';

function ImageModel({ isOpen, imageUrl, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Fullscreen"
          className="max-w-full max-h-screen"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default ImageModel;
