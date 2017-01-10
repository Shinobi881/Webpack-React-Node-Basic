import React, { Component } from 'react';
import { render } from 'react-dom';

console.warn('This works yup');

export default class App extends Component {
  render() {
    return (
      <div><h1 id="test">Hello Muhsin</h1></div>
    );
  }
}
if (typeof window !== 'undefined') {

  render(<App />, document.getElementById('app'));
}
