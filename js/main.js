const marker = document.getElementById("marker");
const promoVideo = document.getElementById("noo-promo");
const videoButton = document.querySelector(".play-video-button-wrapper");
const videoEntity = document.querySelector("a-video");

function hideVideoButton() {
  videoButton.style.display = "none";
}

function showVideoButton() {
  videoButton.style.removeProperty("display");
}

videoButton.addEventListener("click", () => {
  hideVideoButton();
  promoVideo.play();
  videoEntity.setAttribute("visible", true);
});

marker.addEventListener("markerFound", () => {
  showVideoButton();
});

marker.addEventListener("markerLost", () => {
  hideVideoButton();
  promoVideo.pause();
});
