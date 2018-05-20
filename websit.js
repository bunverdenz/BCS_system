document.getElementById("login").onclick = function(){
  $('.ui.login.modal')
  .modal('show')
;
}

$('.ui.login.form')
  .form({
    fields: {
     
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a username'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a password'
        
          }
        ]
      },
    }
  });

$('.ui.red.login.cancel.basic.button').click(function(){
  console.log('click');
  $('.ui.login.modal.form').modal('hide'); 
}),
                                             
 
 $('.ui.green.login.submit.basic.button').click(function(){
  console.log('click');
  if( $('.ui.login.form').form('is valid')) {
  console.log('valid');
  $('.ui.login.modal').modal('hide'); 
    
    }
     });

document.getElementById("signUp").onclick = function(){
      $('.ui.signup.modal')
      .modal('show');
}

var myChair = document.getElementById("myChair");


for(var i=0;i<5;i++){
  var row = myChair.insertRow(i);
  
      for(var j=0;j<5;j++){
        var cell = row.insertCell(j);
        var img = document.createElement('img');
        img.src = "https://cdn3.iconfinder.com/data/icons/movie-entertainment-flat-style/64/13_seat-movie-cinema-chair-theater-512.png";
        img.style.width = "50px";
        img.style.height = "50px";
        
        var result = "<div class='item' style='width:873px;height:175px;border-bottom: 2px #cccccc solid;'><div class='image' style='height:160px;'>"+
                "<img style='height: 100%;' src='" + item.val().pic + "'></div>"+
                "<div class='middle aligned content' style='align-items: center;'>"+
                "<a class='header' onclick='clickfunc(this)' style='margin-top: 25px; margin-left:30px; font-size:30px;'>" + item.val().engname + "  " + "<br><br>" + item.val().korname + "</a>"+
                "<div id='circle' class='ui huge right floated label' style='background-color: #99cd32; color: rgba(0,0,0,0.85); font-size:26px;'>Halal</div></div></div>"
                
        cell.appendChild(img);        
        cell.id = "row"+i+"cell"+j;
        console.log(cell.id);
        
      }
}
for(var i=0;i<5;i++){
  for(var j=0;j<5;j++){
    var cell = document.getElementById("row"+i+"cell"+j);
    cell.onclick = function(){
      console.log(i + " " + j);
    }
  }
}
var img1 = document.createElement('img');
        img1.src = "https://fthmb.tqn.com/ZgT2U3lX1WoLINOlgScLXx-OHnY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/acer-s220hql-lcd-monitor-571e56ec3df78c564053d6b9.png";
        img1.style.width = "500px";
        img1.style.height = "20px";
document.getElementById("screen").appendChild(img1);
//var mySql = require("mysql")
