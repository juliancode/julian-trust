(function () {
	var message;
	var	lat;
	var	lng;
	var coords;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		$('.alert').css("display", "block");
		$('.alert').innerHTML = "Geolocation is not supported by this browser.";
	}

	function showPosition(position) {
		lat = position.coords.latitude;
		lng = position.coords.longitude;
	}

	$('.geo').click(function(event, position) {
		event.preventDefault();
		var name = $('.name').val();
		$('.alert').css("display", "block");

		if (lat == undefined || lng == undefined) {
			coords = " unfortunately you didn't allow for your geolocation to be used!"
		}
		else {
			coords = " your geolocation was recorded (" + lat + "," + lng +")";
		}

		document.querySelector(".alert").innerHTML = "<strong>Thanks</strong> for your message <strong>" + name + "</strong> " + coords;
		console.log(name)
	});
})();
