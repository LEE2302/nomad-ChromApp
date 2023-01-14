// const logInFrom = document.querySelector('#login_form');
// const logInInput = document.querySelector('#login_form input');
// const logInH1 = document.querySelector('#greetings');

// //스트링이 계속되면 변수로 지정해주는게 좋다. 오타가 생겼을때 변수로 지정되어있으면 알아차리기 쉽기 때문.
// //스트링만 있는 것은 대문자로 변수지정 (법칙은 아니고 보통 이렇게함)
// HIDDEN_CLASSNAME = 'hidden';
// USERNAME_KEY = 'userName';

// function onLogInSubmit (event) {
//     //기본동작을 막아주는
//     event.preventDefault();
//     const userName = logInInput.value;
//     localStorage.setItem(USERNAME_KEY, userName);
//     logInFrom.classList.add(HIDDEN_CLASSNAME);
//     logInH1.innerHTML = `hello ${userName}`;
//     logInH1.classList.remove(HIDDEN_CLASSNAME);
// };

// //로컬 스토리지에 저장하기.

// if(localStorage.getItem(USERNAME_KEY) === null) {
//     //폼이 나오게
//     logInFrom.addEventListener('submit', onLogInSubmit);
//     logInFrom.classList.remove(HIDDEN_CLASSNAME);
// } else {
//     //폼은 안나오고 h1이 나오게
//     logInFrom.classList.add(HIDDEN_CLASSNAME);
//     logInH1.classList.remove(HIDDEN_CLASSNAME);
//     logInH1.innerHTML = `hello ${userName}`;
// }


const logInFrom = document.querySelector('#login_form');
const logInInput = document.querySelector('#login_form input');
const logInH1 = document.querySelector('#greetings');

//스트링이 계속되면 변수로 지정해주는게 좋다. 오타가 생겼을때 변수로 지정되어있으면 알아차리기 쉽기 때문.
//스트링만 있는 것은 대문자로 변수지정 (법칙은 아니고 보통 이렇게함)
HIDDEN_CLASSNAME = 'hidden';
USERNAME_KEY = 'userName';

//submit을 하면 실행되는 함수
function onLogInSubmit (event) {
    //기본동작을 막아주는
    event.preventDefault();
    const userName = logInInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    logInFrom.classList.add(HIDDEN_CLASSNAME);
    painlogInh1(userName);
};

//h1 화면에 나오고 텍스트 추가하는 함수
function painlogInh1 (userName) {
    logInH1.classList.remove(HIDDEN_CLASSNAME);
    logInH1.innerHTML = `hello ${userName}`;
};

//로컬스토리지에 저장된 키값을 알기위한 변수
const savedUserName = localStorage.getItem(USERNAME_KEY);

//로컬 스토리지에 값이 있는지 없는지 확인하는 조건문.
if(localStorage.getItem(USERNAME_KEY) === null) {
    //폼이 나오게
    logInFrom.addEventListener('submit', onLogInSubmit);
    logInFrom.classList.remove(HIDDEN_CLASSNAME);
} else {
    //폼은 안나오고 h1이 나오게
    logInFrom.classList.add(HIDDEN_CLASSNAME);
    painlogInh1(savedUserName);
}