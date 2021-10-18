import React from 'react';
import './style.css'

class DisappearingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAppearing: false}
    }
    toggleAppearance = () => {
        this.setState(prevState => ({
            isAppearing: !prevState.isAppearing
        }))
    }
    render() {
        return <div className="disappearingBox">
            <div><button onClick={this.toggleAppearance}>{this.state.isAppearing ? 'Hide' : 'Show'}</button></div>
            <div className="innerDiv" style={{visibility: this.state.isAppearing ? 'visible' : 'hidden'}}></div>
        </div>
    }
}

export default DisappearingBox;