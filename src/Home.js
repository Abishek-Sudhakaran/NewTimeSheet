import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'
import './App.css';
class Home extends Component{
    render(){
        return(
            <body style={{backgroundColor:"#2196f3",height:"89.5vh"}}>
                
                <div className="loginForm">
                    <input type="textField" placeholder="User Name"></input>
                    <input type="textField" placeholder="Password"></input>
                    <NavLink to="/dashboard"><input type="button" placeholder="Password" value="Login"></input>
                    </NavLink>
                </div>
                
            </body>
        );  
    }   
}
export default withRouter (Home);