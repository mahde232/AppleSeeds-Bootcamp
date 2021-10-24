import React, { Component } from 'react'
// import AvatarCard from './AvatarCard'
import SearchBar from './SearchBar'
import AvatarCards from './AvatarCards'
import './style.css'

export default class Avatars extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayOfPeople: [],
            searchTerm: ''
        }
    }
    fetch_N_people = async (n) => {
        const response = (await (await fetch(`https://randomuser.me/api/?results=${n}`)).json()).results;
        let cleanedData = response.map(element => {
            return {
                name: `${element.name.first} ${element.name.last}`,
                pictureURL: element.picture.large
            }
        })
        this.setState({
            arrayOfPeople: cleanedData
        })
    }
    getFilteringValue = (value) => {
        this.setState({
            searchTerm: value
        })
    }
    componentDidMount = async () => {
        await this.fetch_N_people(10);
    }
    render = () => {
        console.log(this.state.arrayOfPeople);
        const {arrayOfPeople, searchTerm} = this.state;
        const filteredPeople = arrayOfPeople.filter(person=> {
            return person.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        console.log('filteredpeople=',filteredPeople);
        return (
            <div style={{display:'flex',flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2vh'}}>
                    <SearchBar returnFunction={this.getFilteringValue} />
                </div>
                <AvatarCards people={filteredPeople} />
            </div>
        )
    }
}
