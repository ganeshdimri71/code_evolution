import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle A componentDidUpdate')
    }
    changeState = () => {
        this.setState({ name: 'Code Evolution' })
    }
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <div>
                    LifeCycle A
                </div>
                <button
                    onClick={this.changeState}
                >Change State</button>
                <LifecycleB />
            </div>

        )
    }
}

export default LifecycleA