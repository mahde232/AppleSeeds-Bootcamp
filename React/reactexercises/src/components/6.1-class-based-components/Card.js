import React from 'react';
import './style.css'

class Card extends React.Component {
    // constructor({imgURL, title, description}) { //this method can't handle children, it's best to use the lower technique and just comment above it what the props contain
    //     this.imgURL = imgURL;
    //     this.title = title;
    //     this.description = description;
    // }
    constructor(props) { //this method works and is able to handle nested children
        super(props);
        this.props=props;
    }
    render() {
        console.log('props=',this.props);
        return <div className='card'>
        <img src={this.imgURL} repeat='no-repeat' height='200px'></img>
        <h2>{this.title}</h2>
        <p>{this.description}</p>
        <div className='links'><a href='#' className='link'>Share</a> <a href='#' className='link'>Explore</a></div>
    </div>
    }
}

export default Card;