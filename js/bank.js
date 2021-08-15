document.getElementById('loginButton').addEventListener('click',function(){
    // get email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // validation 
    if(userEmail == 'developer.aalemraan@gmail.com' && userPassword == '12345'){
        console.log('you are logged in.')
    }else{
        console.log('email or password is incorrect.')
    }
})

document.getElementById('user-email').addEventListener('click',function(){
    console.log()
})