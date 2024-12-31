//Objetos
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: "Fernando",
  idade: 32,
  profissao: "Desenvolvedor focado",
  possuiFaculdade: false,
};

console.log(pessoa.nome, pessoa.profissao, pessoa.possuiFaculdade);

//Propriedades e métodos consistem em nome (chave) e valor

//Métodos
//É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(10));

//console é um objeto e o log é um método

//Dot Notation Get

//Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor;

console.log(bg);

//this irá retornar o proprio objeto

//Protótipo e herança
// o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
