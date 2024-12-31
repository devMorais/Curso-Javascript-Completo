// Responsáveis por guardar dados na memoria
// Evitam repetições conceito DRY (Don't repeat yourself)

var nome = "Fernando";
var idade = 31;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var precoTotal = totalComprado * preco;

console.log(precoTotal);

//Declaração seguido de virgula
var sobrenome = "Aguiar",
  cidade = "Brasilia - DF";

//retorno será undefined
var semDefinir;
