const divPlayer = document.querySelector('.player');
const playersName = localStorage.getItem('Jogador');
const minuts =  localStorage.getItem('min')
const seconds = localStorage.getItem('seg')
const difficulty = localStorage.getItem('Dificuldade')

if(difficulty === "Fácil" && minuts <=1 && seconds < 30){
    divPlayer.innerHTML = `Parabéns,! </br> </br> Seu tempo foi de ${minuts} minuto(s) e ${seconds} segundo(s).`;
}else ( divPlayer.innerHTML = `Sinto muito  ${playersName}! </br> </br> Seu tempo acabou.`);

if(difficulty === "Médio" && minuts < 1){
    divPlayer.innerHTML = `Parabéns,! </br> </br> Seu tempo foi de ${minuts} minuto(s) e ${seconds} segundo(s).`;
}else ( divPlayer.innerHTML = `Sinto muito  ${playersName}! </br> </br> Seu tempo acabou.`);

if(difficulty === "Difícil"  && seconds < 30){
    divPlayer.innerHTML = `Parabéns,! </br> </br> Seu tempo foi de ${minuts} minuto(s) e ${seconds} segundo(s).`;
}else ( divPlayer.innerHTML = `Sinto muito  ${playersName}! </br> </br> Seu tempo acabou.`);

 

function playAgain(){
    window.location = 'game.html';
}

function changeDifficulty(){
    window.location = '../../index.html';
}