import React from 'react'
import '../../css/card.scss'

const Card = (props) => {
    return(
        <div className="Card">
            <div className="Image">
                <img src={props.image}  height ={props.height} width={props.width} alt="Biología"/>
            </div>
            <div className="TitleCard">
                <p>{props.title}</p>
            </div>
        </div>
        
         

        
    )
}

export default Card