import React, { Component } from 'react';
import Home from './components/Home';
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Comments />
      </div>
    );
  }
}

export default App;
