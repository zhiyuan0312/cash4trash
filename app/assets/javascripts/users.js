$(document).on('ready page:load', function(){

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

$("#js-rotating2").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    alert("hi"),
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

  $("#doughnutChart").drawDoughnutChart([{
    title: "Newspaper",
    value: 120,
    color: "#ff1a1a"
  }, {
    title: "Cardboard",
    value: 80,
    color: "#ff8c1a"
  }, {
    title: "Magazine",
    value: 70,
    color: "#feff1a"
  }, {
    title: "Tin/Metal",
    value: 50,
    color: "#00ff00"
  }, {
    title: "Plastic",
    value: 40,
    color: "#00ccff"
  }, {
    title: "Aluminium",
    value: 20,
    color: "#9933ff"
  }]);

});


  