document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "rahvaarvult Eesti teine linn",
        "kauneim linn Eestis",
        "Euroopa kultuuripealinn 2024",
        "väike puust linn"
    ];

    const colors = [
        "#729B79",  // Color for first phrase   // Color for fourth phrase
    ];

    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    const speed = 80;
    const deleteSpeed = 50;
    const delay = 2000;
    const element = document.querySelector(".animeeri span");

    function type() {
        element.style.color = colors;
        if (isDeleting) {
            if (currentLetterIndex > 0) {
                currentLetterIndex--;
                element.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex);
                setTimeout(type, deleteSpeed);
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, speed);
            }
        } else {
            if (currentLetterIndex < phrases[currentPhraseIndex].length) {
                element.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex + 1);
                currentLetterIndex++;
                setTimeout(type, speed);
            } else {
                isDeleting = true;
                setTimeout(type, delay);
            }
        }
    }

    type();
});

  