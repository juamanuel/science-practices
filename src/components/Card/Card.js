import React from 'react'
import { Link} from 'react-router-dom'
//import Ejes from '../../views/Ejes/Ejes'
import './card.scss'

const Card = (props) => {
    return(
                <Link to={props.link}>
                    <div className="Card">
                        <div className="Image">
                            <img src={props.image}  height ={props.height} width={props.width} alt="Biología"/>
                        </div>
                        <div className="TitleCard">
                            <p>{props.title}</p>
                        </div>
                    </div>
                </Link>
    )
}

export default Card