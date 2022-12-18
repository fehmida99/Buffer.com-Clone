import{navbar,leftSideNavbar} from "./nav_components.js"

document.getElementById('LeftSideBar').innerHTML = leftSideNavbar();
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('logout').addEventListener('click',logout);
let name_div = document.getElementById('name');





let adminData = JSON.parse(localStorage.getItem('admin_data'));

// name_div.append(h3);
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

let order_div = document.getElementById('order')
order_div.style.backgroundColor = "rgb(194, 0, 187)";

let product_div = document.getElementById('product');
product_div.onclick = () =>{
    window.location.href = "index.html"
  }

let home_div = document.getElementById('home');
home_div.onclick = () =>{
    window.location.href = "index.html"
  }
  let payment_div = document.getElementById("payment");
payment_div.onclick = () =>{
  window.location.href = "payment.html"
}

const getdata= async()=>{
  let res=await fetch(`https://shielded-stream-64345.herokuapp.com/productData?_limit=10`);
  let data=await res.json()
  console.log(data[0]);
  append(data[0].makeup)
  document.getElementById("makeup").onclick=()=>{
    append(data[0].makeup)
  }
  document.getElementById("skin").onclick=()=>{
    append(data[0].skin)
  }
  document.getElementById("hair").onclick=()=>{
    append(data[0].hair)
  }
  document.getElementById("personalcare").onclick=()=>{
    append(data[0].personal)
  }
  document.getElementById("momandbaby").onclick=()=>{
    append(data[0].kids)
  }
  document.getElementById("ayurveda").onclick=()=>{
    append(data[0].ayurveda)
  }
  document.getElementById("fragrance").onclick=()=>{
    append(data[0].perfume)
  }

}
getdata()

let main=document.getElementById("container")
const append=(data)=>{
  
    main.innerHTML = null;
     data.forEach(
        (el) =>{          
          let card = document.createElement("div");
          card.setAttribute("id", "card");

          document.getElementById("makeup").style.backgroundColor = "#b7026f";
          
          
      
          let img = document.createElement("img");
          img.src = el.image;
          // img.addEventListener("click", function () {
          //   aariftit(elem);
          // });
      
         
      
          let info = document.createElement("div");
          info.setAttribute("id", "info");
      
          let title = document.createElement("p");
          title.innerText = el.title;
          // title.addEventListener("click", function () {
          //   aariftit(elem);
          // });
      
        
      
          let priceDiv = document.createElement("div");
          priceDiv.setAttribute("id", "price-div");
      
       
      
          let span2 = document.createElement("div");
          span2.setAttribute("id", "span2");
          span2.innerText = `₹${el.price}`;
      
          // let span3 = document.createElement("div");
          // span3.setAttribute("id", "span3");
          // span3.innerText = el.discount;
      
          let btnDiv = document.createElement("div");
          btnDiv.setAttribute("id", "btn-div");
      
         
        
        
          let spanBtn = document.createElement("button");
          spanBtn.setAttribute("id", "remove");
          spanBtn.innerText = "Remove";
          spanBtn.style.marginRight="4px"
          spanBtn.onclick=()=>{
            console.log(el.id);
            deletepost(el.id) 
          }

          
         
      
          let spanfav = document.createElement("button");
          spanfav.setAttribute("id", "update");
          spanfav.innerHTML = "Update";
      
          priceDiv.append( span2);
          btnDiv.append(spanBtn, spanfav);
          info.append(title, priceDiv, btnDiv);
          card.append(img, info);
           

          // window.onload = ()=>{
          //   cartArr.push(el)
          //   localStorage.setItem("cartdata", JSON.stringify(cartArr))
          // }
          main.append(card);


        
        }
     )
}

const deletepost=async(delete_id)=>{

  
  let res=await fetch(`https://shielded-stream-64345.herokuapp.com/productData/${delete_id}`,{
      method: 'DELETE',
      headers:{
          "Content-Type":'application/json',
      },
  })
  
  }
  function logout(){
    window.location.href = "../index.html"
  }

