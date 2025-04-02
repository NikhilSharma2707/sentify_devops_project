// VendorWrapped.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SentimentBadge from './SentimentBadge';

function VendorWrapped() {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch vendor details
    axios.get(`http://localhost:5000/api/vendors/${id}`)
      .then(res => setVendor(res.data))
      .catch(err => {
        console.error("Error fetching vendor details:", err);
        setError("Error fetching vendor details");
      });

    // Fetch vendor analysis
    axios.get(`http://localhost:5000/api/vendors/${id}/analysis`)
      .then(res => setAnalysis(res.data))
      .catch(err => {
        console.error("Error fetching vendor analysis:", err);
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Error fetching analysis");
        }
      });
  }, [id]);

  if (!vendor) {
    return <div>Loading vendor details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!analysis) {
    return <div>Loading analysis...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Vendor Analysis: {vendor.name}</h2>
      <p>{vendor.description}</p>
      <h3>Review Analysis</h3>
      <p>Sentiment Score: {analysis.sentimentScore}</p>
      {/* Animated Sentiment Badge */}
      <SentimentBadge sentimentScore={Number(analysis.sentimentScore)} />
      <p>Summary: {analysis.summary}</p>
      {/* Additional vendor analysis details can be added here */}
    </div>
  );
}

export default VendorWrapped;
