import React from 'react'

export default function CheckBox({checkboxText,myCheck,onChangeCallback}) {
    return (
        <div>
            <span>{checkboxText}</span>
            <input type='checkbox' data-key={checkboxText} checked={myCheck} onChange={()=> onChangeCallback(checkboxText)}></input>
        </div>
    )
}
