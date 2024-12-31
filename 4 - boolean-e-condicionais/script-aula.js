var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
}

//Condições que retornar Falsy em javascript
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ("");

var nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log(typeof nome);
}

// todo o resto vai retornar Truthy

if (1);
if (true);
if ("  ");
if ("Fernando");
if (-5);
if ({});

//Operador lógico de negação

//Truthy
if (!true); // false
if (!1); //false
if (!""); //true
if (!!" "); //true
if (!!""); //false

//Podemos usar !! para verificar se uma expressão é Truthy ou Falsy

var x = "Gato";

console.log(x === "gato"); // Verifica se é estritamente igual retorno será false

console.log(x == "gato"); // com strings será false aqui também

var y = 11;

console.log(y == "11"); // será verdadeiro não verifica se é estritamente igual

console.log(y === "11"); //será false pq verifica se é estritamente igual

//&& Compara se uma expressão e a outra é verdadeira

//retorna o primeiro valor false que encontrar
true && true; // true
true && false; // false
false && true; //false
"Gato" && "Cão"; //Cão
5 - 5 && 5 + 5; //0
"Gato" && false; //false
5 >= 5 && 3 < 6; //true

// || Compara se uma expressão ou outra é verdadeira
//retorna o primeiro valor true que encontrar

true || true; // true
true || false; //true
false || true; // true
"Gato" || "Cão"; // Gato
5 - 5 || 5 + 5; //10
"Gato" || false; //Gato
5 >= 5 || 3 < 6; //true

var condicional = 5 - 5 || 5 + 5 || 10 - 2; //Neste caso retorna primeiro verdadeiro que é 10

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2); //Neste caso retorna o ultimo verdadeiro que é 8

console.log(condicional2);

//Switch

// Com o Switch você pode verificar se uma variavel é igual á diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra break; para cancelar a continuação. O valor de default ocorrerá caso nehuma das anteriores seja verdadeira:

var corFavorita = "Verde";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Vermelho":
    console.log("Olhe para as rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos");
}
