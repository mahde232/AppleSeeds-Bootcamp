import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

export default function User({userDetails}) {
    const [postsData,setPostsData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userDetails.id}/posts`)
            setPostsData(response.data)
        }
        fetchData();
    },[])

    const deletePost = async (postID) =>{
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        console.log('response=',res);
        console.log(`deleted post=${postID}`);
    }
    const placeholderobj = {id: 1, title: 'foo', body: 'bar', userId: 1,}
    const editPost = async (postID) =>{
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postID}`, placeholderobj);
        console.log('response=',res);
        console.log(`edited post=${postID}`);
    }
    return (
        <div className='user'>
            <h2 className='userName'>{userDetails.name}</h2>
            <div className='postsSection'>
                {postsData ? postsData.map((post,index) => {
                return <Post key={index} postDetails={post} deletePostCallback={deletePost} editPostCallback={editPost} />
            }) : 'loading posts...'}
            </div>
        </div>
    )
}
