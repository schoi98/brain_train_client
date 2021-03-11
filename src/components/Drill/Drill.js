import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { AppBar, Typography, Button } from '@material-ui/core';

import Problem from '../Problem/Problem';
import Timer from './Timer';

const Drill = (props) => {
  const bounds = props.location.state.bounds;
  const startTime = props.location.state.time;
  let problems = [];
  let [count, setCount] = useState(0);
  const [done, setDone] = useState(false);


  const goToResults = (time) => {
    if (time === 0) {
      setDone(true);
    }
  }

  const handleProblemSolved = (problem) => {
    setCount(count = count + 1);
    problems = [ ...problems, problem];
    console.log(problems);
  }

  return (
    <div>
      {done ? <Redirect to={{pathname: "/results", state: {score: count, bounds: bounds, time: startTime}}} /> : null}
      <AppBar position="static" color="inherit">
        <Timer time={startTime} callback={goToResults} />
        <Typography> Problems Solved: {count} </Typography>
      </AppBar>
      <Problem bounds={bounds} callbackProblem={handleProblemSolved}/>
    </div>
  )
}

export default Drill;