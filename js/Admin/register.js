let elRegisterForm = document.querySelector(".register-form")
elRegisterForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newData = {
        newUsername:e.target.username.value,
        newPassword:e.target.password.value
    }
    elRegisterForm.lastElementChild.innerHTML = `
    <img class='mx-auto scale-[1.2]' src="./images/loading.png" alt="loading" width="40" /> `
    localStorage.setItem("isRegistered", JSON.stringify(newData))
    setTimeout(() => {location.pathname = "/"},1000)})
