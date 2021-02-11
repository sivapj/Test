  
import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
import Reservationform from './Reservationform';


class App extends Component {


  render (props){
    
   
    return (
      <Router>
        <div className="App">
          <Reservationform/>          
       </div>
      </Router>
     
    )
  }
}

export default App;

