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
        idSubject: this.props.match.params.idSubject,
        url:this.props.match.url,
        subject:""
    }

    componentDidMount(){
       //console.log(this.props);
        //console.log(this.props.match.params.id);
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
            this.setState({subject:subject.title})
            : null
         ))
    }

    renderTitle = () => {
       return (
        this.state.data.subjects.map(subject =>(
            subject.id === this.state.idSubject ?
                <Title
                    key={subject.id}
                    title={subject.title}
                /> : null
         ))
       )
    }

    renderCards = () => {
            // eslint-disable-next-line no-unused-expressions
        return(
            <div className="Axes">
                {this.state.data.subjects.map(subject => (
                    subject.id === this.state.idSubject ?
                    subject.axes.map(axe => (
                        <Card
                            key={axe.id}
                            title={axe.title}
                            image={axe.image}
                            width={axe.width}
                            height={axe.height}
                            link={this.state.url+"/"+axe.id}
                        />
                    )) : null
                ))}
            </div>
        )         
    }

   renderFooter = () => {
        return(
            <Footer
                home="Inicio > "
                idSubject={this.state.idSubject}
                subject={this.state.subject}
                routeSubject={this.state.idSubject}
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