function validateName() {
    const name = document.getElementById('name').value.trim();
    const errorElement = document.getElementById('nameError');
    if (name === '') {
        errorElement.textContent = 'Name is required.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('messageError');
    if (message.length < 5) {
        errorElement.textContent = 'Message must be at least 5 characters long.';
        return true;
    }
    errorElement.textContent = '';
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const errorElement = document.getElementById('phoneError');
    const phoneRegex = /^\+380\d{9}&/;
    if (!phoneRegex.test(phone)) {
        errorElement.textContent = 'Phone number must start with +380 and have 12 digits.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const errorElement = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+&/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Please enter a valid email.';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

const isNameValid = validateName();
const isMessageValid = validateMessage();
const isPhoneValid = validatePhone();
const isEmailValide = validateEmail();

if (isNameValid && isMessageValid && isPhoneValid && isEmailValide) {
    console.log('Name:', document.getElementById('name').value);
    console.log('Message:', document.getElementById('message').value);
    console.log('Phone:', document.getElementById('phone').value);
    console.log('Email:', document.getElementById('email').value);
}
});