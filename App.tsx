import React from 'react';
import RootNavigation from './src/RootNavigation';
import {store} from './store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return <RootNavigation />;
}

export default App;
