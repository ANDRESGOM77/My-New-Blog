//CREATING DARK MODE

let toggle = document.getElementById('switch');
let body = document.querySelector('body');
// WITH INE CLICK THE CLASS DARK WILL BE CREATED AND ACTIVE
toggle.addEventListener('click' , function(){
    toggle.classList.toggle('active');
    body.classList.toggle('dark');
});