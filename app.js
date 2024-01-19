//let titulo = document. querySelector ('h1');
//titulo.innerHTML  = 'Jogo Do Numero';

//a letra em parenteses sempre será o em azul no html
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let paragrafo = document. querySelector ('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10' ;

function  exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});  
}

function exibirMensagemInicia() {
  exibirTextoNaTela('h1', 'Jogo Do Numero');
  exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensagemInicia();

 function verificarChute() {
     let chute = document.querySelector('input').value
     
     if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', `Acertou!! o numero é ${numeroSecreto}`);
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativa = `voce descobriu o numero com ${tentativas} ${palavraTentativa}`;
       exibirTextoNaTela('p', mensagemTentativa);
       document.getElementById('reiniciar').removeAttribute('disabled');
     }else {
      if (chute > numeroSecreto ) {
        exibirTextoNaTela('p', 'O numero é menor');
      }else {
        exibirTextoNaTela('p', 'O numero é maior');
      }
      tentativas++;
      limparCampo();
     }
 }

 function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados . includes(numeroEscolhido)) {
     return gerarNumeroAleatorio ()     
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
  exibirMensagemInicia()
  document.getElementById('reiniciar').setAttribute('disabled', true);
}