import React from 'react'
import { Link} from 'react-router-dom'
import './card.scss'

const Card = (props) => {
    //console.log(props.link)
    return(
                <Link to={{pathname: `${props.link}`}} >
                    <div className="Card">
                        <div className="Image">
                            <img src={props.image}  height ={props.height} width={props.width} alt={props.title}/>
                        </div>
                        <div className="TitleCard">
                            <p>{props.title}</p>
                        </div>
                    </div>
                </Link>
    )
}

export default Card