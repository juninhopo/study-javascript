const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = false;

console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   console.log("Passagem vendida");
//   console.log("Os disponiveis agora são: ");
//   listaDeDestinos.splice(1, 1); //removendo item comprado
// } else if (estaAcompanhada == true) {
//   console.log("Comprador está acompanhado");
//   console.log("Passagem vendida");
//   console.log("Os disponiveis agora são: ");
//   listaDeDestinos.splice(1, 1); //removendo item comprado
// } else {
//   console.log("Não é maior de idade e não posso vender");
//   console.log("Até mais!");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); //removendo item comprado
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(("Embarque: \n\n"))

if (idadeComprador >= 18 || temPassagemComprada == true){
    console.log("Boa Embarque e boa Viagem!")
} else {
    console.log("Você não pode embarcar! \n")
}

console.log(listaDeDestinos); //passagem foi comprada
console.log("\n")

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);
