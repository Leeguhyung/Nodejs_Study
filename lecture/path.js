const path = require('path');

//운영체제마다 디렉토리 표현방식이 다름

// C:\users -->윈도우
// /users/note -->mac

path.join(__dirname, 'var.js');
//  \nodejs-book\lecture\var.js


path.join(__dirname, 'var.js');
//  \nodejs-book\lecture\var.js

path.resolve(__dirname, '/var.js');
// C:\var.js
//조인은 절대경로를 무시함 리졸브는 절대경로를 존중

path.join(__dirname, '..', 'var.js');
//  \nodejs-book\var.js

//\이렇게 하면 운체에 맞춰서 알아서 경로 반환
