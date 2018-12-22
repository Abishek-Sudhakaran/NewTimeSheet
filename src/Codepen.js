import React, { Component } from 'react';
import './Codepen.css';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'
import {routes} from './routes';
import { Switch,Route } from 'react-router-dom';
class Codepen extends Component {
 render() {
    return (
        
        <div>
        <div className="mainNav"></div>
        <nav className="main-menu"> 
            <ul>
                <li>
                    <NavLink to="/pending" >
                        <i className="fa fa-clock-o  fa-2x"></i>
                        <span className="nav-text">
                            Pending-items
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects" >
                        <i className="fa fa-file-text  fa-2x"></i>
                        <span className="nav-text">
                           Projects
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/emp" >   
                       <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text">
                            Employees
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/task" >
                        <i className="fa fa-tasks fa-2x"></i>
                        <span className="nav-text">
                            Task
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/time" >
                       <i className="fa fa-calendar fa-2x"></i>
                        <span className="nav-text">
                            Time-Sheet
                        </span>
                    </NavLink>
                </li>
            </ul>

            <ul className="logout">
                <li>
                    <NavLink to="/" >   
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </NavLink>
                </li>  
            </ul>
        </nav>
       
        </div>
        
    );
  }
}
export default withRouter (Codepen);


