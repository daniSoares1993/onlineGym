var area1 = document.getElementById("estImg1");
var area2 = document.getElementById("estImg2");
var area3 = document.getElementById("estImg3");
var area4 = document.getElementById("estImg4");
var area5 = document.getElementById("estImg5");
var area6 = document.getElementById("estImg6");
var area7 = document.getElementById("estImg7");
var area8 = document.getElementById("estImg8");
var area9 = document.getElementById("estImg9");
var area10 = document.getElementById("estImg10");
var area11 = document.getElementById("estImg11");
var area12 = document.getElementById("estImg12");
var area13 = document.getElementById("estImg13");
var area14 = document.getElementById("estImg14");
var area15 = document.getElementById("estImg15");

var estruturaFotos  = document.getElementById("estruturaFotos");
var btnClose = document.getElementById("close")
var btnLeft = document.getElementById("left");
var btnRight = document.getElementById("right");
var imgGrande = document.getElementById("imagemGrande");
var bodyEstrutura = document.getElementById("nossaEstrutura");
var i = 1;
var img1 = "url(../onlineGym/imagens/local.png)";
var img2 = "url(../onlineGym/imagens/espaco2.jpg)";
var img3 = "url(../onlineGym/imagens/img4.jpg)";
var img4 = "url(../onlineGym/imagens/img8.jpg)";
var divFotos = document.getElementById("estruturaFotos");

var btn = document.getElementById("btnResponsivo");
var navLateral = document.getElementById("navLateral");
var btnClass = document.getElementsByClassName('active');



btnClose.addEventListener("click",() => {
    imgGrande.style.display = "none";
    bodyEstrutura.style.overflowY = "scroll";
})


area1.addEventListener("click",() => {
    bodyEstrutura.style.overflow = "hidden";
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/local.png)";

})


area2.addEventListener("click",() => {
imgGrande.style.display = "block";
imgGrande.style.backgroundImage = "url(../onlineGym/imagens/espaco2.jpg)";
})


area3.addEventListener("click",() => {
imgGrande.style.display = "block";
imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img4.jpg)";
})


area4.addEventListener("click",() => {
imgGrande.style.display = "block";
imgGrande.style.backgroundImage = "url(../onlineGym/imagens/espaco6.jpg)";
})

area5.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img1.jpg)";
})

area6.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img2.jpg)";
})

area7.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "../onlineGym/imagens/img3.jpg)";
})

area8.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img4.jpg)";
})

area9.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img5.jpg)";
})

area10.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img6.jpg)";
})

area11.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img7.jpg)";
})

area12.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img8.jpg)";
})

area13.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img9.jpg)";
})

area14.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img13.jpg)";
})

area15.addEventListener("click",() => {
    imgGrande.style.display = "block";
    imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img16.jpg)";
})



btnRight.addEventListener("click",() => {
    if(i<=18){
    console.log(i)
    i++;
        imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img"+i+".jpg)";
    } else{
        i=0;    
    }   
    });
    btnLeft.addEventListener("click",() => {
        if(i>1){
        console.log(i)
        i--;
            imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img"+i+".jpg)";
        } else {
            imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img"+i+".jpg)";
        }
        });


        btn.addEventListener("click",() => {
            btn.classList.toggle('active');
        
            if( navLateral.style.display != "block"){
                navLateral.style.display = "block";
                bodyEstrutura.style.overflow = "hidden";
                divFotos.style.visibility = "hidden";
        
            } else if(navLateral.style.display === "block"){
                navLateral.style.display = "none";
                bodyEstrutura.style.overflowY = "scroll";
                divFotos.style.visibility = "visible";
            }
        })
