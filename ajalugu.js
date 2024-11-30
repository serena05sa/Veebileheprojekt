
var bgcolors = ["#F3E8EE", "#BACDB0", "#729B79", "#475B63", "#2E2C2F"]; // Loodud on massiiv, mis sisaldab värve hex koodina, mida iga tsükli ajal muudetakse.

// Funktsioon taustavärvi muutmiseks
function changeBackgroundColor() {
    'use strict'; // Range režiim vigade vältimiseks
    var randomcolor = bgcolors[Math.floor(Math.random() * bgcolors.length)];
    /* Valitud on eeltoodud massiivist juhuslik värv, kus genereeritakse juhuslik number vahemikust 0 kuni 1(pole kaasa arvatud)
    ning see korrutatakse läbi bgcolors massiivi pikkusega. Seejärel Math.floor()-i abil on võimalik kasutada õiget massiivi indeksit ja sellest tulenevalt saab juhuslikult genereeritud värvid massiivist salvestada muutujas 'randomcolor'.*/
    document.body.style.backgroundColor = randomcolor; // Veebilehe keha muutmine vastavaks värviks.
}

setInterval(changeBackgroundColor, 7000); // Ajavahemik, mille jooksul värvi muudetakse

// Kood võetud: Abu, J. (2021, May 31). How to generate random background colors with JavaScript. Web Design Envato Tuts+. https://webdesign.tutsplus.com/generate-random-background-colors-javascript--cms-37030t? ja vastavalt muudetud. 