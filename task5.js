console.log("Trabalhando com atribuições de variaveis");

const idade = 29;
const primeiroNome = "Darlan"; //let nome = "Darlan"; //let pode ser alterado
const sobrenome = "Junior"; //const não pode ser alterado - CONSTANTE

console.log(primeiroNome + " "+ sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //frase craseado consegue ler a variavel
console.log("Meu nome é ${primeiroNome}"); //"" conta como string

// let = nome + sobrenome;
// console.log(nome);

//Metodo certo de concatenar o nome 

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//exemplo de let
let contador = 0;
contador = contador + 1;
console.log(contador);

let idadeNova; //declarando a variavel
idadeNova = 26; //atribuindo valores
idadeNova = idade + 5;
console.log(idadeNova)