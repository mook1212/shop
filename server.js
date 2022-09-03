const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
const path = require('path');

app.use(express.json());
var cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;

var db;

app.listen(8080, function () {
    console.log('listening on 8080')
    
});

app.get('/pet', (req,res)=> {
    res.send('안녕하세요')
})


// MongoClient.connect('mongodb+srv://skdo223:apsode1@cluster0.udjmfja.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
//     if (에러) return console.log(에러)
//     db = client.db('todoapp');



//     app.listen(8080, function () {
//         console.log('listening on 8080')
        
//     });
// });


app.get('/test', (req,res)=> {
    res.sendFile
})

// app.get('localhost:3000/shop/aaa ', (req, res) => {

// 	db.collection('post').find().toArray((에러, 결과) => {
// 		console.log('안녕');
// 	})
//   res.send(console.log('1234'))
// })

// app.delete('/shop', (req, res) => {
// 	console.log(req.body); // body는 ajax요청한 data값
// 	req.body._id = parseInt(req.body._id)
// 	db.collection('post').deleteOne(req.body, (에러, 결과) => {
// 		console.log('삭제완료');
// 		res.status(200).send({ message: '성공했음' });
// 	})
// })

// app.get('*', function (요청, 응답) {
//   응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
// });

