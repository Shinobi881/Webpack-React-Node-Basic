module.exports = {
  entry: './app/index.js', // relative path to the root JS file in our app
  output: {
    filename: './dist/bundle.js' // Where our transpiled code will end up (built by webpack)
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, // Transpile JS and React
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ]
  }
};