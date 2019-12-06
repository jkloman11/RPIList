function valdiatePost() {
    var formData = $("#create-post-form").serializeArray();
    msg = "";
    if(formData[0].value == "") {
        msg += "A post must have a title.\n";
    }
    if(msg != '') {
        alert(msg);
        return false;
    }
}

function createPost() {
    var formData = $("#create-post-form").serialize();
    $.ajax({
        type: "POST",
        url: "/RPIList/api/create-post.php",
        data: formData,
        success: function(responseData, status){
            document.getElementById("create-post-form").reset();
            alert(responseData);
        }, error: function(msg) {
            document.getElementById("create-post-form").reset();
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}