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
      props.callbackProblem(problem);
      setProblem(generateProblem(props.bounds));
      ansInput.current.value = '';
    }
  }

  return (
  <div>
      <div><Typography variant="h4">{`${problem[0]} ${problem[3]} ${problem[1]}`} = </Typography></div>
      <div><TextField inputRef={ansInput} autoFocus size="medium" onChange={({target}) => {handleTextField(target.value)}}></TextField></div>
  </div>
  );
}

export default Problem;