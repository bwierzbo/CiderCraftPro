document.addEventListener('DOMContentLoaded', function () {
    var poolData = {
        UserPoolId: 'us-east-2_OG0go76Hk', // Your user pool id here
        ClientId: '208942j9a59pm54ts05hp0n6ji' // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var authenticationData = {
            Username: username,
            Password: password
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

        var userData = {
            Username: username,
            Pool: userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log('access token + ' + result.getAccessToken().getJwtToken());
                window.location.href='recipes.html';
            },

            onFailure: function (err) {
                alert(err.message || JSON.stringify(err));
            }
        });
    });
});
