document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    // Funktsioon, mis lisab aktiivse klassi järgmisele sektsioonile
    function showNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex++;
            sections[currentSectionIndex].classList.add('active');
        }
    }

    // Algseisus kuvame ainult esimest sektsiooni
    sections[0].classList.add('active');

    // Liikumine alla kerides
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            showNextSection();
        }
    });
});
