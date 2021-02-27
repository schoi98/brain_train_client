import React, { useState, useRef } from 'react';

import { Typography, TextField } from '@material-ui/core';

import generateProblem from './Generator';

const Problem = (props) => {

  let [problem, setProblem] = useState([]);
  if (problem.length < 1) {
    problem = generateProblem(props.bounds);
  }
  const ansInput = useRef(null);

  const handleTextField = (ans) =>  {
    if (parseInt(ans) && parseInt(ans) === problem[2]) {
      setProblem(generateProblem(props.bounds));
      props.callbackProblem();
      ansInput.current.value = '';
    }
  }

  return (
  <div>
    <div>
      <Typography>{`${problem[0]} ${problem[3]} ${problem[1]}`} = </Typography>
      <TextField inputRef={ansInput} autoFocus onChange={({target}) => {handleTextField(target.value)}}></TextField>
    </div>
  </div>
  );
}

export default Problem;