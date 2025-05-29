import React, { useState } from 'react';
import { BsDownload, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const handleResize = () => {
    setwid(window.innerWidth);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      {numPages > 1 && (
        <div className="pagination d-flex justify-content-center align-items-center mt-3">
          <button
            className={`page-btn ${pageNumber <= 1 ? 'disabled' : ''}`}
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
          >
            <BsChevronLeft size={20} />
          </button>

          <span className="page-info mx-3">Page {pageNumber} of {numPages}</span>

          <button
            className={`page-btn ${pageNumber >= numPages ? 'disabled' : ''}`}
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
          >
            <BsChevronRight size={20} />
          </button>
        </div>
      )}

      <a href={pdf} target='_blank' download="Bhushan Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
