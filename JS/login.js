document.getElementById('login-submit').addEventListener('click',function(){
    // get email 
    const emailField = document.getElementById('login-email');
    const userEmail = emailField.value;

    // get password 
    const passwordField = document.getElementById('login-password');
    const userPassword = passwordField.value;
    

    if(userEmail == 'fariarahman.se@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }

    else{
        console.log('invalid user')
    }

})