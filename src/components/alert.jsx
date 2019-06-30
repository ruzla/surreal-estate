import React from 'react';
import '../styles/alert.scss';

const Alert = ({ message, success }) => (
  <div className={`Alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

export default Alert;
