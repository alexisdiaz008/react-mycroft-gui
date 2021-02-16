import React, { Component, useState } from 'react';
import restingFace from './assets/images/black-hole.gif';
import './assets/css/Face.css';

const Face = () => {
  const [resting, setResting] = useState(true);
  return (
      <img
    src={restingFace}
      className="face row"
      alt="logo"
     />
  )
}

export default Face;
