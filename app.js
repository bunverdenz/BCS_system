var mysql = require('mysql');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
// Express Middleware for serving static files
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'theater'
});



app.get("/", function(req, res){
	console.log('first page');

	var q = "SELECT * FROM users;";
	// connection.query(q, function(err, results){
	// 	if (err) throw err;
	// 	//var count = results[0].count;
	// 	//need to be inside. If it is outside then 
	// 	//it may call res.send(..) before get count
	// 	//res.send("We have " + count + " users in our db.");
		res.render("webs");
	// });

});
app.get("/select_seat", function(req, res){
	console.log('select_seat');
	var joke = "<em>select_seat</em>"
	res.render("ticketPurchase");

});

app.post("/register", function(req, res){
	
	// var person = {
 //             email: req.body.email
 //    };
 //    //var q = "INSERT INTO users (email) VALUES (" + req.body.email + ")"
 // 	connection.query('INSERT INTO users SET ?',person ,function(error, results){
 //      	if(error) throw error;
 //      	res.redirect("/");
 //  	});
});

app.get("/joke", function(req, res){
	// var joke = "What the <em>FUCK???</em>"
	// res.send(joke);
	// console.log("request joke")
})

app.get("/random_num", function(req, res){
	// var num = Math.floor(Math.random() * 10) + 1;
	// res.send("Your lucky number is " + num);

})

app.listen(8080, function(){
	console.log('Server running on 8080');
});