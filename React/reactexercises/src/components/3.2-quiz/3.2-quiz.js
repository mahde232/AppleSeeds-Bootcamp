const QuizTitle = () => {
    return <h2>How Do You Like Front End?</h2>
}

const Q1Title = () => {
    return <h3>How Much you love front end?</h3>
}
const Q1Input = () => {
    return <input type='range' min='0' max='10' defaultValue='0'></input>
}
const Q1 = () => {
    return (
        <div>
        <Q1Title/>
        <Q1Input/>
        </div>
    )
}
const Q2Title = () => {
    return <h3>What is your favourite front end feature/topic?</h3>
}
const Q2Input = () => {
    return <input type='text'></input>
}
const Q2 = () => {
    return <div>
        <Q2Title/>
        <Q2Input/>
    </div>
}

const Quiz = () => {
    return <div>
        <Q1/>
        <Q2/>
    </div>
}

export default Quiz;