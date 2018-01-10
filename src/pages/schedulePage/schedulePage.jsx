import React, { Component } from 'react';

import Header from '../../components/units/Header/Header';
import Schedule from '../../components/containers/Schedule/Schedule';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <Schedule />
      </div>
    );
  }
}

export default App;
