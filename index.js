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
    const confirmPasswordCheck = confirmPasswordValidation(confirmPassword);

    return firstNameCheck && lastNameCheck && dateOfBirthdayCheck && emailCheck && passwordCheck && confirmPasswordCheck;
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
        firstName.focus();
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
        lastName.focus();
        return false;
    }
}

function dateOfBirthdayValidation(dateOfBirthday) {
    if (dateOfBirthday.value === '') {
        addErrorBorderColor(dateOfBirthday);
        addErrorText(dateOfBirthday, 'Укажите дату рождения')
        dateOfBirthday.focus();
        return false;
    }
    removeErrorBorderColor(dateOfBirthday);
    addErrorText(dateOfBirthday, '');
    return true

}

function emailValidation(email) {
    let emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.value.match(emailFormat)) {
        removeErrorBorderColor(email);
        addErrorText(email, '');
        return true;
    } else {
        addErrorBorderColor(email);
        addErrorText(email, "You have entered an invalid email address!");
        email.focus();
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
        password.focus();
        return false;
    }

}

function confirmPasswordValidation(password, checkPassword) {
    if (password.value === checkPassword.value) {
        removeErrorBorderColor(checkPassword);
        addErrorText(checkPassword, '');
        return true
    } else {
        addErrorBorderColor(checkPassword);
        addErrorText(checkPassword, 'Пароли должны совпадать')
        checkPassword.focus();
        return false
    }

}

function addErrorBorderColor(input, errorBorderColor = 'errorColorBorder') {
    input.classList.add(errorBorderColor)
}

function removeErrorBorderColor(input, errorBorderColor = 'errorColorBorder') {
    input.classList.remove(errorBorderColor)
}

function addErrorText(input, errorMessage) {
    input.parentElement.querySelector('p').innerText = errorMessage
}
