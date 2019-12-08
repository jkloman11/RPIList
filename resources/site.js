$(document).ready(function() {
    htmlStr = `
        <a href = "/RPIList/home"><img src = "/RPIList/resources/hLogo.png" alt = "logo"></a>
        <ul class = "navBar">
            <li><a href = "/RPIList/create-post">Create a Post</a></li>
            <li><a href = "/RPIList/profile"> Profile</a></li>
            <li><a href = "/RPIList/"> Logout </a></li>
        </ul>
    `
    document.getElementById('header').innerHTML = htmlStr;
});