const videoPlayer = document.getElementById("videoPlayer");
const ppButton = document.getElementById("ppButton");
const videoPlay = document.getElementById("video-play");
const videoPause = document.getElementById("video-pause");
const forwardButton = document.getElementById("forwardButton");
const backButton = document.getElementById("backButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const muteButton = document.getElementById("muteButton");
const pipButton = document.getElementById("pipButton");
const changeValue = 5;

ppButton.onclick = () => {
  if (videoPlayer.paused) {
    showPause();
    videoPlayer.play();
    return;
  }
  showPlay();
  videoPlayer.pause();
};

backButton.onclick = () => videoPlayer.currentTime -= changeValue;
;

forwardButton.onclick = () => {
  videoPlayer.currentTime += changeValue;
};

fullscreenButton.onclick = () => {
  videoPlayer.requestFullscreen();
};

muteButton.onclick = () => {
  if (videoPlayer.volume === 0) {
    videoPlayer.volume = 1;
    return;
  }
  videoPlayer.volume = 0;
};

pipButton.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
    return;
  }
  videoPlayer.requestPictureInPicture();
};

const showPlay = () => {
  videoPlay.style.display = "block";
  videoPause.style.display = "none";
};

const showPause = () => {
  videoPlay.style.display = "none";
  videoPause.style.display = "block";
};

const audioPlayer = document.getElementById("audioPlayer");
const muteButtonAudio = document.getElementById("muteButtonAudio");
const backButtonAudio = document.getElementById("backButtonAudio");
const forwardButtonAudio = document.getElementById("forwardButtonAudio");
const audioPlay = document.getElementById("audio-play");
const audioPause = document.getElementById("audio-pause");
const ppButtonAudio = document.getElementById("ppButtonAudio");

ppButtonAudio.onclick = () => {
  if (audioPlayer.paused) {
    showAudioPause();
    audioPlayer.play();
    return;
  }
  showAudioPlay();
  audioPlayer.pause();
};
muteButtonAudio.onclick = () => {
  if (audioPlayer.volume === 0) {
    audioPlayer.volume = 1;
    return;
  }
  audioPlayer.volume = 0;
};

backButtonAudio.onclick = () => {
  audioPlayer.currentTime -= changeValue;
};

forwardButtonAudio.onclick = () => {
  audioPlayer.currentTime += changeValue;
};

const showAudioPlay = () => {
  audioPlay.style.display = "block";
  audioPause.style.display = "none";
};

const showAudioPause = () => {
  audioPlay.style.display = "none";
  audioPause.style.display = "block";
};
