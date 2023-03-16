document.getElementById('submit-button').addEventListener('click', function() {
    console.log('button clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
})