import React from 'react';

class Select extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            maxAge: props.maxAge
        }
    }
    render() {
        return (
            <select onChange={(e) => this.props.onChange(this.props.objKey,e.target.value)}>
                {Array.from(Array(this.state.maxAge).keys()).map(element =>{
                    return <option key={element+1} value={element+1}>{element+1}</option>
                })}
            </select>
        )
    }
}

export default Select;