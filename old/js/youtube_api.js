// Create Player object
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

//create player ready callback

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", function() {
    player.playVideo();
    pauseButton.style.display = "block";
    playButton.style.display = "none";
  });

  var pauseButton = document.getElementById("pause-btn");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  });

  var stopButton = document.getElementById("stop-btn");
  stopButton.addEventListener("click", function(){
    player.stopVideo();
    stopButton.classList.add("bounce");
    setTimeout(function (){
      stopButton.classList.remove("bounce")
    }, 1000);
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  })
};


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
