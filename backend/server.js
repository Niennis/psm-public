const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});