//Document Object Model (DOM)
/*
É uma interface que representa documentos HTML e XML através de objetos. Com ela é possivel manipular a estrutura, estilo e conteúdo deste documentos
*/

console.log(window);

window.innerHeight;

/*
Ao inspecionar o elemento com o chrome, você está vendo a representação oficial do DOM.
*/

/*
Toda tag html é reprsentada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.
*/

const titulo = document.querySelector("h1");

titulo.innerText; //Esse é o título
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener("click", function () {
  console.log("Clicou em", titulo.innerText);
});
