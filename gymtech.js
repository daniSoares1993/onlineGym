VanillaTilt.init(document.querySelectorAll("#Mateus"));
VanillaTilt.init(document.querySelectorAll("#Rose"));
VanillaTilt.init(document.querySelectorAll("#horarioLpo"));
VanillaTilt.init(document.querySelectorAll("#horarioCross"));

var body = document.getElementById("home");

var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");
var btnClass = document.getElementsByClassName('active');



btn.addEventListener("click",() => {
    btn.classList.toggle('active');

    if( navLateral.style.display != "block"){
        navLateral.style.display = "block";
        home.style.overflow = "hidden";
    } else if(navLateral.style.display === "block"){
        navLateral.style.display = "none";
        home.style.overflowY = "scroll";
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






