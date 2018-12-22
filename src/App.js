import React, { Component } from 'react';
import Codepen from './Codepen';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <Codepen/>
         <Projects/>
         </div>
    );
  }
}

export default App;
