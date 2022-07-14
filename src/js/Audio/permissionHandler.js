const audio = new Audio("src/assets/audio/ingame.mp3");
audio.volume = 0.01;
audio.muted = true;

const alertEl = document.querySelector(".alert");

audio.play().then(() => {
    alertEl.remove();
    resetAudio();
})
.catch(() => {
    alertEl.addEventListener('click', ({ target }) => {
        if (target.matches('button')) {
            const allowed = target.value === "1";
            if (allowed) {
                audio.muted = false;
                audio.play().then(resetAudio);
            }
            alertEl.remove();
        }
    });
});

function resetAudio() {
    audio.currentTime = 0;
    audio.muted = false;
    audio.loop = true;
}