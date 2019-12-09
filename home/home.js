//String that takes json data builds post html
function buildPosts(jsonData) {
   htmlStr = '';
   $.each(jsonData, function(i, post) {
      htmlStr += '<div class="job" onclick="window.location=\'/RPIList/post/?id=' + post['id'] + '&user-id=' + post['user_id']  + '\'">';
      htmlStr += '<h2>' + post["title"] + '</h2>';
      htmlStr += '<ul class="info">';
      htmlStr += '<li> <strong>Date: </strong>' + post["date"] + '</li>';
      htmlStr += '<li> <strong>Compensation: </strong>' + post["pay"] + '</li>';
      htmlStr += '<li> <strong>Time: </strong>' + post["time"] + '</li> <br>';
      des = (post["description"].length > 75) ? post["description"].substring(0, 75)+'...' : post["description"]
      htmlStr += '<li> <strong>Descritpion: </strong>' + des + '</li>';
      htmlStr += '</ul>';
      htmlStr += '</div>';
   });
   document.getElementById("postings").innerHTML = htmlStr;
}

// Onload populate all post sorted by created timestamp
$(document).ready(function() {
   $.ajax({
      type: "GET",
      url: "/RPIList/api/get-all-posts.php",
      success: function(responseData, status){
         jsonData = JSON.parse(responseData);

         jsonData.sort(function (a, b) { return new Date(b.created) - new Date(a.created) });
         buildPosts(jsonData);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });                
});

// calls search and populates the homepage with posts 
function search() {
   var formData = $("#search-form").serializeArray();
   $.ajax({
      type: "POST",
      url: "/RPIList/api/search-posts.php",
      data: formData,
      success: function(responseData, status){
         jsonData = JSON.parse(responseData);
         if(formData[1].value == "newest"){
            jsonData.sort(function (a, b) { return new Date(b.created) - new Date(a.created) });
         }
         if(formData[1].value == "oldest"){
            jsonData.sort(function (a, b) { return new Date(a.created) - Date(b.created) });
         }
         if(formData[1].value == "date"){
            jsonData.sort(function (a, b) { return new Date(b.date) - new Date(a.date) });
         }
         console.log(jsonData);

         buildPosts(jsonData);
      }, error: function(msg) {
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });        
}