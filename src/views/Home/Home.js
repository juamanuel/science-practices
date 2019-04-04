import React , {Component} from 'react'
import Header from '../../containers/Header/Header'
import Title from '../../components/Title/Title'
import CardSection from '../../containers/CardSection/CardSection'
import Footer from '../../containers/Footer/Footer'
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