$(document).ready(function(){
    // All your normal JS code goes in here
    $(".rating").rating();
});

document.getElementById("login").onclick = function(){
  console.log("Salem")
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
