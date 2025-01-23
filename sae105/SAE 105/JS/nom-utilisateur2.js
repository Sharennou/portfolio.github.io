window.onload = function() {
    const username = localStorage.getItem('username');

    if (username) {
        const welcomeMessage = document.querySelector('.content h1');
        welcomeMessage.textContent = `Bienvenue, ${username} !`;
    }
}
