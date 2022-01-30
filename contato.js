var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");
var btnClass = document.getElementsByClassName('active');
var contatoRm = document.getElementById("contatoRm")



 btn.addEventListener("click",() => {
    btn.classList.toggle('active');

    if( navLateral.style.display != "block"){
        navLateral.style.display = "block";
        contatoRm.style.overflow = "hidden";
      

    } else if(navLateral.style.display === "block"){
        navLateral.style.display = "none";
        contatoRm.style.overflow = "visible";
       
    }
})