import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import { Typography } from '@material-ui/core';

const Timer = (props) => {

  const [time, setTime] = useState(props.time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
      console.log("stillg going");
      props.callback(time);
    }, 1000);
    return () => clearInterval(timer);
  })

  return (
    <Typography>Time Left: {time}</Typography>
  );
}

export default Timer;