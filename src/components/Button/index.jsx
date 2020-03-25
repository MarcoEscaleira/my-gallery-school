import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = (props) => {
  const [classColor, setClassColor] = useState("button-blue");

  useEffect(() => {
    switch (props.type) {
      case "red":
        setClassColor("button-red");
        break;
      case "green":
        setClassColor("button-green");
        break;
      default:
        setClassColor("button-blue")
    }
  }, [props.type]);

  return (
    <Link className={`button ${classColor}`} to={props.to}>
      {props.text}
    </Link>
  )
};

export default Button;
