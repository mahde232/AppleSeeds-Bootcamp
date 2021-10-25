import React, { useState } from 'react'
import './style.css'

export default function Text({inputText,maxLength}) {
    const [text,setText] = useState(inputText)
    const [lengthToShow, setLength] = useState(maxLength)
    const [isExpanded, setExpanded] = useState(false)

    const showMore = () => {
        isExpanded ? setLength(maxLength) : setLength(text.length)
        setExpanded(!isExpanded)
    }

    return ( 
        <div>{text.slice(0,lengthToShow).split('').map(letter => {
            return letter
        })}
        {isExpanded ? '' : '...'} <a className='showMoreLess' onClick={showMore}>{isExpanded ? <span>Show less</span> : <span>Show more</span>}</a>
        </div>
    )
}
