let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
      a: {
        a: null,
        b: 'E',
        c: {
          a: true,
          b: 'C',
          c: 'test'
        },
        d: 'U'
      },
      b: {
       a: 'R',
       b: ['S', 4, 6, 'I'],
       c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
    }
  }

let objTwo = Object.assign({}, obj);


let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let res = '';


function recursion(array){

   Object.values(array).forEach(function(item){
      if (typeof(item)==='string'){
       if(alph.indexOf(item) >= 0){
          res += item};

       } else if (Array.isArray(item)){
          res += item.filter(function(item){   
          return alph.indexOf(item) >= 0;}).join('');

       } else if (typeof(item)==='object' && item !== null){
          recursion(item);
      };
   });
   
 return res;
};


console.log(recursion(objTwo));