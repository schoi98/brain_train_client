import React from 'react';

import { Typography, TextField } from '@material-ui/core';
const Problem = () => {


  return (
    <div>
      <div>
        <Typography>{first} {operation} {second} = </Typography>
        <TextField>Answer</TextField>
      </div>
    </div>
    
  );
}

export default Problem;