const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Minimal Node.js app!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
