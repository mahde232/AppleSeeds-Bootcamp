import React from 'react';

class Joke extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div className="joke">
            {this.props.jokeText}
        </div>
    }
}

export default Joke;