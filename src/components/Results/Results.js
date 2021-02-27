import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

const Results = (props) => {
  return (
    <div>
      <h2>Your score: {props.location.state.score}</h2>
      <Button component={Link} to="/" variant="contained">Go Home</Button>
    </div>
  )
}

export default Results;
