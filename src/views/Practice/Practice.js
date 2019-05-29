import React, {Component} from 'react'


import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


class Practice extends Component {
    state = {
        numPages: null,
      }

      onDocumentLoadSuccess = (document) => {
        const { numPages } = document
        this.setState({numPages})
      }

    render(){
        const { numPages } = this.state;

        return(
        <div className="Container">
            <Document
                file="https://res.cloudinary.com/juanlg/image/upload/v1555438028/ciencias-app/Practices/git_ahdeog.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
                loading= {<div>Cargando documento ...</div>}
            >
            {Array.from(
                new Array(numPages),
                (el, index) => (
                    <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    />
                ),
        )}
            </Document>
      </div>
    
        )
    }
}

export default Practice