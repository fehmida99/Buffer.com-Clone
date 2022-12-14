
// models are being used here
let model = document.getElementById("modal_container");
let closed = document.querySelector("#closed")
let open = document.querySelector("#open")

closed.addEventListener("click", () => {

    model.classList.remove("show")

})


open.addEventListener("click", () => {

    model.classList.add("show")



})


// When the user clicks anywhere outside of the modal, close it
document.body.addEventListener("click", (event) => {
    
    if (event.target == document.body) {
        model.classList.remove("show")
    }
})
// my mini database

let montharr = [
    {
        title: "Free",
        id: "f",
        price: "$0",
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        title: "Essentials",
        id: "s",
        price: "$6",
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        title: "Essentials + Team Pack",
        id: "t",
        price: "$12",
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
        price: "$0",
        desc: "Simplify the noise and test out social media management tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: ["Basic publishing tools", "Limited usage"]

    },
    {
        id: "s",
        title: "Essentials",
        price: "$5",
        desc: "Get the most out of your creative with publishing, analytics & engagement tools.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", "Exportable PDF reports"]



    },
    {
        id: "t",
        title: "Essentials + Team Pack",
        price: "$10",
        desc: "Collaborate with your team in one place & save time reporting.",
        month: "Per channel per month",
        year: "chargedyear",
        features: [" Advanced publishing tools", " Analytics & reporting", "Engagement tools", " Unlimited team members & clients", "Exportable PDF reports", " Draft approval workflows"]


    },



]


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





// div creater
function createdivs(montharr) {
   
    document.querySelector(".first").innerHTML=""

    for (i = 0; i < montharr.length; i++) {
        let div = document.createElement("div")
        let title = document.createElement("h3")
        let id = montharr[i].id
        div.setAttribute("id", id)
        title.innerText = montharr[i].title
        let desc = document.createElement("p")
        desc.innerText = montharr[i].desc
        let price = document.createElement("h2")
        price.innerText = montharr[i].price
        let monthline = document.createElement("p")
        monthline.innerText = montharr[i].month

        let feature = document.createElement("h3")
        feature.innerText = "Features"
        let hr = document.createElement("hr")
        hr.setAttribute("class", "hr")
        div.append(title, desc, price, monthline,hr, feature)
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
let c=0+Number(count)
let add=document.querySelector("#add")
add.addEventListener("click",()=>{
    // 
//     let newcount=+count
    if(c>=0){
        c++
  document.querySelector("#val").value=c
  sessionStorage.setItem("count",c)

    }

  
})

let sub = document.querySelector("#sub")
let c2=sessionStorage.getItem("count")
  c2=+c2
  
sub.addEventListener("click",()=>{
  
    if(c2>=2){
        c2--
        
        document.querySelector("#val").value=c2
    }else{
        document.querySelector("#val").value=1
    }
    console.log(c2)
})




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

