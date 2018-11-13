import React, { Component } from 'react';

import { Box } from './Box/Box';
import { BoxWithTheme } from './Box/BoxWithTheme';
import { ExampleTheme } from './Theme/Theme';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <ExampleTheme>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Box isSmall/>
            {/* <BoxWithTheme isSmall/> */}
          </header>
        </div>
      </ExampleTheme>
    );
  }
}

export default App;

// https://github.com/Khan/aphrodite
// https://github.com/airbnb/react-with-styles
// https://github.com/airbnb/react-with-styles-interface-aphrodite/tree/master/src
// https://github.com/emotion-js/emotion
// https://emotion.sh/docs/media-queries
// https://github.com/emotion-js/facepaint#emotion
// https://emotion.sh/docs/jest-emotion
// https://github.com/paypal/glamorous
// https://polished.js.org/docs/
// https://github.com/MicheleBertoli/css-in-js
