const grid = document.querySelector('.grid');
const spanPLayer = document.querySelector('.player');
const spanDifficulty = document.querySelector('.dificuldade');
const timer = document.querySelector('.timer');
const gameDifficulty = localStorage.getItem('Dificuldade');

const characters = ['garota3','bunny1','hamster','flamingo','music','turtle','penguin','lion','casal','garotinha2'];


const createElement = (tag , className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';
let win = false;


const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if(disabledCards.length === 20){
        clearInterval(this.loop);
        win = true
        localStorage.setItem("win", win.valueOf());
        window.location = "../pages/gameover.html";
    }
}

const gameover = () => {
    clearInterval(this.loop);
    window.location = "../pages/gameover.html";
}
const checkLose = () => {
    if(gameDifficulty === 'Fácil'  && localStorage.getItem('min') >= 1 && localStorage.getItem('seg') >= 30) {
        gameover();
    }
    else if(gameDifficulty === 'Médio'  && localStorage.getItem('min') == 1 ) {
        gameover();
    }
    else if(gameDifficulty === 'Difícil'  && localStorage.getItem('seg') == 30) {
        gameover();
 }}



const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';
        checkEndGame();
    }else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 600 );
    }
}

const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }
    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
        checkCards();
    }

}

const createCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${character}.png')`,

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard);
    card.setAttribute('data-character', character );

    return card;

}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() -0.5);
    shuffledArray.forEach((character)=> {
        const card = createCard(character);
        grid.appendChild(card);

    });
}



 let seg = 0;
 let min = 0;

const segundo = () => {
    seg++;
    if(seg == 60){
        min++;
        seg = 0;
        document.getElementById('minuto').innerHTML = min;
    }
    document.getElementById('segundo').innerHTML = seg;
    localStorage.setItem("min", min);
    localStorage.setItem("seg", seg);
}
const startTimer = () => {setInterval(function(){ segundo() , checkLose() },1000)}

window.onload= () => {

    const playerName = localStorage.getItem('Jogador');
    spanPLayer.innerHTML = playerName;
    spanDifficulty.innerHTML = gameDifficulty;
    localStorage.setItem("win", win.valueOf());
    startTimer();
    loadGame();
}

