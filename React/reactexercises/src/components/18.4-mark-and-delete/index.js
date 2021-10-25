import React, { useState, useEffect } from 'react'
import CheckBox from './CheckBox'

export default function Q18_4() {
    const originalArray = ["one","two","three","four","five"];
    const [membersArray,setMembersArray] = useState(["one","two","three","four","five"])
    const [toDeleteArray,setToDeleteArray] = useState([])
    
    useEffect(() => {
        setToDeleteArray([])
    }, [membersArray])

    const handleDelete = () => {
        setMembersArray(membersArray.filter(item => !toDeleteArray.includes(item)))
    }
    const handleReset = () => {
        setMembersArray(originalArray)
        setToDeleteArray([])
    }
    const handleSelect = (whoWasSelected) => {
        const temp = [...toDeleteArray]
        if(temp.includes(whoWasSelected)) //is inside, so deleted it
            setToDeleteArray(temp.filter(element => {
                return element!==whoWasSelected
            }))
        else { //isnt inside so add it
            temp.push(whoWasSelected)
            setToDeleteArray(temp)
        }
    }
    return (
        <div>
            <div><button onClick={handleDelete}>Delete</button><button onClick={handleReset}>Reset</button></div>
            {membersArray.map((element,index) => {
                return <CheckBox key={index} myCheck={toDeleteArray.includes(element)} checkboxText={element} onChangeCallback={handleSelect} />
            })}
        </div>
    )
}
