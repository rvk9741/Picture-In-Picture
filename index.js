"use strict";

const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

const media = async () => {
  try {
    const mediaStreaming = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStreaming;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("error", error);
  }
};

button.addEventListener("click", async () => {
  button.disabled = true;
  //   start PIP
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

media();
