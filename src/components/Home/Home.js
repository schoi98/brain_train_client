import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core';

const Home = () => {
  const bounds =  [2, 100, 2, 100, 2, 12, 2, 100];
  const time = 120;

  return (
    <div>
      <Typography variant="h3">Welcome to Brain Train</Typography>
      <Typography variant="body"> Brain Train is a personalized mental math training website for you to hone your arithmetic calculations.
      It can be used for interview preparation, math competition preparations, or just for fun. This website was heavily inspired by the website
      arithmetic.zetamac.com. It is probably the cleanest and simplest tool out there to practice arithmetic on. I developed this website as a side project
      to add some additional functionalites (like tracking personal performance and seeing what problems I struggle with).
      </Typography>
      <div>
        <Button component={Link} to={{pathname: "/problems", state: {bounds: bounds, time: time}}} variant="contained">Start</Button>
      </div>
    </div>
    
  );
}

export default Home;