function getAllPosts() {
   $.ajax({
       type: "GET",
       url: "/RPIList/api/get-all-posts.php",
       success: function(responseData, status){
         htmlStr = ''
         jsonData = JSON.parse(responseData);
         jsonData.sort((a, b) => a.date - b.date);
         $.each(jsonData, function(i, post) {
            htmlStr += '<div class="job" onclick="window.location=\'/RPIList/post/?id=' + post['id'] + '&user-id=' + post['user_id']  + '\'">';
            htmlStr += '<h2>' + post["title"] + '</h2>';
            htmlStr += '<ul class="info">';
            htmlStr += '<li> Date: ' + post["date"] + '</li>';
            htmlStr += '<li> Compensation: ' + post["pay"] + '</li>';
            htmlStr += '<li> Time: ' + post["time"] + '</li> <br>';
            des = (post["description"].length > 75) ? post["description"].substring(0, 75)+'...' : post["description"]
            htmlStr += '<li> Descritpion: ' + des + '</li>';
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