function redirectToHome() {
    const username = document.getElementById('username').value;

    localStorage.setItem('username', username);

    window.location.href = '/SAE 105/HTML/index.html';
}
