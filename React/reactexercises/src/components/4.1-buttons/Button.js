import './style.css'

const Button = ({name,weight}) => {
    return <input type='button' value = {name} style={{fontWeight: weight}}></input>
}

export default Button;