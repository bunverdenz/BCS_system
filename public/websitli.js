$(document).ready(function(){
    // All your normal JS code goes in here
    $('.ui.rating').rating({
      initialRating: 0,
      maxRating: 5,
      clearable: true,
      onRate: function(value) {
        console.log('value set to:' + value);
         $.post("http://localhost:8080/",{rating: value}, function(data){
          // window.location.href = "http://localhost:8080/"
            // if(data==='done')
            //   {
            //     alert("rating success");
            //     // window.location.assign('/')
            //   }
          });
      },
    });
      
});


document.getElementById("logout").onclick = function(){
  console.log("Salem")
}

document.getElementById("b110").onclick = function(){
  console.log("ENTERS")
  $.post("http://localhost:8080/websloggedin",{movie_name:"Deadpool 2" ,time: "10:00"}).then(function(data) {
        window.location = "http://localhost:8080/ticketPurchase";
    });
}