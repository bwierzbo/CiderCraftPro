// Import Amplify & configure it
// (Make sure to configure aws-amplify in your project)

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        try {
            const user = await Amplify.Auth.signIn(username, password);
            console.log(user);
            alert('Login successful!');
            window.location.href= '/recipes.html';
        } catch (error) {
            console.error('Error signing in', error);
            alert('Error signing in: ${error.message}');
        }
    });
});
