const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passsword = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error messag
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === '') {
        showErrror(username,'User name is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showErrror(email,'Email  is required');
    } else if(!isValidEmail(email.value)) {
        showErrror(email, 'Email  is not valid')
    }  
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showErrror(password,'Password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showErrror(password2,'Password 2 is required');
    } else {
        showSuccess(password2);
    }
});

