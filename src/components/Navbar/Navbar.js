/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (     
        <div className="Navbar">
             <ul>
                    <Link to ="/">
                      <li>Prácticas de Ciencias</li>
                    </Link>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/juan_lg" >JML 2019</a></li>
                </ul>
        </div>
    )
  }
export default Navbar