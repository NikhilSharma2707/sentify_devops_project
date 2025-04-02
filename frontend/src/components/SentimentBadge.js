// SentimentBadge.js
import React from 'react';
import { motion } from 'framer-motion';

const SentimentBadge = ({ sentimentScore }) => {
  // Map score 0 to negative (red) and 1 to positive (green)
  const isPositive = sentimentScore === 1;
  const sentimentText = isPositive ? "Positive" : "Negative";
  const badgeColor = isPositive ? "#4caf50" : "#f44336"; // green for positive, red for negative

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      style={{
        padding: '10px 20px',
        borderRadius: '20px',
        backgroundColor: badgeColor,
        color: '#fff',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}
    >
      {sentimentText}
    </motion.div>
  );
};

export default SentimentBadge;
