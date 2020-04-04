import React, { Component } from 'react';
import './App.css';
import Input from './input'

class App extends Component {
  state = {
    color: '',
    size: '',
    backgroundColor: '',
  }
  changeColor = (color) => {
    this.setState({color})
  }
  changeSize = size => {
    this.setState({size})
  }
  changeBackgroundColor = bg => {
    this.setState({
      backgroundColor: bg
    })
  }
  
  render() {
    const varStyle = {
      container: {
        color: this.state.color,
        'font-size': this.state.size,
        'background-color': this.state.backgroundColor
      }
    }
    return (
      <div className="App" style={varStyle.container}>
        <h1>Live CSS Editor</h1>
        <Input 
          changeColor={this.changeColor}
          changeSize={this.changeSize}
          changeBackgroundColor={this.changeBackgroundColor}
        />
      </div>
    );
  }
}

export default App;
