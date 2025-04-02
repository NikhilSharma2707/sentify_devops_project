// tests/productRoutes.test.js
const request = require('supertest');
const app = require('../server'); // Make sure your Express app is exported in server.js

describe('Product API Endpoints', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
