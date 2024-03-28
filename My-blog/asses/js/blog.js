let postsList = JSON.parse(localStorage.getItem('postsList')) || [];
let Container = document.getElementById('container');

function createCard(data) {
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>Username</h3>
    <p>${data.username}</p>
    <h3>Title</h3>
    <p>${data.title}</p>
    <h3>Comment</h3>
    <p>${data.comment}</p>
    `;
  return card;
}

postsList.forEach(function(formData) {
  let card = createCard(formData);
  Container.appendChild(card);
});
