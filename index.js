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
                if(ValidateEmail(email))
                {
                    if(countryselect(password))
                    {
                        if(allnumeric(checkPassword))
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
    let letters = /^[A-Za-z]+$/;
    if(firstName.value.match(letters))
    {
        return true;
    } else if (lastNameLength === 0 || lastNameLength >= min || lastNameLength < max) {
        alert('Имя должна содержать от 2 до 25 символов')
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
    let letters = /^[A-Za-z]+$/;
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
