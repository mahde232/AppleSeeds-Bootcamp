import React from 'react';
import Joke from './Joke';

const categoriesURL = 'https://api.chucknorris.io/jokes/categories';
const getJokeFromCategoryURL = 'https://api.chucknorris.io/jokes/random?category='

class ChuckNorris extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jokeToShow: '',
            categoriesArray: []
        }
    }
    fetchRandomJoke = async () => {
        let joke = (await (await fetch(`https://api.chucknorris.io/jokes/random`)).json()).value;
        this.setState({
            jokeToShow: joke
        })
    }
    fetchJokeByCategory = async () => {
        let joke = (await (await fetch(getJokeFromCategoryURL + document.querySelector("#categoriesSelect").value)).json()).value;
        this.setState({
            jokeToShow: joke
        })
    }
    fetchCategories = async () => {
        let categories = (await (await fetch(categoriesURL)).json());
        this.setState({
            categoriesArray: categories
        })
    }
    componentDidMount = async () => {
        await this.fetchCategories();
        await this.fetchRandomJoke();
    }
    render() {
        return (
        <div>
            <select id='categoriesSelect'>
                {this.state.categoriesArray.map(element => {
                    return <option value={element}>{element.charAt(0).toUpperCase() + element.slice(1)}</option>
                })}
            </select>
            <button onClick={this.fetchJokeByCategory}>Give me a joke</button>
            <Joke jokeText={this.state.jokeToShow}></Joke>
        </div>
        )
    }
}

export default ChuckNorris;