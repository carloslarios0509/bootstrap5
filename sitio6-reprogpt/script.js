const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');
const currentTime = document.getElementById('currentTime');

let isPlaying = false;

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

muteBtn.addEventListener('click', function() {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? 'Unmute' : 'Mute';
});

volumeControl.addEventListener('input', function() {
    audio.volume = volumeControl.value;
});

audio.addEventListener('timeupdate', function() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});
