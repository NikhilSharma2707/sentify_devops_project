// frontend/src/__tests__/SentimentBadge.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import SentimentBadge from '../components/SentimentBadge';

test('displays "Positive" for sentimentScore 1', () => {
  render(<SentimentBadge sentimentScore={1} />);
  expect(screen.getByText(/Positive/i)).toBeInTheDocument();
});

test('displays "Negative" for sentimentScore 0', () => {
  render(<SentimentBadge sentimentScore={0} />);
  expect(screen.getByText(/Negative/i)).toBeInTheDocument();
});
