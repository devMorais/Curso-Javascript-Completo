// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
  return !!dado;
}

console.log(isTruthy(10 - 10));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(ladoA, ladoB, ladoC, ladoD) {
  soma = ladoA + ladoB + ladoC + ladoD;
  return soma;
}
console.log(perimetroQuadrado(20, 32, 45, 78));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Fernando", "Morais"));

// Crie uma função que verifica se um número é par

function isEven(num) {
  return num % 2 === 0 ? "É par" : "É impar";
}

console.log(isEven(11));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function getTypeOfData(data) {
  return typeof data;
}

console.log(getTypeOfData("Letra"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
  console.log("Fernando Aguiar da Costa Morais");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
