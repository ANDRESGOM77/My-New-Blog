let postsList = JSON.parse(localStorage.getItem('postsList')) || [];
let Container = document.getElementById('Container');

postsList.forEach(function (formData) {
    let card = document.createElement('div');
    card.className = 'card';

    let username = document.createElement('h2')
    let title = document.createElement('h3')
    let content = document.createElement('p')

    content.className = 'content'

    username.textContent = 'Username: ' + formData.username
    title.textContent = 'Title: ' + formData.title
    content.textContent = formData.Content

    card.append(username, title, content)
    Container.append(card);
});
