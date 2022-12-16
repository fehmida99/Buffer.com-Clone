let lsData = JSON.parse(localStorage.getItem("registerData"));
let form = document.getElementById("form");
console.log(lsData[0])
form.addEventListener("submit", function (event) {
    event.preventDefault();


    for (let i = 0; i < lsData.length; i++) {
        if (lsData[i].email === form.email.value && lsData[i].pass === form.pass.value) {
            alert("Login succesful")
            // window.location.href = "index.html"
            break
        }
    }

})