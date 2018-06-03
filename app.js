//BCS chitipat
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var faker = require('faker');
var app = express();
// Express Middleware for serving static files
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");

app.use(bodyParser.json());

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'chi1758910',
	database : 'theater'
});



app.get("/", function(req, res){
	console.log('first page');

	var q = "SELECT m.movie_title, m.image_url, m.duration, s.show_time, t.type_demo, t.price FROM movies as m INNER JOIN shows as s ON m.movie_id = s.movie_id INNER JOIN ticket_type as t;";
	 connection.query(q, function(err, results){
	 	//console.log(results);
		 //var num = results[0].count;

	
		if (err) throw err;
	// 	//var count = results[0].count;
	// 	//need to be inside. If it is outside then 
	// 	//it may call res.send(..) before get count
	// 	//res.send("We have " + count + " users in our db.");
		res.render("webs", {data: results});
	 });
	 
});

// @Shynar
app.post('/',function(req,res){
  var rank=req.body.rating;
  console.log("ranking is "+rank);
  res.redirect("/ticketPurchase");
  // res.end("yes");
});     

app.get("/select_seat", function(req, res){
	console.log('select_seat');
	var joke = "<em>select_seat</em>"
	res.render("ticketPurchase");

});

app.post("/login", function(req, res){
	var body = req.body;
	console.log(req.body)

	var q = "SELECT * FROM users;"
	 connection.query(q, function(err, results){
		console.log(results[0].username);
		var rows = results;	  
		var chk = false; 
		rows.forEach( (row) => {
			if(row.username == body.username && row.password == body.password){
				console.log("FOUND it!");
				chk = true;
			}
			
		  });
		if(chk==true){
			console.log("Successfully login");
			// alert("Successfully login");
		}
		else{
			console.log("Login Fail, not in database");
			// alert("Login Fail, not in database");
		}
	});


	res.redirect("/")
});

app.post("/register", function(req, res){
	console.log(req);

	//real input
	// var person = {
	// 	usersname: req.body.email,
	// 	password: req.body.password,
	// 	email:  req.body.email
	// };
	var q = "INSERT INTO users (username, user_password, user_email) VALUES ('" + req.body.username + "','"+ req.body.password +"','" +req.body.email +"');"

	//fake input
	// var q = "INSERT INTO users (username, user_password, user_email) VALUES ('" + faker.internet.userName() + "','"+ faker.internet.password() +"','" +faker.internet.email() +"');"
	// console.log(q)

	connection.query(q, function(err, results){
	 	console.log(results);
	 });

	res.redirect("/")
});

app.get("/joke", function(req, res){
	var joke = "What the <em>FUCK???</em>"
	 res.send(joke);
	 console.log("request joke")
})

app.get("/random_num", function(req, res){
	// var num = Math.floor(Math.random() * 10) + 1;
	// res.send("Your lucky number is " + num);

})


app.listen(8080, function(){
	console.log('Server running on 8080');
});