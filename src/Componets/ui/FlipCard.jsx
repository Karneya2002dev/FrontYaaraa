import React from "react";
import { motion } from "framer-motion";
import "../../../src/FlipCard.css"; // Ensure this path is correct
import { Link } from "react-router-dom";

const FlipCard = ({ title, description, image }) => {
  return (
    <div className="flip-card">
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.8 }}
        className="flip-inner"
      >
        {/* Front */}
        <div className="flip-front bg-white text-rose-700 border border-rose-100 shadow-md">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain mb-3"
          />
       <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
          <p className="text-xs text-gray-600">Tap to know more</p>
        </div>

        {/* Back */}
        <div className="flip-back bg-rose-600 text-white shadow-lg">
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm text-center px-3">{description}</p>
          <Link
            to="/register"
            className="mt-4 px-4 py-2 bg-white text-rose-600 rounded hover:bg-gray-100 text-sm font-semibold"
          >
            Enroll Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
