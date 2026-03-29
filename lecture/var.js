const odd="홀수입니다";
const even = "짝수입니다";

// module.exports = {
//     odd,
//     even,
// }

//모듈도 생략이 가능
exports.odd = odd;
exports.even =  even;

//즉
// this.odd = odd;
// this.even =  even;
//이것도 간

// module.exports == exports === {odd, even}
//모듈에 두개 이상인걸 넣고싶다...그럼 객체형
//한가지만 익스포츠 하고싶다 그럼 그냥 module.exports 쓰셈
//두가지 이상 익스포츠 하고싶으면 둘중하나 택1  module.exports == exports 
// exports.aaa 이거 썻으면 중간에 module.exports쓰는건 안됌
//그니까 같이 쓸 수 없다고 생ㄹ각하면댐