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


  