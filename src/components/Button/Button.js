import React from 'react'
import './button.scss'

const Button = (props) => {
    return(
        <div className="Container">
            <div className="Button">
                <a href={props.src} download={props.practiceName} target="_blank" rel="noopener noreferrer" >
                    <p>{props.title}</p>
            </a>
            </div>
        </div>
    )
}

export default Button