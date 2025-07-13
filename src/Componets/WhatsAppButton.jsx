import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+917339408488';
  const message = 'Hello! I would like to learn more about your programs.';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;

  const openWhatsApp = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end space-y-2">
      <div className="bg-white px-4 py-2 rounded-lg shadow text-sm font-medium text-gray-700 hidden sm:block">
        Chat with us
      </div>
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
