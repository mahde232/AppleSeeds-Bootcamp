import React from 'react';

class ChangingBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            numberOfChanges: 0,
            shape: 'box'
        }
    }
    changeColorsFunc = () => {
        if(this.state.numberOfChanges != 5)
            this.setState({
                color: this.state.color === 'red' ? 'black' : 'red',
                numberOfChanges: this.state.numberOfChanges + 1
            })
        else
            this.setState({
                color: this.state.color === 'red' ? 'black' : 'red',
                numberOfChanges: this.state.numberOfChanges + 1,
                shape: 'circle'
            })
    }
    componentDidMount = () => {
        setTimeout(this.changeColorsFunc, 500);
    }
    componentDidUpdate = () => {
        setTimeout(this.changeColorsFunc, 500);
    }
    render() {
        if(this.state.shape === 'box')
            return <div style={{height: '300px', width: '300px', backgroundColor: this.state.color}}></div>
        else
            return <div style={{height: '300px', width: '300px', backgroundColor: this.state.color, borderRadius: '50%'}}></div>
    }
}

export default ChangingBox;