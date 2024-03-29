const form = document.querySelector(".js-form"),
      input = document.querySelector("input"),
      greeting = document.querySelector(".js-greetings"); //<h2> Tag

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

// save currentUserName in the localStorage
function saveName(text) {
    localStorage.setItem(USER_LS, text); 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

// if currentUser is NULL
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

//if currentUser is NOT NULL
function paintGreeting (text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();