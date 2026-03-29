console.log(this); //global인가? ㄴㄴ
//annyonimous의 this는 global이 아니다.
//전역계층 빈객체나옴
console.log(this === module.exports);



function a(){
    console.log(this === global);
}

a();