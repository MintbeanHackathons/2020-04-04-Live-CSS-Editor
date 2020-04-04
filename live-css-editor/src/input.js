import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <form className='input-form'>
                <label htmlFor='color'>Font Color:</label>
                <input 
                    id='color' 
                    name='color' 
                    type='text' 
                    onChange={e => {this.props.changeColor(e.target.value)}}
                    />
                <label htmlFor='size'>Font Size:</label>
                <input
                    id='size'
                    name='size'
                    type='text'
                    onChange={e => { this.props.changeSize(e.target.value) }}
                />
                <label htmlFor='backgroundColor'>Background Color:</label>
                <input
                    id='backgroundColor'
                    name='backgroundColor'
                    type='text'
                    onChange={e => { this.props.changeBackgroundColor(e.target.value) }}
                />
            </form>
        )
    }
}