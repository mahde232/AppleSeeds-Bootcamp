import React from 'react';

class InputText extends React.Component {
    render() {
        return (
            <div>
                {this.props.askFor} <input type='text' onChange={(e) => this.props.onChange(this.props.objKey,e.target.value)}></input>
            </div>
        )
    }
}

export default InputText;