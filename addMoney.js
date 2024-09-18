

document.getElementById("add-money").addEventListener("click",function(){
    let addmoney_password = document.getElementById("addmoney_password").value
    if(addmoney_password === "1234"){
        let amount =parseFloat(document.getElementById("amount").value) 
  
        let balance = parseFloat(document.getElementById("balance").innerText) 
        
        balance = balance+amount
        
        document.getElementById("balance").innerText = balance
    }else{
        alert("Please Verify pass")
    }

   


})