$('.teal.button')
  .popup({
    on: 'click'
  })
;
$(".button")
            .popup({
                hoverable: true
            })
        ; 
$("#sus").click(function(){
	console.log("WTTTTTTTTT");
});
$('input')
  .popup({
    on: 'focus'
  })
;
$('.menu .browse')
  .popup({
    inline     : true,
    hoverable  : true,
    position   : 'bottom left',
    delay: {
      show: 300,
      hide: 800
    }
  })
;
$("#price").val(0);
var myChair = document.getElementById("myChair");

function clickfunc(obj,id){
  var old = parseInt($('#price').val(), 10);  
    if(obj.id =='adult'){      
      var k = parseInt("10000");
      $("#price").val(k+old);
    }
    else if(obj.id =='student'){
      var k = parseInt("8000");
      $("#price").val(k+old);
    }
    else if(obj.id =='child'){
      var k = parseInt("6000");
      $("#price").val(k+old);
    }
    $(id).addClass("greenBorder");
    console.log("hey");
  // $("#container").html(result);
}

for(var i=0;i<5;i++){
  var row = myChair.insertRow(i);
  
      for(var j=0;j<5;j++){
        var cell = row.insertCell(j);
        var img = document.createElement('img');
        var str = "https://cdn3.iconfinder.com/data/icons/movie-entertainment-flat-style/64/13_seat-movie-cinema-chair-theater-512.png";
        img.src = "https://cdn3.iconfinder.com/data/icons/movie-entertainment-flat-style/64/13_seat-movie-cinema-chair-theater-512.png";
        img.style.width = "50px";
        img.style.height = "50px";
       
        var str1 = "row"+i+"cell"+j;                                                     
        cell.id = str1;
        var result = "<div class='ui button'><img style='width:50px; height: 50px;' src='" + str + "'></div>"+
        "<div class='ui flowing popup top left transition hidden'>"+
          "<div class='ui three column divided center aligned grid'>"+
            "<div class='column'>"+
              "<h4 class='ui header'>Adult</h4>"+
              "<p>10,000 ₩ per person</p>"+
              "<div id= 'adult' class='ui button' class = 'cart' onclick='clickfunc(this, "+str1+")'>Add</div>"+
            "</div>"+
            "<div class='column'>"+
              "<h4 class='ui header'>Child</h4>"+
              "<p>5,000 ₩ per person</p>"+
              "<div id = 'child' class='ui button' class = 'cart' onclick='clickfunc(this,"+str1+")'>Add</div>"+
            "</div>"+
            "<div class='column'>"+
              "<h4 class='ui header'>Student</h4>"+
              "<p>8,000 ₩ per person</p>"+
              "<div id = 'student' class='ui button' class = 'cart' onclick='clickfunc(this,"+str1+")'>Add</div>"+
            "</div></div></div>";
        // var result = "<div class='item' style='width: 873px;height:175px;border-bottom: 2px #cccccc solid;'><div class='image' style='height:160px;'>"+
        // "<img style='height: 100%;' src='" + item.val().pic + "'></div>"+
        // "<div class='middle aligned content' style='align-items: center;'>"+
        // "<a class='header' onclick='clickfunc(this)' style='margin-top: 25px; margin-left:30px; font-size:30px;'>" + item.val().engname + "  " + "<br><br>" + item.val().korname + "</a>"+
        // "<div id='circle' class='ui huge right floated label' style='background-color: #ff5233; color: rgba(0,0,0,0.85); font-size:26px;'>Haram</div></div></div>"        
        $("#"+str1).html(result);
        // $("#"+str1).click(function(){
        //     console.log("HEYYYYYYYYY");
        // });
        $(".button")
            .popup({
                hoverable: true
            })
        ; 
        
        // console.log(cell.id);
        // var result = "<div class='item' style='width: 873px;'><div class='image'>"+
//                 "<img src='" + item.val().pic + "'></div>"+
//                 "<div class='middle aligned content' style='align-items: center;'>"+
//                 "<a class='header' onclick='clickfunc(this)' style='margin-top: 25px; margin-left:30px; font-size:30px;'>" + item.val().engname + "  " + "<br><br>" + item.val().korname + "</a>"+
//                 "<div id='circle' class='ui huge right floated label' style='background-color: #ff5233; color: rgba(0,0,0,0.85); font-size:26px;'>Haram</div></div></div>"
//                 // "<a class='ui red circular huge right floated label'>Haram</a>< "
      }
}
for(var i=0;i<5;i++){
  for(var j=0;j<5;j++){
    var cell = document.getElementById("row"+i+"cell"+j);
    // cell.onclick = function(){
    //   console.log(i + " " + j);
    // }
  }
}
var img1 = document.createElement('img');
        img1.src = "https://fthmb.tqn.com/ZgT2U3lX1WoLINOlgScLXx-OHnY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/acer-s220hql-lcd-monitor-571e56ec3df78c564053d6b9.png";
        img1.style.width = "500px";
        img1.style.height = "20px";
document.getElementById("screen").appendChild(img1);
//var mySql = require("mysql")