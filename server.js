// const express = require('express')
// const app = express()
// const port = 8000;
// const cors = require('cors')

// app.use(cors())

// app.get('/', (req,res)=> {
//     res.send('hello')
// })

// app.listen(port, ()=> {
//     console.log(`${port} 포트에서 실행중`);
// })




const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true})) 
const path = require('path');

app.use(express.json());
var cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://skdo223:apsode1@cluster0.udjmfja.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp');

    // db.collection('post').insertOne({이름 : 'kim', 나이 : 20}, function(에러,결과) {
    //     console.log('저장완료');
    // })

    app.listen(8000, function () {
        console.log('listening on 8080')
        
    });
});

app.get('/', (req,res)=> {
    res.send('hello')
})


app.get('/', (req,res)=> {
    db.collection('post').insertOne({이름 : 'kim', 나이 : 20}, function(에러,결과) {
        console.log('저장완료');
    })
})

app.post('/barsket', (req,res)=> {
    db.collection('post').insertOne({title : req.body.title, img : req.body.img, price : req.body.price}, function(에러,결과) {
        console.log('저장완료');
    })
    res.send('전송완료')
    console.log(req.body);
})

app.get('/barsket', (req,res)=> {
	db.collection('post').find().toArray((에러, 결과) => {
		console.log(결과);
        res.send(결과)
	})
})

app.delete('/mypage', (req, res) => {
    console.log(req.body);
	console.log('안녕'); // body는 ajax요청한 data값
	// req.body._id = parseInt(req.body._id)
	db.collection('post').deleteOne(req.body, (에러, 결과) => {
		console.log('삭제완료');
		res.status(200).send({ message: '성공했음' });
	})
})

// app.get('localhost:3000/shop/aaa ', (req, res) => {

// 	db.collection('post').find().toArray((에러, 결과) => {
// 		console.log('안녕');
// 	})
//   res.send(console.log('1234'))
// })



// app.get('*', function (요청, 응답) {
//   응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
// });

