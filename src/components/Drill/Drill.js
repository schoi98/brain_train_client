import React from 'react';

import { AppBar, Typography } from '@material-ui/core';

import Problem from '../Problem/Problem';
import GenerateProblem from '../Problem/Generator';

const Drill = () => {
  const timer = 0;
  const bounds = [2, 100, 2, 100, 2, 12, 2, 100];

  let count = 0;

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography> Time Left: {timer}</Typography>
        <Typography> Problems Solved: {count} </Typography>
      </AppBar>
      <Problem bounds={bounds}/>
    </div>
  )
}

export default Drill;