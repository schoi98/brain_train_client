import React from 'react';

import { AppBar, Typography } from '@material-ui/core';

import Problem from '../Problem/Problem';

const Drill = () => {
  const timer = 0;
  let count = 0; // Use state hooks later to update value of counter

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography> Time Left: {timer}</Typography>
        <Typography> Problems Solved: {count} </Typography>
      </AppBar>
      <Problem />
    </div>
  )
}

export default Drill;