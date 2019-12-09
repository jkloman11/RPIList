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
			document.getElementById('description').innerHTML = "<strong>Description: </strong>" + post["description"];
			document.getElementById("date").innerHTML = "<strong>Date: </strong>" + post["date"];
			document.getElementById("pay").innerHTML = "<strong>Compensation: </strong>" + post["pay"];
			document.getElementById("time").innerHTML = "<strong>Time: </strong>" + post["time"];
		}, error: function(msg) {
		  alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});

	$.ajax({
		type: "POST",
		url: "/RPIList/api/get-user-by-id.php",
		data: request,
		success: function(responseData, status){
			var user = JSON.parse(responseData)[0];
			document.getElementById('posted-by').innerHTML = "<strong>Posted by: </strong>" + user["first_name"] + " " + user["last_name"];
			document.getElementById('poster-name').innerHTML = "<strong>Name: </strong>" + user["first_name"] + " " + user["last_name"];
			document.getElementById('poster-email').innerHTML = "<strong>Email: </strong>" + user["email"];
			if(user["phone_number"]) {
				document.getElementById('poster-phone').innerHTML = "<strong>Phone: </strong>" + user["phone_number"];
			}
			if(user["alt_email"]) {
				document.getElementById('poster-email2').innerHTML = "<strong>Alt. Email: </strong>" + user["alt_email"];
			}
		}, error: function(msg) {
		  alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});

	//Displays popup on click
	$('#contact').click(function(e) {
		$('.screen').css('display','flex');
	}); 
	//Close popup when "X" is clicked
	$('.screen').click(function(){
		$('.screen').css('display','none');
	});

});