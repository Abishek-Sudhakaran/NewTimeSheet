import React, { Component } from 'react';
import {Button, Icon,Card,CardTitle,image} from 'react-materialize'
// import Home from './Login';
import './App.css';

class CardHeader extends Component{
    render(){
        return(
            
              
            <Card header={<CardTitle reveal image={require("./lap.jpg")} waves='light'/>}
                 title="Card Title"
                 className="cards"
                 reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                 <p><a href="#">This is a link</a></p>
                </Card>
            
        )
    }
}
export default CardHeader;