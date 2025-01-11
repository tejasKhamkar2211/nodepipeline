// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Route to display happiness message
app.get('/', (req, res) => {
  res.send('Happiness shared, we are happy together!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
