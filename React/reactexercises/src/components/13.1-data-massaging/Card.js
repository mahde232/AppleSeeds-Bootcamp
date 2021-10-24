import React, { Component } from 'react'
import Name from './Name'

export default class Card extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Name name={this.props.object.name}/>
        )
    }
}
