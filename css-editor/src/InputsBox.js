import React, { Component } from 'react'

export default class InputsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div className=''>
        <form>
          <p>Enter background color</p>
          <input type='text'/>
          <p>Enter header title</p>
          <input type='text' />
          <p>Enter header color</p>
          <input type='text' />
          <p>Enter body color</p>
          <input type='text' />
          <p>Enter body text</p>
          <input type='text'/>
        </form>
        
      </div>
    )
  }
}
