const idade = 0;
const maiorIdade = idade >= 18;

if (maiorIdade) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você NÃO é maior de idade!');
}

const ganhePremio = 120;

//se o número for <= 50 a pessoa perde a chance
//se o número for <= a 100, tente outra vez
//se não, GANHE O PRÊMIO

if (ganhePremio <= 50) {
    console.log('PERDEU A CHANCE');

} else if (ganhePremio <= 100) {
    console.log("TENTE OUTRA VEZ");
} else {
    console.log("VOCÊ GANHOU O PRÊMIO");
}