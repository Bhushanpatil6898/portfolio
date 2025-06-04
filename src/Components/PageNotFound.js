// src/pages/PageNotFound.js
import React from 'react';

import { FaHome } from 'react-icons/fa'; // Home icon from react-icons

const PageNotFound = () => {
  

  const redirectToHome = () => {
    // Redirect to home page
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={styles.container}>
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <button
          onClick={redirectToHome}
          className="btn btn-primary btn-lg mt-3"
        >
          <FaHome style={{ marginRight: '8px' }} /> Go to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '200vh',  // Makes the container take up 100% of the viewport height
    backgroundColor: 'black',  // Optional: Change background color for the full page
  },
};

export default PageNotFound;
