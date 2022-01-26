var area1 = document.getElementById("estImg1");
var area2 = document.getElementById("estImg2");
var area3 = document.getElementById("estImg3");
var area4 = document.getElementById("estImg4");
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


btnClose.addEventListener("click",() => {
    imgGrande.style.display = "none";
})


area1.addEventListener("click",() => {
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
imgGrande.style.backgroundImage = "url(../onlineGym/imagens/local.png)";
})

btnRight.addEventListener("click",() => {
    i++
        imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img"+i+".jpg)";
    });
    btnLeft.addEventListener("click",() => {
        i--
            imgGrande.style.backgroundImage = "url(../onlineGym/imagens/img"+i+".jpg)";
      
        });
