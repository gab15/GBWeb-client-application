import React, { Component } from 'react';
import { HeaderComponent } from './global/header/header';

class App extends Component {
  render() {
    return (
      React.createElement('div', {}, [
        React.createElement(HeaderComponent, {key: 'HeaderComponent'})
      ])
    );
  }
}

export default App;
