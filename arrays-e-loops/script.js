// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anos = ["1959", "1962", "1970", "1994", "2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anos.forEach(function (ano) {
  console.log(`Exemplo com forEach: O brasil ganhou a copa de ${ano}`);
});
console.log("-----------------------------------------------------");

for (let num = 0; num < anos.length; num++) {
  console.log(`Exemplo com for: O brasil ganhou a copa de ${anos[num]}`);
}
console.log("-----------------------------------------------------");

var i = 0;
var qtItensArray = anos.length;
while (qtItensArray > i) {
  console.log(`Exemplo com while: O brasil ganhou a copa de ${anos[i]}`);
  i++;
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
console.log(
  "--------------Exercicio 02---------------------------------------"
);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
console.log(
  "--------------Exercicio 03---------------------------------------"
);
var ultimaFruta = frutas.length - 1;

console.log(frutas[ultimaFruta]);

console.log(frutas);
