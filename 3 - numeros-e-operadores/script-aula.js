var numExp = 2e8; //8 zeros depois do 2
// 200000000

// console.log(numExp);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Sempre que somamos com string na verdade estamos concatenando ela:
var soma1 = "100" + 50; // 10050

// na subtração o javascript consegue
var subtracao1 = "100" - 50; // 50

// na multiplicação também
var multiplicacao1 = "100" * "2"; // 200

// agora essa expressão vai retornar NaN
var divisao1 = "Comprei 10" / 2; // NaN (Not a Number)

console.log(soma1);

// a ordem importa

// porém, parenteses prioriza a expressão

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Aritméticos Unários
var frase = "Isso é um teste";

var frase = +frase; // NaN
-frase; // NaN

console.log(frase);

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var x = 5;
console.log(x++);
console.log(x); // é incrementado aqui

var idade3 = "32";
var somaidade = 5;
console.log(idade3 + somaidade); //com o mais na frente da variavel +idade3 ela é transformada em número   // saída == 325

console.log(+idade3 + somaidade); // saída 37 pq somou e foi transformado em número

var num4 = +"355";

console.log(typeof num4); // retorno number
