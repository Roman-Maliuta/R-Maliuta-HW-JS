let userOrder;
let numbreOne ; 
let numbreTwo ;
let numTestOne;
let numTestTwo;
let result;
let newOrder;
let history;

function checkingNumOne() {
  do { 
    numbreOne = prompt('Input first number');
    numTestOne = +numbreOne;
  } while (Boolean(numbreOne) === false || numTestOne !== +numbreOne);
}

function checkingNumTwo() {
  do { 
    numbreTwo = prompt('Input second number');
    numTestTwo = +numbreTwo;
  } while (Boolean(numbreTwo) === false || numTestTwo !== +numbreTwo);

}

function checkingNumRais() {
  do { 
    numbreOne = prompt('Input number to raises');
    numTestOne = +numbreOne;
  } while (Boolean(numbreOne) === false || numTestOne !== +numbreOne);
}

function checkingNumPow() {
  do { 
    numbreTwo = prompt('Input number of power');
    numTestTwo = +numbreTwo;
  } while (Boolean(numbreTwo) === false || numTestTwo !== +numbreTwo);

}

function checkingNumCos() {
  do { 
    numbreOne = prompt('Input number to need a returns the cosine (in radians)');
    numTestOne = +numbreOne;
  } while (Boolean(numbreOne) === false || numTestOne !== +numbreOne);
}

function checkingNumSin() {
  do { 
    numbreOne = prompt('Input number to need a returns the sine (in radians)');
    numTestOne = +numbreOne;
  } while (Boolean(numbreOne) === false || numTestOne !== +numbreOne);
}

function addition(numbreOne, numbreTwo) {
  result = +numbreOne + +numbreTwo;
  return result;
}

function subtraction(numbreOne, numbreTwo) {
  result = +numbreOne - +numbreTwo;
  return result;
}

function multiplication(numbreOne, numbreTwo) {
  result = +numbreOne * +numbreTwo;
  return result;
}

function division(numbreOne, numbreTwo) {
  result = +numbreOne / +numbreTwo;
  return result;
}

function exponentiation(numbreOne, numbreTwo) {
  result = (+numbreOne) ** +numbreTwo;
  return result;
}

function cos(numbreOne) {
  result =  Math.cos(+numbreOne);
  return result;
}

function sin(numbreOne) {
  result =  Math.sin(+numbreOne);
  return result;
}

do {
      userOrder = prompt(
     `Please  select the operation: 
      Addition (Please input '+')
      Subtraction (Please input '-')
      Multiplication (Please input '*')
      Division (Please input '/')
      Exponentiation (Please input '**')
      Returns the cosine of a number (Please input 'cos')
      Returns the sine of a number (Please input 'sin')`
      );
    } while ( userOrder !== '+' &&  
       userOrder !== '-' && 
       userOrder !== '*' && 
       userOrder !== '/' && 
       userOrder !== '**' && 
       userOrder !== 'cos' && 
       userOrder !== 'sin'|| 
       Boolean(userOrder) === false
      );

switch(userOrder) {

    case '+': 
     checkingNumOne();
     
     checkingNumTwo();

     addition(numbreOne, numbreTwo);

     history = `Addition: ${+numbreOne} + ${+numbreTwo} = ${result}`;

     alert(`Operation Addition finished with result ${result}`); break;

    case '-':
      checkingNumOne();
     
      checkingNumTwo();
 
      subtraction(numbreOne, numbreTwo);

      history = `Subtraction: ${+numbreOne} - ${+numbreTwo} = ${result}`;

      alert(`Operation Subtraction finished with result ${result}`); break;

    case '*':
      checkingNumOne();
     
      checkingNumTwo();
 
      multiplication(numbreOne, numbreTwo);

      history = `Multiplication: ${+numbreOne} * ${+numbreTwo} = ${result}`;

      alert(`Operation Multiplication finished with result ${result}`); break;

    case '/':
      checkingNumOne();
     
      checkingNumTwo();
 
      division(numbreOne, numbreTwo);

      history = `Division: ${+numbreOne} / ${+numbreTwo} = ${result}`;

      alert(`Operation Division finished with result ${result}`); break;

    case '**':
      checkingNumRais(); 
     
      checkingNumPow();
 
      exponentiation(numbreOne, numbreTwo);

      history = `Exponentiation: ${+numbreOne}  raises to  ${+numbreTwo} = ${result}`;

      alert(`Operation Exponentiation finished with result ${result}`); break;

    case 'cos':
      checkingNumCos();

      cos(numbreOne);

      history = `Returns the cosine of a ${+numbreOne} finished with result ${result}`;

      alert(`Operation Returns the cosine of a number finished with result ${result}`); break;

    case 'sin':
      checkingNumSin();

      sin(numbreOne);

      history = `Returns the sine of a ${+numbreOne} finished with result ${result}`;

      alert(`Operation Returns the sine of a number finished with result ${result}`); break;
};

const array = ['Operation history:'];

array[array.length] = history;



newOrder = confirm(`Would you like to do any other operation?`);

while (newOrder=== true) {
  do {
    userOrder = prompt(
   `Please  select the operation: 
    Addition (Please input '+')
    Subtraction (Please input '-')
    Multiplication (Please input '*')
    Division (Please input '/')
    Exponentiation (Please input '**')
    Returns the cosine of a number (Please input 'cos')
    Returns the sine of a number (Please input 'sin')
    History of operation (Please input 'h')`
    );
  } while ( userOrder !== '+' &&  
     userOrder !== '-' && 
     userOrder !== '*' && 
     userOrder !== '/' && 
     userOrder !== '**' && 
     userOrder !== 'cos' && 
     userOrder !== 'sin' &&
     userOrder !== 'h'|| 
     userOrder === ''
    );

 switch(userOrder) {
   case '+': 
     checkingNumOne();
     
     checkingNumTwo();

     addition(numbreOne, numbreTwo);

     history = `Addition: ${+numbreOne} + ${+numbreTwo} = ${result}`;

     alert(`Operation Addition finished with result ${result}`); break;

   case '-':
     checkingNumOne();
     
     checkingNumTwo();

     subtraction(numbreOne, numbreTwo);

     history = `Subtraction: ${+numbreOne} - ${+numbreTwo} = ${result}`;

     alert(`Operation Subtraction finished with result ${result}`); break;

   case '*':
     checkingNumOne();
     
     checkingNumTwo();

     multiplication(numbreOne, numbreTwo);

     history = `Multiplication: ${+numbreOne} * ${+numbreTwo} = ${result}`;

     alert(`Operation Multiplication finished with result ${result}`); break;

   case '/':
     checkingNumOne();
     
     checkingNumTwo();

     division(numbreOne, numbreTwo);

     history = `Division: ${+numbreOne} / ${+numbreTwo} = ${result}`;

     alert(`Operation Division finished with result ${result}`); break;

   case '**':
     checkingNumRais(); 
     
     checkingNumPow();

     exponentiation(numbreOne, numbreTwo);

     history = `Exponentiation: ${+numbreOne}  raises to  ${+numbreTwo} = ${result}`;

     alert(`Operation Exponentiation finished with result ${result}`); break;

   case 'cos':
     checkingNumCos();

     cos(numbreOne);

     history = `Returns the cosine of a ${+numbreOne} finished with result ${result}`;

     alert(`Operation Returns the cosine of a number finished with result ${result}`); break;

   case 'sin':
     checkingNumSin();

     sin(numbreOne);

     history = `Returns the sine of a ${+numbreOne} finished with result ${result}`;

     alert(`Operation Returns the sine of a number finished with result ${result}`); break;

   case 'h':
      let i = 1;

      while(i < array.length) {
        console.log(`Operation ${i}: ${array[i]}`); 
      i++;
      }; break;
  };

 array[array.length] = history;
 newOrder = confirm(`Would you like to do any other operation?`);
};