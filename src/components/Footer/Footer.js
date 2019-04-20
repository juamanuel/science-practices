import React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'

const Footer = (props) => {
    return(
        <div className="Footer">
             <p>
                <Link to="/">{props.home}</Link> 
                <Link to={{pathname: props.routeSubject,state: {idSubject:props.idSubject}}}>{props.subject}</Link> 
                <Link to={props.routeAxes}>{props.axes}</Link>
             </p>
        </div>

    )
}

export default Footer