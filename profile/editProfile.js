$(document).ready(function() {
    document.getElementById("fName").value = "jake";
    $.ajax({
		type: "GET",
		url: "/RPIList/api/get-user-by-id.php",
		success: function(responseData, status){
			var user = JSON.parse(responseData)[0];
            document.getElementById("fName").value = user["first_name"];
            document.getElementById("lName").value = user["last_name"];
            document.getElementById("email").value = user["email"];
            if(user["phone_number"]){
                document.getElementById("phone").value = user["phone_number"];
            }
            if(user["alt_email"]){
                document.getElementById("email2").value = user["alt_email"];
            }
		}, error: function(msg) {
		    alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});
});

function updateUser() {
    var formData = $("#edit-profile-form").serialize();
    $.ajax({
        type: "POST",
        url: "/RPIList/api/update-user-by-id.php",
        data: formData,
        success: function(responseData, status){
            location.reload();
            alert(responseData);
        }, error: function(msg) {
            location.reload();
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}

function validateForm(){
    var formData = $("#edit-profile-form").serializeArray();
    msg = "";
    if(formData[0].value == "") {
        msg += "A first name is required.\n";
    }
    if(formData[1].value == "") {
        msg += "A last name is required.\n";
    }
    if(formData[2].value == "" || formData[2].value.split('@')[1] != 'rpi.edu') {
        msg += "A valid rpi email address is required.\n";
    }
    // regex from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript/4338544
    if(!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(formData[3].value) && formData[3].value != ""){
        msg += "Phone Number: Must be a valid phone number."
    }
    if(!/\S+@\S+\.\S+/.test(formData[4].value)){
        msg += "Alternate Email: Must be a valid email."
    }
    if(msg != '') {
        alert(msg);
        return false;
    }
}