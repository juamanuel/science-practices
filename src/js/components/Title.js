import React from 'react'
import '../../css/title.scss'
const Title = (props) => {
    return (
        <div className="Title">
            <p>{props.title}</p>
        </div>
    )
}

export default Title