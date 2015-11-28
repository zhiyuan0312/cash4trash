$(document).on('ready page:load', function(){
  $('#collectors-login-link1').click(function(){
    $('#loginModal').modal('hide');
    setTimeout(function(){
      $('#collectors_loginModal').modal('show');
    },100);
  });
});
