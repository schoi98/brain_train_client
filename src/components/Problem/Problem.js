import React, { useState, useEffect} from 'react';

import { Typography, TextField } from '@material-ui/core';

import generateProblem from './Generator';

const Problem = (props) => {

  let values = [];
  const [solved, setSolved] = useState(false);

  if (values.length < 1) {
    values = generateProblem(props.bounds[0], props.bounds[1], props.bounds[2], props.bounds[3],
      props.bounds[4], props.bounds[5], props.bounds[6], props.bounds[7]);
  }

  const updateProblem = () => {
    values = generateProblem(props.bounds[0], props.bounds[1], props.bounds[2], props.bounds[3],
      props.bounds[4], props.bounds[5], props.bounds[6], props.bounds[7]);
  }

  const handleTextField = (ans) =>  {
    if (parseInt(ans) && parseInt(ans) === values[2]) {
      console.log('yey')
      setSolved(true);
      updateProblem();
      console.log(values);
    }
  }

  return (
  <div>
    <div>
      <Typography>{`${values[0]} ${values[3]} ${values[1]}`} = </Typography>
      <TextField  onChange={(e) => {handleTextField(e.target.value)}}></TextField>
    </div>
  </div>
  );
}

export default Problem;