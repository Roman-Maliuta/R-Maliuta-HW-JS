const userOrder = prompt(`Please  select the operation: 
Addition (Please input '+')
Subtraction (Please input '-')
Mult (Please input '*')
Division (Please input '/')
Exponentiation (Please input '**')
Returns the cosine of a number (Please input 'cos')
Returns the sine of a number (Please input 'sin')
`);

let numbreOne ; 
let numbreTwo ;

switch(userOrder) {
    case '+': 
        numbreOne = Number(prompt('Input first number'));
        numbreTwo = Number(prompt('Input second number'));
        alert(numbreOne + numbreTwo); break;
    case '-':
        numbreOne = Number(prompt('Input first number'));
        numbreTwo = Number(prompt('Input second number'));
        alert(numbreOne - numbreTwo); break;
    case '*':
        numbreOne = Number(prompt('Input first number'));
        numbreTwo = Number(prompt('Input second number'));
        alert(numbreOne * numbreTwo); break;
    case '/':
        numbreOne = Number(prompt('Input first number'));
        numbreTwo = Number(prompt('Input second number'));
        alert(numbreOne / numbreTwo); break;
    case '**':
        numbreOne = Number(prompt('Input number to raises'));
        numbreTwo = Number(prompt('Input number of power'));
        alert(numbreOne ** numbreTwo); break;
    case 'cos': 
        numbreOne= Number(prompt('Input number to need a returns the cosine (in radians)'));
        alert(Math.cos(numbreOne)); break;
    case 'sin':
        numbreOne = Number(prompt('Input number to need a returns the sine (in radians)'));
        alert(Math.sin(numbreOne)); break;
    default: alert('ALERT: Incorrect input! Please try again!');
}