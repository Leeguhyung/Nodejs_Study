//const value = require('./var');
const {odd, even} = require('./var');
//console.log(odd);
//console.log(even);

//console.log(value);

function checkOddOrEven(number){
    if(number%2){
        return odd;
    }
    else{
        return even;
    }
}

module.exports = checkOddOrEven;

// module.exports !== exports === {}