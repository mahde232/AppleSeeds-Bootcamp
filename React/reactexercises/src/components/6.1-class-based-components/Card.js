import React from 'react';
import './style.css'

class Card extends React.Component {
    constructor({imgURL, title, description}) {
        super({imgURL, title, description});
        this.imgURL = imgURL;
        this.title = title;
        this.description = description;
    }
    render() {
        return <div className='card'>
        <img src={this.imgURL} repeat='no-repeat' height='200px'></img>
        <h2>{this.title}</h2>
        <p>{this.description}</p>
        <div className='links'><a href='#' className='link'>Share</a> <a href='#' className='link'>Explore</a></div>
    </div>
    }
}

export default Card;