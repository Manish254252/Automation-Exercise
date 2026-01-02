import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Mock API Tests', () => {

  test('GET /posts should return all posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);
    expect(response.status()).toBe(200);

    const posts = await response.json();
    console.log(posts);

    // Validate first post
    expect(posts[0].title).toBe('First Post');
    expect(posts[0].id).toBe(1);
  });

  test('POST /login should return token for valid user', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/login`, {
      data: { username: 'testuser', password: '1234' }
    });
    
    // JSON Server returns 201 for POST
    expect(response.status()).toBe(200);

    const json = await response.json();
    console.log(json);

    expect(json.token).toBe('mock-token-123');
  });

  test('POST /login should fail for invalid user', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/login`, {
      data: { username: 'wronguser', password: '0000' }
    });

    // JSON Server will create a new entry, but in real test you may want 401
    expect(response.status()).toBe(401);

    const json = await response.json();
    console.log(json);
  });

    test('POST /login', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/blogs`, {
      data: { username: 'wronguser', password: '0000' }
    });

    // JSON Server will create a new entry, but in real test you may want 401
    // expect(response.status()).toBe(200);

    const json = await response.json();
    console.log(json);
  });

});
