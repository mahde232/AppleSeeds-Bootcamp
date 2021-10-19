import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteColor: 'blue'
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                favoriteColor: 'red'
            })
        }, 1000);
    }
    componentDidUpdate = () => {
        document.querySelector('#myDiv').textContent = `The updated favorite color is ${this.state.favoriteColor}`
    }
    render() {
        return <div>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <div id="myDiv"></div>
        </div>
    }
}

export default MyComponent;