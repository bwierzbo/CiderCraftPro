document.getElementById('new-recipe').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('recipe-name').value;
    var ingredients = document.getElementById('recipe-ingredients').value;
    var instructions = document.getElementById('recipe-instructions').value;

    var recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    var recipeContent = `
        <h3>${name}</h3>
        <p><b>Ingredients:</b> ${ingredients}</p>
        <p><b>Instructions:</b> ${instructions}</p>
    `;

    recipeDiv.innerHTML = recipeContent;
    document.getElementById('recipe-list').appendChild(recipeDiv);

    // Clear the form fields
    document.getElementById('recipe-name').value = '';
    document.getElementById('recipe-ingredients').value = '';
    document.getElementById('recipe-instructions').value = '';
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const recipeForm = document.getElementById('recipeForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Here you can add your logic to handle login
            alert('Login submitted');
        });
    }

    if (recipeForm) {
        recipeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Here you can add your logic to handle recipe submission
            alert('Recipe submitted');
        });
    }
});
