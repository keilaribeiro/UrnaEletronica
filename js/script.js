let VotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapas = etapas[etapaAtual];
    
    let numeroHtml = '';
    for (let i=0;i<etapa.numero;i++){
        numeroHtml += '<div class="numero"></div>';
    }
    VotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){

}


function clicou(n) {
   let elNumero = document.querySelector('.numero.pisca');
   if(numero !== null) {
    numero.innerHTML = n;
   }

}
function branco () {
    ("Clicou em")
}
function clicou() {
    ("Clicou em")
}
function corrige() {
    ("Clicou em")
}
function confirma() {
    ("Clicou em")
}