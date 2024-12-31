/*
Escopo de Função
Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
*/

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

//escopo evita conflitos entre nomes
// escopo de função pai

/*
variaveis declaradas no escopo pai da função, conseguem ser acessadas pelas as funções
*/

var automovel = "Fusca";

function mostrarAutomovel() {
  var frase = `Meu automovel é um ${automovel}`;
  console.log(frase);
}

mostrarAutomovel();
console.log(automovel);

/*
variavéis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variavel é utilizando const e let,pois estas respeitam o esboço de bloco
*/
console.log("-------------------------------------------------");
if (true) {
  let caranga = "Ferrari";
  console.log(caranga);
}

console.log(caranga);
