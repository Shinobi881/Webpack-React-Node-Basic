const express = require('express');
const path = require('path');

const app = express(); // Create a server 
const PORT = process.env.PORT || 3500; // If no environment port, set port to 3500
const publicPath = path.resolve(__dirname, '../dist'); // NOTE: If the server is not in the root of the app we need to use __dirname followed by the relative path to our app

app.use('/', express.static(publicPath)); // Use static middleware to resolve the dir where our index.html lives

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} from ${__dirname}`);
  console.log('Path public files: ', publicPath)
});