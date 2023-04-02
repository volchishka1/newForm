function validationForm()
{
    let firstName = document.myForm.firstName;
    let lastName = document.myForm.lastName;
    let dateOfBirthday = document.myForm.dateOfBirthday;
    let email = document.myForm.email;
    let password = document.myForm.password;
    let checkPassword = document.myForm.checkPassword;
    if(firstName_validation(firstName,2,25))
    {
        if(lastName_validation(lastName,2,25))
        {
            if(dateOfBirthdayDay(dateOfBirthday))
            {
                if(validateEmail(email))
                {
                    if(validPassword(password))
                    {
                        if(validCheckPassword(password, checkPassword))
                        {
                        }
                    }
                }
            }
        }
    }
    return false;
}

function firstName_validation(firstName, min, max)
{
    let lastNameLength = firstName.value.length;
    let letters = /^([а-яё\s]+|[a-z\s]+)$/iu;
    if(firstName.value.match(letters))
    {
        return true;
    } else if (lastNameLength === 0 || lastNameLength >= min || lastNameLength < max) {
        alert('Имя должно содержать от 2 до 25 символов')
    }
    else
    {
        alert('Имя содержит недопустимые символы и должно содержать не менее 2 и не более 25 символов');
        firstName.focus();
        return false;
    }
}

function lastName_validation(lastName, min, max)
{
    let lastNameLength = lastName.value.length;
    let letters = /^([а-яё\s]+|[a-z\s]+)$/iu;
    if(lastName.value.match(letters))
    {
        return true;
    } else if (lastNameLength === 0 || lastNameLength >= min || lastNameLength < max) {
        alert('Фамилия должна содержать от 2 до 25 символов')
    }
    else
    {
        alert('Фамилия содержит недопустимые символы');
        lastName.focus();
        return false;
    }
}

function dateOfBirthdayDay(dateOfBirthday) {
    if(dateOfBirthday.value === '') {
        alert('Укажите дату рождения')
        dateOfBirthday.focus();
        return false;
    }
    return true

}

function validateEmail(email)
{
    let emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(email.value.match(emailFormat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function validPassword(password)
{
    let passwordLength = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
    if(password.value.match(passwordLength))
    {
        return true;
    }
    else
    {
        alert('Пароль должен содержать минимум 8 символов, минимум 1 символ в верхнем регистре, минимум одну цифру 1-9, минимум 1 специальный символ из перечисленных !@#$%');
        password.focus();
        return false;
    }

}

function validCheckPassword(password, checkPassword)
{
    if(password.value === checkPassword.value) {
        return true
    } else {
        alert('Пароли должны совпадать')
        checkPassword.focus();
        return false
    }

}
