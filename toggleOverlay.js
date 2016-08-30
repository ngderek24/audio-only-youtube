var player = document.getElementById("movie_player");
var videos = document.getElementsByClassName("html5-video-container");
//console.log(videos);

var overlay = document.createElement('div');

player.appendChild(overlay);

overlay.style.position = 'absolute';
overlay.style.zIndex = '30';
overlay.style.width = videos[0].scrollWidth.toString();
overlay.style.height = videos[0].scrollHeight.toString();
overlay.style.visibility = true;
overlay.style.backgroundColor = 'black';
console.log(overlay);