import React, {Component} from 'react'
//import { Link} from 'react-router-dom'
//import Title from '../../components/Title/Title'
//import api from '../../api.json'


import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


class Practice extends Component {

   
    render(){

        return(
        <div className="Container">
            <Document
                file="https://res.cloudinary.com/juanlg/image/upload/v1555438028/ciencias-app/Practices/git_ahdeog.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={1} />
        </Document>
      </div>
    
        )
    }
}

export default Practice