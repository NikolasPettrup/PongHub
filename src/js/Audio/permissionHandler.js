/**
 * set background audio
 *
 * @type {HTMLAudioElement}
 */
const audio = new Audio("src/assets/audio/ingame.mp3");
audio.volume = 0.01;
audio.muted = true;


/**
 * alert box element
 *
 * @type {Element}
 */
const alertEl = document.querySelector(".alert");


/**
 * try to play audio and remove alert element
 */
audio.play().then(() => {
    alertEl.remove();
    resetAudio();
})
.catch(() => {
    /**
     * check if audio was accepted or not
     */
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


/**
 * reset audio to time 0 and unmute
 */
function resetAudio() {
    audio.currentTime = 0;
    audio.muted = false;
    audio.loop = true;
}