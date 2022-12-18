let adminData = JSON.parse(localStorage.getItem("admin_data"));

import { navbar, leftSideNavbar } from "./nav_components.js";

document.getElementById("LeftSideBar").innerHTML = leftSideNavbar();
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("logout").addEventListener("click", logout);
let name_div = document.getElementById("name");

if(adminData){
  let h3 = document.createElement('h3');
  h3.innerText=adminData.first_name;
  name_div.append(h3);
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

let payment_div = document.getElementById("payment");
payment_div.style.backgroundColor = "rgb(194, 0, 187)";

let product_div = document.getElementById("product");
product_div.onclick = () => {
  window.location.href = "products.html";
};
let order_div = document.getElementById('order')
order_div.onclick = () => {
  window.location.href = "orderPage.html";
};

let home_div = document.getElementById("home");
home_div.onclick = () => {
  window.location.href = "index.html";
};

function logout() {
  window.location.href = "../index.html";
}
