import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import store from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
