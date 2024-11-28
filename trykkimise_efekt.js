// Küsisin abi ChatGPT käest
// Fraasid, mis kirjutamisefektiga ekraanile kuvatakse
document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
        "rahvaarvult Eesti teine linn",
        "kauneim linn Eestis",
        "Euroopa kultuuripealinn 2024",
        "väike puust linn"
    ];

    const colors = [
        "#729B79", 
    ];

// Parameetrid nagu kirjutamiskiirus, mis fraasi või sõna juures oleme, kas oleme kustutamise faasis, kuhu tekst kuvatakse
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    let isDeleting = false;
    const speed = 80;
    const deleteSpeed = 50;
    const delay = 2000;
    const element = document.querySelector(".animeeri span");

    // Kirjutamisefekti osa
    function type() {
        element.style.color = colors;
    // Kui tegemist kustutamise funktsiooniga, hakkame kustutama ühe tähe haaval
        if (isDeleting) {
            if (currentLetterIndex > 0) {
                currentLetterIndex--;
                element.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex);
                setTimeout(type, deleteSpeed);
                // Kui kõik tähed kustutatud, liigume kirjutamisreiimi
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, speed);
            }
            // Kontroll, kas praegune fraas on kirjutatud
        } else {
            if (currentLetterIndex < phrases[currentPhraseIndex].length) {
                element.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex + 1);
                currentLetterIndex++;
                setTimeout(type, speed);
                // Kui fraas on kirjutatud, hakkame jälle kustutama
            } else {
                isDeleting = true;
                setTimeout(type, delay);
            }
        }
    }

    type();
});

  