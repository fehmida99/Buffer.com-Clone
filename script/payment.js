let back_button = document.querySelector('#back');
let price_tag = document.querySelector('#price');
let email = document.querySelector('#email');
let userEmail = 'abc@gmail.com'
let price = 60;

price_tag.innerHTML = `$${price}.00`;
email.setAttribute('placeholder', `Email                        ${userEmail}`)

back_button.addEventListener('click', () =>{
    window.location = './index.html'
})