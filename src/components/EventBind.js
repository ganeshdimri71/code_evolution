import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
       
    }
    clickHandler = ()=> {
        this.setState({
            message: "Goodbye"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.clickHandler}
                >{this.state.message}
                </button>
            </div>
        )
    }
}

export default EventBind