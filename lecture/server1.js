const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //내가 뭘 보낼껀지 알려주는 역항을 함 사파리는 문자열인지 html인지 구분못함 ㅋㅋ
    
    //html 적는거 비효율적
    res.write('<h1>Hello world</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Zerocho</p>');

})

server.listen(8080,()=>{
    console.log('8080에서포트에서 서버 대기중');
    console.log('http://localhost:8080');
});

server.on('listening', (error)=>{
    console.error(error);
});
server.on('error', (error)=>{
    console.error(error);
});
//서버 8080퓨\ㅗ트에를 프로세스로 올려줘여하는작업
//다 비동기임

