import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comment from './Comment'

export default function Post({postDetails,deletePostCallback,editPostCallback}) {
    const [commentsData,setCommentsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postDetails.id}/comments`)
            setCommentsData(response.data)
        }
        fetchData();
    },[])
    
    return (
        <div className='post'>
            <h4 className='postTitle'>{postDetails.title}</h4>
            <div className='postBody'>{postDetails.body}</div>
            <div>Posted by: userID={postDetails.userId}</div>
            <div>PostID={postDetails.id}</div>
            <div className='commentSection'>
                {commentsData ? commentsData.map((comment,index) => {
                    return <Comment key={index} commentDetails={comment}/>
                }) : 'loading comments...'}
            </div>
            <div className='postControls'>
                <i className="far fa-edit controlBtn" onClick={()=>{editPostCallback(postDetails.id)}} ></i> <i className="far fa-trash-alt controlBtn" onClick={()=>{deletePostCallback(postDetails.id)}}></i>
            </div>
        </div>
    )
}
