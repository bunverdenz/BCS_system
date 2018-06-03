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
	password : 'happytedy',
	database : 'theater'
});



app.get("/", function(req, res){
	console.log('first page');

	var q = "SELECT*FROM movies;";
	 connection.query(q, function(err, results){
	 	
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
app.post('/websloggedin',function(req,res){
  var rank=req.body.rating;
  console.log("ranking is "+rank);
  // res.end("yes");
  res.render("websloggedin");
});  

app.get("/websloggedin", function(req, res){
	console.log('second page');
	 res.render("websloggedin");
});

var mvname = null
var mvtime = null

app.post('/websloggedin',function(req,res){
  mvname=req.body.movie_name;
  console.log("movie is "+mvname);
  mvtime=req.body.time;
  console.log("time is "+mvtime);
  // res.end("yes");
  res.render("ticketPurchase", {mvname: mvname, mvtime: mvtime})

});    


app.post("/ticketBuy", function(req, res){
	// console.log(req);
	var q = "UPDATE seats as s SET s.seat_available = false WHERE s.seat_id = 1;";
	
	var q = "INSERT INTO tickets (user_id, type_id, show_id,seat_id) VALUES ('" + req.body.user_id + "','"+ req.body.type_id +"','" +req.body.show_id+"','" +req.body.seat_id +"');"

	connection.query(q, function(err, results){
	 	console.log(results);
	 });

	res.redirect("/")
});

app.get("/ticketPurchase", function(req, res){
	console.log('second page');
	res.render("ticketPurchase", {mvname: mvname, mvtime: mvtime})
	 // res.render("ticketPurchase")
});


var user_login = "Meh";
app.post("/login", function(req, res){
	var body = req.body;
	console.log(req.body)
	
	var q = "SELECT * FROM users;"
	 connection.query(q, function(err, results){
		console.log(results[0].username);
		console.log(results[0].user_password);
		console.log(body.username);
		console.log(body.password);
		var rows = results;	  
		var chk = false; 
		
		rows.forEach( (row) => {
			if(row.username == body.username && row.user_password == body.password){
				console.log("FOUND it!");
				chk = true;
				user_login= row.username;
			}
			
		  });
		if(chk==true){
			console.log("Successfully login");
			res.render("websloggedin",{data:user_login});
			// alert("Successfully login");
		}
		else{
			console.log("Login Fail, not in database");
			// alert("Login Fail, not in database");
		}
	});
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