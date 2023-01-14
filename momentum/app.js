const logInFrom = document.querySelector('#login_form');
const logInInput = document.querySelector('#login_form input');
const logInH1 = document.querySelector('h1.hidden');

function onLogInSubmit (event) {
    //기본동작을 막아주는
    event.preventDefault();
    const userName = logInInput.value;
    logInFrom.classList.add('hidden');
    logInH1.innerHTML = `hello ${userName}`;
    logInH1.classList.remove('hidden');

    console.log(userName);
};

logInFrom.addEventListener('submit', onLogInSubmit);