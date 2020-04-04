import React, { Component } from 'react'

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backGroundColor: null
    }
  }
  setBackgroundColor = (props) => {
    this.state.backGroundColor ?
      <div>
      </div> :
      <></>
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

