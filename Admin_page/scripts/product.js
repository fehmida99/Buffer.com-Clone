import{navbar,leftSideNavbar} from "./nav_components.js"

document.getElementById('LeftSideBar').innerHTML = leftSideNavbar();
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('logout').addEventListener('click',logout);
let name_div = document.getElementById('name');



let adminData = JSON.parse(localStorage.getItem('admin_data'));
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

let product_div = document.getElementById('product');
product_div.style.backgroundColor = "rgb(194, 0, 187)";

let home_div = document.getElementById('home');
home_div.onclick = () =>{
    window.location.href = "index.html"
  }

let order_div = document.getElementById('order');
order_div.onclick = () =>{
  window.location.href = "orderPage.html"
}
let payment_div = document.getElementById("payment");
payment_div.onclick = () =>{
  window.location.href = "payment.html"
}

// adding data to server
let form = document.getElementById('productData');
form.onsubmit=()=>{
  getData();
}
function getData(event){
  event.preventDefault();
let category = form.category.value;
let image = form.image.value;
let title = form.title.value;
let weight = form.weight.value;
let id = form.id.value;
let price = form.price.value;
let discout = form.discout.value;
let brand = form.brand.value;
let description = form.description.value;
let productCategory = form.productCategory.value;
let skinType = form.skinType.value;
let shades = form.shades.value;

let obj = {image,title,weight,id,price,discout,brand,description,productCategory,skinType,shades};
console.log(obj)
addData(obj,category);
}
async function addData(obj,category){
  try  {
    let data = obj;
    let res =await fetch(`https://shielded-stream-64345.herokuapp.com/append`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-Type":'application/json'
      }
    })
let actual_data = await res.json();
console.log(actual_data)

  }
  catch(err){
console.log(err);
  }
}

function logout(){
  window.location.href = "../index.html"
}