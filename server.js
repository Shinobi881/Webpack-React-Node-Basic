const express = require('express');
const path = require('path');
const app = express(); // Create a server 
const PORT = process.env.PORT || 3500;


app.use('/', express.static('./')); // Use static middleware to resolve the dir where our index.html lives

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} from ${__dirname}`);
});