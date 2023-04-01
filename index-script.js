window.onload = () => {
    document.getElementById('welcome-message').querySelector('button').onclick = () => {
        document.querySelector('.welcome').classList.toggle('invisible');
        window.open("portfolio.html", "_self");
    }
}