import React, { Component } from 'react'
import AvatarCard from './AvatarCard'


export default class AvatarCards extends Component {
    render() {
        return (
            <div className='peopleContainer'>
                {this.props.people.map((person, index) => {
                    return <AvatarCard personDetails={person} />
                })}
            </div>
        )
    }
}
