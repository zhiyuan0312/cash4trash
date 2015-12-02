$(document).on('page:change', function() {

	//datepicker bootstrap3
	$(function () {
	  $('#schedule_date').datepicker({
	  format: "dd/mm/yyyy",
	  todayHighlight: true,
	  autoclose: true,
	  startDate: '+1d'});

	    // initialize input widgets first
	  $('#schedule-form .time').timepicker({
	      'showDuration': true,
	      'timeFormat': 'g:ia',
	      'minTime': '8am',
	      'maxTime': '10pm',
	      'showDuration': false
	  });

	  // initialize datepair
	  var basicExampleEl = document.getElementById('schedule-form');
	  var datepair = new Datepair(basicExampleEl);
	});

});

