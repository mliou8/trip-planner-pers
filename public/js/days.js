$(function() {

	var days;

	$.get('api/days', function(data){
		days = data;
		console.log("data: ", data)
	});

	var $DayButton = $('.day-btn');
	$DayButton.on('click', getDay);
	// console.log($('.day-btn').value)

	function getDay() {
		// console.log(this.value);
		$.ajax({
			method: 'GET',
			url: '/api/days',
			data: days,
			success: function (responseData) {
				// alert("sucess");
				console.log(responseData);
				// res.render(responseData);
			},
			error: function (errorObj) {
				alert("error");
				// res.render(errorObj);
			}
		})
	}
});




	// $.ajax({
	// 	method: 'PUT',
	// 	url: 'api/days',
	// 	data: Day,
	// 	success: function (responseData){
	// 		return responseData;
	// 	},
	// 	error: function(errorObj){
	// 		return errorObj;
	// 	}
	// });

	// $.ajax({
	// 	method: 'POST',
	// 	url: 'api/days',
	// 	data: Day,
	// 	success: function (responseData){
	// 		return responseData;
	// 	},
	// 	error: function(errorObj){
	// 		return errorObj;
	// 	}
	// });