import React from 'react';

class Joke extends React.Component {
    render() {
        return <div className="joke">
            {this.props.jokeText}
        </div>
    }
}

export default Joke;