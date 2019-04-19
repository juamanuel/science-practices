import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import './axes.scss'
import api from '../../api.json'

class Axes extends Component{

    state= {
        loading: true,
        error: null,
        data : undefined,
        id: this.props.location.state.id,
        subject:"",
        subjectLink:""
    }

    componentDidMount(){
        this.fetchData()
    }


    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api
            this.setState({loading:false, data:data})
            this.getSubjectInfo()
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    getSubjectInfo = () =>{
        console.log(this.state.data)
        this.state.data.subjects.map(subject =>(
            subject.id === this.state.id ?
            this.setState({subject:subject.title, subjectLink:subject.link})
            : null
         ))
    }

    renderTitle = () => {
       return (
        this.state.data.subjects.map(subject =>(
            subject.id === this.state.id ?
                <Title
                    key={subject.id}
                    title={subject.title}
                />
            : null
         ))
       )
    }

    renderCards = () => {
            // eslint-disable-next-line no-unused-expressions
        return(
            <div className="Axes">
                {this.state.data.subjects.map(subject => (
                    subject.id === this.state.id ?
                    subject.axes.map(axe => (
                        <Card
                            key={axe.id}
                            title={axe.title}
                            image={axe.image}
                            width={axe.width}
                            height={axe.height}
                            link = {axe.link}
                        />
                    ))
                    : null
                ))}
            </div>
        )         
    }

   renderFooter = () => {
        return(
                    <Footer
                        home="Inicio > "
                        subject={this.state.subject}
                        routeSubject={this.state.subjectLink}
                        axes=""
                        routeAxes=""
                    />   
        )
     }
    render(){
        if(this.state.loading){
            return 'Loading ...'
        }
        return(
            <React.Fragment>
                {this.renderTitle()}
                {this.renderCards()}
                {this.renderFooter()}
            </React.Fragment>
        )
    }
}

export default Axes