document.getElementById("loginBtn").addEventListener("click",function(){
   
    let phoneNumber = document.getElementById("phoneNumber").value
    let password = document.getElementById("password").value

    if(phoneNumber === "01617050445" && password === "1234"){
       window.location.href = "/home.html"
    }else{
       alert("Phone Number or Password is invalid")
    }
})