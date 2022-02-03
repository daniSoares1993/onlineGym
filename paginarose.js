var btn = document.getElementById("btnResponsivo");
 var navLateral = document.getElementById("navLateral");
 var btnClass = document.getElementsByClassName('active');

 
 
 
  btn.addEventListener("click",() => {
     btn.classList.toggle('active');
 
     if( navLateral.style.display != "block"){
         navLateral.style.display = "block";
       
 
     } else if(navLateral.style.display === "block"){
         navLateral.style.display = "none";
            
     }
 })