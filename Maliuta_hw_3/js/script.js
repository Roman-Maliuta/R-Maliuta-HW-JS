const userOrder = prompt(`Please  select the operation: 
Addition (Please input '+')
Subtraction (Please input '-')
Mult (Please input '*')
Division (Please input '/')
Exponentiation (Please input '**')
Returns the cosine of a number (Please input 'cos')
Returns the sine of a number (Please input 'sin')
`);

if (userOrder === '+') {
    const numbreOne = Number(prompt('Input first number'));
    const numbreTwo = Number(prompt('Input second number'));
    alert(numbreOne + numbreTwo);
} else if (userOrder === '-') {
    const numbreOne = Number(prompt('Input first number'));
    const numbreTwo = Number(prompt('Input second number'));
    alert(numbreOne - numbreTwo);
} else if (userOrder === '*') {
    const numbreOne = Number(prompt('Input first number'));
    const numbreTwo = Number(prompt('Input second number'));
    alert(numbreOne * numbreTwo);
} else if (userOrder === '/') {
    const numbreOne = Number(prompt('Input first number'));
    const numbreTwo = Number(prompt('Input second number'));
    alert(numbreOne / numbreTwo);
} else if (userOrder === '**') {
    const numbreOne = Number(prompt('Input number to raises'));
    const numbreTwo = Number(prompt('Input number of power'));
    alert(numbreOne ** numbreTwo);
} else if (userOrder === 'cos') {
    const cos = Number(prompt('Input number to need a returns the cosine (in radians)'));
    alert(Math.cos(cos));
} else if (userOrder === 'sin') {
    const sin = Number(prompt('Input number to need a returns the sine (in radians)'));
    alert(Math.sin(sin));
}  else {
    alert('ALERT: Incorrect input! Please try again!');
}


