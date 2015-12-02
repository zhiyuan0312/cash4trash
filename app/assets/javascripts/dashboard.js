$(document).on('ready page:load',function(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
    });
  });
});

$(document).on('ready page:change',function(){
  //jQuery for text carousel
  $("#stat-info").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: "/",
      // The delay between the changing of each phrase in milliseconds.
      speed: 2500,
      complete: function () {
          // Called after the entrance animation is executed.
      }
  });

  $("#doughnutChart").drawDoughnutChart([{
    title: "Newspaper",
    value: $('.values').data('newspaper'),
    color: "#334D5C"
  }, {
    title: "Cardboard",
    value: $('.values').data('cardboard'),
    color: "#45B29D"
  }, {
    title: "Magazine",
    value: $('.values').data('magazine'),
    color: "#EFC94C"
  }, {
    title: "Tin/Metal",
    value: $('.values').data('tinmetal'),
    color: "#E27A3F"
  }, {
    title: "Plastic",
    value: $('.values').data('plastic'),
    color: "#DF5A49"
  }, {
    title: "Aluminium",
    value: $('.values').data('aluminium'),
    color: "#8D61E2"
  }]);

});


  