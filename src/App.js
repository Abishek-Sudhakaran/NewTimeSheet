import React, { Component } from 'react';
import {routes} from './routes';
import Codepen from './Codepen';
import SideBar from './Index';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        
           <SideBar/>
 
    );
  }
}

export default App;
