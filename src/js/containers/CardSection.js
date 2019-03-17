import React, {Component} from 'react'
import Card from '../components/Card'
import '../../css/cardsection.scss'
import Biology from '../../images/subjects/biology.svg'
import Physics from '../../images/subjects/physics.svg'
import Chemistry from '../../images/subjects/chemistry.svg'

class CardSection extends Component {
    render(){
        return(
            <div className="CardSection">
                <Card
                    title="Biología"
                    image = {Biology}
                    width = "200"
                    height ="200"
                />
                <Card
                    title="Física"
                    image = {Physics}
                    width = "200"
                    height ="200"
                />
                <Card
                    title="Química"
                    image = {Chemistry}
                    width = "200"
                    height ="200"
                />
            </div>

        )
    }
}

export default CardSection