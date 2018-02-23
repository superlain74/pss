import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import App from './App';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
    <Router>
    <App />
    </Router>,
    document.getElementById('root'));

