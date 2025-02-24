var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '') // tira o ? do parametro da url recuperada


if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() { // responsividade 
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo -= 1;
    
    if (tempo <= 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    }

    document.getElementById('cronometro').innerHTML = tempo;
}, 1000);

function posicaoRandomica() {

    // remove mosquito já existente antes de printar o próximo
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v_' + vidas).src="imagens/coracao_vazio.png";
            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX; // não deixa o mosquito sair da tela
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    [posicaoX, posicaoY] = validaPosicao(posicaoX, posicaoY);


    var mosquito = document.createElement('img');

    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.draggable="false";

    mosquito.ondragstart = function(event) {
        event.preventDefault();
        this.remove();  // Remove o mosquito quando o arraste começar
    };
    
    mosquito.ondragend = function(event) {
        event.preventDefault(); // Garante que o arraste não seja permitido
        this.remove(); // Remove o mosquito ao terminar o arraste
    };

    document.body.appendChild(mosquito);

    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito)
    ladoAleatorio()
}


function validaPosicao(x, y) {
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    return [x, y];
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 4)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

