/////////////////////////////////////
/// GLOBAL VARIABLES
/////////////////////////////////////

const TIME_DELAY = 3000

/////////////////////////////////////
/// ONLOAD EVENTS
/////////////////////////////////////

function onLoad() {
    setTimeout(function () {
        activateScroll()
        playMainVideo()
        stopLoadingVideo()
    }, TIME_DELAY);
}

function activateScroll() {
    var body = document.getElementById("main-body");
    body.style.overflowY = "auto";
}

function playMainVideo() {
    var mainVideo = document.getElementsByClassName("main-video");
    for (let index = 0; index < mainVideo.length; index++) {
        mainVideo[index].style.visibility = "visible";
        mainVideo[index].play();
    }
}

function stopLoadingVideo() {
    var loadingVideo = document.getElementById("loading-video");
    loadingVideo.style.visibility = "hidden";
}

/////////////////////////////////////
/// SCROLL EVENTS
/////////////////////////////////////

$("#main-title").on("scroll", function () {
    console.log(window.scrollY)
    if (window.scrollY > 870) {
        $(this).removeClass("hidden");
    }
});

$("#main-title").on("load", function () {
    if (window.scrollY > 870) {
        $(this).removeClass("hidden");
    }
});

$.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];
    $(this).each(function () {
        instances.push(new moveItItem($(this)));

    });

    window.onscroll = function () {
        if (window.scrollY > 870 && window.scrollY < 3000) {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }
    }
}

var moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function (scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function () {
    $('[data-scroll-speed]').moveIt();
});