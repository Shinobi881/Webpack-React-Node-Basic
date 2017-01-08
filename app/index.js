import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div><h1>Hello Muhsin</h1></div>
    );
  }
}
if (typeof window !== 'undefined') {
  
render(<App />, document.getElementById('app'));
}
