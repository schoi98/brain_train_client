import React from 'react';

import { Typography, TextField } from '@material-ui/core';
class Problem extends React.Component {

  constructor(props) {
    super(props);
    this.operation = '';
    this.x = 0;
    this.y = 0;
    this.ans = 0;
    this.solved = false;
    this.generateProblem();
  }

  generateXAddSub = () => {
    return Math.floor(Math.random() * Math.floor(this.props.upperBound - this.props.lowerBound)) + this.props.lowerBound;
  }

  generateYAddSub = () => {
    return Math.floor(Math.random() * Math.floor(this.props.upperBound - this.props.lowerBound)) + this.props.lowerBound;
  }

  generateXMultDiv = () => {
     return Math.floor(Math.random() * Math.floor(this.props.mdUpperBound - this.props.lowerBound)) + this.props.lowerBound;
  }

  generateYMultDiv = () => {
    return Math.floor(Math.random() * Math.floor(this.props.upperBound - this.props.lowerBound)) + this.props.lowerBound;
  }

  generateProblem = () => {
    const ops = "+-*/"
    const op = Math.floor(Math.random() * 3);
    switch (ops[op]) {
      case '+':
        this.operation = '+';
        this.x = this.generateXAddSub();
        this.y = this.generateYAddSub();
        this.ans = this.x + this.y;
        break;
      case '-':
        this.operation = '-';
        this.x = this.generateXAddSub();
        this.y = this.generateYAddSub()
        this.ans = this.x - this.y;
        break;
      case '*':
        this.operation = 'x';
        this.x = this.generateXMultDiv();
        this.y = this.generateYMultDiv()
        this.ans = this.x * this.y;
        break;
      case '/':
        this.operation = '/';
        this.x = this.generateXAddSub();
        this.y = this.generateYAddSub()
        this.ans = this.x + this.y;
        break;
      default:
        console.log('Something went wrong');
    }
  }

  handleTextField = (e) =>  {
    const ans = e.target.value;
    console.log(ans);
    if (parseInt(ans) && parseInt(ans) === this.ans) {
      console.log("correct")
      this.generateProblem();
      this.solved = !this.solved;
    }
  }

  render() {
    return (
    <div>
      <div>
        <Typography>{this.solved ? this.x + " " + this.operation + " " + this.y : this.x + " " + this.operation + " " + this.y} = </Typography>
        <form>
          <TextField  onChange={this.handleTextField}>Answer</TextField>
        </form>
      </div>
    </div>
    );
  }
}

export default Problem;