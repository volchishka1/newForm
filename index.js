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
