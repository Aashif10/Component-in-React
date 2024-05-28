/* eslint-disable no-unused-vars */
import React, { Component } from "react"
export default class ClassBased extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleInc = () => {
            this.setState({count:this.state.count+1})
}
    
}
    render() {

        return (
            <div>
                <div className="text-green-500">count:{this.state.count}</div>
                <button onClick={this.handleInc} >Increment</button>

            </div>
        )
    }
} 