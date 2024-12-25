// Funções são blocos de codigos que pode ser executado e reutilizado.Valores podem ser passados por uma função e a mesma retorna outro valor.

// Chamada de function declaration

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4)); //16
areaQuadrado(5); //25
areaQuadrado(2); //4

function pi() {
  return 3.14;
}

//Parametros e argumentos
// Ao criar uma função, você pode definir parametros
// Ao executar uma função, você pode passar argumentos
//Separar por virgula cada parametro. Você pode definir mais de um parametro ou nenhum também

//peso e altura são os parametros

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(62, 1.75)); // 62 e 1.75 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

//Parenteses executa a função

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta da natureza";
  } else {
    return "Você não gosta de nenhuma cor";
  }
}

console.log(corFavorita("verde"));

//Argumentos podem ser funções, chamadas de callbac, geralmente são funções que ocorrem após algum evento.

addEventListener("click", function () {
  console.log("Clicou");
});
//A função possui dois argumentos
//Primeira é a string 'click'
//segundo é uma função anônima
//funções anônimas são aquelas em que o nome da função não é definido, escritas como function(){} ou ()=>{}

//Funções podem ou não retornar um valor
//Quando não definirmos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não:

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}

imc2(80, 1.8); // retorna o imc
// console.log(imc2(80, 1.8)); //retorna o imc e undefined

//Uma função pode retornar qualquer tipo de dado e até mesmo outras funções

function terciraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia

//Escopo variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totaPaises - paisesVisitados} para eu vistar`;
  var totaPaises = 193;
}

//console.log(totaPaises); // gera erro pq a variavel esta dentro do escopo e não fora

//escopo lexico
//funções conseguem acessar variaveis que foram criadas no contexto pai

var profissao = "Dev";

function dados() {
  var nome = "Fernando";
  let idade = 32;
  function outrosDados() {
    var endereco = "Brasilia";
    let idade = 35;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); //retorna nome, idade, endereço e profissão
// console.log(outrosDados());
