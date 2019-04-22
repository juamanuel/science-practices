import React , {Component} from 'react'
import Title from '../../components/Title/Title'
import Subjects from '../../containers/Subjects/Subjects'

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Title
                    title="Elige una asignatura"
                />
                <Subjects/>
          </React.Fragment>
        )
    }
}

export default Home