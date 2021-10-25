import React, { useState, useEffect } from 'react'

export default function MovieDetails() {
    const [movieDetails,setMovieDetails] = useState({});

    useEffect(() => {
        const pullData = async ()=> {
            const responseData = await ((await fetch('https://swapi.dev/api/films/1/')).json())
            console.log(responseData);
            setMovieDetails({name: responseData.title, producer: responseData.producer})
        }
        pullData()
    },[])

    return (
        <div>
            Movie name: {movieDetails.name}, produced by: {movieDetails.producer}
        </div>
    )
}
