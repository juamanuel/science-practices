import React , {Component} from 'react'
import Menu from '../../components/Menu/Menu'
import './header.scss'
class Header extends Component {
    render(){
        return(
            <div className="Header">
                <Menu/>
            </div>
                
        )
    }
}

export default Header