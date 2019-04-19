import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import Footer from '../../components/Footer/Footer'
class Topics extends Component {
    state = {
        loading:true,
        error:null,
        //data:undefined
        data:[
            { id:"1", title: 'Propiedades',image:"https://res.cloudinary.com/juanlg/image/upload/v1555434561/ciencias-app/Physics/propiedades_fnqppd.svg", width:'200',height:'200',link:'1/propiedades'},
            { id:"2",title: 'Interacciones',image:"https://res.cloudinary.com/juanlg/image/upload/v1555434561/ciencias-app/Physics/interacciones_dmclxn.svg", width:'200',height:'200',link:'1/interacciones'},
            { id:"3",title: 'Naturaleza macro, micro y submicro ',image:"https://res.cloudinary.com/juanlg/image/upload/v1555434561/ciencias-app/Physics/naturaleza_spuav6.svg", width:'200',height:'200',link:'1/naturaleza'},
            { id:"4",title: 'Fuerzas',image:"https://res.cloudinary.com/juanlg/image/upload/v1555434561/ciencias-app/Physics/fuerzas_fqthtw.svg", width:'200',height:'200',link:'1/fuerzas'},
            { id:"5",title: 'Energía',image:"https://res.cloudinary.com/juanlg/image/upload/v1555434561/ciencias-app/Physics/energia_t2v0qu.svg", width:'200',height:'200',link:'1/energia'}
         ]
    }    
    render(){
        return (
            <React.Fragment>
                <Title
                title="Titulo"
                />
                <Footer
                  home="Inicio > "
                  subject="Física > "
                  axes="Materia, energía e interacciones"
                  routeSubject="/fisica"
                  routeAxes="/fisica/1"  
                />
            </React.Fragment>
        )
    }
}

export default Topics