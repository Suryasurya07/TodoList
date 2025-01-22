import React from 'react';

const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
