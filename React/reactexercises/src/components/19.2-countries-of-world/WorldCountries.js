import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

export default function WorldCountries() {
    const [apiData,setApiData] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const pullData = async () => {
            const responseData = await ((await fetch('https://restcountries.com/v2/all/')).json())
            let tempArr = responseData.map(entry => {
                return entry.name
            })
            setApiData(tempArr)
        }
        pullData()
    }, []) //ComponentDidMount

    useEffect(() => {
        setSearchResults(apiData)
    }, [apiData]) //on setState of apiData, do the things inside useState

    const getSearchValue = (searchTerm) => {
        if(searchTerm !== '')
        {
            let temp = apiData.filter(country => {
                if(country.toLowerCase().includes(searchTerm.toLowerCase()))
                    return true
                return false
            })
            setSearchResults(temp)
        }
        else
            setSearchResults(apiData)
    }

    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <SearchBar returnFunction={getSearchValue}/>
            <ul>
                {searchResults.map((entry,index) => {
                    return <li key={index}>{entry}</li>
                })}
            </ul>
        </div>
    )
}
