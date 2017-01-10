require('babel-register');

const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const reactApp = require('../app').default; // require our react entry point

const app = express(); // Create a server 
const { renderToString } = ReactDOMServer;
const PORT = process.env.PORT || 3500; // If no environment port, set port to 3500
const publicPath = path.resolve(__dirname, '../dist'); // NOTE: If the server is not in the root of the app we need to use __dirname followed by the relative path to our app

const compApp = React.createElement(reactApp);
const Client = renderToString(compApp);

app.use('/', express.static(publicPath)); // Use static middleware to resolve the dir where our index.html lives

const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Bare Bones App</title>
      <link rel="stylesheet" type="text/css" href="./styles.css">
    </head>
    <body>
      <div id="app">${Client}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>
`;

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} from ${__dirname}`);
  // console.log('Path public files: ', publicPath)
  // console.log('Render to string: ', Client);
});