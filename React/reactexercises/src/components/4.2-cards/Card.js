import './style.css'

const Card = ({imgURL, title, description}) => {
    return <div className='card'>
        <img src={imgURL} repeat='no-repeat' height='200px'></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <div><a href='#' className='link'>Share</a> <a href='#' className='link'>Explore</a></div>
    </div>
}

export default Card;