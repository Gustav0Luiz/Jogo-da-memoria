const divPlayer = document.querySelector('.player');
const playersName = localStorage.getItem('Jogador');
const minuts =  localStorage.getItem('min')
const seconds = localStorage.getItem('seg')
divPlayer.innerHTML = `Parabéns, ${playersName}! </br> </br> Seu tempo foi de ${minuts} minuto(s) e ${seconds} segundo(s).`;

function playAgain(){
    window.location = 'game.html';
}

