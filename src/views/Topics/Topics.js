import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import api from '../../api.json'

class Topics extends Component {
    state= {
        loading: true,
        error: null,
        data : undefined,
        idSubject: this.props.match.params.idSubject,
        idAxe: this.props.match.params.idAxe,
        idContent: this.props.match.params.idContent,
        url: this.props.match.params.url,
        subject:"",
        subjectLink:"",
        axe:"",
        content:"",
        topic:""
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api
            this.setState({loading:false, data:data})
           this.getFooterInfo()
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    renderTitle = () => {
        return (
         this.state.data.subjects.map(subject =>(
             subject.id === this.state.idSubject ?
                subject.axes.map(axe => (
                    axe.id === this.state.idAxe ?
                        axe.contents.map(content => (
                            content.id === this.state.idContent ?
                            <Title
                                key={content.id}
                                title={content.title}
                            /> :null
                        )) : null
                )) : null
          ))
        )
     }

     renderCards = () => {
        return (
         this.state.data.subjects.map(subject =>(
             subject.id === this.state.idSubject ?
                subject.axes.map(axe => (
                    axe.id === this.state.idAxe ?
                        axe.contents.map(content => (
                            content.id === this.state.idContent ?
                                content.topics.map(topic => (
                                    <Card
                                    key={topic.id}
                                    title={topic.title}
                                    image={topic.image}
                                    width={topic.width}
                                    height={topic.height}
                                    link={this.state.url +"/" + topic.id}
                                />
                                )) :null
                        )) : null
                )): null
          ))
        )
     }

     getFooterInfo = () =>{
        this.state.data.subjects.map(subject =>(
            subject.id === this.state.idSubject ?
                subject.axes.map(axe =>(
                    axe.id === this.state.idAxe ?
                    axe.contents.map(content => (
                        content.id === this.state.idContent ?
                            content.topics.map(topic => (
                                this.setState({subject:subject.title,axe: axe.title, content:content.title, topic:topic.title})
                            )) :null
                    ))  : null
                )) : null
         ))
    }

    renderFooter = () => {
        return(
            <Footer
                home="Inicio > "
                subject={this.state.subject}
                routeSubject={this.state.idSubject}
                axes={this.state.axe}
                routeAxes={this.state.idSubject+"/"+this.state.idAxe}
                content={this.state.content}
                routeContent={this.state.idSubject+"/"+this.state.idAxe+"/"+this.state.idContent}
            />   
        )
     }
    render(){
    
        if(this.state.loading){
            return 'Loading ...'
        }
        return (
            <React.Fragment>
                {this.renderTitle()}
                {this.renderCards()}
                {this.renderFooter()}            
            </React.Fragment>
        )
    }
}

export default Topics