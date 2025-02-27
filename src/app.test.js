const request = require('supertest');
const express = require('express');
const app = require('./app');

describe('GET /', () => {
  it('should respond with "Hello CI/CD! from ...{somewhere}"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello CI/CD! from');
  });
});