import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import './content.scss'
import api from '../../api.json'

class Content extends Component{
     state= {
        loading: true,
        error: null,
        data : undefined,
        idSubject: this.props.location.state.idSubject,
        idAxe: this.props.location.state.idAxe,
        subject:"",
        subjectLink:"",
        axe:"",
        axeLink:""
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

    getFooterInfo = () =>{
        this.state.data.subjects.map(subject =>(
            subject.id === this.state.idSubject ?
                subject.axes.map(axe =>(
                    axe.id === this.state.idAxe ?
                    this.setState({subject:subject.title, subjectLink:subject.link,axe: axe.title, axeLink:axe.link})
                    : null
                ))
            : null
         ))
    }

    renderTitle = () => {
        return (
         this.state.data.subjects.map(subject =>(
             subject.id === this.state.idSubject ?
                subject.axes.map(axe => (
                    axe.id === this.state.idAxe ?
                        <Title
                        key={axe.id}
                        title={axe.title}
                    />
                    : null
                ))
             : null
          ))
        )
     }

     renderCards = () => {
        return (
            <div className="Content">
                {
                    this.state.data.subjects.map(subject =>(
                        subject.id === this.state.idSubject ?
                            subject.axes.map(axe =>(
                                axe.id === this.state.idAxe ?
                                    axe.contents.map(content =>(
                                        <Card
                                            key={content.id}
                                            idSubject={subject.id}
                                            idAxe={axe.id}
                                            idContent={content.id}
                                            title={content.title}
                                            image={content.image}
                                            width={content.width}
                                            height={content.height}
                                            link = {content.link}
                                        />
                                    )) :null
                            )) :null
                    )) 
                }

            </div>
        )
     }
     renderFooter = () => {
        return(
            <Footer
                home="Inicio > "
                subject={this.state.subject}
                routeSubject={this.state.subjectLink}
                axes={this.state.axe}
                routeAxes={this.state.axeLink}
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
           </React.Fragment>
            
        )
    }

}

export default Content