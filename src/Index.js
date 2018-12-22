import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

class SideBar extends Component {
  render() {
    return (
        <Router>
         
           <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
            </Switch>
          
         </Router>
    );
  }
}

export default SideBar;
