//CALL THE POSTSLIST FROM THE LOCAL STORAGE
let postsList = JSON.parse(localStorage.getItem('postsList')) || [];
let Container = document.getElementById('Container');

//CREATING A FUNCTION TO ADD THE CARD WITH THE ELEMENTS
postsList.forEach(function (formData) {
    let card = document.createElement('div');
    card.className = 'card';
//ADDING SOME PROPERTIES
    let username = document.createElement('h2');
    let title = document.createElement('h3');
    let content = document.createElement('p');
//CREATING CLASSES FOR CSS
    username.className = 'Username';
    title.className = 'Title';
    content.className = 'content';
//SHOWING IN SCREEN THE VALUE OF THE VARIABLE
    username.textContent = 'Username: ' + formData.username;
    title.textContent = 'Title: ' + formData.title;
    content.textContent = formData.Content;
//ADDING EVERYTHING TO CARD AND THEN TO CONTAINER
    card.append(username, title, content);
    Container.append(card);
});
