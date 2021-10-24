import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <input id='searchField' type='text' placeholder='Search for a name here' onChange={(e)=> {this.props.returnFunction(e.target.value)}} />
        )
    }
}
