import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { AppBar, Typography, Button } from '@material-ui/core';

import Problem from '../Problem/Problem';
import Timer from './Timer';

const Drill = () => {

  const bounds = [2, 100, 2, 100, 2, 12, 2, 100];
  const startTime = 120;
  let [count, setCount] = useState(0);
  const [done, setDone] = useState(false);


  const goToResults = (time) => {
    if (time === 0) {
      setDone(true);
    }
  }

  const updateCount = () => {
    setCount(count = count + 1);
    console.log(count);
  }

  return (
    <div>
      {done ? <Redirect to={{pathname: "/results", state: {score: count}}} /> : null}
      <AppBar position="static" color="inherit">
        <Timer time={startTime} callback={goToResults} />
        <Typography> Problems Solved: {count} </Typography>
      </AppBar>
      <Problem bounds={bounds} callbackProblem={updateCount}/>
      <Button component={Link} to="/results" >GO TO RESULTS</Button>
    </div>
  )
}

export default Drill;