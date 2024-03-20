let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
      exibirTextoNaTela (`h1`,`!!parabens!!`);
      let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
      let mensagemTentativas = `você acertou o número secreto com ${tentativas} ${palavraTentativa}!!`;
      exibirTextoNaTela (`p` , mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p' , `O número secreto é menor do que o chute`);
        } else { 
            exibirTextoNaTela (`p` , `o número secreto é maior do que o chute`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadesDeElementosNaLista == numerolimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
  tentativas = 1;  
  exibirMensagemInicial();
  document.getElementById ('reiniciar').setAttribute('disabled', true);
}
