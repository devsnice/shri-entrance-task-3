import React, { Component } from 'react';
import Schedule from '../../components/containers/Schedule/Schedule';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Schedule Page</h1>
        </header>

        <Schedule />
      </div>
    );
  }
}

export default App;
