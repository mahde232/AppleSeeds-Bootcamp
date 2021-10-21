import React from 'react';

class TextArea extends React.Component {
    render() {
        return (
            <div>
                Free Text: <textarea onChange={(e) => this.props.onChange(this.props.objKey,e.target.value)}></textarea>
            </div>
        )
    }
}

export default TextArea;