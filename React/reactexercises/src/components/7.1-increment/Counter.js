import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cnt: 0}
    }
    // increaseCounter = () => { //with this.state
    //     this.setState({
    //         cnt: this.state.cnt+=1
    //     });
    // }
    increaseCounter = () => { //with prevState
        this.setState( (prevState) => ({
            cnt: prevState.cnt+=1
        }));
    }
    render() {
        return (
            <div className='counter'>
                <input type="button" value="Increment" onClick={this.increaseCounter}></input> <p>{this.state.cnt}</p>
            </div>
        );
    }
} 

export default Counter;