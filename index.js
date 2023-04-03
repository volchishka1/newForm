function validationForm() {
    const firstName = document.myForm.firstName;
    const lastName = document.myForm.lastName;
    const dateOfBirthday = document.myForm.dateOfBirthday;
    const email = document.myForm.email;
    const password = document.myForm.password;
    const confirmPassword = document.myForm.confirmPassword;

    const firstNameCheck = firstNameValidation(firstName);
    const lastNameCheck = lastNameValidation(lastName);
    const dateOfBirthdayCheck = dateOfBirthdayValidation(dateOfBirthday);
    const emailCheck = emailValidation(email);
    const passwordCheck = passwordValidation(password);
    const confirmPasswordCheck = confirmPasswordValidation(password, confirmPassword);

    if (firstNameCheck && lastNameCheck && dateOfBirthdayCheck && emailCheck && passwordCheck && confirmPasswordCheck) {
        outputFormBodyToConsole();
        return true;
    }

    return false;
}

function firstNameValidation(firstName) {
    let letters = /^([а-яё\s]+|[a-z\s]+){2,25}$/iu;
    if (firstName.value.match(letters)) {
        removeErrorBorderColor(firstName);
        addErrorText(firstName, '');
        return true;
    } else {
        addErrorBorderColor(firstName);
        addErrorText(firstName, 'Имя содержит недопустимые символы и должно содержать не менее 2 и не более 25 символов');
        return false;
    }
}

function lastNameValidation(lastName) {
    let letters = /^([а-яё\s]+|[a-z\s]+){2,25}$/iu;
    if (lastName.value.match(letters)) {
        removeErrorBorderColor(lastName);
        addErrorText(lastName, '');
        return true;
    } else {
        addErrorBorderColor(lastName);
        addErrorText(lastName, 'Фамилия содержит недопустимые символы и должна содержать не менее 2 и не более 25 символов');
        return false;
    }
}

function dateOfBirthdayValidation(dateOfBirthday) {
    if (dateOfBirthday.value === '') {
        addErrorBorderColor(dateOfBirthday);
        addErrorText(dateOfBirthday, 'Укажите дату рождения');
        return false;
    }
    removeErrorBorderColor(dateOfBirthday);
    addErrorText(dateOfBirthday, '');
    return true;
}

function emailValidation(email) {
    let emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.value.match(emailFormat)) {
        removeErrorBorderColor(email);
        addErrorText(email, '');
        return true;
    } else {
        addErrorBorderColor(email);
        addErrorText(email, "Введите валидный имеил");
        return false;
    }
}

function passwordValidation(password) {
    let passwordLength = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
    if (password.value.match(passwordLength)) {
        removeErrorBorderColor(password);
        addErrorText(password, '');
        return true;
    } else {
        addErrorBorderColor(password);
        addErrorText(password, 'Пароль должен содержать минимум 8 символов, минимум 1 символ в верхнем регистре, минимум одну цифру 1-9, минимум 1 специальный символ из перечисленных !@#$%');
        return false;
    }
}

function confirmPasswordValidation(password, confirmPassword) {
    if (password.value && confirmPassword.value && password.value === confirmPassword.value) {
        removeErrorBorderColor(confirmPassword);
        addErrorText(confirmPassword, '');
        return true;
    } else {
        addErrorBorderColor(confirmPassword);
        addErrorText(confirmPassword, 'Пароли должны совпадать')
        return false;
    }
}

function addErrorBorderColor(input, errorBorderColor = 'errorColorBorder') {
    input.classList.add(errorBorderColor);
}

function removeErrorBorderColor(input, errorBorderColor = 'errorColorBorder') {
    input.classList.remove(errorBorderColor);
}

function addErrorText(input, errorMessage) {
    input.parentElement.querySelector('p').innerText = errorMessage;
}

function setMaxDate() {
    const dtToday = new Date();

    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();

    if (month < 10) {
        month = '0' + month.toString();
    }
    if (day < 10) {
        day = '0' + day.toString();
    }

    let maxDate = year + '-' + month + '-' + day;
    document.getElementById('dateOfBirthday').setAttribute('max', maxDate);
}

setMaxDate();

function outputFormBodyToConsole() {
    const inputs = document.querySelectorAll('form input');

    for (let input of inputs) {
        console.log(input.getAttribute('name'), input.value);
    }
}
