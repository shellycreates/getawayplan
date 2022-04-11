// home about modal

var aboutTrigger = document.getElementById("trigger-about");
var modalBg = document.querySelector(".section-modal");
var aboutCloseBtn = document.getElementById("closebtn");

aboutTrigger.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

aboutCloseBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

//home happening btn

function goHpn() {
  location.href = "happening.html";
}
