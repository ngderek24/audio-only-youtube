// get parent element of video
var player = document.getElementById("movie_player");

// create an overlay element to cover video
var overlay = document.createElement('div');
player.appendChild(overlay);

// initialize overlay to have black background and be able to cover video
overlay.setAttribute("id", "videoOverlay");
overlay.style.position = 'absolute';
overlay.style.zIndex = '50';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'black';