import React, {Component} from 'react'
import Title from '../../components/Title/Title'
//import Footer from '../../components/Footer/Footer'
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
        subject:"",
        subjectLink:"",
        axe:"",
        url: this.props.match.params.url
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api
            this.setState({loading:false, data:data})
           //this.getFooterInfo()
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
                            />
                            :null
                        )) 
                    : null
                ))
             : null
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
                        )) 
                    : null
                ))
             : null
          ))
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
                
            </React.Fragment>
        )
    }
}

export default Topics