import React , {Component} from 'react'
import Title from '../../components/Title/Title'
import Subjects from '../../containers/Subjects/Subjects'
import Footer from '../../components/Footer/Footer'

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Title
                    title="Elige una asignatura"
                />
                <Subjects/>
                <Footer
                    home=""
                    subject=""
                    axes=""
                    routeSubject=""
                    routeAxes=""  Å
                />
          </React.Fragment>
        )
    }
}

export default Home