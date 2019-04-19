import React from 'react'
import Card from '../../components/Card/Card'

/*const data = [
    { id:"1", title: 'Propiedades',image:"/static/media/propiedades.074fe94f.svg", width:'200',height:'200',link:'1/propiedades'},
    { id:"2",title: 'Interacciones',image:"/static/media/interacciones.e663c9e3.svg", width:'200',height:'200',link:'1/interacciones'},
    { id:"3",title: 'Naturaleza macro, micro y submicro ',image:"/static/media/naturaleza.8d51b8db.svg", width:'200',height:'200',link:'1/naturaleza'},
    { id:"4",title: 'Fuerzas',image:"/static/media/fuerzas.cc99854b.svg", width:'200',height:'200',link:'1/fuerzas'},
    { id:"5",title: 'Energía',image:"/static/media/energia.387be170.svg", width:'200',height:'200',link:'1/energia'}
 ]*/

const Content  = (props) =>{
   // const data = {props.data}
   return props.data.map(item =>(
        <Card key={item.id}
            title={item.title}
            image = {item.image}
            width = {item.width}
            height ={item.height}
            link = {item.link}
        />
    ))
}

export default Content
