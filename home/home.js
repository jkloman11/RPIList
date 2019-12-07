function getAllPosts() {
   $.ajax({
       type: "GET",
       url: "/RPIList/api/get-all-posts.php",
       success: function(responseData, status){
         htmlStr = ''
         $.each(JSON.parse(responseData), function(i, post) {
            htmlStr += '<div class="job" onclick="window.location=\'/RPIList/post\'">';
            htmlStr += '<h2>' + post["title"] + '</h2>';
            htmlStr += '<ul class="info">';
            htmlStr += '<li> Posted By: ' + post["user_id"] + '</li>';
            htmlStr += '<li> Date: ' + post["date"] + '</li>';
            htmlStr += '<li> Compensation: ' + post["pay"] + '</li>';
            htmlStr += '<li> Time: ' + post["time"] + '</li>';
            htmlStr += '</ul>';
            htmlStr += '</div>';
         });

         document.getElementById("postings").innerHTML = htmlStr;
       }, error: function(msg) {
         alert("There was a problem: " + msg.status + " " + msg.statusText);
       }
   });
}

$(document).ready(function() {
   console.log("ready");
   getAllPosts();



   // Not sure what these did 
   // // example event handler:
   // $('#goNext').click(function() {
      
   // });
   // $('.job').click(function () {
      
   // });
   
   // $('#goBack').click(function(){
   //    if(document.getElementById('page')=='1'){
   //       document.getElementById("goBack").disabled = true;
   //    }
   // })
                       
                       
});