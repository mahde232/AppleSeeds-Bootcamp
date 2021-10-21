import React from 'react';
import './style.css';

class Spinner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isVisible: !this.state.isVisible
            })
        }, 3000);
    }
    render() {
        const spinners = [
            <div class="loader" style={{display: this.state.isVisible ? 'block' : 'none'}}>Loading...</div>,
            <div class="loader2" style={{display: this.state.isVisible ? 'block' : 'none'}}>Loading...</div>,
            <div class="loader3" style={{display: this.state.isVisible ? 'block' : 'none'}}>Loading...</div>
        ]
        return spinners[Math.floor(Math.random() * 3)];
    }
}

export default Spinner;