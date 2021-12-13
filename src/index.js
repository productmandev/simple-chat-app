import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import 'semantic-ui-css/semantic.min.css'
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { configureStore } from './store';
import { Provider } from 'react-redux';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();