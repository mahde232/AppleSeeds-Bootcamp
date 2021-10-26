import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'
import './style.css'

export default function AxiosCRUD() {
    const [apiData,setAPIData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
            setAPIData(response.data)
        }
        fetchData();
    },[])

    return (
        <div className='container'>
            {
            // apiData ? <User userDetails={apiData} /> : 'loading users...'
            apiData ? apiData.map((user,index) => {
                return <User key={index} userDetails={user} />
            }) : 'loading users...'
        }
        </div>
    )
}
