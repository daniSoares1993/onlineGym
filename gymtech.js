VanillaTilt.init(document.querySelectorAll("#Mateus"));
VanillaTilt.init(document.querySelectorAll("#Rose"));

var body = document.getElementById("home");

var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");

btn.addEventListener("dblclick",() =>  {
 let btnHamburguer1 = document.getElementById("buttonHamburguer1");
 let btnHamburguer2 = document.getElementById("buttonHamburguer2");
 let btnHamburguer3 = document.getElementById("buttonHamburguer3");

    btn.style.backgroundColor = "transparent";
    btnHamburguer1.style.left  = "2px";
    btnHamburguer1.style.backgroundColor  = "rgb(56,167,111)";
    btnHamburguer2.style.width = "15px";
    btnHamburguer2.style.top = "28px";
    btnHamburguer2.style.left = "2px";
    btnHamburguer2.style.transform = "rotate(0deg)";
    btnHamburguer2.style.backgroundColor = "rgb(56,167,111)";
    btnHamburguer3.style.width = "26px";
    btnHamburguer3.style.top = "8px";
    btnHamburguer3.style.left = "2px";
    btnHamburguer3.style.transform = "rotate(0deg)";
    btnHamburguer3.style.backgroundColor = "rgb(56,167,111)";
    home.style.overflowY = "scroll";
    navLateral.style.display = "none";
  
})

btn.addEventListener("click",() =>  {
    let btnHamburguer1 = document.getElementById("buttonHamburguer1");
    let btnHamburguer2 = document.getElementById("buttonHamburguer2");
    let btnHamburguer3 = document.getElementById("buttonHamburguer3");
   
   
       btn.style.backgroundColor = "rgb(0,0,0)";
       btnHamburguer1.style.left  = "50px";
       btnHamburguer1.style.backgroundColor  = "transparent";
       btnHamburguer2.style.width = "30px";
       btnHamburguer2.style.top = "18px";
       btnHamburguer2.style.left = "4px";
       btnHamburguer2.style.transform = "rotate(45deg)";
       btnHamburguer2.style.backgroundColor = "rgb(56, 167, 111)";
       btnHamburguer3.style.width = "30px";
       btnHamburguer3.style.top = "18px";
       btnHamburguer3.style.left = "4px";
       btnHamburguer3.style.transform = "rotate(495deg)";
       btnHamburguer3.style.backgroundColor = "rgb(56, 167, 111)";
       home.style.overflow = "hidden";
       navLateral.style.display = "block";
     
   })






