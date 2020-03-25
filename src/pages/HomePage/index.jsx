import React from 'react';
import Button from '../../components/Button';
import './homePage.css';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      
      <Button to="/gallery" text="Go to gallery" type="red" />
      <Button to="/about" text="Go to About" type="green" />
    </div>
  )
};

export default HomePage;