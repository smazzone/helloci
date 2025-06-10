const request = require('supertest');
const express = require('express');
const app = require('./app');

describe('GET /', () => {
  it('It should respond with "Hello from CI/CD and some other info..."', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello CI/CD');
  });
});