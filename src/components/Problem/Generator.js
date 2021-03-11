

const generateAdd = (low1, up1, low2, up2) => {
  const x = Math.floor(Math.random() * Math.floor(up1 - low1)) + low1;
  const y = Math.floor(Math.random() * Math.floor(up2 - low2)) + low2;
  const ans = x + y;
  return [x, y, ans];
}

const generateSub = (low1, up1, low2, up2) => {
  const elements = generateAdd(low1, up1, low2, up2);
  const x = elements[2];
  const y = elements[0];
  const ans = elements[1];
  return [x, y, ans];
}

const generateMult = (low1, up1, low2, up2) => {
   const x = Math.floor(Math.random() * Math.floor(up1 - low1)) + low1;
   const y = Math.floor(Math.random() * (up2 - low2)) + low2;
   const ans = x * y;
   return [x, y, ans];
}

const generateDiv = (low1, up1, low2, up2) => {
  const elements = generateMult(low1, up1, low2, up2);
  const x = elements[2];
  const y = elements[0];
  const ans = elements[1];
  return [x, y, ans];
}

const generateProblem = (bounds) => {
  const [addLow1, addUp1, addLow2, addUp2, multLow1, multUp1, multLow2, multUp2] = bounds;
  const ops = "+-*/"
  let operation = '';
  let values = [];

  switch (ops[Math.floor(Math.random() * 4)]) {
    case '+':
      operation = '+';
      values = generateAdd(addLow1, addUp1, addLow2, addUp2);
      values.push(operation);
      return values;
    case '-':
      operation = '-';
      values = generateSub(addLow1, addUp1, addLow2, addUp2);
      values.push(operation);
      return values;
    case '*':
      operation = 'x';
      values = generateMult(multLow1, multUp1, multLow2, multUp2);
      values.push(operation);
      return values;
    case '/':
      operation = '÷';
      values = generateDiv(multLow1, multUp1, multLow2, multUp2);
      values.push(operation);
      return values;
    default:
      console.log('Something went wrong');
  }
}

export default generateProblem;