$(document).ready(function() {
    htmlStr = `
        <h1><a href = "/RPIList/home">RPI List</a></h1>
        <ul class = "navBar">
            <li><a href = "/RPIList/create-post">Create a Post</a></li>
            <li><a href = "/RPIList/profile"> Profile</a></li>
            <li><a href = "/RPIList/"> Logout </a></li>
        </ul>
    `
    document.getElementById('header').innerHTML = htmlStr;
});