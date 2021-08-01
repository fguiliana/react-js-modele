// == Import npm
import React from 'react';

// == Import
import { AppWrapper, RotatingLogo } from 'src/styles/App';
import reactLogo from './react-logo.svg';

// == Composant
const App = () => (
  <AppWrapper>
    <RotatingLogo src={reactLogo} alt="react logo" />
    <h1>My Reactjs Modele</h1>
    <p>You are currently on the App component.</p>
    <div>
      <p>React <span>{React.version}</span></p>
      <p>Using Redux 4, Webpack 5, Babel 7</p>

    </div>
  </AppWrapper>
);

// == Export
export default App;
