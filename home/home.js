//String that takes json data builds post html
function buildPosts(jsonData) {
   htmlStr = '';
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
}

// Onload populate all post
$(document).ready(function() {
   $.ajax({
      type: "GET",
      url: "/RPIList/api/get-all-posts.php",
      success: function(responseData, status){
         jsonData = JSON.parse(responseData);
         jsonData.sort((a, b) => a.created - b.created);
         buildPosts(jsonData);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });                
});

function search() {
   var formData = $("#search-form").serialize();
   
   $.ajax({
      type: "POST",
      url: "/RPIList/api/search-posts.php",
      data: formData,
      success: function(responseData, status){
        jsonData = JSON.parse(responseData);
        jsonData.sort((a, b) => a.created - b.created);
        buildPosts(jsonData);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });        
}