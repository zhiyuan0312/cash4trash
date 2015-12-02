$(document).on('page:load', function(){

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


  