function signUpValidate() {
    var formData = $("#sign-up-form").serializeArray();
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
    if(formData[3].value.length < 8){
        msg += "Password must be at least 8 charecters.\n"
    }
    if(formData[3].value != formData[4].value) {
        msg += "Passwords must match.\n"
    }
    if(msg != '') {
        alert(msg);
        return false;
    }
}

function createUser() {
    var formData = $("#sign-up-form").serialize();
    $.ajax({
        type: "POST",
        url: "/RPIList/api/create-user.php",
        data: formData,
        success: function(responseData, status){
            document.getElementById("sign-up-form").reset();
            alert(responseData);
        }, error: function(msg) {
            document.getElementById("sign-up-form").reset();
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}

function login() {
    var formData = $("#login-form").serialize();
    $.ajax({
        type: "POST",
        url: "/RPIList/api/login.php",
        data: formData,
        success: function(responseData, status){
            document.getElementById("login-form").reset();
            if(responseData == "Success") {
                window.location = '/RPIList/home';
            } else {
                alert(responseData);
            }
        }, error: function(msg) {
            document.getElementById("login-form").reset();
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}