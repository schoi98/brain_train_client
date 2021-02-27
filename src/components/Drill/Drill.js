import React from 'react';

import { AppBar, Typography } from '@material-ui/core';

import Problem from '../Problem/Problem';

const Drill = () => {
  const timer = 0;
  const lowerBound = 2;
  const upperBound = 100;
  const mdUpperBound = 12;

  let count = 0;
  
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography> Time Left: {timer}</Typography>
        <Typography> Problems Solved: {count} </Typography>
      </AppBar>
      <Problem lowerBound={lowerBound} upperBound={upperBound} mdUpperBound={mdUpperBound}/>
    </div>
  )
}

export default Drill;