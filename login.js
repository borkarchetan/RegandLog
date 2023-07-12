function validateLogin(event) {
    event.preventDefault();

    var emailMobile = document.getElementById('emailMobile').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from local storage
    var savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
        var userData = JSON.parse(savedUserData);

        // Check if email or mobile matches
        if (emailMobile === userData.email) { // Check if password matches
            if (password === userData.password) { // Login successful
                alert('Login successful!');
                // Redirect to home.html
                window.location.href = 'home.html';
                return;
            } else { // Password does not match
                alert('Wrong password');
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
                return;
            }
        } else if (emailMobile === userData.mobile) { // Check if password matches
            if (password === userData.password) { // Login successful
                alert('Login successful!');
                // Redirect to home.html
                window.location.href = 'home.html';
                return;
            } else { // Password does not match
                alert('Wrong password');
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
                return;
            }
        }
    }

    // Invalid email or mobile
    alert('Wrong email or mobile');
    document.getElementById('emailMobile').value = '';
    document.getElementById('password').value = '';
    document.getElementById('emailMobile').focus();
}
