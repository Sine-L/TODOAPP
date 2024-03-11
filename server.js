const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

//누군가가 /pet 으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
});

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지임');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});