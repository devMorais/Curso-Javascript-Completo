// tipos de dados

var nome = "Fernando";
var idade = 31;
var simbolo = Symbol();
var time;
var comida = null;
var novoObjeto = {};
var possuiFaculdade = true;

//verificar qual tipo dado
console.log(typeof nome); //string
console.log(typeof idade); //number
console.log(typeof simbolo); //symbol
console.log(typeof time); //undefined
console.log(typeof comida); //null é object em javascript - curiosidade
console.log(typeof novoObjeto); //object
console.log(typeof possuiFaculdade); //boolean

/**
 * Você pode somar uma string e assim concatenar as palavras.
 * */

var nome = "André";
var sobrenome = "Rafael";
var nomeCompleto = nome + " " + sobrenome;

// Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = "Romário fez " + gols + " gols";

('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// Template String
var gols = 1000;
// var frase1 = "Romário fez " + gols + " gols";

var frase2 = `romário fez ${gols} gols`;

console.log(frase2);

// var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
