import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <form className='input-form'>
                <label htmlFor="style">CSS Styles: </label>
                <textarea cols='50' rows='20' onChange={e => this.props.changeStyle(e.target.value)}/>
            </form>
        )
    }
}