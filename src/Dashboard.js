import React, { Component } from 'react';
import Codepen from './Codepen';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'
import {routes} from './routes';
import { Switch,Route } from 'react-router-dom';
const Dashboard=()=>{
    return(
        <Router>
            <>
            <Codepen/>
        <Switch>
        {routes.map(route =><Route key={route.path} exact path = {route.path} component={route.component}/>)}
        </Switch>
        </>
        </Router>
    )
}
export default Dashboard;