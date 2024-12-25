//Arrays e Loops
//Arrays é um grupo de valores geralmente relacionados.Servem para guadarmos diferentes valores em um única variavel
var videoGames = ["Switch", "PS4", "XBox", "3DS"];
videoGames[0]; //Switch
videoGames[2]; //XBox

//Metodos e proproedades de uma array

videoGames.pop();
videoGames.push("3DS");
videoGames.length;

//existem diversos outros métodos ex//map, reduce, forEach etc ..

//for loop
//fazem algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero < 20; numero++) {
  // console.log(numero);
}

//o loop possui 3 partes inicio, condição e incremento

//while loop

var i = 0;
while (i < 10) {
  // console.log(i);
  i++;
}

var quantidadeArray = videoGames.length;

// for (var item = 0; item < quantidadeArray; item++) {
//   console.log(videoGames[item]);
// }

//Breack

//O loop irá parar caso encontre a palavra break;

// for (var i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i]);
//   if (videoGames[i] === "XBox") break;
// }

//forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilazarmos um loop com arrays(ou array-like)

var frutas = ["Banana", "Pêra", "Maçã", "Abacaxi", "Uva"];

frutas.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// parametros item, index e array
