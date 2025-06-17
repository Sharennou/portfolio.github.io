document.addEventListener("DOMContentLoaded", function () {
    const mainText = document.getElementById("copy-email");
    const topText = document.getElementById("top-text");

    mainText.addEventListener("mouseenter", function () {
        topText.textContent = "Clique pour copier";
    });

    mainText.addEventListener("mouseleave", function () {
        topText.textContent = "Créons ensemble quelque chose de génial !";
    });

    mainText.addEventListener("click", function (e) {
        topText.textContent = "Copié ✨";
        e.preventDefault();
        const email = "youenlebuan@gmail.com";
        navigator.clipboard.writeText(email)
    });
});