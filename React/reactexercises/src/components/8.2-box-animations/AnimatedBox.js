import React from 'react';
import './style.css';

class AnimatedBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAppearing: true
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isAppearing: !this.state.isAppearing
            })
        }, 4000);
    }
    render() {
        const randomValue = Math.floor(Math.random() * 200);
        return <div className='box' style={{height: randomValue+'px', width: randomValue+'px', backgroundColor: 'red', display: this.state.isAppearing ? 'block' : 'none'}}></div>
    }
}

export default AnimatedBox;