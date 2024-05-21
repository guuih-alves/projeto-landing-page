var SetaDireita = window.document.getElementById("seta-direita")

var Leonardo = window.document.getElementById("leonardo")
var Samantha  = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")

var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarparaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:55px"
    SetaDireita.style = "display:none"

}

function RolarparaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex; margin-top:55px"

}