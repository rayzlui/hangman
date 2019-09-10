import React from 'react';
import './App.css';
import { configureStore } from './configureStore';
import { Provider } from 'react-redux';
import { RootContainer } from './containers/RootContainer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
