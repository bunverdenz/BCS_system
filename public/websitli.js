$(document).ready(function(){
    // All your normal JS code goes in here
    $('.ui.rating.1').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/websloggedin1",{rating: value, mvid: 1}).then(function(data) {
        window.location = "http://localhost:8080/websloggedin";
    });
      },
    });
    $('.ui.rating.2').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/websloggedin1",{rating: value, mvid: 2}).then(function(data) {
        window.location = "http://localhost:8080/websloggedin";
    });
      },
    });
    $('.ui.rating.3').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/websloggedin1",{rating: value, mvid: 3}).then(function(data) {
        window.location = "http://localhost:8080/websloggedin";
    });
      },
    });
    $('.ui.rating.4').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/websloggedin1",{rating: value, mvid: 4}).then(function(data) {
        window.location = "http://localhost:8080/websloggedin";
    });
      },
    }); 
    $('.ui.rating.5').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/websloggedin1",{rating: value, mvid: 5}).then(function(data) {
        window.location = "http://localhost:8080/websloggedin";
    });
      },
    }); 
});


// document.getElementById("logout").onclick = function(){
//   console.log("Salem")
// }

document.getElementById("b110").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Deadpool 2" ,time: "10:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}
document.getElementById("b1123").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Deadpool 2" ,time: "12:30"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}


document.getElementById("b215").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Avengers: Infinity War" ,time: "15:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}
document.getElementById("b2173").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Avengers: Infinity War" ,time: "17:30"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}


document.getElementById("b320").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Black Panther" ,time: "20:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}
document.getElementById("b39").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Black Panther" ,time: "09:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}


document.getElementById("b4113").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"The Greatest Showman" ,time: "11:30"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}
document.getElementById("b412").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"The Greatest Showman" ,time: "14:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}


document.getElementById("b5163").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Peter Rabbit" ,time: "16:30"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}
document.getElementById("b5193").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Peter Rabbit" ,time: "19:30"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}

// $('table').on('click', '.ui.positive.basic.small.button', function() {
//     $(this).closest('tr').cells[0]
//   });