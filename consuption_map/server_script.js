const express=require('express');
const app=express();
const ip = require("ip"); // gets local IP
var port = process.env.PORT || 8000





//SERVING STATIC CONTENT
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/images',express.static('images'));
app.use('/',express.static(__dirname));

//SERVING HTML PAGES
app.get('/',function(req,res){
	res.sendFile(__dirname +'/index.html')
});
app.get('/sports-center',function(req,res){
	res.sendFile(__dirname +'/sports-center.html')
});
app.get('/hostel-h1',function(req,res){
	res.sendFile(__dirname +'/hostel-h1.html')
});
app.get('/hostel-h2',function(req,res){
	res.sendFile(__dirname +'/hostel-h2.html')
});
app.get('/boys-hostel',function(req,res){
	res.sendFile(__dirname +'/boys-hostel.html')
});
app.get('/girls-hostel',function(req,res){
	res.sendFile(__dirname +'/girls-hostel.html')
});
app.get('/student-center',function(req,res){
	res.sendFile(__dirname +'/student-center.html')
});
app.get('/lecture-hall-complex',function(req,res){
	res.sendFile(__dirname +'/lecture-hall-complex.html')
});
app.get('/academic-block',function(req,res){
	res.sendFile(__dirname +'/academic-block.html')
});
app.get('/lecture-block',function(req,res){
	res.sendFile(__dirname +'/lecture-block.html')
});
app.get('/library-block',function(req,res){
	res.sendFile(__dirname +'/library-block.html')
});
app.get('/r&d-block',function(req,res){
	res.sendFile(__dirname +'/r&d-block.html')
});
app.get('/faculty-1',function(req,res){
	res.sendFile(__dirname +'/faculty-1.html')
});
app.get('/faculty-2',function(req,res){
	res.sendFile(__dirname +'/r&d-block.html')
});










// app.get('/test',function(req,res){
// 	console.log('you got me')
// 	res.send('hey')
// });


// 404 if no other route
app.use(function (req, res) {
  res.status(404).sendFile(__dirname+'/404.html');
})
app.listen(port, function() {
	console.log('Running now on ' + ip.address() + ":" + port);
});
