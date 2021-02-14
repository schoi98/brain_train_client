import React from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <Typography variant="h3">Welcome to Brain Train</Typography>
      <Typography variant="body"> Brain Train is a personalized mental math training website for you to hone your arithmetic calculations.
      It can be used for interview preparation, math competition preparations, or just for fun.
      </Typography>
      <div>
        <Button onClick={() => {console.log("Start")}}>Start</Button>
      </div>
    </div>
    
  );
}

export default Home;