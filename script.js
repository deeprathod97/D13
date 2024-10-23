document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store form data in an object
    const loginData = {
      username: username,
      password: password
    };

    // Log the data in the console
    console.log("Login Data:", loginData);

    // Optionally, you can store the data in local storage
    localStorage.setItem('loginData', JSON.stringify(loginData));
    
    alert("Login Data has been logged to the console and stored in local storage!");
  });