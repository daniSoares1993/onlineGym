VanillaTilt.init(document.querySelectorAll("#Mateus"));
VanillaTilt.init(document.querySelectorAll("#Rose"));
VanillaTilt.init(document.querySelectorAll("#horarioLpo"));
VanillaTilt.init(document.querySelectorAll("#horarioCross"));
var cardMateus = document.getElementById("Mateus");
var cardRose = document.getElementById("Rose");
var bodyHome = document.getElementById("home");
var vejaMais =  document.getElementById("vejaM");
var horarioCross = document.getElementById("horarioCross");
var horarioLpo  = document.getElementById("horarioLpo");




var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");
var btnClass = document.getElementsByClassName('active');


btn.addEventListener("click",() => {
    btn.classList.toggle('active');

    if( navLateral.style.display != "block"){
        navLateral.style.display = "block";
        bodyHome.style.overflow = "hidden";
        cardMateus.style.visibility = "hidden";
        cardRose.style.visibility = "hidden";
        vejaMais.style.visibility = "hidden";
        horarioCross.style.visibility  = "hidden";
        horarioLpo.style.visibility = "hidden";
        

    } else if(navLateral.style.display === "block"){
        navLateral.style.display = "none";
        bodyHome.style.overflowY = "scroll";
        cardMateus.style.visibility = "visible";
        cardRose.style.visibility = "visible";
        vejaMais.style.visibility = "visible";
        horarioCross.style.visibility  = "visible";
        horarioLpo.style.visibility = "visible";
        
    
    }
})

   




var staffMenu = document.getElementById("staffMenu").addEventListener("click",(event) => {
    document.getElementById("infoStaff").scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})

var estruturaMenu = document.getElementById("estruturaMenu").addEventListener("click",(event) => {
    document.getElementById("nossoEspaco").scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})

var estruturaHome = document.getElementById("homeMenu").addEventListener("click",(event) => {
    document.getElementById("sessaoCrosstraining").scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})






