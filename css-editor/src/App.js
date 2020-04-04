import React, { Component } from 'react'
import InputsBox from './InputsBox.js'
import Background from './Background'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: null,
      headerTitle: null,
      headerColor: null,
      mainColor: null,
      mainText: '',
      submitted: false
    }
  }
  
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
   
  };

  onSubmit = e => {
    this.setState({
      submitted: true
    })
    console.log(this.state.backGroundColor)
  }

  render() {
    return (
      <div className="App">
        <InputsBox
          sumbitted={this.state.submitted}
          backGroundColor={this.state.backGroundColor}
          headerTitle={this.state.headerTitle}
          headerColor={this.state.headerColor}
          mainColor={this.state.mainColor}
          mainText={this.state.mainText}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Background
          submitted={this.state.submitted}
          backGroundColor={this.state.backGroundColor}
          headerTitle={this.state.headerTitle}
          headerColor={this.state.headerColor}
          mainColor={this.state.mainColor}
          mainText={this.state.mainText}
        />
      </div>
    );
  }
 
}


