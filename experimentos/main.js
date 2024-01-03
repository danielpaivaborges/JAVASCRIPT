//ESTUDANDO OBJETOS - ESTRUTURAS DE DADOS



// const user = {
//   nome: "daniel",
//   idade: 50,
//   endereco: {
//     rua: "bahia",
//     numero: 7,
//     bairro: "são geraldo",
//   },
// };

// const { nome, ...rest } = user;
// console.log(nome);
// console.log(JSON.stringify(rest));


const lista = [1,2,3,4,5,6,7,8,9,"daniel"];
const [primeiro, , segundo, ...rest] = lista;

console.log(JSON.stringify({primeiro, segundo}));
console.log(JSON.stringify(rest));
