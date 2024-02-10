var button=document.getElementById("btn1")
var allProducts=document.querySelectorAll(".products li")
var div1=document.querySelector("#div1")
var div2=document.querySelector("#div2")
var totalPrice=0
allProducts.forEach(
function(item){
    item.onclick= function(){
        div1.innerHTML+=item.textContent + " &  "

        if(div1.innerHTML !=""){
           totalPrice += +(item.getAttribute("price"))
           btn1.style.display="block"
           btn1.style.backgroundColor="blue"
           btn1.style.width="200px"
           btn1.style.hieght="60px"
           btn1.style.color="white"
        }
      }
}


)
btn1.onclick=function(){
    div2.innerHTML=totalPrice
}
 