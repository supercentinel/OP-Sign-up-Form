const form = document.querySelector('.actual_form');

const inputs = form.querySelectorAll('input');
const error_msg = form.querySelectorAll('.val_err_msg');

//Error message for first name
const first_name_input = form.querySelector('#first_name_input');
const first_name_error = form.querySelector('#first_name_error');

first_name_input.addEventListener('input', () => {
});

//Error message for last name
const last_name_input = form.querySelector('#last_name_input');
const last_name_error = form.querySelector('#last_name_error');


//Error message for email
const email_input = form.querySelector('#email_input');
const email_error_required = form.querySelector('#email_error_required');
const email_error_invalid = form.querySelector('#email_error_invalid');

const email_regex = /[\w\W]+@\w+\.\w+/;


//Error message for phone number
const phone_input = form.querySelector('#telephone_input');
const phone_error_required = form.querySelector('#telephone_error_required');
const phone_error_invalid = form.querySelector('#telephone_error_invalid');

phone_input.addEventListener('input', () => {
    if (phone_input.value.length < 12) {
        if (phone_input.value.length === 2) {
            phone_input.value.concat('-');
        } else if (phone_input.value.length === 7) {
            phone_input.value.concat('-');
        }
    }
});

//Error messages for password
const password_input = form.querySelector('#password_input');
const password_error_required = form.querySelector('#password_error_required');
const password_error_length = form.querySelector('#password_error_len');

//Error messages for password confirm
const password_confirm_input = form.querySelector('#passwordVer_input');
const password_confirm_error = form.querySelector('#passwordVer_error');

//Validation after submit
const submit_btn = document.querySelector('#submit_btn');

submit_btn.addEventListener('click', () => {
    console.log('submit');

    //First name validation
    if (first_name_input.value === '') {
        first_name_error.style.display = 'block';
    } else {
        first_name_error.style.display = 'none';
    }

    //Last name validation
    if (last_name_input.value === '') {
        last_name_error.style.display = 'block';
    }else {
        last_name_error.style.display = 'none';
    }

    //Email validation
    if (email_input.value === '') {
        email_error_required.style.display = 'block';
    }
    else {
        email_error_required.style.display = 'none';
    }

    if(!email_regex.test(email_input.value)){
        email_error_invalid.style.display = 'block';
    } else {
        email_error_invalid.style.display = 'none';
    }

    //Phone number validation
    if (phone_input.value === '') {
        phone_error_required.style.display = 'block';
    }
    else {
        phone_error_required.style.display = 'none';
    }

    if(phone_input.value !== '\d{2}-\d{4}-\d{4}'){
        phone_error_invalid.style.display = 'block';
    } else {
        phone_error_invalid.style.display = 'none';
    }

    //Password validation
    if (password_input.value === '') {
        password_error_required.style.display = 'block';
    }
    else {
        password_error_required.style.display = 'none';
    }

    if (password_input.value.length < 8) {
        password_error_length.style.display = 'block';
    } else {
        password_error_length.style.display = 'none';
    }

    //Password confirm validation
    if (password_confirm_input.value === password_input.value) {
        password_confirm_error.style.display = 'none';
    } else {
        password_confirm_error.style.display = 'block';
    }
});
