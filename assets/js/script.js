const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');
const img = document.querySelector('img');
const gameModeBtn = document.querySelector('.select-gamemode');

const validateInput = ( { target } ) => {
    if (target.value.length >= 1 )  {
        button.removeAttribute('disabled')
        return;
    }
    button.setAttribute('disabled','')
}

gameModeBtn.addEventListener("click", ()=>{
    if(gameModeBtn.value === "Fácil"){
        gameModeBtn.value = "Médio";
        img.src = 'assets/images/astrodog-removebg-preview.png'
    }
    else if(gameModeBtn.value === "Médio"){
        gameModeBtn.value= "Difícil";
        img.src = 'assets/images/morango-bravo-removebg-preview.png'
    }
    else if(gameModeBtn.value === "Difícil"){
        gameModeBtn.value= "Fácil";
        img.src = "assets/images/coffe-white.png"
    }
})



const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Jogador', input.value);
    localStorage.setItem('Dificuldade', gameModeBtn.value);
    window.location = 'assets/pages/game.html';
}


input.addEventListener('input', validateInput);

form.addEventListener('submit', HandleSubmit);

