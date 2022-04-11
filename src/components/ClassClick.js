import React, { Component } from 'react'

export default class ClassClick extends Component {
    onClickHandler() {
        console.log('clicked the button')
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.onClickHandler}
                >Click Me</button>
            </div>
        )
    }
}
