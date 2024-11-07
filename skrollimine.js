let parallaxText = document.getElementById("text-section");
parallaxText.innerHTML = parallaxText.textContent.split(" ").map((word) => `<span>${word}</span>`).join("");