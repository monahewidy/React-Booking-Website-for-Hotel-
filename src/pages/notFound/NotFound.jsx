// NotFound.js file in notFound folder in pages
import React from 'react';
import './notFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/" className="btn-home">Return to Homepage</a>
    </div>
  );
};

export default NotFound;