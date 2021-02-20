import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core';

const Home = () => {

  return (
    <div>
      <Typography variant="h3">Welcome to Brain Train</Typography>
      <Typography variant="body"> Brain Train is a personalized mental math training website for you to hone your arithmetic calculations.
      It can be used for interview preparation, math competition preparations, or just for fun.
      </Typography>
      {/* <form>
        create range of values here
      </form> */}
      <div>
        <Button component={Link} to="/problems" variant="contained">Start</Button>
      </div>
    </div>
    
  );
}

export default Home;