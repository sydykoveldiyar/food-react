import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./app/app";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "./redux";
import * as axios from "axios";

axios.interceptors.request.use(request => {
  const token = localStorage.getItem('jwtToken');
  if (token)
    request.headers.common['Authorization'] = 'Bearer ' + token;
  return request;
})

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
