import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './Users';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/users/:id/idcontacto/:idcontacto/idinteraccion/:idinteraccion/idcampana/:idcampana/idcontactogenesys/:idcontactogenesys" component={Users} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
