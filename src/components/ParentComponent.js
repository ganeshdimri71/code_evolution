import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'
import PureComponents from './PureComponents'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Vishwas' })
        }, 2000)
    }
    render() {
        console.log('***ParentComponent Render****')
        return (
            <div>ParentComponent
                <MemoComponent name={this.state.name} />
            </div>

        )
    }
}

export default ParentComponent