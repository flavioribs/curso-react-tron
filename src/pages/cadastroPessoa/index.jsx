import React, { Component } from 'react'

export default class Index extends Component {

    constructor(props) {
        debugger
        super(props)
        
    }

    componentWillMount() {
        debugger
        let x = 1
    }

    render() {
        debugger
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}