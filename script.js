const TIME_DELAY = 3000

function onLoad() {
    setAudioVolume()
    setTimeout(function () {
        activateScroll()
        playMainVideo()
        stopLoadingVideo()
    }, TIME_DELAY);
}

function setAudioVolume() {
    var mainAudio = document.getElementById("main-audio");
    mainAudio.volume = 0.3;
}

function activateScroll() {
    var body = document.getElementById("main-body");
    body.style.overflowY = "auto";
}

function playMainVideo() {
    var mainVideo = document.getElementById("main-video");
    mainVideo.style.visibility = "visible";
    mainVideo.play();
}

function stopLoadingVideo() {
    var loadingVideo = document.getElementById("loading-video");
    loadingVideo.style.visibility = "hidden";
}