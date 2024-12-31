var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//exemplos

var numero = 20;
numero += 10;
console.log(numero);

//Opreador ternário

//Abreviação de condicionais com if e else

var idade = 19;
var possuiDiabetes = false;
var podeBeber =
  idade >= 18 && !possuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

//condição ? true : false
