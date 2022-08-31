const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({message:'hello'});
});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})



app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});