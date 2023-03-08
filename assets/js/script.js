const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');
const img = document.querySelector('img');
const gameModeBtn = document.querySelector('.select-gamemode');
const title = document.querySelector('.title')


const validateInput = ( { target } ) => {
    if (target.value.length >= 1 )  {
        button.removeAttribute('disabled')
        return;
    }
    button.setAttribute('disabled','')
}

gameModeBtn.addEventListener("click", ()=>{
    if(gameModeBtn.value === "Fácil" ){
        gameModeBtn.value = "Médio";
        img.src = 'assets/images/astrodog-removebg-preview.png';
        gameModeBtn.style.backgroundColor = 'rgb(156,86,115)';
        input.style.color = 'rgb(156,86,115)';
        title.style.color = 'rgb(156,86,115)';
    }
    else if(gameModeBtn.value === "Médio"){
        gameModeBtn.value= "Difícil";
        gameModeBtn.style.backgroundColor = 'rgb(254,85,76)';
        input.style.color = 'rgb(254,85,76)';
        img.src = 'assets/images/morango-bravo-removebg-preview.png';
        title.style.color = 'rgb(254,85,76)';
    }
    else if(gameModeBtn.value === "Difícil" ){
        gameModeBtn.value= "Fácil";
        img.src = "assets/images/coffe-white.png";
        gameModeBtn.style.backgroundColor = 'hsl(48, 94%, 51%)';
        input.style.color = 'hsl(48, 94%, 51%)';
        title.style.color = 'hsl(48, 94%, 51%)';
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

