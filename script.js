const videoUpload = document.getElementById("videoUpload");
const videoContainer = document.getElementById("videoContainer");

videoUpload.addEventListener("change", function () {
  const files = Array.from(this.files);

  files.forEach(file => {
    if (file.type.startsWith("video/")) {
      const videoURL = URL.createObjectURL(file);

      const videoBox = document.createElement("div");
      videoBox.className = "video-box";

      const videoElement = document.createElement("video");
      videoElement.src = videoURL;
      videoElement.controls = true;

      videoBox.appendChild(videoElement);
      videoContainer.prepend(videoBox);
    }
  });
});
