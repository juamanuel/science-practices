import React , {Component} from 'react'
import Header from '../containers/Header'
import Title from '../components/Title'
import CardSection from '../containers/CardSection'
class Home extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
                <Title
                    title="Elige una asignatura"
                />
                <CardSection/>
          </div>
        )
    }
}

export default Home