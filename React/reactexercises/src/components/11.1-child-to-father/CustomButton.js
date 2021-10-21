import React from 'react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.color,
        }
    }
    render() {
        return (
            <div>
                <input type="button" value={this.state.color} onClick={() => {this.props.onClick(this.state.color)}} style={{backgroundColor: this.state.color}}></input>
            </div>
        )
    }
}

export default CustomButton;