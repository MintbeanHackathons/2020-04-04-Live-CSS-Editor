import React, { Component } from 'react'
import InputsBox from './InputsBox.js'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: null,
      title: null,
      headerColor: null,
      bodyColor: null,
      bodyText: ''
    }
  }
  setBackgroundColor = () => {
   
  }


  render() {
    return (
      <div className="App">
     <InputsBox/>
      </div>
    );
  }
 
}


