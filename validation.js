let email = $("#email");
let password = $("#password");
let emailError = $("#email-error");
let passwordError = $("#password-error");

$(
    function() {

        console.log(email);
        email.blur(
            function() {
                validateEmail();
            }
        );

        password.blur(
            function() {
                validatePassword();
            }
        );
    }
);


function validateEmail() {
    if (email.val().length == 0) {
        emailError.html("Email must be not be empty");
        return false;
    } else if (!email.val().includes("@")) {
        emailError.html("Enter a valid email");
        return false;
    }

    emailError.html("");
    return true;
}


function validatePassword() {

    if (password.val().length == 0) {
        passwordError.html("Password must not be empty");
        return false;
    }
    if (password.val().length <= 4 || password.val().length >= 60) {
        passwordError.html("Your password must contain between 4 - 60 characters");
        return false;
    }
    passwordError.html("");
    return true;
}



function validate() {
    return validateEmail() && validatePassword();
}