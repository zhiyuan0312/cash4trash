
$(document).on('ready page:load', function(){
  $('#renew-password-link1').click(function(){
    $('#loginModal').modal('hide');
    setTimeout(function(){
      $('#renew-passwordModal').modal('show');
    }, 20);
  });

  $('#renew-password-link2').click(function(){
    $('#signupModal').modal('hide');
    setTimeout(function(){
      $('#renew-passwordModal').modal('show');
    }, 20);
  });

  $('#sign-in-link1').click(function(){
    $('#signupModal').modal('hide');
    setTimeout(function(){
      $('#loginModal').modal('show');
    }, 20);
  });

  $('#sign-up-link1').click(function(){
    $('#loginModal').modal('hide');
    setTimeout(function(){
      $('#signupModal').modal('show');
    }, 20);
    
  });
});