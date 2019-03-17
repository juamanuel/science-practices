import React , {Component} from 'react'
import Header from '../containers/Header'
import Title from '../components/Title'
import CardSection from '../containers/CardSection'
import Footer from '../containers/Footer'
class Home extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
                <Title
                    title="Elige una asignatura"
                />
                <CardSection/>
                <Footer/>
          </div>
        )
    }
}

export default Home