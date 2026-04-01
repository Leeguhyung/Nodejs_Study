const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( async (req, res)=>{
    try{
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        //내가 뭘 보낼껀지 알려주는 역항을 함 사파리는 문자열인지 html인지 구분못함 ㅋㅋ
    
        //html 적는거 비효율적
        const data = await fs.readFile('./server2.html');
        res.end(data)
    }catch(error){
        console.error(error);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(error.message);
    }

})
//async로 할때는 트라이캐치로 에러처리

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


//서버에서 주소를 정해준다 라는걸 이제 rest api라고 함
//put 전체수정
//patch 일부수정

//get 갖고오는거
//post 등록하는거
