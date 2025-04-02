// ProductWrapped.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SentimentBadge from './SentimentBadge';

function ProductWrapped() {
  const { id } = useParams();
  const [analysis, setAnalysis] = useState(null);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product details:", err));

    // Fetch product analysis
    axios.get(`http://localhost:5000/api/products/${id}/analysis`)
      .then(res => setAnalysis(res.data))
      .catch(err => {
        console.error("Error fetching product analysis:", err);
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Error fetching analysis");
        }
      });
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!analysis) {
    return <div>Loading analysis...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Analysis: {product.name}</h2>
      <p>{product.description}</p>
      <h3>Review Analysis</h3>
      <p>Sentiment Score: {analysis.sentimentScore}</p>
      {/* Animated Sentiment Badge */}
      <SentimentBadge sentimentScore={Number(analysis.sentimentScore)} />
      <p>Summary: {analysis.summary}</p>
      <h3>Price Trend</h3>
      <p>{analysis.priceTrend}</p>
      <h3>Similar Products</h3>
      <ul>
        {analysis.similarProducts && analysis.similarProducts.length > 0 ? (
          analysis.similarProducts.map((prod, index) => (
            <li key={index}>{prod}</li>
          ))
        ) : (
          <li>No similar products data available.</li>
        )}
      </ul>
    </div>
  );
}

export default ProductWrapped;
