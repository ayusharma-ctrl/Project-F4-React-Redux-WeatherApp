import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //we are using Provider to link the Redux Store with our App
  <Provider store={store} >
    <App />
  </Provider>
);

