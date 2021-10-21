import React from 'react';
import CustomButton from './CustomButton';

const colors = ['blue','red','yellow','grey'];
class Q11_1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedColor: ""
        }
    }
    handleButtonClick = (color) => {
        this.setState({
            selectedColor: color
        })
    }
    render() {
        return (
            <div>
                {colors.map(element => {
                    return <CustomButton color={element} onClick={this.handleButtonClick}></CustomButton>
                })}
                The clicked button is: <span style={{color: this.state.selectedColor}}>{this.state.selectedColor}</span>
            </div>
        )
    }
}

export default Q11_1;