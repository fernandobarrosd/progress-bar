const progressBar = document.querySelector
(".progress-bar");
const progressBarPercent = document.querySelector
(".progress-bar-percent");
const progressBarPercentText = document.querySelector
("#percent");
const btnIniciar = document.querySelector
("#btn-iniciar");
let interval = null;
let i = 0;



btnIniciar.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(() => {
        if (i < 100) {
            i ++;
            progressBarPercent.style.width = `${i}%`;
            progressBarPercent.style.transition = 
            `0.1s all`;
            progressBarPercentText.textContent = `${i}%`;
        }
        else {
            clearInterval(interval);
        }
    }, 100);
})