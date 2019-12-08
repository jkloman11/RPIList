$(document).ready(function() {
	var id = document.location.search.split(/=|&/)[1];
	var user_id = document.location.search.split(/=|&/)[3];
	
	var request = { "id": id, "user_id": user_id };
	
	$.ajax({
		type: "POST",
		url: "/RPIList/api/get-post-by-id.php",
		data: request,
		success: function(responseData, status){
			var post = JSON.parse(responseData)[0];
			document.getElementById("title").innerHTML = post["title"];
			document.getElementById('description').innerHTML = post["description"];
			document.getElementById("date").innerHTML = "Date: " + post["date"];
			document.getElementById("pay").innerHTML = "Compensation: " + post["pay"];
			document.getElementById("time").innerHTML = "Time: " + post["time"];
		}, error: function(msg) {
		  alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});

	$.ajax({
		type: "POST",
		url: "/RPIList/api/get-user-by-id.php",
		data: request,
		success: function(responseData, status){
			console.log(responseData);
			var user = JSON.parse(responseData)[0];
			document.getElementById('posted-by').innerHTML = "Posted by: " + user["first_name"] + " " + user["last_name"];
			document.getElementById('poster-name').innerHTML = "Name: " + user["first_name"] + " " + user["last_name"];
			document.getElementById('poster-email').innerHTML = "Email: " + user["email"];
			if(user["phone_number"]) {
				document.getElementById('poster-phone').innerHTML = "Phone: " + user["phone_number"];
			}
		}, error: function(msg) {
		  alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});

	//Displays popup on click
	$('#contact').click(function() {
		console.log("here")
		$('.screen').css('display','flex');
	}); 
	//Close popup when "X" is clicked
	$('.close').click(function(){
		$('.screen').css('display','none');
	});

});