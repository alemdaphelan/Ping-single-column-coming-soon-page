const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('btn');
const errorMsg = document.getElementById('error-msg');
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const reset = () => {
    emailInput.style.borderColor = "hsl(223, 100%, 88%)";
    errorMsg.style.display = "none";
}

const showError = () => {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMsg.style.display = "block";
}
const checkEmail = (input) => {
    if (input === "" || !emailRegex.test(input)) {
        showError();
    } else {
        alert("Thanks you for spending time.")
        reset();
    }
}
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkEmail(emailInput.value);
})