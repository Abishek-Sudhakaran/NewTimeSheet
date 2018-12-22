
import React, { Component } from 'react';
import './Codepen.css';



class Codepen extends Component {
 

  render() {
    return (
        <div>
        
        <nav className="main-menu">
            <ul>
                <li>
                    <a href="#">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li>
         
                <li>
                    <a href="#">
                        <i className="fa fa-clock-o  fa-2x"></i>
                        <span className="nav-text">
                            Pending-items
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-file-text  fa-2x"></i>
                        <span className="nav-text">
                           Projects
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i className="fa fa-user fa-2x"></i>
                        <span className="nav-text">
                            Employees
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-tasks fa-2x"></i>
                        <span className="nav-text">
                            Task
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i className="fa fa-calendar fa-2x"></i>
                        <span className="nav-text">
                            Time-Sheet
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        </div>
    );
  }
}
export default Codepen; 


