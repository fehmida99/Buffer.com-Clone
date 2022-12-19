let back_button = document.querySelector('#back');
let price_tag = document.querySelector('#price');
let email = document.querySelector('#email');
let user_data = JSON.parse(localStorage.getItem('registerData'));
let userEmail = user_data[user_data.length-1].email;
let price = JSON.parse(localStorage.getItem('total-billed'));

price_tag.innerHTML = `$${price}.00`;
email.setAttribute('placeholder', `Email                        ${userEmail}`)

back_button.addEventListener('click', () =>{
    window.location = './index.html'
})

let subscribe = document.querySelector('#pay');
subscribe.addEventListener('click', () => {
    alert('Subscribed!!!');
    window.location.href = 'calendar.html'
})