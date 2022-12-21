var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d')

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,600,400);

var raio = 10;
var xaleatorio;
var yaleatorio;


function desenhaCirculo(x, y, raio, cor){

    pincel.fillStyle= cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0,0,600,400)
}

function desenhaAlvo(x,y) {
    desenhaCirculo(x,y,raio+20,'red');
    desenhaCirculo(x,y,raio+10,'white');
    desenhaCirculo(x,y,10,'red');
}

function sorteiaPosicao(maximo){

    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    limpaTela();
        desenhaAlvo(xaleatorio, yaleatorio);
}

setInterval (atualizaTela, 1000)

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if() {
        alert('acertou')
    }
}

tela.onclick = dispara;