import React from 'react';

import { Typography } from '@material-ui/core';

import Problem from '../Problem/Problem';

const Drill = () => {
  const timer;
  const count;

  return (
    <div>
      <Typography> Time Left: {timer}</Typography>
      <Typography> Problems Solved: {count} </Typography>
      <Problem first={first} second={second} operation={operation}/>
    </div>
  )
}