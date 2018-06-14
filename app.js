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

	var q = "SELECT m.movie_title, m.image_url, m.duration, s.show_time, t.type_demo, t.price FROM movies as m INNER JOIN shows as s ON m.movie_id = s.movie_id INNER JOIN ticket_type as t;";
	 connection.query(q, function(err, result){
		if (err) throw err;
		var q = "SELECT*FROM movies;";
	 	connection.query(q, function(err, results){
		 	var q1 = "SELECT movie_id, AVG(rating) as avg FROM stars GROUP BY movie_id;";
		    connection.query(q1, function(err, results1){
		    	console.log(results1)
			if (err) throw err;
			var arrayLength = results1.length;
			for (var i = 0; i < arrayLength; i++) {
			    results1[i].avg = Math.round( results1[i].avg * 10 ) / 10;
			    //Do something
			}
			console.log(results1)
			aver = results1
			if (err) throw err;
		    var q2 ="SELECT * FROM movies as m WHERE m.movie_id NOT IN (SELECT s.movie_id FROM shows as s) ;"
		    connection.query(q2, function(err, results2){
		    	soonn = results2[0].movie_title
		    	soonimg = results2[0].image_url
		    	soont = results2[0].duration
		    	res.render("webs", {data: results, average :aver, n: soonn, im: soonimg, t: soont});
		    })
	 });
	 });
	 
})})

var soonn = null
var soonimg = null
var soont = null
// @Shynar
app.post('/websloggedin1',function(req,res){
  var rank=req.body.rating;
  console.log("ranking is "+rank);
  var mvid = req.body.mvid;
  console.log("ranking is "+mvid);
  // res.end("yes");
  var q = "SELECT user_id FROM users WHERE username = '"+ user_login +"';";
	connection.query(q, function(err, results){
	console.log(results)
	var q1 = "SELECT * FROM stars WHERE user_id ="+ results[0].user_id +" AND movie_id = "+ mvid +";";
	console.log(q1)
	
	connection.query(q1, function(err, results1){
		var z = 0
		if (results1.length > 0){
			var z = "UPDATE stars SET rating = "+rank+" WHERE user_id = "+results[0].user_id+" AND movie_id = "+mvid+";"
		}else{
			var z = "INSERT INTO stars(user_id, movie_id, rating) VALUES ("+results[0].user_id+","+mvid+","+rank+");";
		}
		    connection.query(z, function(err, result){
			    var q2 = "SELECT movie_id, AVG(rating) as avg FROM stars GROUP BY movie_id;";
			    connection.query(q2, function(err, results1){
				console.log(results1)
				if (err) throw err;
				var arrayLength = results1.length;
				for (var i = 0; i < arrayLength; i++) {
				    results1[i].avg = Math.round( results1[i].avg * 10 ) / 10;
				    //Do something
				}
				aver = results1
				res.render("websloggedin", {data: user_login, average :aver, n: soonn, im: soonimg, t: soont});
		 });
	 })	
	if (err) throw err;
	// 	if (err){
	// 		var q = "UPDATE stars SET rating = "+rank+" WHERE user_id = "+results[0].user_id+" AND movie_id = "+mvid+";"
	// 	};
	// 	var q2 = "SELECT movie_id, AVG(rating) as avg FROM stars GROUP BY movie_id;";
	// 	    connection.query(q2, function(err, results1){
	// 		console.log(results1)
	// 		if (err) throw err;
	// 		var arrayLength = results1.length;
	// 		for (var i = 0; i < arrayLength; i++) {
	// 		    results1[i].avg = Math.round( results1[i].avg * 10 ) / 10;
	// 		    //Do something
	// 		}
	// 		aver = results1
	// 		res.render("websloggedin", {data: user_login, average :aver});
	//  });	
	// if (err) throw err;
	
	 });
  
}) })

var aver = null
app.get("/websloggedin", function(req, res){
	console.log('second page');
	var q1 = "SELECT movie_id, AVG(rating) as avg FROM stars GROUP BY movie_id;";
	connection.query(q1, function(err, results1){
		console.log(results1)
		if (err) throw err;
		var arrayLength = results1.length;
		for (var i = 0; i < arrayLength; i++) {
		    results1[i].avg = Math.round( results1[i].avg * 10 ) / 10;
		    //Do something
		}
		aver = results1
		console.log(aver)
		res.render("websloggedin", {data: user_login, average :aver, n: soonn, im: soonimg, t: soont});
	 });	
});

var mvname = null
var mvtime = null
var hall = null

app.post('/websloggedin',function(req,res){
  mvname=req.body.movie_name;
  console.log("movie is "+mvname);
  mvtime=req.body.time;
  console.log("time is "+mvtime);
  // res.end("yes");
  res.render("ticketPurchase", {mvname: mvname, mvtime: mvtime, hall:hall})

});    


app.post("/ticketBuy", function(req, res){
	// console.log(req);
	console.log(req.body.seat);
	var str = req.body.seat;
	var row = parseInt(str.charAt(str.indexOf("row")+4),10)+1;
	var col = (parseInt(str.charAt(str.indexOf("column")+7)))*5;
	var type_id = str.split(" ")[0];
	console.log("here1");
	console.log(row+col);
	console.log(type_id);
	var q = "UPDATE seats as s SET s.seat_available = false WHERE s.seat_id = "+(row+col) +";";
	connection.query(q, function(err, results){
		console.log("here2");
		console.log(results);
	});
	console.log("here3");
	var a = "SELECT user_id FROM users WHERE username = '"+ user_login+"';";
	connection.query(a, function(err, results){
		console.log("here4");
		console.log(results);
		var b = "SELECT show_id FROM shows WHERE show_time = '2018-05-20 10:00:00';";
		connection.query(b, function(err, results1){
			console.log("here5");
			console.log(results1);
			console.log(results[0].user_id);
			var q = "INSERT INTO tickets (user_id, type_id, show_id,seat_id) VALUES ('" + results[0].user_id + "','"+ type_id +"','" +results1[0].show_id+"','" +req.body.seat_id +"');"

			connection.query(q, function(err, results2){
			console.log("finall");
			console.log(results2);
		});
		});

		
	});
	
	// connection.query(q, function(err, results){
	//  	console.log(results);
	//  });

	res.redirect("/")
});

app.get("/ticketPurchase", function(req, res){
	console.log('second page');
	
	var q = "SELECT m.movie_title,s.show_time, s.hall_id FROM movies as m INNER JOIN shows as s ON m.movie_id = s.movie_id INNER JOIN ticket_type as t WHERE s.show_time = '2018-05-20 10:00:00';"		
	connection.query(q, function(err, results){
		console.log(results);
		hall = results[0].hall_id;
		res.render("ticketPurchase", {mvname: mvname, mvtime: mvtime, hall:hall})
	});
	
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
			var q1 = "SELECT movie_id, AVG(rating) as avg FROM stars GROUP BY movie_id;";
		    connection.query(q1, function(err, results1){
			console.log(results1)
			if (err) throw err;
			var arrayLength = results1.length;
			for (var i = 0; i < arrayLength; i++) {
			    results1[i].avg = Math.round( results1[i].avg * 10 ) / 10;
			    //Do something
			}
			aver = results1
			res.render("websloggedin",{data:user_login, average :aver, n: soonn, im: soonimg, t: soont});
			// alert("Successfully login");
		})}
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