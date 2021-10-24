import React, { Component } from 'react'

export default class AvatarCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personDetails: this.props.personDetails
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.personDetails.pictureURL !== this.props.personDetails.pictureURL )
        {
            this.setState({personDetails: this.props.personDetails})
        }
    }
    render() {
        return (
            <div className='avatarCard'>
                <img className='avatarIMG' src={this.state.personDetails.pictureURL} alt='random'></img>
                <div>{this.state.personDetails.name}</div>
            </div>
        )
    }
}
