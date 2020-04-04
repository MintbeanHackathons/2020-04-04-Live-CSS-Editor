import React, { Component } from 'react';
import './App.css';
import Input from './input'

class App extends Component {
  state = {
    style: ''
  }

  changeStyle = style => {
    this.setState({style})
  }
  render() {
    
    return (
      <div className="App">
        <h1>Live CSS Editor</h1>
        <Input 
          changeStyle={this.changeStyle}
        />
        <style>{this.state.style}</style>
      </div>
    );
  }
}

export default App;
