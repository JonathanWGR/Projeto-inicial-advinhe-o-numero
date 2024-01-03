alert("Boas vindas ao jogo do numero secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo +1);
console.log("O número secreto é :" + numeroSecreto);
let chute;
let tentativas = 0;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    tentativas ++;

    if(numeroSecreto == chute){
       break;
    } else if(numeroSecreto > chute) {
        alert(`O numero é maior que ${chute}`);
    }else{
        alert(`O numero secreto é menor que ${chute}`);
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
