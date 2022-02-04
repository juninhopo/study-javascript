console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista de destinos

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[2])

listaDeDestinos.splice(1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[2]); //retorna undefined por que o splice tirou ele

console.log(listaDeDestinos[0]);
