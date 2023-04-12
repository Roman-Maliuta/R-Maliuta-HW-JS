
function stackFunction() {
    let stack;
    return {
        stackCreate(){
            return stack = []; 
        },
        stackPush(elements){
             return stack.push(elements);          
        },
        stackPop(){
            let popElement = stack.pop()
            return popElement;
        },
        getStack(){
            return stack;
        }
    }
};

// const newStack = stackFunction();
// newStack.stackCreate();
// newStack.stackPush(1);
// newStack.stackPush(19);
// newStack.stackPush(45);
//console.log(newStack.stackPop());
//console.log(newStack.getStack());


function isBetween(min,max) {
    let minTest;
    let maxTest;
    let array2;
    do  {        
     do { 
         minTest = +min;
      } while (Boolean(min) === false || minTest !== +min);
      do { 
         maxTest = +max;
      } while (Boolean(max) === false || maxTest !== +max);
    } while (max < min);

    return function (item) {
    return array2 = item >= min && item <= max; 
     };
    };


// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(array1.filter(isBetween(5,7)));


function calculate(userOrder){
    while ( userOrder !== '+' &&  
    userOrder !== '-' && 
    userOrder !== '*' && 
    userOrder !== '/' && 
    userOrder !== '**' && 
    userOrder !== null
    ) {break};
    return function (numbreOne) {
        let numTestOne;
         do { 
               numTestOne = +numbreOne;
          }  while (Boolean(numbreOne) === false || numTestOne !== +numbreOne);

      return function (numbreTwo) {
         let numTestTwo;
             do { 
                 numTestTwo = +numbreTwo;
            } while (Boolean(numbreTwo) === false || numTestTwo !== +numbreTwo);

         if (userOrder === '+') {

            return +numbreOne + +numbreTwo;
        
           } else if (userOrder === '-') {
       
            return +numbreOne - +numbreTwo;
        
           } else if (userOrder === '*') {
            
            return +numbreOne * +numbreTwo;
       
           } else if (userOrder === '/') {
               
            return +numbreOne / +numbreTwo;
        
           } else if (userOrder === '**') {
         
            return (+numbreOne) ** +numbreTwo;
           }; 
         };
    };
};
  
//console.log((calculate('*') (7) (5)));


const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
  ];



function sortByField(fieldName, sortType){
 let array2;
  return function(a, b) {
  if (sortType === 'asc'){
    return array2((a, b) =>  a.fieldName - b.fieldName);
    }  
  else if(sortType === 'desc'){
    return array2((a, b) =>  b.fieldName - a.fieldName);   
  };
 };
};



//console.log(products.sort(sortByField('quantity', 'desc')));