VanillaTilt.init(document.querySelectorAll("#Mateus"));
VanillaTilt.init(document.querySelectorAll("#Rose"));
VanillaTilt.init(document.querySelectorAll("#horarioLpo"));
VanillaTilt.init(document.querySelectorAll("#horarioCross"));

var bodyHome = document.getElementById("home");
var bodyContato = document.getElementById("contatoRm")

var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");
var btnClass = document.getElementsByClassName('active');


btn.addEventListener("click",() => {
    btn.classList.toggle('active');

    if( navLateral.style.display != "block"){
        navLateral.style.display = "block";
        bodyHome.style.overflow = "hidden";
        bodyContato.style.overflow = "hiddden";

    } else if(navLateral.style.display === "block"){
        navLateral.style.display = "none";
        bodyHome.style.overflowY = "scroll";
        bodyContato.style.overflow = "scroll";
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






