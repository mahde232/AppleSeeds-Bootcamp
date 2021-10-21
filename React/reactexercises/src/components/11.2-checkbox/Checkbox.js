import React from 'react'

class Checkbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: props.text,
            isChecked: props.isChecked
        }
    }
    render() {
        return (
            <div>
                <input type="checkbox" defaultChecked={this.state.isChecked}></input><span>{this.state.text}</span>
            </div>
        )
    }
}

export default Checkbox;
