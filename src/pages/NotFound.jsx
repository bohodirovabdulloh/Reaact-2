import React from 'react';
import { Link } from 'react-router-dom';
import '../Button/Button.css'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <button className="button">
        <Link to="/">Go back to Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
