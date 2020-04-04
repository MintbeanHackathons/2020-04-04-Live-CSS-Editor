import React, { Component } from 'react'

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // setBackgroundColor = (props) => {
  //   if (this.props.submitted === true) {
  //     return
  //     <div classname='background' style={{ backgroundColor: `${props.backgroundColor}` }}>
  //     </div>
  //   } else {
      
  //   }
  // }
  render() {
    return (
      <div>
        <h1>Your Site</h1>
        {this.props.submitted === true ?
          
          <div className='body' style={{ backgroundColor: `${this.props.backGroundColor}` }}>
            <header style={{ backgroundColor: `${this.props.headerColor}` }}>
              <h1>{`${this.props.headerTitle}`}</h1>
            </header>
            <main style={{ backgroundColor: `${this.props.mainColor}` }}>
              <p>{this.props.mainText}</p>
            </main>
          </div>
          :
          <h1>{`${this.props.submitted}`}</h1>
        }
      </div>
    )
  }submitted
}

