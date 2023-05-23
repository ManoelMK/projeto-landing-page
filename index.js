var setaDireita = window.document.getElementById("seta-direita")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var leonardo = window.document.getElementById("leonardo")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita(){
  samantha.style ="display:none"
  leonardo.style ="display:flex"
  setaDireita.style ="display:none"
  setaEsquerda.style ="display:flex"

}
function rolarparaesquerda(){
  samantha.style ="display:flex"
  leonardo.style ="display:none"
  setaDireita.style ="display:flex"
  setaEsquerda.style ="display:none"
  
}