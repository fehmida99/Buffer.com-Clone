
// models are being used here
let model = document.getElementById("modal_container");
let closed = document.querySelector("#closed")
let open = document.querySelector("#open")

closed.addEventListener("click", () => {

    model.classList.remove("show")
    document.querySelector(".cont-1").innerHTML=` <div class="grow">
    <div class="content">
        <h1>Grow your audience on social and beyond</h1>
    <p>Buffer helps you build an audience organically. We’re a</p>
    <p>values-driven company that provides affordable,intuitive,</p>
    <p>intuitive, marketing tools for ambitious people and teams.</p>
    </div>
    <div class="btn">
        <button class="btn-1">Get started now</button>
        <button class="btn-2"><i class="fa-regular fa-circle-play"></i> Watch vedio</button>
    </div>
</div>
<img id ="img1" src="img-1.webp" alt="">`
})


open.addEventListener("click", () => {

    model.classList.add("show")
    
document.querySelector(".cont-1").innerHTML=""



})







// my mini database

let montharr = [
    {
        title: "Free",
        id: "f",
        price: "0",
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        title: "Essentials",
        id: "s",
        price: 6,
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        title: "Essentials + Team Pack",
        id: "t",
        price: 12,
        desc: "Collaborate with your team in one place & save time reporting.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", " Unlimited team members & clients", "Exportable PDF reports", " Draft approval workflows"]


    },

]
let yeararr = [
    {
        id: "f",
        title: "Free",
        price: 0,
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        id: "s",
        title: "Essentials",
        price: 5,
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        id: "t",
        title: "Essentials + Team Pack",
        price: 10,
        desc: "Collaborate with your team in one place & save time reporting.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", " Unlimited team members & clients", "Exportable PDF reports", " Draft approval workflows"]


    },



]




// When the user clicks anywhere outside of the modal, close it
document.body.addEventListener("click", (event) => {
    // console.log(event.path[1].id)
    localStorage.setItem("id",event.path[1].id)
    let value= localStorage.getItem("id")
    calculation(value)
    if (event.target == document.body) {
        model.classList.remove("show")
    }
})

// Calculations of services
let price =null
function calculation (value){

    console.log(value)
let cost = montharr.filter((item)=>{

    if(item.id==value){
        return item.price
        
    }


})

 price =cost[0].price
 
 console.log(price)
localStorage.setItem("price",price)

 document.querySelector("#total").innerText=localStorage.getItem("price")
 document.querySelector("#total2").innerText=localStorage.getItem("price")

let title = cost[0].title
document.querySelector("#plan").innerText=title

}










// check the checkbox

let checkbox = document.getElementById("checkbox")

checkbox.addEventListener( "change", () => {
    if ( checkbox.checked ) {
        createdivs(yeararr)
        document.querySelector("#saving").innerText="Savings $24/year"
    } else{
        createdivs(montharr)
        document.querySelector("#saving").innerText="Save $24/year"
    }
})




createdivs(montharr)


//logo

document.querySelector("#logo").addEventListener("click",()=>{
    window.location.href="index.html"
})


// div creater
function createdivs(montharr) {
   
    document.querySelector(".first").innerHTML=""

    for (i = 0; i < montharr.length; i++) {
        let div = document.createElement("div")
        let title = document.createElement("h3")
        title.setAttribute("class","title")
        let id = montharr[i].id
         div.setAttribute("id", id)
        title.innerText = montharr[i].title
        let desc = document.createElement("p")
        desc.innerText = montharr[i].desc
        let price = document.createElement("h2")
        price.innerText ="$" + montharr[i].price
        let monthline = document.createElement("p")
        monthline.innerText = montharr[i].month

        let feature = document.createElement("h3")
        feature.innerText = "Features"
        let hr = document.createElement("hr")
        hr.setAttribute("class", "hr")
        div.append(title, desc, price, monthline,hr,feature)
        for (k = 0; k < montharr[i].features.length; k++) {
            let f = document.createElement("p")
            f.innerText = "✔️  " + montharr[i].features[k]
            div.append(f)
        }

        document.querySelector(".first").append(div)

    }





}





// service count

let count=document.querySelector("#val").value
let c=Number(count)
let add=document.querySelector("#add")
add.addEventListener("click",()=>{
    // 
//     let newcount=+count
    
        c++
       
  document.querySelector("#val").value=c
  sessionStorage.setItem("count",c)
  document.querySelector("#channels").innerText=c +" channels"
  calc()



    

  
})

let sub = document.querySelector("#sub")


sub.addEventListener("click",()=>{
   

   
    let c2=sessionStorage.getItem("count")
    c2=Number(c2)
    if(c<=1){
        document.querySelector("#val").value=1
        calc()
         return
    }
    
    if(c2>=2){
        c--
       
        document.querySelector("#val").value=c
        document.querySelector("#channels").innerText=c +" Channels"
        calc()
        sessionStorage.setItem("count",c)
    }else{
        document.querySelector("#val").value=1
    }
    console.log(c)
})





function calc(){
let val = document.querySelector("#total").innerText
 let cost_per_service =Number(val)
 localStorage.setItem("cost",val)
let count = sessionStorage.getItem("count")
count = Number(count)
let cost =localStorage.getItem("cost")
cost= Number (cost)

let total =cost_per_service*count
total=total-cost

document.querySelector("#total").innerText=""
document.querySelector("#total").innerText=total
document.querySelector("#total2").innerText=""
document.querySelector("#total2").innerText=total
}
// document.querySelector("#total").innerText=val
// let val= localStorage.getItem("total")
// val = Number(val)*c

// let val= localStorage.getItem("total")
// val = Number(val)*c
// document.querySelector("#total").innerText=val
















// let select2 = document.querySelectorAll(".modal_container>div>div>div")
// let val=localStorage.setItem("value","f")
// for (let i = 0; i < select2.length; i++) {
//      select2[i].addEventListener("click", (event) => {
//         let value=localStorage.getItem("value")
//        if (event.path[1].id){
// console.log(select2[i])
//        }
//         if (select2[i].id == "f") {
       
           
//                 let f = document.getElementById(`${select2[i].id}`)
//                 if(value=="f"){
//                     f.
//                 }
//             localStorage.setItem("value",select2[i].id)
//              f.classList.add("selection")
//         }
//         if (select2[i].id == "s") {
//             let s = document.getElementById(`${select2[i].id }`)
//             s.classList.add("selection")
//             localStorage.setItem("value",select2[i].id)
//             }
               
 
        
//          if(select2[i].id == "t") {
          
//               let t = document.getElementById(`${select2[i].id}`)
//                 t.classList.add("selection")
//                 localStorage.setItem("value",select2[i].id)

          
//          }  
            
           
        
//      })

// }


let btn= document.getElementById("payment")


btn.addEventListener("click",()=>{


    console.log("ok")

})
