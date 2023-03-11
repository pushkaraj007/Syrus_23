import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;


const DisplayPdf = () => {

    const [pdfLink, setPdfLink] = useState('https://firebasestorage.googleapis.com/v0/b/syrus-34820.appspot.com/o/material%2F4%2Fscience%2Fresources%2Fsciencechp1?alt=media&token=98676812-a4ee-43c2-825b-4d87ed021650');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const handlePdfLinkChange = (event) => {
        setPdfLink(event.target.value);
    };

    const handleError = (error) => {
        setError(error);
    };


    return (
        <div>
            <input type="text" value={pdfLink} onChange={handlePdfLinkChange} />

            {error && <div>Error: {error.message}</div>}

            <Document
                file={pdfLink}
                workerSrc={`${process.env.PUBLIC_URL}/pdf.worker.js`}
                onLoadError={handleError}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>

            {numPages && (
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            )}

            <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
                Previous Page
            </button>

            <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
                Next Page
            </button>
        </div>
    )
}

export default DisplayPdf