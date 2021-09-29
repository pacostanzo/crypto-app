import React from 'react';
import { Switch, Route, Link ,BrowserRouter as Router } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

import './App.css';


const App = (props) => {
return (
<Router>
<div className="app">
  <div className="navbar">
      <Navbar />
    </div>
        <div className="main">

        </div>
        <div className="footer">

        </div>
    </div>
</Router>)
};
export default App;