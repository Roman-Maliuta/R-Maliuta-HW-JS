let userOrder;
let numbreOne ; 
let numbreTwo ;
let numTestOne;
let numTestTwo;
let result;
let newOrder;

const array = ['Operation history:'];

do {
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
     userOrder !== 'h' &&
     userOrder !== null
    );

 if (userOrder === '+' || userOrder === '-' || userOrder === '*' || userOrder === '/' || userOrder === '**') {
   do { 
     if (userOrder === '**') {
      numbreOne = prompt('Input number to raises');
    } else  {
      numbreOne = prompt('Input first number');
    };  
    numTestOne = +numbreOne;
   }  while (numbreOne === '' || numbreOne ===  null || numTestOne !== +numbreOne);

   do {
    if (userOrder === '**') {
      numbreTwo = prompt('Input number of power');
    } else  {
      numbreTwo = prompt('Input second number');
    }; 
    numTestTwo = +numbreTwo;
   } while (numbreTwo === '' || numbreTwo ===  null || numTestTwo !== +numbreTwo);

   if (userOrder=== '+') {
    result = +numbreOne + +numbreTwo;
  
    array[array.length] = `Addition: ${+numbreOne} + ${+numbreTwo} = ${result}`;
 
    alert(`Operation Addition finished with result ${result}`);

   } else if (userOrder === '-') {
    result = +numbreOne - +numbreTwo;

    array[array.length] = `Subtraction: ${+numbreOne} - ${+numbreTwo} = ${result}`;
  
    alert(`Operation Subtraction finished with result ${result}`);

   } else if (userOrder === '*') {
    
    result = +numbreOne * +numbreTwo;

    array[array.length] = `Multiplication: ${+numbreOne} * ${+numbreTwo} = ${result}`;

    alert(`Operation Multiplication finished with result ${result}`);

   }  else if (userOrder === '/') {
       
    result = +numbreOne / +numbreTwo;

    array[array.length] = `Division: ${+numbreOne} / ${+numbreTwo} = ${result}`;

    alert(`Operation Division finished with result ${result}`);

   }  else if (userOrder === '**') {
 
    result = (+numbreOne) ** +numbreTwo;

    array[array.length] = `Exponentiation: ${+numbreOne}  raises to  ${+numbreTwo} = ${result}`;

    alert(`Operation Exponentiation finished with result ${result}`);

   }

  } else if (userOrder === 'cos'|| userOrder === 'sin') {
    do { 
        if (userOrder === 'cos') {
         numbreOne = prompt('Input number to need a returns the cosine (in radians)');
       } else if  (userOrder === 'sin') {
         numbreOne = prompt('Input number to need a returns the sine (in radians)');
       };  
      numTestOne = +numbreOne;
     } while (numbreOne === '' || numbreOne ===  null || numTestOne !== +numbreOne);

    if (userOrder === 'cos') {

    result = Math.cos(+numbreOne);

    array[array.length] = `Returns the cosine of a ${+numbreOne} finished with result ${result}`;

    alert(`Operation Returns the cosine of a number finished with result ${result}`);

   } else if (userOrder === 'sin') {
 
    result = Math.sin(+numbreOne);
 
    array[array.length] = `Returns the sine of a ${+numbreOne} finished with result ${result}`;

    alert(`Operation Returns the sine of a number finished with result ${result}`);
   }

  } else if (userOrder === 'h') {
    let i = 1;

    while(i < array.length) {
      console.log(`Operation ${i}: ${array[i]}`); 
    i++;
    };
  }

 newOrder = confirm(`Would you like to do any other operation?`);
} while (newOrder=== true);