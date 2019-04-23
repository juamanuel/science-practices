import React , {Component} from 'react'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import api from '../../api.json'
import '../../css/styles.scss'

class Home extends Component {

    state= {
        loading: true,
        error: null,
        data : undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api
            this.setState({loading:false, data:data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    renderSubjects = () => {
        return(
            <div className="Container">
               {this.state.data.subjects.map(subject =>(
                   <Card
                    key={subject.id}
                    title= {subject.title}
                    image={subject.image}
                    width={subject.width}
                    height={subject.height}
                    link={subject.id}
                    idSubject={subject.id}
                   />
                ))}
            </div>
        )
    }
    render(){
        if(this.state.loading){
            return 'Loading ...'
        }
        return(
            <React.Fragment>
                <Title
                    title="Elige una asignatura"
                />
                {this.renderSubjects()}
          </React.Fragment>
        )
    }
}

export default Home