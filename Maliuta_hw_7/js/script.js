
const utils = {
  reverse: function() {
    let rev;

    if (typeof source === 'object') {
     rev = [];
     for (let i = source.length - 1; i > -1; i--){
     rev[i] = source[(source.length - 1) - i];
     };
    } if (typeof source === 'string') {
      rev = '';
      for (let i = 0; i < source.length; i++){
      rev += source[(source.length - 1) - i];
      };
     };
     
    console.log(rev);
  },

  verifyNumbers: function() {
    let num =[];
    for (let i = 0; i < source.length; i++) {
      if (typeof source[i] !== 'number') continue; 
       num[num.length] = source[i]; 
    }
    console.log(num);
  },

  getMin: function() {
    let min = source[0];
    for (let i = 0; i < source.length; i++) {
      if (min > source[i]) {
        min = source[i];
      };
    };
   console.log(min);
  },

  getAverage: function() {
    let sum = 0;
    for (let i = 0; i < source.length; i++) {
      sum += source[i];
    };
    console.log(sum / source.length); 
  },

  getMaxString: function() {
    let maxStr = '';
    for ( let i = 0; i < source.length; i++) {
       if (source[i].length > maxStr.length) {
        maxStr = source[i];
       };
    }
    console.log(maxStr);
  }
};