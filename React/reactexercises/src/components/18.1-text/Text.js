import React, { useState } from 'react'
import './style.css'

export default function Text({inputText,maxAllowedLength}) {
    const [text] = useState(inputText)
    const [lengthToShow, setLength] = useState(maxAllowedLength)
    const [isExpanded, setExpanded] = useState(false)

    const showMoreLess = () => {
        isExpanded ? setLength(maxAllowedLength) : setLength(text.length)
        setExpanded(!isExpanded)
    }

    return ( 
        <div>{text.slice(0,lengthToShow).split('').map(letter => {
            return letter
        })}
        {isExpanded ? '' : '...'} <a href='#' className='showMoreLess' onClick={showMoreLess}>{isExpanded ? <span>Show less</span> : <span>Show more</span>}</a>
        </div>
    )
}
