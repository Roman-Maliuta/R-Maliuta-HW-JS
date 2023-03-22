
const utils = {
  reverse: function(source) {
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
     
    return rev;
  },

  verifyNumbers: function(source) {
    let num =[];
    for (let i = 0; i < source.length; i++) {
      if (typeof source[i] !== 'number') continue; 
       num[num.length] = source[i]; 
    }
    return num;
  },

  getMin: function(source) {
    let min = source[0];
    for (let i = 0; i < source.length; i++) {
      if (min > source[i]) {
        min = source[i];
      };
    };
    return min;
  },

  getAverage: function(source) {
    let sum = 0;
    for (let i = 0; i < source.length; i++) {
      sum += source[i];
    };
     return sum / source.length; 
  },

  getMaxString: function(source) {
    let maxStr = '';
    for ( let i = 0; i < source.length; i++) {
       if (source[i].length > maxStr.length) {
        maxStr = source[i];
       };
    }
     return maxStr;
  }
};