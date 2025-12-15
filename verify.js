
var isLoggedIn = localStorage.getItem("logIn")

if(isLoggedIn !==  "true"){
    window.location.href = "login.html"
   
}
