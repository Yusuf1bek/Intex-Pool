let elLoginForm = document.querySelector(".login-form")
const isRegistered = JSON.parse(localStorage.getItem("isRegistered"))

elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    if(isRegistered){
        if(data.username == isRegistered.newUsername && data.password == isRegistered.newPassword){
            elLoginForm.lastElementChild.innerHTML = `
                <img class='mx-auto scale-[1.2]' src="./images/loading.png" alt="loading" width="40" />`
                localStorage.setItem("loginData", JSON.stringify(data))
            setTimeout(() => {location.pathname = "../../admin.html"},1000)}
        else{
            alert("Xato malumot kiritingiz")
        } 
    }
    else{
        if(data.username == "Yusufbek" && data.password == "123"){
            elLoginForm.lastElementChild.innerHTML = `
                <img class='mx-auto scale-[1.2]' src="./images/loading.png" alt="loading" width="40" />`
                localStorage.setItem("loginData", JSON.stringify(data))
                setTimeout(() => {location.pathname = "../../admin.html"},1000)}
        else{
            alert("Xato malumot kiritingiz")
        }
    }
})