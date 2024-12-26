// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(marca, portas);
}
console.log(cor);

// Como corrigir o erro abaixo?
console.log("----------------------------------------------");
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
console.log("----------------------------------------------");

let numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
