import express from 'express';

const app = express();
app.use(express.json());

// Login endpoint (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'testuser' && password === '1234') {
    res.json({ token: 'mock-token-123', msg: "Response from Mock Server" });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Posts endpoint (GET)
app.get('/posts', (req, res) => {
  // Example static posts
  const posts = [
    { id: 1, title: "First Post", body: "This is the first post" },
    { id: 2, title: "Second Post", body: "This is the second post" },
  ];
  res.json(posts);
});

// Catch-all for any other /api/* routes
app.all('{/*path}', (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
    message: 'Mock response for any /api/* route'
  });
});

// Start server
app.listen(3000, () => console.log('Mock server running on port 3000'));
