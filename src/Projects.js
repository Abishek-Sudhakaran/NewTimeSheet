import React, { Component } from 'react';
import {Button, Icon,Card,CardTitle,image} from 'react-materialize'
import  CardHeader from './CardHeader';
import './App.css';
import Modal from 'react-responsive-modal';

class Projects extends Component {
    state = {
        open: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
  render() {
    return (
        <div>
        <button className="bla" onClick={this.onOpenModal}>add</button>
      <div className="forProjects">
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/>
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/>
         <CardHeader/> 
         <CardHeader/> 
         <CardHeader/> 
    </div> 
    <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
  </div>  
    );
  }
}

export default Projects;