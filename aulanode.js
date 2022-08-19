let readlineSync = require('readline-sync');
let chalk =require("chalk");
let clear =require("clear");
let giz = require ("giz");

var userName = readlineSync.question('Ola, qual o seu nome? ');
console.log(chalk.red ('Oi ' + userName + '!'));

var ajuda= readlineSync.question('Precisa de ajuda?');
clear();
console.log(chalk.red ( "Um momento"+ '!'));

var problema = readlineSync.question ("Qual o seu problema?");
console.log(chalk.red ( "Digite seu CPF para continuar"+ '!'));
var retorno=readlineSync.question ('');
clear();
var email = readlineSync.question ("Qual o seu e-mail?");
console.log(chalk.black.bgWhiteBright( "Atualizando"+ '...'));
   
console.log(chalk.red  ("Localizado seu cadastro."));
 readlineSync.question ("Pressione Enter para continuar.");

 console.log(chalk.green  (userName+' '+retorno+' '+email));
 readlineSync.question("Se as informacoes estiverem corretas pressione Enter.");
 console.log(chalk.blue  ('Acesso liberado!!!'));
 console.log(chalk.red.bgWhiteBright("Pronto para Navegar!!!"))




