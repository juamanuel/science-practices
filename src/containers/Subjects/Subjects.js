import React, {Component} from 'react'
import Card from '../../components/Card/Card'
import './subjects.scss'
import data from '../../api.json'

class Subjects extends Component {
    render(){
        return(
            <div className="Subjects">
               {data.subjects.map(subject =>(
                   <Card
                    key={subject.id}
                    title= {subject.title}
                    image={subject.image}
                    width={subject.width}
                    height={subject.height}
                    link={subject.link}
                    id={subject.id}
                   />
                ))}
            </div>

        )
    }
}

export default Subjects