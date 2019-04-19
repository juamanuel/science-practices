import React from 'react'
import './maincontainer.scss'

const MainContainer = (props) => {
    return (     
        <div className="MainContainer">
             {props.children}
        </div>
    )
  }

  export default MainContainer