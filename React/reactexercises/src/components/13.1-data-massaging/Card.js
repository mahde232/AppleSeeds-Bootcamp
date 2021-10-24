import React, { Component } from 'react'
import Name from './Name'

export default class Card extends Component {
    render() {
        return (
            <Name name={this.props.object.name}/>
        )
    }
}
