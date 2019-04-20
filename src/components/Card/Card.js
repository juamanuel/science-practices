import React from 'react'
import { Link} from 'react-router-dom'
import './card.scss'

const Card = (props) => {
    return(
                <Link to={{pathname: props.link,state: {idSubject:props.idSubject,idAxe:props.idAxe}}} >
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