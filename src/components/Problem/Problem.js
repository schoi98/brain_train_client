import React from 'react';

import { Typography, TextField } from '@material-ui/core';
const Problem = () => {
  const checkAnswer = () => {
    // check answer
  }

  const updateProblem = () => {
    // give new problem, each time state is updated, carry over count to Drill.js
  }

  return (
    <div>
      <div>
        <Typography>1 + 1 = </Typography>
    
        <TextField>Answer</TextField>
      </div>
    </div>
    
  );
}

export default Problem;