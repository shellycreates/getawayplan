// escape modal

// the longest

var theLongestTrigger = document.getElementById("trigger-thelongest");
var theLongestModal = document.getElementById("modalbg-thelongest");
var theLongestClose = document.getElementById("closebtn-thelongest");

theLongestTrigger.addEventListener("click", function () {
  theLongestModal.classList.add("bg-active");
});

theLongestClose.addEventListener("click", function () {
  theLongestModal.classList.remove("bg-active");
});

// chairlift

var theChairliftTrigger = document.getElementById("trigger-chairlift");
var ChairliftModal = document.getElementById("modalbg-chairlift");
var chairliftClose = document.getElementById("closebtn-chairlift");

theChairliftTrigger.addEventListener("click", function () {
  ChairliftModal.classList.add("bg-active");
});

chairliftClose.addEventListener("click", function () {
  ChairliftModal.classList.remove("bg-active");
});

// tubbyracer

var tubbyTrigger = document.getElementById("trigger-tubbyracer");
var tubbyModal = document.getElementById("modalbg-tubbyracer");
var tubbyClose = document.getElementById("closebtn-tubbyracer");

tubbyTrigger.addEventListener("click", function () {
  tubbyModal.classList.add("bg-active");
});

tubbyClose.addEventListener("click", function () {
  tubbyModal.classList.remove("bg-active");
});

// waveball

var waveballTrigger = document.getElementById("trigger-waveball");
var waveballModal = document.getElementById("modalbg-waveball");
var waveballClose = document.getElementById("closebtn-waveball");

waveballTrigger.addEventListener("click", function () {
  waveballModal.classList.add("bg-active");
});

waveballClose.addEventListener("click", function () {
  waveballModal.classList.remove("bg-active");
});

// speedracer

var speedracerTrigger = document.getElementById("trigger-speedracer");
var speedracerModal = document.getElementById("modalbg-speedracer");
var speedracerClose = document.getElementById("closebtn-speedracer");

speedracerTrigger.addEventListener("click", function () {
  speedracerModal.classList.add("bg-active");
});

speedracerClose.addEventListener("click", function () {
  speedracerModal.classList.remove("bg-active");
});

// lazyriver

var lazyRiverTrigger = document.getElementById("trigger-lazyriver");
var lazyRiverModal = document.getElementById("modalbg-lazyriver");
var lazyRiverClose = document.getElementById("closebtn-lazyriver");

lazyRiverTrigger.addEventListener("click", function () {
  lazyRiverModal.classList.add("bg-active");
});

lazyRiverClose.addEventListener("click", function () {
  lazyRiverModal.classList.remove("bg-active");
});

// pole drag

// $('.pole-draggable').draggable({
//   axis: "y"
// });

// $('.pole-draggable').on('mousedown', function() {
//   var x1 = x2 = $(".pole-draggable").position().left;
//   var y1 = $(".pole-draggable").position().top;
//   var y2 = ($(window).height() + $(".pole-draggable").position().top);
//   $(".pole-draggable").draggable('option', 'containment', [x1, y1, x2, y2]);
// });

// elements click

  // longest float
  function clickLongestFloat() {
    document.getElementById('longest-float').classList.add('longestfloat-clicked');
  }

  // chairlift
  function clickChairlift() {
    document.getElementById("chairlift").className = 'chairlift-clicked';
  }

  // tubbies
  function clickTubbies() {
    document.getElementById("tubbies").className = 'tubbies-clicked';
  }

  // waveball
  function clickWaveball() {
    document.getElementById("wave-ball").className = 'waveball-clicked';
  }

  // racer1
  function clickRacer1() {
    document.getElementById('racer-1').classList.add('racer1-clicked');
  }

  // racer2
  function clickRacer2() {
    document.getElementById("racer-2").className = 'racer2-clicked';
  }

  // racer3
  function clickRacer3() {
    document.getElementById("racer-3").className = 'racer3-clicked';
  }

  // racer4
  function clickRacer4() {
    document.getElementById("racer-4").className = 'racer4-clicked';
  }