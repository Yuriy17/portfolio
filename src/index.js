import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  BrowserRouter as Router 
} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
  <React.StrictMode>
<Router>
    <App>

    </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

