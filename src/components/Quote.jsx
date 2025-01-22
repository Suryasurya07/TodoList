import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('http://api.quotable.io/random');
        
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        setQuote(data.content);  // Set the quote content
        setAuthor(data.author);   // Set the author of the quote
        setError(''); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching quote:', error);
        setError('Failed to fetch quote. Please try again later.');
      }
    };

    fetchQuote();
  }, []); // Empty dependency array, so this runs once when the component mounts

  return (
    <motion.div
      className="h-[200px] bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-bold text-white text-center mb-4">Random Quote</h3>
      
      {error ? (
        <p className="text-red-500 text-center font-semibold">{error}</p>
      ) : (
        <>
          <p className="text-xl italic text-white text-center mb-2">"{quote}"</p>
          <p className="text-lg text-white text-right">- {author}</p>
        </>
      )}
    </motion.div>
  );
};

export default Quote;
