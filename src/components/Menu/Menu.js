/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import './menu.scss'

const Menu = () => {
    return (     
        <div className="Menu">
             <ul>
                    <Link to ="/">
                      <li>Prácticas de Ciencias</li>
                    </Link>
                    <li><a href="https://twitter.com/juan_lg">JML 2019</a></li>
                </ul>
        </div>
    )
  }
export default Menu