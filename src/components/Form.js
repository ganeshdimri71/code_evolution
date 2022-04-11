import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }


    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        const { username, comments, topic } = this.state
        return (
            <form action=""
                onSubmit={this.handleSubmit}
            >
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUsernameChange} />

                <div>
                    <label htmlFor="">Comments</label>
                    <textarea name="" id="" cols="30" rows="10" value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div>
                    <label htmlFor="">Topic</label>
                    <select name="" id=""
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form