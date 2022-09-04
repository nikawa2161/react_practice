import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import postsReducer from './reducers/Posts';

const store = configureStore({
  // actionとstateを管理
  reducer: {
    posts: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* storeをどこからでも呼び出せるように */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
