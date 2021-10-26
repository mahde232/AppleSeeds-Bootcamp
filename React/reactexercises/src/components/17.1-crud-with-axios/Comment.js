import React from 'react'

export default function Comment({commentDetails}) {
    return (
        <div className='comment'>
            <div className='commentAuthor'>Comment by: {commentDetails.email} </div>
            <div className='commentBody'>{commentDetails.body}</div>
        </div>
    )
}
