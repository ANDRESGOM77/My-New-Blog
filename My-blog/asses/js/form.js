//creating method to save the new data in the list that is in the local storage
document.getElementById("Form").addEventListener('submit', function(event) {

    event.preventDefault();

    let username=document.getElementById("Username").value;
    let title=document.getElementById("Title").value;
    let Content=document.getElementById("Content").value;
    //Creating new object
    const NewPost ={
        username: username,
        title: title,
        Content: Content,
        };
    let postsList = JSON.parse(localStorage.getItem('postsList')) || [];
    postsList.push(NewPost);
    //Save the updated data to local storage
    localStorage.setItem('postsList', JSON.stringify(postsList));   
    // Redirect to New page blog
    window.location.href="blog.html";

    console.log(postsList);
});