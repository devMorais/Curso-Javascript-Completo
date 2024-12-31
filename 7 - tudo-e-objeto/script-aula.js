//Tudo é objeto
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos

var nome = "Fernando";

nome.length; //5
nome.charAt(1); //'e'
nome.replace("do", "da"); //Fernanda
nome; //Fernando

//Uma string herda propriedades e métodos do construtor String()

//Números

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//Por um breve momento o número é envolvido em um Objeto (Coersão), tendo acesso assim as suas propriedades e métodos

//Funções também possui métodos e propriedades

areaQuadrado.toString();
function areaQuadrado(lado, altura) {
  return (lado * lado) / altura;
}

//elementos do DOM

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique';
btn.addEventListener("click", function () {
  btn.classList.add("no-clique-adicionei-uma-classe");
});

//Praticamente todos os efeitos com JS são feitos utilizando propriedades e metódos de objetos do DOM.

//Objetos revolucionaram a programação, Web API's são métodos e propriedades que permitem a interação Javascript e Browser
