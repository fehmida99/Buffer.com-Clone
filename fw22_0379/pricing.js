let monthly = document.querySelector("#monthly");
let yearly = document.querySelector('#yearly');
let price = document.querySelectorAll('#price');


yearly.style.border = '2px solid blue';
yearly.style.backgroundColor = '#e9ecfe';
yearly.style.color = 'blue';

monthly.addEventListener('click', () =>{
    yearly.style.border = '';
    yearly.style.backgroundColor = '';
    yearly.style.color = '';
    monthly.style.border = '2px solid blue';
    monthly.style.backgroundColor = '#';
    monthly.style.color = 'blue';

    for(let i = 0; i <= 2; i++){
        if(i == 0){
            price[0].innerHTML = '6';
        } else if(i == 1){
            price[1].innerHTML = '12';
        } else {
            price[2].innerHTML = '120';
        }
    }

    
})


yearly.addEventListener('click', () => {
    monthly.style.border = '';
    monthly.style.backgroundColor = '';
    monthly.style.color = '';
    yearly.style.border = '2px solid blue';
    yearly.style.backgroundColor = '#e9ecfe';
    yearly.style.color = 'blue';

    for(let i = 0; i <= 2; i++){
        if(i == 0){
            price[0].innerHTML = '5';
        } else if(i == 1){
            price[1].innerHTML = '10';
        } else {
            price[2].innerHTML = '100';
        }
    }
})