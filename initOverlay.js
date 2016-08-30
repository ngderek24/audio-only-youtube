var player = document.getElementById("movie_player");

var overlay = document.createElement('div');

player.appendChild(overlay);

overlay.setAttribute("id", "videoOverlay");
overlay.style.position = 'absolute';
overlay.style.zIndex = '50';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'black';