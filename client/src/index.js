import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap';
import  './Scripts/bsadmin'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'; 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'))
