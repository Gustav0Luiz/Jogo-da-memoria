const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form')
const img = document.querySelector('img')

const validateInput = ( { target } ) => {
    if (target.value.length >= 1)  {
        button.removeAttribute('disabled')
        return;
    }
    button.setAttribute('disabled','')
}

const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Jogador', input.value);
    window.location = 'assets/pages/game.html';
}


input.addEventListener('input', validateInput);

form.addEventListener('submit', HandleSubmit);

