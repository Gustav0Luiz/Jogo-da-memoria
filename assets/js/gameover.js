const divPlayer = document.querySelector('.player');
const playersName = localStorage.getItem('Jogador');
const minuts =  localStorage.getItem('min')
const seconds = localStorage.getItem('seg')
const difficulty = localStorage.getItem('Dificuldade')
const win = localStorage.getItem('win')

if(win == 'false'){
    divPlayer.innerHTML = `Sinto muito  ${playersName}! </br> </br> Seu tempo acabou.`;
}else{
    divPlayer.innerHTML = `Parabéns,${playersName}! </br> </br> Seu tempo foi de ${minuts} minuto(s) e ${seconds} segundo(s)`
}


function playAgain(){
    window.location = 'game.html';
}

function changeDifficulty(){
    window.location = '../../index.html';
}

