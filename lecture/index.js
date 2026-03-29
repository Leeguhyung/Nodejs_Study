const {odd,even} = require("./var");
const checkNumber = require('./func');

//구조분해할당은 속성명 그대로 따라와야함
//함수는 뭐 그냥 이름 아무렇게나 지정가능 불러오는 곳이랑 
// 달라도댐

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    else{
        return even;
    }
}

console.log('test',checkNumber(10));
console.log('dl',checkStringOddOrEven('hello'));