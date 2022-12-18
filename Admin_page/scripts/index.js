let adminData = JSON.parse(localStorage.getItem('admin_data'));
let cartData = JSON.parse(localStorage.getItem('cartdata'));

import{navbar,leftSideNavbar} from "./nav_components.js"

document.getElementById('LeftSideBar').innerHTML = leftSideNavbar();
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('logout').addEventListener('click',logout);
let name_div = document.getElementById('name');
let pending_div = document.getElementById('pending');




  if(adminData){
    

  if(adminData){
    let h3 = document.createElement('h3');
        h3.innerText=adminData.first_name;
        name_div.append(h3);
  }
 if(cartData){
    }
 if(cartData){
  pending_div.innerText = cartData.length;
 }
   }
  





let name = document.getElementById("name");
let div = document.getElementById("login");
let isShown = false;
name.addEventListener("click", () => {
  if (isShown) {
    div.style.display = "none";
    isShown = false;
  } else {
    div.style.display = "block";
    isShown = true;
  }

  console.log(div);
});

let home_div = document.getElementById('home');
home_div.style.backgroundColor = "rgb(194, 0, 187)";


let product_div = document.getElementById('product');
product_div.onclick = () =>{
  window.location.href = "products.html"
}
let order_div = document.getElementById('order');
order_div.onclick = () =>{
  window.location.href = "orderPage.html"
}
let payment_div = document.getElementById("payment");
payment_div.onclick = () =>{
  window.location.href = "payment.html"
}
function logout(){
  window.location.href = "../index.html"
}

//appending data to table
function appendDataToTable(){
  let parent_el = document.querySelector('tbody');
  cartData.forEach((el,i) => {
    let tr = document.createElement('tr');
    let id = document.createElement('td');

    let p_method = document.createElement('td');
    let date = document.createElement('td');
    let promised_date = document.createElement('td');
    let status = document.createElement('td');
    let total = document.createElement('td');
    let action = document.createElement('button');
    tr.append(id,p_method,date,promised_date,status,total,action);
    parent_el.append(tr);
  });
}
