import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
