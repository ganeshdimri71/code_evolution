import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App8 from './App8';
import App9 from './9';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// import galleryReducer from '../src/componentsEleven/galary/gallerySlice'

// import { store } from './state/store';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: {
//     gallery: galleryReducer
//   }
// })


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App9 />
  </Provider>
  // </React.StrictMode >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
