import React , {Component} from 'react'
import Header from '../../containers/Header/Header'
import Title from '../../components/Title/Title'
import Footer from '../../containers/Footer/Footer'
class Fisica extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
                    <Title
                        title="Física"
                    />
                <Footer/>
          </div>
        )
    }
}

export default Fisica