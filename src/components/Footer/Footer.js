import React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'

const Footer = (props) => {
    return(
        <div className="Footer">
             <p>
                <Link to="/">{props.home}</Link> 
                <Link to={props.routeSubject}>{props.subject}</Link> 
                <Link to={props.routeAxes}> > {props.axes}</Link>
             </p>
        </div>

    )
}

export default Footer