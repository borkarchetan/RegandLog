function validateForm(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (! emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Password validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (! passwordRegex.test(password)) {
        alert('Password must have at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special symbol');
        return;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        alert('Confirm Password does not match');
        return;
    }

    // Save input values to local storage
    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Registration successful
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();

    // window.location.href = ".login.html";
    window.location.href = "./login.html";
}

// Retrieve saved user data from local storage (if any)
var savedUserData = localStorage.getItem('userData');
if (savedUserData) {
    var userData = JSON.parse(savedUserData);
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('lastName').value = userData.lastName;
    document.getElementById('email').value = userData.email;
    document.getElementById('mobile').value = userData.mobile;
    document.getElementById('password').value = userData.password;
}
